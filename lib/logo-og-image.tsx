import { ImageResponse } from "next/og";
import Logo from "@/components/ui/Logo";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt = "سارة — مساحة معرفية في التقنية";
export const ogImageContentType = "image/png";

// صورة مشاركة موحّدة: شعار الموقع فقط، دون أي عنوان أو نص إضافي.
// تُستخدم في كل opengraph-image.tsx لا يحتاج تخصيصًا (مقالات، تحميلات).
export function logoOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #F4F6FF 0%, #EEF1FF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo width={320} height={234} color="#5C7AFF" />
      </div>
    ),
    { ...ogImageSize }
  );
}
