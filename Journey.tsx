import type { Copy } from "../content";
import { Icon } from "./MaterialIcon";
import { Reveal, SectionHeading } from "./ui";

const ICONS = ["school", "work", "timeline", "trending_up"];

export function Journey({ copy }: { copy: Copy }) {
  return (
    <section id="journey" className="relative overflow-hidden border-y border-line bg-mist py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-fog/40 blur-[90px]" />
        <div className="absolute bottom-16 left-8 hidden h-20 w-20 opacity-30 lg:block" style={{ backgroundImage: "radial-gradient(#4f6d7a 1.2px, transparent 1.2px)", backgroundSize: "12px 12px" }} />
      </div>

      <div className="shell relative">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow={copy.journey.eyebrow}
            title={copy.journey.title}
            description={copy.journey.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-steel-deep p-7 text-paper sm:p-8">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-paper/10" />
                <div aria-hidden="true" className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-paper/10" />
                <Icon name="format_quote" size={30} filled className="text-sand" />
                <p className="mt-5 font-display text-[21px] font-medium leading-[1.35] tracking-[-0.03em] sm:text-[23px]">
                  {copy.journey.quote}
                </p>
                <p className="mt-5 max-w-[26ch] text-[11.5px] leading-[1.8] text-fog/75">{copy.journey.quoteNote}</p>
                <div className="mt-7 flex items-center justify-between border-t border-paper/15 pt-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/50">RPS — 2026</span>
                  <Icon name="timeline" size={16} className="text-sand" />
                </div>
              </div>

              <div className="mx-4 -mt-3 rotate-[-1.5deg] rounded-xl bg-sand px-4 py-3 text-ink shadow-[0_12px_24px_-16px_rgba(43,45,49,0.5)]">
                <p className="font-mono text-[8px] uppercase tracking-[0.16em]">{copy.skills.currentlyLearning}</p>
                <p className="mt-1 font-display text-[12px] font-semibold tracking-[-0.01em]">
                  {copy.skills.learning.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>

          <ol className="relative ml-2 border-l border-steel/20 pl-6 sm:ml-3 sm:pl-9">
            {copy.journey.items.map((item, index) => {
              const iconName = ICONS[index] ?? "timeline";
              return (
                <Reveal key={item.title} delay={index * 70} className="relative pb-6 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[34px] top-6 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-mist bg-steel ring-4 ring-steel/10 sm:-left-[46px]"
                  >
                    <span className="h-1 w-1 rounded-full bg-paper" />
                  </span>

                  <div className="group rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:border-steel/30 hover:shadow-[0_20px_45px_-35px_rgba(43,45,49,0.5)] sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-mist px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-steel">
                        <span className="h-1 w-1 rounded-full bg-sand" />
                        {item.period}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.16em] text-muted/50">0{index + 1}</span>
                    </div>

                    <div className="mt-4 flex items-start gap-3.5">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-line bg-white text-steel transition-colors duration-300 group-hover:border-steel/25 group-hover:bg-paper">
                        <Icon name={iconName} size={19} />
                      </span>
                      <div>
                        <h3 className="font-display text-[15.5px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[11px] font-medium text-steel">{item.place}</p>
                        <p className="mt-2.5 text-[12.5px] leading-[1.8] text-muted">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
