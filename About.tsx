import type { Copy } from "../content";
import { CONTACT_LINKS } from "../content";
import { Icon } from "./MaterialIcon";
import { ProfilePhoto } from "./ProfilePhoto";
import { ButtonLink, Reveal, SectionHeading } from "./ui";

const FIELD_ICONS = ["person", "calendar_month", "school", "event", "category", "favorite"];

export function About({ copy }: { copy: Copy }) {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-fog/25 blur-[100px]" />
        <div className="absolute bottom-10 right-0 h-24 w-24 opacity-30" style={{ backgroundImage: "radial-gradient(#4f6d7a 1.2px, transparent 1.2px)", backgroundSize: "12px 12px" }} />
      </div>

      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative mx-auto max-w-[400px] lg:mx-0">
              <div aria-hidden="true" className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[1.8rem] border-l border-t border-sand/70" />
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-[1.8rem] border-b border-r border-steel/25" />

              <figure className="relative overflow-hidden rounded-[1.75rem] border border-white bg-mist p-2 shadow-[0_24px_60px_-40px_rgba(43,45,49,0.5)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                  <ProfilePhoto alt={copy.meta.portraitAlt} className="h-full w-full object-[center_14%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-ink backdrop-blur">
                    <Icon name="school" size={14} className="text-steel" />
                    DKV Student
                  </span>
                  <figcaption className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-display text-[13px] font-medium text-paper">Ridho Permana Saputra</p>
                      <p className="mt-0.5 flex items-center gap-1 text-[10px] text-fog/90">
                        <Icon name="location_on" size={12} />
                        Tulangan, Sidoarjo
                      </p>
                    </div>
                    <span className="rounded-full border border-paper/25 px-2 py-1 font-mono text-[7.5px] uppercase tracking-[0.14em] text-paper/80">
                      2026
                    </span>
                  </figcaption>
                </div>
              </figure>

              <div className="relative z-10 mx-3 mt-4 rounded-2xl border border-line bg-paper/95 p-4 shadow-[0_18px_40px_-30px_rgba(43,45,49,0.6)] backdrop-blur sm:mx-5">
                <p className="eyebrow text-[9px]">
                  <span className="hairline" />
                  {copy.about.focusTitle}
                </p>
                <ul className="mt-3 space-y-2">
                  {copy.about.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[11.5px] leading-snug text-ink/80">
                      <span className="mt-0.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-mist text-steel">
                        <Icon name="check" size={10} weight={600} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <SectionHeading index="02" eyebrow={copy.about.eyebrow} title={copy.about.title} />

            <div className="mt-7 max-w-2xl space-y-5">
              <p className="text-[15px] leading-[1.95] text-ink/80">{copy.about.intro}</p>
              <p className="text-[14.5px] leading-[1.95] text-muted">{copy.about.body}</p>
            </div>

            <div className="mt-9 max-w-2xl border-t border-line pt-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{copy.about.infoTitle}</p>
              <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {copy.about.fields.map((field, index) => (
                  <div key={field.label} className="group">
                    <dt className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.16em] text-muted">
                      <Icon name={FIELD_ICONS[index] ?? "person"} size={13} className="text-steel" />
                      {field.label}
                    </dt>
                    <dd className="mt-1.5 text-[13px] font-medium leading-snug text-ink">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
              <ButtonLink
                href={CONTACT_LINKS.cv}
                external
                icon={<Icon name="download" size={18} />}
              >
                {copy.about.cv}
              </ButtonLink>
              <div className="flex max-w-[300px] items-start gap-2">
                <Icon name="lock" size={13} className="mt-0.5 text-muted" />
                <p className="text-[10.5px] leading-relaxed text-muted">{copy.about.cvNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
