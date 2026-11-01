import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./MaterialIcon";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(node);
    // Safety net: never leave content invisible.
    const fallback = window.setTimeout(() => setVisible(true), 3200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "outline" | "light" | "sand" | "ghost";

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  external = false,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-steel text-paper shadow-[0_14px_30px_-18px_rgba(79,109,122,0.9)] hover:bg-steel-deep hover:shadow-[0_18px_36px_-18px_rgba(79,109,122,0.75)]",
    outline:
      "border border-ink/12 bg-white/70 text-ink backdrop-blur-sm hover:border-steel/40 hover:bg-white hover:text-steel",
    light: "bg-paper text-ink hover:bg-white",
    sand: "bg-sand text-ink hover:bg-[#e2b95a]",
    ghost: "text-ink hover:text-steel",
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "button group inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-[13px] font-medium transition-all duration-300 ease-out",
        variant === "ghost" && "px-0 py-1",
        styles[variant],
        className
      )}
    >
      <span>{children}</span>
      {icon ? (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  className,
  action,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-2xl">
        <div className={cn("eyebrow", tone === "dark" && "text-fog")}>
          {index ? <span className={cn("text-muted/70", tone === "dark" && "text-fog/60")}>{index}</span> : null}
          <span className={cn("hairline", tone === "dark" && "bg-sand")} />
          <span>{eyebrow}</span>
        </div>
        <h2
          className={cn(
            "mt-4 font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.35rem] lg:text-[2.85rem]",
            tone === "dark" ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-md text-[14.5px] leading-[1.8] lg:pb-1.5",
            tone === "dark" ? "text-fog/80" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
      {action}
    </div>
  );
}

export function Monogram({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "relative grid h-10 w-10 shrink-0 place-items-center rounded-[0.85rem] font-display text-[11px] font-semibold tracking-[0.08em]",
        tone === "dark" ? "bg-ink text-paper" : "bg-paper text-ink",
        className
      )}
      aria-hidden="true"
    >
      RPS
      <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border-2 border-paper bg-sand" />
    </span>
  );
}

/** Small inline icon + label pair used across the page. */
export function IconLabel({
  icon,
  children,
  size = 13,
  tone = "steel",
  className,
}: {
  icon: string;
  children: ReactNode;
  size?: number;
  tone?: "steel" | "ink" | "muted" | "paper" | "sand";
  className?: string;
}) {
  const tones = {
    steel: "text-steel",
    ink: "text-ink",
    muted: "text-muted",
    paper: "text-paper",
    sand: "text-sand",
  } as const;

  return (
    <span className={cn("inline-flex items-center gap-1.5", tones[tone], className)}>
      <Icon name={icon} size={size} />
      <span>{children}</span>
    </span>
  );
}
