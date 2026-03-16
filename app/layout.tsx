import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

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
      <body className="antialiased">
        <div className="relative min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
