import Link from "next/link";

import { BrandMark } from "./BrandMark";

const footerLinks = [
  { href: "#collection", label: "Collection" },
  { href: "#ritual", label: "Ritual" },
  { href: "#shop", label: "Shop" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] border border-border/80 bg-white/74 px-6 py-7 shadow-[0_18px_45px_-34px_rgba(42,36,64,0.25)] backdrop-blur-sm sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <BrandMark size="footer" />
            <p className="mt-4 text-[0.98rem] font-medium tracking-[0.01em] text-foreground/88">
              Candles that calm your soul
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground/95">
              Thoughtfully composed scents for homes shaped by ritual, softness, and a quiet
              sense of refinement.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium tracking-[0.01em] text-muted-foreground md:max-w-xs md:justify-end"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full py-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
