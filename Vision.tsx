import type { Copy } from "../content";
import { Icon } from "./MaterialIcon";
import { Reveal, SectionHeading } from "./ui";

const CLIP_STYLES = [
  "bg-fog/85 text-steel-deep",
  "bg-sand/90 text-ink",
  "bg-paper/85 text-steel-deep",
  "bg-steel text-paper",
  "bg-fog/30 text-paper border border-paper/15",
];
const WAVE_HEIGHTS = [35, 60, 45, 80, 55, 30, 70, 42, 88, 50, 34, 64, 44, 76, 38, 58, 30, 68, 48, 72, 40, 52];

export function Vision({ copy }: { copy: Copy }) {
  return (
    <section id="vision" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="shell relative">
        <Reveal>
          <SectionHeading index="06" eyebrow={copy.vision.eyebrow} title={copy.vision.title} />
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mt-9 overflow-hidden rounded-[1.8rem] bg-steel-deep p-6 text-paper sm:p-9 lg:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper/10" />
              <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full border border-paper/[0.07]" />
              <div className="absolute right-1/4 top-0 h-full w-px bg-paper/[0.05]" />
              <div className="absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-sand/10 blur-3xl" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/[0.07] px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-fog backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-sand" />
                  {copy.vision.badge}
                </span>

                <Icon name="format_quote" size={30} filled className="mt-7 text-sand" />
                <blockquote className="mt-4 font-display text-[1.35rem] font-medium leading-[1.4] tracking-[-0.03em] sm:text-[1.6rem] lg:text-[1.75rem]">
                  {copy.vision.quote}
                </blockquote>
                <p className="mt-5 max-w-lg text-[12.5px] leading-[1.9] text-fog/75">{copy.vision.body}</p>
              </div>

              <div className="relative mx-auto w-full max-w-[440px]" aria-hidden="true">
                <div className="absolute -inset-3 rounded-[1.6rem] border border-paper/10" />
                <div className="relative overflow-hidden rounded-[1.2rem] border border-paper/15 bg-[#2f4651] shadow-[0_25px_50px_-25px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between gap-3 border-b border-paper/10 px-3.5 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#d98b7a]/80" />
                      <span className="h-2 w-2 rounded-full bg-sand/80" />
                      <span className="h-2 w-2 rounded-full bg-fog/50" />
                    </div>
                    <span className="truncate font-mono text-[8px] tracking-[0.08em] text-paper/60">
                      {copy.vision.timeline.title}
                    </span>
                    <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-sand/80">PRO</span>
                  </div>

                  <div className="p-3.5">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gradient-to-br from-steel via-[#47646f] to-[#263a43]">
                      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(250,250,248,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,248,0.25)_1px,transparent_1px)] [background-size:28px_28px]" />
                      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/15" />
                      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/20" />
                      <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sand text-ink shadow-lg">
                        <Icon name="play_arrow" size={24} filled className="ml-0.5 text-ink" />
                      </span>
                      <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.14em] text-paper/55">
                        <span>Sequence 01</span>
                        <span>1920 × 1080</span>
                      </div>
                      <span className="absolute left-3 top-2.5 rounded bg-ink/40 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-[0.14em] text-paper/70 backdrop-blur-sm">
                        Rec. 709
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between font-mono text-[7.5px] uppercase tracking-[0.12em] text-paper/45">
                      <span>{copy.vision.timeline.track}</span>
                      <span>24 FPS</span>
                    </div>

                    <div className="relative mt-2">
                      <div className="mb-1 flex gap-1">
                        {copy.vision.timeline.clips.map((clip, index) => (
                          <div
                            key={clip}
                            className={`relative h-10 min-w-0 overflow-hidden rounded-[4px] px-1.5 py-1 ${CLIP_STYLES[index % CLIP_STYLES.length]}`}
                            style={{ flexGrow: index === 0 ? 1.35 : index === 4 ? 0.8 : 1 }}
                          >
                            <span className="block truncate font-mono text-[6.5px] uppercase tracking-[0.04em]">{clip}</span>
                            <span className="mt-1 flex h-2 items-end gap-[2px] opacity-45">
                              {[40, 75, 55, 90, 65, 45].map((height, barIndex) => (
                                <span
                                  key={barIndex}
                                  className="w-[2px] rounded-full bg-current"
                                  style={{ height: `${height}%` }}
                                />
                              ))}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1">
                        <div className="flex h-6 flex-[1.35] items-center gap-[2px] overflow-hidden rounded-[3px] border border-fog/15 bg-steel/60 px-1.5">
                          {WAVE_HEIGHTS.slice(0, 11).map((height, index) => (
                            <span
                              key={index}
                              className="w-[2px] rounded-full bg-fog/55"
                              style={{ height: `${Math.max(15, height * 0.18)}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex h-6 flex-1 items-center gap-[2px] overflow-hidden rounded-[3px] border border-fog/15 bg-steel/60 px-1.5">
                          {WAVE_HEIGHTS.slice(11).map((height, index) => (
                            <span
                              key={index}
                              className="w-[2px] rounded-full bg-fog/55"
                              style={{ height: `${Math.max(15, height * 0.18)}%` }}
                            />
                          ))}
                        </div>
                        <div className="flex h-6 flex-[0.8] items-center gap-[2px] overflow-hidden rounded-[3px] border border-fog/15 bg-steel/60 px-1.5">
                          {[35, 60, 45, 80, 55, 30].map((height, index) => (
                            <span
                              key={index}
                              className="w-[2px] rounded-full bg-fog/55"
                              style={{ height: `${Math.max(15, height * 0.18)}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="pointer-events-none absolute inset-y-0 left-[38%] w-px bg-sand">
                        <span className="absolute -left-[3px] -top-1 h-1.5 w-1.5 rotate-45 bg-sand" />
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between border-t border-paper/10 pt-2 font-mono text-[7.5px] tracking-[0.1em] text-paper/45">
                      <span className="text-sand/90">00:00:12:04</span>
                      <span className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-sand" />
                        Auto save
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-xl bg-sand px-3 py-2 text-ink shadow-lg sm:-left-6">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em]">Next frame</span>
                  <span className="h-1 w-1 rounded-full bg-ink/40" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em]">2026</span>
                </div>
              </div>
            </div>

            <div className="relative mt-10 grid gap-5 border-t border-paper/15 pt-7 sm:grid-cols-3 sm:gap-6">
              {copy.vision.goals.map((goal, index) => (
                <div key={goal.title} className="group">
                  <div className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.16em] text-sand/80">
                    <span>0{index + 1}</span>
                    <span className="h-px flex-1 bg-paper/10 transition-colors group-hover:bg-sand/40" />
                  </div>
                  <p className="mt-2 font-display text-[13px] font-medium tracking-[-0.01em] text-paper">{goal.title}</p>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-fog/60">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
