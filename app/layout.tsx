import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alkan Marble & Stone",
  description:
    "Premium marble, granite, natural stone, and zellige solutions for residential and commercial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--bg)] text-[var(--foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}