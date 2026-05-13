import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIRA — AI-Powered Smart Glasses | Your Second Brain",
  description:
    "AI glasses that capture, translate, answer, and act — so nothing from your day gets lost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
