import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading-display",
  weight: ["400", "500", "600"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-ui",
});

export const metadata: Metadata = {
  title: "Tranquilla",
  description: "Boutique candles and quiet rituals for a calm, elevated home.",
  icons: {
    icon: "/IconOnly_Transparent_NoBuffer.png",
    shortcut: "/IconOnly_Transparent_NoBuffer.png",
    apple: "/IconOnly_Transparent_NoBuffer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <div className="relative min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
