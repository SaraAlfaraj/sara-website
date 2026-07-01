import type { ContactLink } from "@/types";

export const contactInfo = {
  email: "sara@example.com",
  intro:
    "أسعد دائماً بالتواصل، سواء للتعاون في مشروع، أو تبادل المعرفة، أو مجرد قول مرحباً.",
};

export const contactLinks: ContactLink[] = [
  {
    label: "البريد الإلكتروني",
    href: "mailto:sara@example.com",
    handle: "sara@example.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sara",
    handle: "linkedin.com/in/sara",
  },
  {
    label: "GitHub",
    href: "https://github.com/sara",
    handle: "github.com/sara",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/sara",
    handle: "@sara",
  },
];
