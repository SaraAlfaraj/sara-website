"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من أنا" },
  { href: "/experience", label: "الخبرات" },
  { href: "/knowledge", label: "المعرفة" },
  { href: "/achievements", label: "الإنجازات" },
  { href: "/contact", label: "تواصل" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-8">
        <Link href="/" aria-label="الرئيسية" className="hover:opacity-80 transition-opacity">
          <Logo className="h-8 w-auto text-primary" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="التنقل الرئيسي" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`transition-colors hover:text-primary ${
                      isActive
                        ? "text-primary border-b-2 border-primary pb-0.5"
                        : "text-text-muted"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 bg-foreground rounded-full transition-all duration-200 ${
              menuOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
            }`}
          />
          <span
            className={`block h-0.5 bg-foreground rounded-full transition-all duration-200 ${
              menuOpen ? "opacity-0 w-0" : "w-4"
            }`}
          />
          <span
            className={`block h-0.5 bg-foreground rounded-full transition-all duration-200 ${
              menuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="التنقل الرئيسي للموبايل"
          className="sm:hidden border-t border-border bg-background/98 backdrop-blur-sm"
        >
          <ul className="mx-auto max-w-5xl px-6 py-5 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-surface"
                        : "text-text-muted hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
