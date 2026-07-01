"use client";

import { useState } from "react";

const FORMSPREE_ACTION = "https://formspree.io/f/maqgpyeg"; // الصقي هنا الـ action URL من Formspree

const socialLinks = [
  {
    label: "X (تويتر)",
    href: "https://x.com/sara_alfaraj",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saraalfaraj",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/SaraAlfaraj",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors";

  return (
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-14">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            الاسم
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="اسمك الكريم"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            الرسالة
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="اكتب رسالتك هنا..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {status === "sending" ? "جاري الإرسال..." : "إرسال الرسالة"}
        </button>

        {status === "success" && (
          <p className="text-sm text-primary">تم إرسال رسالتك بنجاح، شكرًا لتواصلك  .</p>
        )}
        {status === "error" && (
          <p className="text-sm text-accent">حدث خطأ، يرجى المحاولة مرة أخرى.</p>
        )}
      </form>

      {/* Social icons */}
      <div className="pt-2">
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border text-text-muted hover:border-primary hover:text-primary transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
