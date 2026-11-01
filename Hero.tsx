import type { Copy } from "../content";
import { CONTACT_LINKS } from "../content";
import { Icon } from "./MaterialIcon";
import { ProfilePhoto } from "./ProfilePhoto";
import { ButtonLink, Reveal } from "./ui";

export function Hero({ copy }: { copy: Copy }) {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full bg-fog/45 blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sand/15 blur-[110px]" />
        <div className="absolute right-[46%] top-24 hidden h-56 w-px bg-line/80 lg:block" />
        <div className="absolute inset-x-0 top-[84px] hidden h-px bg-line/60 lg:block" />
      </div>

      <div className="shell relative grid gap-14 pb-16 pt-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-14">
        <div className="relative z-10">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-steel/15 bg-white/70 px-3.5 py-1.5 text-[11px] font-medium text-steel backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-steel opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-steel" />
                </span>
                {copy.meta.available}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted">
                <Icon name="location_on" size={14} className="text-steel" />
                {copy.meta.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="eyebrow mt-8">
              <span className="hairline" />
              {copy.meta.role}
            </div>
            <h1 className="mt-4 font-display text-[clamp(2.05rem,4.4vw,3.75rem)] font-semibold uppercase leading-[0.98] tracking-[-0.045em] text-ink">
              <span className="block">Ridho Permana</span>
              <span className="block text-steel">
                Saputra<span className="text-sand">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[30rem] font-display text-[1.3rem] font-medium leading-[1.35] tracking-[-0.025em] text-ink sm:text-[1.5rem]">
              {copy.meta.headlineTop}{" "}
              <span className="relative inline-block text-steel">
                {copy.meta.headlineAccent}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-[72%] rounded-full bg-gradient-to-r from-sand/80 via-sand/45 to-transparent"
                />
              </span>
            </p>
            <p className="mt-5 font-mono text-[9.5px] uppercase leading-[1.9] tracking-[0.16em] text-muted">
              {copy.meta.subheadline}
            </p>
            <p className="mt-4 max-w-[31rem] text-[14.5px] leading-[1.85] text-muted">{copy.meta.description}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <ButtonLink href="#work" icon={<Icon name="arrow_forward" size={18} />}>
                {copy.meta.ctaWork}
              </ButtonLink>
              <ButtonLink
                href={CONTACT_LINKS.cv}
                external
                variant="outline"
                icon={<Icon name="download" size={18} />}
              >
                {copy.meta.ctaCv}
              </ButtonLink>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-3 py-3 text-[13px] font-medium text-ink transition-colors hover:text-steel"
              >
                <span className="link-underline">{copy.meta.ctaContact}</span>
                <Icon name="mail" size={17} />
              </a>
            </div>

            <dl className="mt-10 flex max-w-md divide-x divide-line border-t border-line pt-5">
              {copy.meta.stats.map((stat) => (
                <div key={stat.label} className="flex-1 pl-4 first:pl-0">
                  <dt className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted sm:text-[9px]">{stat.label}</dt>
                  <dd className="mt-1.5 flex items-baseline gap-1.5 font-display text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                    {stat.value}
                    <span className="h-1 w-1 rounded-full bg-sand" aria-hidden="true" />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative lg:pl-4">
          <div className="relative mx-auto w-full max-w-[372px] sm:max-w-[400px]">
            <div
              aria-hidden="true"
              className="absolute -right-3 top-6 h-[88%] w-[88%] rounded-[2.2rem] bg-mist"
            />
            <div
              aria-hidden="true"
              className="absolute -left-4 bottom-8 h-[74%] w-[82%] rounded-[2.2rem] border border-steel/15"
            />
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-5 h-24 w-24 rounded-full border border-sand/40 bg-sand/10"
            />
            <div
              aria-hidden="true"
              className="absolute -left-5 top-16 hidden h-20 w-20 opacity-40 sm:block"
              style={{
                backgroundImage: "radial-gradient(#4f6d7a 1.2px, transparent 1.2px)",
                backgroundSize: "11px 11px",
              }}
            />

            <figure className="group relative overflow-hidden rounded-[1.9rem] border border-white/80 bg-fog p-[7px] shadow-[0_30px_70px_-38px_rgba(43,45,49,0.5)]">
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.55rem]">
                <ProfilePhoto
                  alt={copy.meta.portraitAlt}
                  priority
                  className="h-full w-full object-[center_16%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-sand" />
                  Creative portfolio · 2026
                </span>

                <figcaption className="absolute inset-x-4 bottom-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/60">{copy.meta.photoNote}</p>
                      <p className="mt-1 font-display text-[15px] font-medium tracking-[-0.02em] text-paper">
                        Ridho Permana Saputra
                      </p>
                      <p className="mt-0.5 text-[10.5px] text-fog/90">Motion Graphic · Video · Design</p>
                    </div>
                    <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-paper/30 bg-paper/10 text-paper backdrop-blur-sm sm:grid">
                      <Icon name="play_arrow" size={18} filled />
                    </span>
                  </div>
                </figcaption>
              </div>
            </figure>

            <div className="absolute -left-3 bottom-28 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-3.5 py-3 shadow-[0_16px_40px_-22px_rgba(43,45,49,0.55)] backdrop-blur sm:-left-8">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-mist text-steel">
                <Icon name="movie_edit" size={19} />
              </span>
              <span>
                <span className="block font-display text-[11.5px] font-semibold tracking-[-0.01em] text-ink">
                  Motion · Video · Graphic
                </span>
                <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  {copy.meta.imageCaption}
                </span>
              </span>
            </div>

            <a
              href="#video"
              aria-label={copy.video.play}
              className="group absolute -bottom-5 -right-1 grid h-[88px] w-[88px] place-items-center rounded-full bg-sand text-ink shadow-[0_18px_36px_-18px_rgba(233,196,106,0.9)] transition-transform duration-500 hover:scale-105 sm:-right-4 sm:h-24 sm:w-24"
            >
              <span className="absolute inset-x-0 top-[17px] text-center font-mono text-[7px] uppercase tracking-[0.18em] text-ink/60">
                Showreel
              </span>
              <Icon name="play_arrow" size={30} filled className="text-ink" />
              <span className="absolute inset-x-0 bottom-[18px] text-center font-mono text-[7px] uppercase tracking-[0.18em] text-ink/60">
                2026
              </span>
            </a>
          </div>

          <a
            href="#video"
            className="mx-auto mt-10 flex w-fit items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-steel lg:mt-8"
          >
            <Icon name="arrow_downward" size={14} />
            {copy.meta.scroll}
          </a>
        </Reveal>
      </div>

      <div className="relative overflow-hidden border-y border-line bg-white/45">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee items-center py-3.5 hover:[animation-play-state:paused]">
          {[...copy.meta.marquee, ...copy.meta.marquee].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-7 whitespace-nowrap px-7 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted"
            >
              <span className="h-1 w-1 rounded-full bg-sand" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
