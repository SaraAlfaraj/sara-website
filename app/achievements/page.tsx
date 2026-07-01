import type { Metadata } from "next";
import { achievements } from "@/content/achievements";

export const metadata: Metadata = {
  title: "الإنجازات",
};

export default function AchievementsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-foreground mb-2">الإنجازات</h1>
      <div className="w-12 h-0.5 bg-primary mb-10" />

      <div>
        {achievements.map((item, i) => (
          <div key={i} className="border-b border-border py-7 flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
                {item.tag && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface text-primary font-medium">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
            <span className="shrink-0 text-xs text-text-muted pt-1">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
