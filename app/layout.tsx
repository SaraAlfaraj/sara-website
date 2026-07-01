import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: {
    template: "%s | سارة الفرج",
    default: "سارة الفرج - Sara Alfaraj",
  },
  description:
    "مدونة شخصية في التقنية، تطوير الويب، وتجربة المستخدم. أكتب عن ما أتعلمه وأوثّق مسيرتي المهنية.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: "سارة",
    title: "سارة — مساحة معرفية في التقنية",
    description:
      "مدونة شخصية في التقنية، تطوير الويب، وتجربة المستخدم.",
  },
  twitter: {
    card: "summary",
    title: "سارة — مساحة معرفية في التقنية",
    description:
      "مدونة شخصية في التقنية، تطوير الويب، وتجربة المستخدم.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.variable}>
      <body className="min-h-screen flex flex-col text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
