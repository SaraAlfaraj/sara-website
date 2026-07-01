import type { AchievementItem } from "@/types";

export default function AchievementCard({ item }: { item: AchievementItem }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 hover:border-secondary transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-foreground leading-snug">
          {item.title}
        </h3>
        {item.tag && (
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-surface text-primary font-medium">
            {item.tag}
          </span>
        )}
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-4">
        {item.description}
      </p>
      <p className="text-xs text-border font-medium">{item.year}</p>
    </div>
  );
}
