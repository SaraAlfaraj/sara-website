import type { ExperienceItem } from "@/types";

export default function TimelineItem({
  item,
  isLast,
}: {
  item: ExperienceItem;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`mt-1.5 w-3 h-3 rounded-full border-2 shrink-0 ${
            item.current
              ? "border-primary bg-primary"
              : "border-border bg-background"
          }`}
        />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <p className="text-xs text-text-muted mb-1">{item.period}</p>
        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-primary mb-2">{item.company}</p>
        <p className="text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
