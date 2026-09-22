import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mivan — AI food discovery & health platform",
  description:
    "Mivan learns your taste and health signals and recommends dishes, adapts menus, detects allergens, and scans restaurant menus with OCR.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Albert+Sans:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
