import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/Motion";
import { BackToTop } from "@/components/BackToTop";
import { CurrencyProvider } from "@/components/Currency";
import { BASE, SITE } from "@/lib/site";

const preview = Boolean(BASE);
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Proxxy Media · Information governance as a monthly service", template: "%s · Proxxy Media" },
  description: "Data protection compliance, records care, automation, training and research information services for organisations in South Africa, Nigeria and worldwide. Monthly plans from R2,950.",
  openGraph: { title: "Proxxy Media", description: "Your records and data, handled every month.", type: "website", siteName: "Proxxy Media" },
  robots: preview ? { index: false, follow: false } : undefined,
};
export const viewport: Viewport = { themeColor: "#14110e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <body id="top" className="min-h-screen bg-paper text-ink">
        <noscript><style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style></noscript>
        <CurrencyProvider>
          <Header />
          <main id="main" className="pt-[calc(4.5rem+9px)]">{children}</main>
          <Footer />
        </CurrencyProvider>
        <BackToTop />
        <Motion />
      </body>
    </html>
  );
}
