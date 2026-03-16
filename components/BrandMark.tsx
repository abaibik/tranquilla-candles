import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  priority?: boolean;
  size?: "header" | "footer";
};

export function BrandMark({
  compact = false,
  priority = false,
  size = "header",
}: BrandMarkProps) {
  const iconClassName = size === "footer" ? "h-10 w-10 sm:h-11 sm:w-11" : "h-9 w-9 sm:h-10 sm:w-10";

  const wordmarkClassName =
    size === "footer"
      ? "text-[1.3rem] tracking-[0.08em] sm:text-[1.5rem]"
      : "text-[1.15rem] tracking-[0.07em] sm:text-[1.35rem]";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:gap-3"
      aria-label="Tranquilla home"
    >
      <span className={`relative flex shrink-0 items-center justify-center ${iconClassName}`}>
        <Image
          src="/IconOnly_Transparent_NoBuffer.png"
          alt=""
          fill
          priority={priority}
          sizes={size === "footer" ? "44px" : "40px"}
          className="object-contain"
        />
      </span>
      {!compact ? (
        <span
          className={`font-heading font-normal uppercase leading-none text-foreground transition-colors group-hover:text-primary ${wordmarkClassName}`}
        >
          Tranquilla
        </span>
      ) : null}
    </Link>
  );
}
