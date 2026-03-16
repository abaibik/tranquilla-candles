import Image, { type StaticImageData } from "next/image";

import heroImage from "@/photos/20250213_101237.jpg";
import featuredOne from "@/photos/20250213_101358.jpg";
import splitImage from "@/photos/20250216_151021.jpg";
import highlightImage from "@/photos/20250216_151027.jpg";
import galleryOne from "@/photos/20250216_153503-EDIT.jpg";
import galleryTwo from "@/photos/20250216_153625.jpg";
import galleryThree from "@/photos/20250216_153900.jpg";
import galleryFour from "@/photos/20250216_154041.jpg";
import galleryFive from "@/photos/20250216_154330.jpg";
import gallerySix from "@/photos/20250216_155042.jpg";
import gallerySeven from "@/photos/20250216_155424.jpg";
import galleryEight from "@/photos/20250216_155601.jpg";
import galleryNine from "@/photos/20250216_160110.jpg";
import galleryTen from "@/photos/20250216_160209.jpg";

type ProductCard = {
  title: string;
  description: string;
  image: StaticImageData;
};

type GalleryItem = {
  image: StaticImageData;
  alt: string;
  height: string;
};

const featuredProducts: ProductCard[] = [
  {
    title: "Sculpted Candle",
    description: "Soft silhouettes and warm light designed to sit quietly in everyday rooms.",
    image: featuredOne,
  },
  {
    title: "Gypsum Vessel",
    description: "A tactile decor piece with a matte finish and a calm, handmade presence.",
    image: galleryOne,
  },
  {
    title: "Minimal Tray",
    description: "A simple base for candles, matches, jewelry, and small daily rituals.",
    image: galleryTwo,
  },
];

const galleryItems: GalleryItem[] = [
  {
    image: galleryThree,
    alt: "Handmade candle styling detail",
    height: "sm:row-span-2",
  },
  {
    image: galleryFour,
    alt: "Minimal gypsum decor on a neutral surface",
    height: "sm:row-span-1",
  },
  {
    image: galleryFive,
    alt: "Decor objects arranged in warm natural light",
    height: "sm:row-span-2",
  },
  {
    image: gallerySix,
    alt: "Close-up of handcrafted candle texture",
    height: "sm:row-span-1",
  },
  {
    image: gallerySeven,
    alt: "Gypsum tray styled with small objects",
    height: "sm:row-span-1",
  },
  {
    image: galleryEight,
    alt: "Neutral-toned product arrangement",
    height: "sm:row-span-2",
  },
  {
    image: galleryNine,
    alt: "Handmade candle and decor vignette",
    height: "sm:row-span-1",
  },
  {
    image: galleryTen,
    alt: "Atmospheric still life with candles and gypsum decor",
    height: "sm:row-span-2",
  },
];

export default function Home() {
  return (
    <main className="px-4 pb-4 pt-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
        <section className="relative overflow-hidden rounded-[2.4rem] border border-border/80 bg-[#f2eee7] shadow-[0_28px_70px_-42px_rgba(42,36,64,0.34)]">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Handmade candle and gypsum decor styled in soft daylight"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,241,235,0.92)_0%,rgba(246,241,235,0.76)_38%,rgba(246,241,235,0.18)_100%)]" />
          </div>

          <div className="relative flex min-h-[520px] items-end p-7 sm:min-h-[620px] sm:p-10 lg:min-h-[700px] lg:p-14">
            <div className="max-w-2xl rounded-[2rem] border border-white/40 bg-[rgba(255,252,247,0.72)] p-7 shadow-[0_20px_50px_-38px_rgba(42,36,64,0.45)] backdrop-blur-md sm:p-9 lg:p-11">
              <span className="inline-flex rounded-full border border-border/80 bg-white/72 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Calm Interior Objects
              </span>
              <h1
                data-display="true"
                className="mt-6 max-w-xl font-heading text-[3.2rem] leading-[0.9] font-medium text-foreground sm:text-[4.2rem] lg:text-[5.2rem]"
              >
                Handmade candles &amp; gypsum decor
              </h1>
              <p className="mt-5 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
                Minimal objects for calm interiors.
              </p>
              <a
                href="#shop"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-foreground/90 hover:shadow-[0_18px_34px_-22px_rgba(42,36,64,0.48)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Shop collection
              </a>
            </div>
          </div>
        </section>

        <div id="shop" />

        <section id="collection" className="rounded-[2.1rem] border border-border/80 bg-white/72 p-7 shadow-[0_18px_42px_-34px_rgba(42,36,64,0.24)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Featured Products
              </p>
              <h2 className="mt-3 font-heading text-[2.3rem] font-medium leading-[0.96] text-foreground sm:text-[2.8rem]">
                Pieces for slow mornings and quiet corners.
              </h2>
            </div>
            <a
              href="#shop"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              View catalog
            </a>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredProducts.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.8rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,243,237,0.9))] shadow-[0_18px_38px_-34px_rgba(42,36,64,0.28)]"
              >
                <div className="relative aspect-[4/4.8] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-[2rem] font-medium leading-none text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                  <a
                    href="#shop"
                    className="mt-5 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Go to catalog
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.1rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(245,240,234,0.76))] p-7 shadow-[0_18px_42px_-34px_rgba(42,36,64,0.22)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Gallery / Atmosphere
            </p>
            <h2 className="mt-3 font-heading text-[2.3rem] font-medium leading-[0.96] text-foreground sm:text-[2.8rem]">
              Still moments, soft light, tactile surfaces.
            </h2>
          </div>

          <div className="mt-8 grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={item.alt}
                className={`group relative overflow-hidden rounded-[1.55rem] ${item.height}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(42,36,64,0.02),rgba(42,36,64,0.12))]" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="ritual"
          className="grid gap-6 overflow-hidden rounded-[2.1rem] border border-border/80 bg-white/74 shadow-[0_18px_42px_-34px_rgba(42,36,64,0.22)] backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="relative min-h-[360px]">
            <Image
              src={splitImage}
              alt="Gypsum tray and decor styled in a calm interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center p-7 sm:p-8 lg:p-10">
            <div className="max-w-xl">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Gypsum Decor
              </p>
              <h2 className="mt-3 font-heading text-[2.35rem] font-medium leading-[0.96] text-foreground sm:text-[2.9rem]">
                Trays and sculptural accents for a composed home.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-muted-foreground">
                Each gypsum piece is hand-cast to bring texture, softness, and order to the
                everyday. Use them for candles, jewelry, keys, or simply as quiet decorative
                forms that make a shelf or table feel more intentional.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-[2.1rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,243,237,0.84))] p-7 shadow-[0_18px_42px_-34px_rgba(42,36,64,0.24)] backdrop-blur-sm lg:grid-cols-[0.82fr_1.18fr] lg:items-center sm:p-8 lg:p-10">
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.8rem]">
            <Image
              src={highlightImage}
              alt="Handmade decor object in a calm setting"
              fill
              className="object-cover"
            />
          </div>
          <blockquote className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Product Highlight
            </p>
            <p className="mt-4 font-heading text-[2.4rem] font-medium leading-[1.02] text-foreground sm:text-[3.2rem]">
              &ldquo;Small objects that change the atmosphere of a space.&rdquo;
            </p>
          </blockquote>
        </section>
      </div>
    </main>
  );
}
