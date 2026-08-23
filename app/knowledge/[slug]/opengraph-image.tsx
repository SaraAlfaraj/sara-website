import { ImageResponse } from "next/og";
import { articles } from "@/content/knowledge";
import Logo from "@/components/ui/Logo";

export const runtime = "edge";
export const alt = "سارة — مساحة معرفية في التقنية";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

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
          padding: "0 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: 36,
          }}
        >
          <Logo width={100} height={73} color="#5C7AFF" />
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 600,
            color: "#1B1B1B",
            lineHeight: 1.25,
          }}
        >
          {article ? article.title : "سارة"}
        </div>
        {article ? (
          <div
            style={{
              fontSize: 26,
              color: "#6B7280",
              marginTop: 24,
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: 900,
            }}
          >
            {article.description}
          </div>
        ) : null}
        <div
          style={{
            fontSize: 22,
            color: "#5C7AFF",
            marginTop: 40,
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
