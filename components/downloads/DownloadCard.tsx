"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import type { DownloadItem } from "@/types";

export default function DownloadCard({ item }: { item: DownloadItem }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/downloads/${item.id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setCount(data.count);
      })
      .catch(() => {});
  }, [item.id]);

  function handleDownload() {
    setCount((prev) => (prev ?? 0) + 1);
    fetch(`/api/downloads/${item.id}`, { method: "POST" }).catch(() => {});
  }

  return (
    <article className="flex flex-col h-full border border-border rounded-2xl p-6 hover:border-primary hover:shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs px-2.5 py-1 rounded-full bg-surface text-primary font-medium">
          {item.category}
        </span>
        <span className="text-xs text-text-muted">{item.year}</span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
        {item.description}
      </p>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
        <span className="text-xs text-text-muted">
          {count !== null ? `${count.toLocaleString("ar")} تحميل` : " "}
          {item.fileSize ? ` · ${item.fileSize}` : ""}
        </span>
        <a
          href={item.file}
          download
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          تحميل
        </a>
      </div>
    </article>
  );
}
