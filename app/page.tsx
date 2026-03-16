export default function Home() {
  return (
    <main className="px-4 pb-4 pt-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="rounded-[2rem] border border-border/80 bg-white/78 p-8 shadow-card backdrop-blur-sm md:p-12">
            <span className="inline-flex rounded-full border border-border/80 bg-secondary/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary-foreground">
              Quiet Luxury for Daily Rituals
            </span>
            <h1 className="mt-6 max-w-2xl font-heading text-5xl leading-none text-foreground md:text-7xl">
              Boutique candles shaped for calm, modern living.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Thoughtfully poured fragrances for slow mornings, evening resets, and the
              kind of gifting that feels deeply considered.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-xl border border-border/90 bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Shop Signature Scents
              </a>
              <a
                href="#ritual"
                className="inline-flex items-center justify-center rounded-xl border border-border/90 bg-transparent px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Discover the Ritual
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/80 bg-gradient-to-br from-white via-secondary/40 to-accent/35 p-6 shadow-card">
            <div className="flex h-full min-h-[360px] flex-col justify-between rounded-2xl bg-card/80 p-6">
              <span className="inline-flex w-fit rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Signature Scent
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                  Lavender Cashmere
                </p>
                <p className="mt-3 font-heading text-4xl leading-none text-card-foreground">
                  Calm that lingers.
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                  Soft woods, powdery iris, and lavender layered into a clean-burning
                  wax blend for unhurried evenings.
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="mt-1 text-2xl font-semibold text-card-foreground">$34</p>
                </div>
                <span className="rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-accent-foreground">
                  Limited Pour
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="grid gap-6 md:grid-cols-3">
          {[
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
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-border/80 bg-white/72 p-6 shadow-card backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Collection
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-foreground">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </section>

        <section
          id="ritual"
          className="grid gap-6 rounded-[2rem] border border-border/80 bg-white/70 p-8 shadow-card backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Ritual
            </p>
            <h2 className="mt-4 max-w-md font-heading text-4xl leading-tight text-foreground">
              An editorial approach to rest, reset, and atmosphere.
            </h2>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
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
          <article className="rounded-[1.75rem] border border-border/80 bg-white/82 p-6 text-card-foreground shadow-card transition-shadow hover:shadow-card-hover">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  Product
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight">
                  Amber Veil Candle
                </h2>
              </div>
              <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                15% Off
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A smooth blend of amber resin, creamy sandalwood, and a clean cotton wick for
              elegant evenings in.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">8 oz</p>
                <p className="text-xl font-semibold">$42</p>
              </div>
              <button className="rounded-xl border border-border/90 bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                Add to Ritual
              </button>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-border/80 bg-white/82 p-6 text-card-foreground shadow-card transition-shadow hover:shadow-card-hover">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  Product
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight">
                  Moon Glass Candle
                </h2>
              </div>
              <span className="rounded-full bg-accent/60 px-3 py-1 text-xs font-semibold text-accent-foreground">
                New
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Fig leaf, white tea, and pale musk created for a soft glow at the end of the
              day.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">10 oz</p>
                <p className="text-xl font-semibold">$46</p>
              </div>
              <button className="rounded-xl border border-border/90 bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                Add to Ritual
              </button>
            </div>
          </article>

          <article
            id="cart"
            className="rounded-[1.75rem] border border-border/80 bg-white/82 p-6 text-card-foreground shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  Cart
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight">
                  Ritual Set
                </h2>
              </div>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                1 item
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A considered pair of scents selected to transition beautifully from day to
              evening.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Subtotal</p>
                <p className="text-xl font-semibold">$88</p>
              </div>
              <button className="rounded-xl border border-border/90 bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                View Cart
              </button>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
