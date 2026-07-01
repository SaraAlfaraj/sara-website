import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "سارة — مساحة معرفية في التقنية";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await fetch(
    "https://fonts.gstatic.com/s/ibmplexsansarabic/v12/Qw3NZRtWPQCuMeSahQXGmMEVnIYLNWqL7KNJTyUETA.woff"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #F4F6FF 0%, #EEF1FF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "IBM Plex Sans Arabic",
          direction: "rtl",
          gap: 0,
        }}
      >
        <div
          style={{
            width: 80,
            height: 6,
            background: "#5C7AFF",
            borderRadius: 4,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: "#1B1B1B",
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          سارة
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#6B7280",
            marginTop: 20,
            fontWeight: 400,
          }}
        >
          مساحة معرفية في التقنية والتعلم
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#5C7AFF",
            marginTop: 12,
            fontWeight: 400,
          }}
        >
          saraalfaraj.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "IBM Plex Sans Arabic", data: font, weight: 400 }],
    }
  );
}
