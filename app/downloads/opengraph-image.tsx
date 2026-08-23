import { ImageResponse } from "next/og";
import Logo from "@/components/ui/Logo";

export const alt = "سارة — مساحة معرفية في التقنية";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
    { ...size }
  );
}
