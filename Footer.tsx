import type { Copy } from "../content";
import { CONTACT_LINKS } from "../content";
import { Icon } from "./MaterialIcon";
import { Monogram } from "./ui";

export function Footer({ copy }: { copy: Copy }) {
  const navLinks = [
    { id: "about", label: copy.nav.about, icon: "person" },
    { id: "video", label: copy.nav.video, icon: "smart_display" },
    { id: "journey", label: copy.nav.journey, icon: "timeline" },
    { id: "skills", label: copy.nav.skills, icon: "auto_awesome" },
    { id: "work", label: copy.nav.work, icon: "work" },
    { id: "contact", label: copy.nav.contact, icon: "mail" },
  ];

  const socialLinks = [
    { href: CONTACT_LINKS.whatsapp, label: "WhatsApp", icon: "chat" },
    { href: CONTACT_LINKS.instagram, label: "Instagram", icon: "photo_camera" },
    { href: CONTACT_LINKS.email, label: "Email", icon: "mail" },
    { href: CONTACT_LINKS.drive, label: "Portfolio Drive", icon: "download" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-steel/25 blur-[90px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-steel/15 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-paper/20 to-transparent" />
      </div>

      <div className="shell relative pb-2 pt-14 sm:pt-16">
        <div className="grid gap-10 border-b border-paper/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_0.75fr] lg:gap-12">
          <div>
            <a href="#home" className="flex w-fit items-center gap-3" aria-label="Ridho Permana Saputra — Home">
              <Monogram tone="light" />
              <span>
                <span className="block font-display text-[14px] font-semibold tracking-[-0.02em] text-paper">
                  Ridho Permana Saputra
                </span>
                <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.18em] text-paper/45">
                  Creative Visual Designer
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm font-display text-[1.2rem] font-medium leading-snug tracking-[-0.03em] text-paper">
              {copy.footer.tagline}
            </p>
            <p className="mt-3 max-w-sm text-[11.5px] leading-[1.9] text-paper/45">{copy.footer.summary}</p>

            <a
              href={CONTACT_LINKS.email}
              className="mt-6 inline-flex items-center gap-2 border-b border-paper/20 pb-1 text-[11.5px] text-paper/70 transition-colors hover:border-sand hover:text-sand"
            >
              ridhopermanasaputra@gmail.com
              <Icon name="open_in_new" size={13} />
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-paper/40">{copy.footer.navTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="group inline-flex items-center gap-2 text-[11.5px] text-paper/65 transition-colors hover:text-paper"
                  >
                    <Icon name={link.icon} size={14} className="text-steel transition-colors duration-300 group-hover:text-sand" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-paper/40">{copy.footer.socialTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 text-[11.5px] text-paper/65 transition-colors hover:text-paper"
                  >
                    <span className="flex items-center gap-2">
                      <Icon name={link.icon} size={14} className="text-paper/40 transition-colors group-hover:text-sand" />
                      {link.label}
                    </span>
                    <Icon
                      name="arrow_outward"
                      size={13}
                      className="text-paper/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sand"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-paper/45">{copy.footer.rights}</p>
            <span className="hidden h-3 w-px bg-paper/15 sm:block" />
            <p className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-paper/30">
              <Icon name="lock" size={11} />
              {copy.footer.readOnly}
            </p>
          </div>
          <div className="flex items-center justify-between gap-5 sm:justify-end">
            <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-paper/30">{copy.footer.credit}</p>
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 rounded-full border border-paper/15 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-paper/60 transition-colors hover:border-sand/40 hover:text-sand"
            >
              {copy.footer.backToTop}
              <Icon name="arrow_upward" size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="select-none overflow-hidden pt-4">
          <p className="whitespace-nowrap text-center font-display text-[clamp(3rem,10.5vw,8rem)] font-semibold leading-[0.78] tracking-[-0.055em] text-paper/[0.06]">
            RIDHO PERMANA
          </p>
        </div>
      </div>
    </footer>
  );
}
