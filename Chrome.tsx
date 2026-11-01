import type { Copy } from "../content";
import { CONTACT_LINKS } from "../content";
import { cn } from "../utils/cn";
import { Icon } from "./MaterialIcon";

export function Loader({ done }: { done: boolean }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-hidden={done}
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-paper transition-opacity duration-700 ease-out",
        done ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <span className="absolute -inset-3 animate-spin-slow rounded-2xl border border-dashed border-steel/25" />
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ink font-display text-[13px] font-semibold tracking-[0.06em] text-paper">
            RPS
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-sand" />
          </span>
        </div>
        <div className="mt-7 h-px w-40 overflow-hidden rounded-full bg-line">
          <span className="loader-bar block h-full w-full bg-steel" />
        </div>
        <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.22em] text-muted">Loading portfolio</p>
      </div>
    </div>
  );
}

export function FloatingWhatsApp({ copy }: { copy: Copy }) {
  return (
    <a
      href={CONTACT_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${copy.contact.whatsapp.label} — ${copy.contact.whatsapp.value}`}
      className="group fixed bottom-5 right-5 z-40 flex items-center sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1.5 text-[10px] font-medium text-ink opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 sm:block">
        {copy.contact.whatsapp.label}
        <span className="ml-1.5 text-muted">{copy.contact.whatsapp.value}</span>
      </span>
      <span className="relative grid h-[54px] w-[54px] place-items-center rounded-full bg-steel text-paper shadow-[0_14px_30px_-10px_rgba(43,45,49,0.55)] transition-all duration-300 group-hover:scale-105 group-hover:bg-steel-deep">
        <span className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-steel/25" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-paper bg-sand" />
        <Icon name="chat" size={26} filled />
      </span>
    </a>
  );
}
