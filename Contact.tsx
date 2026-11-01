import type { Copy } from "../content";
import { CONTACT_LINKS } from "../content";
import { Icon } from "./MaterialIcon";
import { ProfilePhoto } from "./ProfilePhoto";
import { Reveal } from "./ui";

export function Contact({ copy }: { copy: Copy }) {
  const channels = [
    {
      key: "whatsapp",
      href: CONTACT_LINKS.whatsapp,
      label: copy.contact.whatsapp.label,
      value: copy.contact.whatsapp.value,
      cta: copy.contact.whatsapp.cta,
      icon: "chat",
    },
    {
      key: "instagram",
      href: CONTACT_LINKS.instagram,
      label: copy.contact.instagram.label,
      value: copy.contact.instagram.value,
      cta: copy.contact.instagram.cta,
      icon: "photo_camera",
    },
    {
      key: "email",
      href: CONTACT_LINKS.email,
      label: copy.contact.email.label,
      value: copy.contact.email.value,
      cta: copy.contact.email.cta,
      icon: "mail",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-fog/50 blur-[90px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sand/12 blur-[90px]" />
        <div
          className="absolute left-1/2 top-8 hidden h-24 w-24 -translate-x-1/2 opacity-30 lg:block"
          style={{ backgroundImage: "radial-gradient(#4f6d7a 1.2px, transparent 1.2px)", backgroundSize: "12px 12px" }}
        />
      </div>

      <div className="shell relative grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="eyebrow">
            <span className="text-muted/70">07</span>
            <span className="hairline" />
            {copy.contact.eyebrow}
          </div>

          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-ink">
            {copy.contact.title}
          </h2>

          <p className="mt-5 max-w-lg text-[14.5px] leading-[1.9] text-muted">{copy.contact.description}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-steel/15 bg-paper/80 px-3.5 py-2 text-[11px] font-medium text-steel">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steel opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-steel" />
              </span>
              {copy.contact.available}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <Icon name="location_on" size={14} className="text-steel" />
              Sidoarjo, Indonesia
            </span>
          </div>

          <div className="mt-9 flex items-center gap-3.5 border-t border-line pt-6">
            <span className="relative block h-11 w-11 overflow-hidden rounded-full border-2 border-paper bg-fog">
              <ProfilePhoto alt={copy.meta.portraitAlt} className="h-full w-full object-[center_12%]" />
            </span>
            <div>
              <p className="font-display text-[12.5px] font-semibold tracking-[-0.01em] text-ink">Ridho Permana Saputra</p>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">Creative Visual Designer</p>
            </div>
            <span className="ml-auto hidden items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted/70 sm:flex">
              <Icon name="schedule" size={13} />
              {copy.contact.response}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-2.5">
            {channels.map((channel) => (
              <a
                key={channel.key}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-line bg-paper/95 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/30 hover:bg-white hover:shadow-[0_20px_40px_-32px_rgba(43,45,49,0.6)] sm:gap-4 sm:p-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-3 left-0 w-[2px] origin-top scale-y-0 rounded-full bg-sand transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-mist text-steel transition-colors duration-300 group-hover:border-steel group-hover:bg-steel group-hover:text-paper">
                  <Icon name={channel.icon} size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">{channel.label}</span>
                  <span className="mt-1 block truncate font-display text-[13px] font-semibold tracking-[-0.015em] text-ink sm:text-[13.5px]">
                    {channel.value}
                  </span>
                  <span className="mt-0.5 hidden text-[10px] text-muted sm:block">{channel.cta}</span>
                </span>

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-steel group-hover:bg-steel group-hover:text-paper">
                  <Icon
                    name="arrow_outward"
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            ))}

            <p className="mt-2 flex items-start gap-2 rounded-xl border border-white/80 bg-white/45 p-3.5 text-[10.5px] leading-relaxed text-muted">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-sand" aria-hidden="true" />
              {copy.contact.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
