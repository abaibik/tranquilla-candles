"use client";

import Link from "next/link";
import { useState } from "react";

import { BrandMark } from "./BrandMark";

const navigation = [
  { href: "#collection", label: "Collection" },
  { href: "#ritual", label: "Ritual" },
  { href: "#shop", label: "Shop" },
  { href: "#cart", label: "Cart", cart: true },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[24px] border border-[#e6e0f3] bg-white/84 shadow-[0_18px_45px_-34px_rgba(42,36,64,0.3)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6 px-5 py-4 sm:px-7 lg:px-9 lg:py-[1.1rem]">
            <div className="min-w-0 flex-1 md:flex-none">
              <div className="sm:hidden">
                <BrandMark compact priority />
              </div>
              <div className="hidden sm:block">
                <BrandMark priority />
              </div>
            </div>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-8 text-[0.92rem] font-medium tracking-[0.02em] text-muted-foreground md:flex lg:gap-9"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-1 py-1 transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {item.cart ? (
                    <span className="inline-flex items-center gap-2.5">
                      <span>{item.label}</span>
                      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/80 bg-background/75 text-foreground">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-[0.9rem] w-[0.9rem]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="9" cy="20" r="1" />
                          <circle cx="18" cy="20" r="1" />
                          <path d="M3.5 4H5l2.1 10.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L19.5 7H7.2" />
                        </svg>
                        <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-semibold leading-none text-primary-foreground">
                          1
                        </span>
                      </span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              <span className="flex flex-col gap-1.5">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
            </button>
          </div>

          {isOpen ? (
            <nav
              id="mobile-navigation"
              aria-label="Mobile"
              className="border-t border-border/70 px-5 py-4 md:hidden"
            >
              <div className="grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium tracking-[0.03em] text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>{item.label}</span>
                      {item.cart ? (
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                          1
                        </span>
                      ) : null}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
