"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton({
  url,
  title,
  className = "",
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const fullUrl = url.startsWith("http")
      ? url
      : `${window.location.origin}${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, url: fullUrl });
      } catch {
        // تم إلغاء المشاركة من المستخدم — لا حاجة لأي إجراء
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // نسخ الرابط غير مدعوم في هذا المتصفح
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="مشاركة"
      className={
        className ||
        "flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text-muted hover:border-primary hover:text-primary transition-colors"
      }
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
    </button>
  );
}
