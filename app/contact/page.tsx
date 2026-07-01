import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "تواصل",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-foreground mb-2">تواصل</h1>
      <div className="w-12 h-0.5 bg-primary mb-4" />
      <p className="text-text-muted text-sm leading-relaxed mb-10">
        يسعدني أسمع منك — سواء كان لديك سؤال، فكرة، أو مجرد رغبة في التواصل.
      </p>

      <ContactForm />
    </section>
  );
}
