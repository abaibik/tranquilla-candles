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
  const iconClassName =
    size === "footer" ? "h-11 w-11 sm:h-[3.15rem] sm:w-[3.15rem]" : "h-10 w-10 sm:h-11 sm:w-11";

  const wordmarkClassName =
    size === "footer"
      ? "text-[1.55rem] tracking-[0.05em] sm:text-[1.9rem]"
      : "text-[1.32rem] tracking-[0.045em] sm:text-[1.52rem]";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:gap-2.5"
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
          className={`font-heading font-medium uppercase leading-none text-foreground transition-colors group-hover:text-primary ${wordmarkClassName}`}
        >
          Tranquilla
        </span>
      ) : null}
    </Link>
  );
}
