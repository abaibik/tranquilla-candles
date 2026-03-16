export default function Home() {
  const collection = [
    {
      title: "Morning Light",
      text: "Citrus peel, neroli, and soft tea notes for bright, grounded starts.",
    },
    {
      title: "Velvet Evening",
      text: "Amber, cedar, and iris for the final hour when the room turns still.",
    },
    {
      title: "Bare Linen",
      text: "Airy cotton, white musk, and clean woods for an effortless home ritual.",
    },
  ];

  const products = [
    {
      eyebrow: "Product",
      title: "Amber Veil Candle",
      description:
        "A smooth blend of amber resin, creamy sandalwood, and a clean cotton wick for elegant evenings in.",
      size: "8 oz",
      price: "$42",
      badge: "15% Off",
      badgeClassName: "bg-secondary/70 text-secondary-foreground",
      cta: "Add to Ritual",
    },
    {
      eyebrow: "Product",
      title: "Moon Glass Candle",
      description:
        "Fig leaf, white tea, and pale musk created for a soft glow at the end of the day.",
      size: "10 oz",
      price: "$46",
      badge: "New",
      badgeClassName: "bg-accent/60 text-accent-foreground",
      cta: "Add to Ritual",
    },
    {
      eyebrow: "Cart",
      title: "Ritual Set",
      description:
        "A considered pair of scents selected to transition beautifully from day to evening.",
      size: "Subtotal",
      price: "$88",
      badge: "1 item",
      badgeClassName: "bg-muted text-muted-foreground",
      cta: "View Cart",
      id: "cart",
    },
  ];

  return (
    <main className="px-4 pb-4 pt-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(248,247,252,0.82))] p-8 shadow-[0_24px_60px_-36px_rgba(42,36,64,0.32)] backdrop-blur-sm md:p-12 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,210,244,0.34),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,230,201,0.18),transparent_22%)]" />
            <div className="relative">
            <span className="inline-flex rounded-full border border-border/80 bg-white/78 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Quiet Luxury for Daily Rituals
            </span>
            <h1
              data-display="true"
              className="mt-8 max-w-3xl font-heading text-[3.7rem] leading-[0.92] font-medium text-foreground sm:text-[4.5rem] lg:text-[5.55rem]"
            >
              Candles composed for a slower, softer way of living.
            </h1>
            <p className="mt-7 max-w-xl text-[1.03rem] leading-8 text-muted-foreground md:text-lg">
              Thoughtfully poured fragrances for slow mornings, evening resets, and gifting
              that feels deeply considered, all shaped by an editorial sense of calm.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full border border-border/90 bg-white/94 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_16px_34px_-28px_rgba(42,36,64,0.45)] transition-colors hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Shop Signature Scents
              </a>
              <a
                href="#ritual"
                className="inline-flex items-center justify-center rounded-full border border-border/80 bg-transparent px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Discover the Ritual
              </a>
            </div>
            <div className="mt-12 grid gap-5 border-t border-border/70 pt-6 sm:grid-cols-3">
              {[
                ["Small-batch pours", "Layered scents designed to sit softly in a room."],
                ["Clean burn", "Coconut-soy wax with a quiet, even glow."],
                ["Gift-ready", "Packaging and pacing that feel composed and elevated."],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-border/80 bg-[linear-gradient(165deg,rgba(255,255,255,0.82),rgba(217,210,244,0.38),rgba(200,230,201,0.26))] p-6 shadow-[0_22px_52px_-34px_rgba(42,36,64,0.32)]">
            <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[1.75rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(248,247,252,0.74))] p-7">
              <span className="inline-flex w-fit rounded-full border border-primary/15 bg-white/82 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Signature Scent
              </span>
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Lavender Cashmere
                </p>
                <p className="max-w-sm font-heading text-[3rem] font-medium leading-[0.95] text-card-foreground sm:text-[3.4rem]">
                  Calm that lingers.
                </p>
                <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                  Soft woods, powdery iris, and lavender layered into a clean-burning
                  wax blend for unhurried evenings.
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-border/60 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">From</p>
                  <p className="mt-2 font-heading text-[2.2rem] font-medium leading-none text-card-foreground">
                    $34
                  </p>
                </div>
                <span className="rounded-full bg-white/88 px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[0_14px_28px_-24px_rgba(42,36,64,0.35)]">
                  Limited Pour
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="grid gap-6 md:grid-cols-3">
          {collection.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.9rem] border border-border/80 bg-white/74 p-7 shadow-[0_18px_40px_-34px_rgba(42,36,64,0.28)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Collection
              </p>
              <h2 className="mt-5 font-heading text-[2.15rem] font-medium leading-[0.96] text-foreground">
                {item.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </section>

        <section
          id="ritual"
          className="grid gap-6 rounded-[2.1rem] border border-border/80 bg-white/72 p-8 shadow-[0_18px_40px_-34px_rgba(42,36,64,0.25)] backdrop-blur-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-10"
        >
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Ritual
            </p>
            <h2 className="mt-4 max-w-md font-heading text-[2.6rem] font-medium leading-[0.98] text-foreground">
              An editorial approach to rest, reset, and atmosphere.
            </h2>
          </div>
          <div className="grid gap-4 text-[0.98rem] leading-8 text-muted-foreground sm:grid-cols-2">
            <p>
              Tranquilla is designed for homes that value softness, slowness, and a sense
              of quiet refinement.
            </p>
            <p>
              Each scent is composed to sit gently in a room, creating presence without
              overpowering the ritual around it.
            </p>
          </div>
        </section>

        <section id="shop" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              id={product.id}
              className="rounded-[1.95rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,247,252,0.76))] p-6 text-card-foreground shadow-[0_20px_44px_-36px_rgba(42,36,64,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_54px_-36px_rgba(42,36,64,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {product.eyebrow}
                  </p>
                  <h2 className="mt-4 font-heading text-[2.2rem] font-medium leading-[0.96] text-card-foreground">
                    {product.title}
                  </h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-[0.72rem] font-semibold ${product.badgeClassName}`}>
                  {product.badge}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-8 flex items-end justify-between border-t border-border/60 pt-5">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {product.size}
                  </p>
                  <p className="mt-2 font-heading text-[2rem] font-medium leading-none text-card-foreground">
                    {product.price}
                  </p>
                </div>
                <button className="rounded-full border border-border/90 bg-white/92 px-5 py-3 text-sm font-semibold text-foreground shadow-[0_16px_32px_-28px_rgba(42,36,64,0.45)] transition-colors hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                  {product.cta}
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
