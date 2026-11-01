import { useEffect, useState } from "react";
import type { Copy, Language } from "../content";
import { CONTACT_LINKS } from "../content";
import { cn } from "../utils/cn";
import { Icon } from "./MaterialIcon";
import { Monogram } from "./ui";

const NAV_ITEMS = [
  { id: "video", key: "video", icon: "smart_display" },
  { id: "about", key: "about", icon: "person" },
  { id: "journey", key: "journey", icon: "timeline" },
  { id: "skills", key: "skills", icon: "auto_awesome" },
  { id: "work", key: "work", icon: "work" },
  { id: "contact", key: "contact", icon: "mail" },
] as const;

const MOBILE_ITEMS = [
  { id: "home", key: "home", icon: "home" },
  ...NAV_ITEMS,
  { id: "vision", key: "vision", icon: "flag" },
] as const;

function LanguageSwitcher({
  lang,
  onChange,
  label,
  className,
}: {
  lang: Language;
  onChange: (lang: Language) => void;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-ink/10 bg-white/80 p-0.5 backdrop-blur-sm",
        className
      )}
    >
      <Icon name="language" size={15} className="ml-1.5 mr-0.5 text-steel" />
      {(["id", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          aria-pressed={lang === code}
          aria-label={code === "id" ? "Bahasa Indonesia" : "English"}
          className={cn(
            "rounded-full px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] transition-all duration-300",
            lang === code
              ? "bg-steel text-paper shadow-[0_4px_10px_-4px_rgba(79,109,122,0.8)]"
              : "text-muted hover:text-ink"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Header({
  copy,
  lang,
  onLanguageChange,
  active,
}: {
  copy: Copy;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  active: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled || open
          ? "border-b border-line/90 bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent bg-paper/60 backdrop-blur-sm"
      )}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-4 lg:h-[84px]">
        <a href="#home" className="group flex items-center gap-3" aria-label="Ridho Permana Saputra — Home">
          <Monogram className="transition-transform duration-500 group-hover:-rotate-6" />
          <span className="leading-none">
            <span className="block font-display text-[12.5px] font-semibold tracking-[-0.02em] text-ink sm:text-[13.5px]">
              Ridho Permana Saputra
            </span>
            <span className="mt-1.5 block font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted">
              Creative Visual Designer
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "group relative flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[12px] font-medium transition-colors duration-300 xl:px-3",
                active === item.id ? "text-ink" : "text-muted hover:text-ink"
              )}
            >
              <Icon
                name={item.icon}
                size={15}
                className={cn(
                  "transition-colors duration-300",
                  active === item.id ? "text-steel" : "text-muted/60 group-hover:text-steel"
                )}
              />
              {copy.nav[item.key]}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-sand transition-opacity duration-300",
                  active === item.id ? "opacity-100" : "opacity-0"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher
            lang={lang}
            onChange={onLanguageChange}
            label={copy.nav.language}
            className="hidden sm:inline-flex"
          />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-medium text-paper transition-colors duration-300 hover:bg-steel xl:inline-flex"
          >
            {copy.meta.ctaContact}
            <Icon name="mail" size={16} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? copy.nav.close : copy.nav.menu}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition-colors hover:border-steel/40 hover:text-steel lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <div className="shell flex min-h-full flex-col pb-10 pt-8">
            <nav aria-label="Mobile" className="flex flex-col">
              {MOBILE_ITEMS.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between border-b border-line/80 py-3.5 transition-colors",
                    active === item.id ? "text-steel" : "text-ink hover:text-steel"
                  )}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-muted/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[22px] font-medium tracking-[-0.03em]">{copy.nav[item.key]}</span>
                  </span>
                  <Icon
                    name={item.icon}
                    size={19}
                    className="text-steel/60 transition-all duration-300 group-hover:text-steel"
                  />
                </a>
              ))}
            </nav>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{copy.nav.language}</p>
                <LanguageSwitcher lang={lang} onChange={onLanguageChange} label={copy.nav.language} className="mt-2" />
              </div>
              <a
                href={CONTACT_LINKS.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-steel px-4 py-2.5 text-[12px] font-medium text-paper"
              >
                <Icon name="download" size={16} />
                {copy.meta.ctaCv}
              </a>
            </div>

            <div className="mt-auto pt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">ridhopermanasaputra@gmail.com</p>
              <p className="mt-2 font-display text-sm font-medium text-ink">RPS — Portfolio 2026</p>
            </div>
          </div>
        </div>
      ) : null}

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <span
          className="block h-full origin-left bg-steel/60 transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
