import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Lidz Abel | Portfolio",
  description: "Personal resume, research, and project portfolio."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
