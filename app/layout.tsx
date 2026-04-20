import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earnytics LLC - Digital Solutions & Business Growth",
  description: "Transform your business with Earnytics LLC. We provide cutting-edge web development, digital marketing, SEO, branding, and comprehensive business solutions to help you scale faster and compete smarter.",
  icons: {
    icon: "/images/arnytics llc (2).png",
    shortcut: "/images/arnytics llc (2).png",
    apple: "/images/arnytics llc (2).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
