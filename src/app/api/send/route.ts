import { z } from "zod";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // Send to Google Sheets
    const googleSheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!googleSheetUrl) {
      return Response.json(
        { error: "Google Sheets integration not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(googleSheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API returned ${response.status}`);
    }

    return Response.json({ success: true, message: "Your message has been saved!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 }
    );
  }
}
