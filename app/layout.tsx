import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Js Mastery",
  description: "Js Mastery Resources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins bg-black-100">{children}</body>
    </html>
  );
}
