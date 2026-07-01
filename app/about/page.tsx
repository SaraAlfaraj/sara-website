import type { Metadata } from "next";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "من أنا",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-foreground mb-2">من أنا</h1>
      <div className="w-12 h-0.5 bg-primary mb-10" />

      <div className="mb-10">
        <p className="text-xl font-medium text-foreground mb-4">
          {about.headline}
        </p>
        <p className="text-text-muted leading-loose whitespace-pre-line">
          {about.bio}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
          الاهتمامات
        </h2>
        <div className="flex flex-wrap gap-2">
          {about.values.map((v) => (
            <span
              key={v}
              className="text-sm px-3 py-1.5 rounded-full bg-surface text-foreground border border-border"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
