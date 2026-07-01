import type { Metadata } from "next";
import { experience } from "@/content/experience";
import TimelineItem from "@/components/experience/TimelineItem";

export const metadata: Metadata = {
  title: "الخبرات",
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold text-foreground mb-2">الخبرات</h1>
      <div className="w-12 h-0.5 bg-primary mb-10" />

      <div>
        {experience.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
