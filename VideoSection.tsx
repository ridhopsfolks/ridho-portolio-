import { useState } from "react";
import type { Copy } from "../content";
import { YOUTUBE_ID, YOUTUBE_URL } from "../content";
import { Icon } from "./MaterialIcon";
import { ProfilePhoto } from "./ProfilePhoto";
import { ButtonLink, Reveal, SectionHeading } from "./ui";

export function VideoSection({ copy }: { copy: Copy }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="relative overflow-hidden border-y border-line bg-mist py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full border border-steel/10" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-fog/50 blur-[80px]" />
        <div
          className="absolute right-10 top-16 hidden h-28 w-28 opacity-40 lg:block"
          style={{
            backgroundImage: "radial-gradient(#4f6d7a 1.2px, transparent 1.2px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="shell relative">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow={copy.video.eyebrow}
            title={copy.video.title}
            description={copy.video.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal delay={80} className="order-2 lg:order-1">
            <p className="max-w-lg text-[14.5px] leading-[1.9] text-muted">{copy.video.supporting}</p>

            <ul className="mt-8 max-w-lg border-t border-line/90">
              {copy.video.points.map((point, index) => (
                <li key={point} className="group flex items-center gap-4 border-b border-line/90 py-4">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-steel">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] font-medium text-ink">{point}</span>
                  <Icon
                    name="arrow_outward"
                    size={16}
                    className="ml-auto text-muted/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-steel"
                  />
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={YOUTUBE_URL}
                external
                variant="primary"
                icon={<Icon name="open_in_new" size={18} />}
              >
                <span className="inline-flex items-center gap-2">
                  <Icon name="smart_display" size={18} />
                  {copy.video.external}
                </span>
              </ButtonLink>
              <span className="rounded-full border border-ink/10 bg-white/60 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                {copy.video.duration}
              </span>
            </div>

            <div className="mt-8 flex max-w-lg items-start gap-3 rounded-2xl border border-white/80 bg-white/55 p-4">
              <Icon name="lock" size={15} className="mt-0.5 text-steel" />
              <p className="text-[11.5px] leading-[1.7] text-muted">{copy.video.note}</p>
            </div>
          </Reveal>

          <Reveal delay={140} className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[360px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-4 -bottom-4 h-full rotate-[-3.5deg] rounded-[2.2rem] border border-steel/15 bg-fog/60"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-7 -bottom-2 h-full rotate-[2deg] rounded-[2.2rem] bg-paper/80"
              />

              <div className="relative rounded-[2.1rem] border border-white bg-white/80 p-2.5 shadow-[0_32px_70px_-38px_rgba(43,45,49,0.5)] backdrop-blur-sm">
                <div className="rounded-[1.7rem] bg-steel-deep p-2.5">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-ink">
                    {playing ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={copy.video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        className="group absolute inset-0 h-full w-full text-left"
                        aria-label={copy.video.play}
                      >
                        <ProfilePhoto
                          alt={copy.meta.portraitAlt}
                          className="h-full w-full object-[center_18%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                        />
                        <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/25" />

                        <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-paper/20 bg-ink/45 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper backdrop-blur-md">
                          <span className="h-1 w-1 rounded-full bg-sand" />
                          Personal branding
                        </span>
                        <span className="absolute right-3.5 top-3.5 rounded-full border border-paper/20 bg-ink/45 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-paper backdrop-blur-md">
                          Shorts
                        </span>

                        <span className="absolute inset-0 grid place-items-center">
                          <span className="relative grid h-[68px] w-[68px] place-items-center rounded-full bg-paper/95 text-steel shadow-[0_18px_36px_-14px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-110">
                            <span className="absolute inset-0 animate-ping rounded-full border border-paper/50 opacity-40" />
                            <Icon name="play_arrow" size={30} filled className="relative ml-0.5 text-steel" />
                          </span>
                        </span>

                        <span className="absolute inset-x-0 bottom-0 p-4">
                          <span className="block font-mono text-[8.5px] uppercase tracking-[0.18em] text-fog/80">
                            {copy.video.play} · 00:20
                          </span>
                          <span className="mt-1.5 block font-display text-[15px] font-medium leading-snug text-paper">
                            {copy.video.title}
                          </span>
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 px-1 pb-0.5 pt-3">
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-paper/60">RPS — Brand Story</span>
                    <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/60">
                      <span className={`h-1.5 w-1.5 rounded-full ${playing ? "bg-sand" : "bg-fog/70"}`} />
                      {playing ? copy.video.playing : "YouTube"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-16 flex items-center gap-2 rounded-xl border border-line bg-paper/95 px-3 py-2 shadow-[0_14px_34px_-20px_rgba(43,45,49,0.5)] sm:-right-8">
                <Icon name="smart_display" size={15} className="text-steel" />
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">02 — Video</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
