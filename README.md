# 🚀 Ram Dhote's Data Analyst Portfolio

A professional 3D portfolio showcasing data analysis projects and machine learning expertise. Built with interactive 3D animations, smooth transitions, and a modern aesthetic featuring a space-themed design.

> **Featured Projects:** IPL Auction Data Analysis & Salary Prediction Model Deployment

---

## ✨ Features

- **Interactive 3D Animations** — GSAP + Framer Motion powered scroll and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with seamless switching
- **Responsive Design** — Optimized for all screen sizes and devices
- **Google Sheets Integration** — Contact form submissions saved directly to Google Sheets
- **Project Showcase** — Beautiful project cards with live deployment links
- **Skills Section** — Interactive 3D keyboard showcasing technical expertise

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16.2.2 (Turbopack), React 18+, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Data Integration** | Google Apps Script, Google Sheets |
| **Validation** | Zod |
| **Misc** | Lenis (smooth scroll), next-themes |

---

## 📊 Featured Projects

### 1. **IPL Auction Data Analysis**
- **Category:** Data Analysis
- **Live:** https://ipl-data-explorer.vercel.app/
- **GitHub:** https://github.com/ramdhote05/IPL-AUCTION-DATA-ANALYSIS
- **Description:** Comprehensive analysis of IPL auction dataset using Python, Pandas, and Matplotlib
- **Technologies:** Python, Pandas, Matplotlib, Jupyter Notebook

### 2. **Salary Prediction Model Deployment**
- **Category:** Machine Learning
- **Live:** https://salary-prediction-ai-orcin.vercel.app/
- **GitHub:** https://github.com/ramdhote05/Salary-Deployment
- **Description:** ML model for salary prediction with deployment to production
- **Technologies:** Python, scikit-learn, Flask/FastAPI

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ramdhote05/3d-portfolio.git
    cd 3d-portfolio
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Set up environment variables:**

    Create `.env.local` file in the root directory:

    ```bash
    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent/exec
    ```

    For Google Sheets integration:
    - Create a Google Apps Script that appends form data to your Google Sheet
    - Deploy it as a web app with "Execute as:" your account and "Who has access:" Anyone
    - Copy the deployment URL to the `GOOGLE_SHEETS_WEBHOOK_URL` variable

4. **Run the development server:**

    ```bash
    pnpm dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to see the portfolio ✨

---

## 🎨 Customization

All personal information is centralized in [`src/data/config.ts`](src/data/config.ts). Edit this single file to rebrand the portfolio:

```ts
const config = {
  title: "Ram Dhote | Data Analyst",
  description: {
    long: "B.Tech student specializing in Data Science...",
    short: "A Data Analyst",
  },
  author: "Ram Dhote",
  email: "dhoteram68@gmail.com",
  site: "https://linktr.ee/dhoteram05",
  
  social: {
    github: "https://github.com/ramdhote05",
    linkedin: "https://www.linkedin.com/in/ram-dhote-9763b130a",
  },
};
```

### Files to Customize

| File | What to change |
|---|---|
| `src/data/config.ts` | Personal info, title, email, social links |
| `src/data/projects.tsx` | Your projects, descriptions, live URLs, GitHub links |
| `src/data/constants.ts` | Skills list with icons and descriptions |
| `public/assets/projects-screenshots/` | Project images and screenshots |

---

## 📝 Contact Form Setup

The contact form submits data directly to Google Sheets with a timestamp:

### Google Sheets Script

1. Go to [script.google.com](https://script.google.com) and create a new project
2. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getActiveSheet();
    
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date().toLocaleString();
    
    sheet.appendRow([timestamp, data.fullName, data.email, data.message]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Deploy as Web App → Execute as: Your account → Who has access: Anyone
4. Copy the deployment URL to `.env.local`

### Google Sheet Format

Ensure your Google Sheet has these headers in row 1:
- **A1:** Timestamp
- **B1:** Full Name
- **C1:** Email
- **D1:** Message

---

## 🚀 Deployment

Deploy your portfolio to **Vercel** (recommended):

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add environment variables in Vercel dashboard:
   - `GOOGLE_SHEETS_WEBHOOK_URL`
4. Vercel automatically deploys on every push

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Credits

Built with Next.js, Tailwind CSS, Shadcn UI, Aceternity UI, GSAP, and Framer Motion.

Portfolio customized for data analytics and machine learning project showcase.

---

## ⚖️ Attribution

This portfolio framework is based on the original 3D portfolio template created by [Naresh-Khatri](https://github.com/Naresh-Khatri). Ram Dhote has customized and modified the framework for data analysis and machine learning project showcase. All rights to the original framework are reserved to Naresh-Khatri.

---

**Last Updated:** April 14, 2026
**Developer:** Ram Dhote
**Social Links:**
- GitHub: https://github.com/ramdhote05
- LinkedIn: https://www.linkedin.com/in/ram-dhote-9763b130a
# 🚀 3D Portfolio

A jaw-dropping developer portfolio packed with interactive 3D animations, buttery smooth transitions, and a space-themed aesthetic. Not your average portfolio template! This one has a fully interactive 3D keyboard where each keycap is a skill.

> **Free to use!** This portfolio is open source. If you use it, a credit/link back would be really appreciated 🙏

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Naresh-Khatri/3d-portfolio)

![Portfolio Preview](https://github.com/Naresh-Khatri/Portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Analytics** _(optional)_ — Umami analytics integration

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Naresh-Khatri/3d-portfolio.git
    cd 3d-portfolio
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Set up environment variables:**

    Copy `.env.example` to `.env.local` and fill in the values:

    ```bash
    cp .env.example .env.local
    ```

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
    | `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
    | `UMAMI_DOMAIN` | No | Umami analytics script URL |
    | `UMAMI_SITE_ID` | No | Umami website ID |

4. **Run the development server:**

    ```bash
    pnpm dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) and see the magic ✨

---

## 🎨 Make It Your Own

All personal info is centralized in [`src/data/config.ts`](src/data/config.ts). Edit this single file to rebrand the portfolio:

```ts
const config = {
  title: "Your Name | Your Title",
  description: {
    long: "Your long description for SEO...",
    short: "Your short description...",
  },
  keywords: ["your", "keywords"],
  author: "Your Name",
  email: "you@example.com",
  site: "https://yoursite.com",

  // GitHub stars button in the header
  githubUsername: "your-github-username",
  githubRepo: "your-repo-name",

  social: {
    twitter: "https://x.com/you",
    linkedin: "https://linkedin.com/in/you",
    instagram: "https://instagram.com/you",
    facebook: "https://facebook.com/you",
    github: "https://github.com/you",
  },
};
```

Other files you'll want to customize:

| File | What to change |
|---|---|
| `src/data/projects.tsx` | Your projects, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list (name, description, icon) and work experience |
| `public/assets/` | Your images, OG image, and project screenshots |

---

## ⌨️ Updating the 3D Keyboard Skills

The 3D keyboard keycaps are baked into a Spline file. To update the skills displayed on the keyboard:

1. **Import** the `public/assets/skills-keyboard.spline` file into [Spline](https://spline.design/)
2. **Unhide** the keycap objects you want to edit
3. **Update** the logo images on each keycap to your new skill icons
4. **Rename** each keycap object to match the skill's `name` field in `src/data/constants.ts` (e.g. `js`, `react`, `docker`)
5. **Hide** all keycap objects again
6. **Export** the scene and overwrite `public/assets/skills-keyboard.spline`

After updating the Spline file, make sure `src/data/constants.ts` has matching entries for every skill on the keyboard:

```ts
// Each keycap object name in Spline must match a key in SKILLS
export const SKILLS: Record<SkillNames, Skill> = {
  js: { name: "js", label: "JavaScript", shortDescription: "...", ... },
  react: { name: "react", label: "React", shortDescription: "...", ... },
  // ... add/remove entries to match your keyboard
};
```

The `SkillNames` enum, `SKILLS` record, and the Spline keycap names must all stay in sync for the keyboard interactions to work correctly.

---

## 🔌 Realtime Features (Optional)

The portfolio supports optional realtime features powered by a **separate backend API**:

- 🖱️ **Live cursors** — See other visitors' cursors in realtime
- 👥 **Online presence** — Shows who's currently on the site
- 💬 **Chat** — Live chat between visitors

These features activate automatically when the `NEXT_PUBLIC_WS_URL` environment variable is set. Without it, the portfolio works perfectly fine as a static site — no realtime features, no backend dependency.

> [!NOTE]
> The backend API is **not open source**. This is intentional! Too many people have cloned the portfolio and claimed they built it from scratch. The realtime server stays private to keep the live experience unique make make it standout.


---

## 🚀 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Naresh-Khatri/3d-portfolio)

This site is deployed on **Vercel**. To deploy your own:

1. Push your code to a GitHub repository
2. Connect the repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Vercel handles the rest — automatic deployments on every push

---

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

If you use this portfolio, a credit or link back to the [original repo](https://github.com/Naresh-Khatri/3d-portfolio) would be much appreciated ❤️
