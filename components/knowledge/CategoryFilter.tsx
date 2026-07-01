"use client";

export default function CategoryFilter({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string | null;
  onChange: (tag: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      <button
        onClick={() => onChange(null)}
        className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
          active === null
            ? "bg-primary text-white border-primary"
            : "border-border text-text-muted hover:border-primary hover:text-foreground"
        }`}
      >
        الكل
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
            active === tag
              ? "bg-primary text-white border-primary"
              : "border-border text-text-muted hover:border-primary hover:text-foreground"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
