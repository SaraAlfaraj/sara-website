import type { Metadata } from "next";
import { Construction } from "lucide-react";
import { FadeIn } from "@/components/ui/AnimateIn";
import FloatIcon from "@/components/ui/FloatIcon";

export const metadata: Metadata = {
  title: "المشاريع",
};

export default function ProjectsPage() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
      <FadeIn className="flex flex-col items-center">
        <FloatIcon className="mb-5">
          <Construction className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </FloatIcon>
        <h1 className="text-sm font-normal text-text-muted">الصفحة قيد الإنشاء</h1>
      </FadeIn>
    </section>
  );
}
