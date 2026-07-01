import type { Metadata } from "next";
import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { achievements } from "@/content/achievements";

export const metadata: Metadata = {
  title: "من أنا",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-foreground mb-2">من أنا</h1>
      <div className="w-12 h-0.5 bg-primary mb-10" />

      {/* Bio */}
      <div className="mb-14">
        <p className="text-xl font-medium text-foreground mb-4">{about.headline}</p>
        <p className="text-text-muted leading-loose whitespace-pre-line">{about.bio}</p>
      </div>

      {/* Interests */}
      <div className="mb-14">
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

      {/* Experience */}
      <div className="mb-14">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-8">
          الخبرات
        </h2>
        <div>
          {experience.map((item, i) => (
            <div key={i} className="flex gap-6 border-b border-border pb-8 mb-8 last:border-0 last:mb-0 last:pb-0">
              <div className="flex flex-col items-center pt-1.5">
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.current ? "bg-primary" : "bg-border"}`} />
                {i < experience.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs text-text-muted shrink-0">{item.period}</span>
                </div>
                <p className="text-sm text-primary mb-2">{item.company}</p>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-6">
          الإنجازات
        </h2>
        <div>
          {achievements.map((item, i) => (
            <div key={i} className="flex items-start justify-between gap-6 border-b border-border py-6 last:border-0">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  {item.tag && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-surface text-primary font-medium">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
              <span className="shrink-0 text-xs text-text-muted pt-1">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
