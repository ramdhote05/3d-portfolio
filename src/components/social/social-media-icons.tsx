"use client";

import { useInView } from "motion/react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });

  // Build buttons array only with valid links
  const buttons: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }> = [];

  if (config?.social?.github && typeof config.social.github === "string") {
    buttons.push({
      name: "Github",
      href: config.social.github,
      icon: <SiGithub size={"24"} color={"#fff"} />,
    });
  }

  if (config?.social?.linkedin && typeof config.social.linkedin === "string") {
    buttons.push({
      name: "LinkedIn",
      href: config.social.linkedin,
      icon: <SiLinkedin size={"24"} color={"#fff"} />,
    });
  }

  // Only render if we have valid buttons
  if (buttons.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className="z-10">
      {show &&
        buttons.map((button) => (
          <Link
            href={button.href}
            key={button.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
