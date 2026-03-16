import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPaaS Pricing Model Analysis — David Mustac",
  description: "Interactive analysis of Infobip CPaaS messaging economics across SMS, WhatsApp, RCS & Viber",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
