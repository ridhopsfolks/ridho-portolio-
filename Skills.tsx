import type { Copy } from "../content";
import { Icon } from "./MaterialIcon";
import { Reveal, SectionHeading } from "./ui";

const CORE_ICONS: Record<string, string> = { motion: "animation", editing: "movie_edit", graphic: "brush" };
const EXTRA_ICONS = ["image", "photo_library", "design_services", "auto_awesome_motion"];

export function Skills({ copy }: { copy: Copy }) {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-28 top-1/4 h-[340px] w-[340px] rounded-full bg-fog/25 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-sand/10 blur-[90px]" />
      </div>

      <div className="shell relative">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow={copy.skills.eyebrow}
            title={copy.skills.title}
            description={copy.skills.description}
          />
        </Reveal>

        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {copy.skills.core.map((skill, index) => {
            const iconName = CORE_ICONS[skill.key] ?? "brush";
            const featured = index === 0;
            const secondary = index === 1;
            return (
              <Reveal key={skill.title} delay={index * 80} className="h-full">
                <article
                  className={`skill-card group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border p-6 transition-all duration-500 sm:p-7 ${
                    featured
                      ? "border-steel-deep bg-steel-deep text-paper shadow-[0_24px_50px_-32px_rgba(61,87,98,0.9)]"
                      : secondary
                        ? "border-steel/20 bg-white/90 text-ink hover:-translate-y-1 hover:border-steel/35 hover:shadow-[0_24px_50px_-38px_rgba(43,45,49,0.55)]"
                        : "border-line bg-white/80 text-ink hover:-translate-y-1 hover:border-steel/25 hover:shadow-[0_24px_50px_-38px_rgba(43,45,49,0.55)]"
                  }`}
                >
                  <div aria-hidden="true" className={`absolute -right-8 -top-8 h-24 w-24 rounded-full border ${featured ? "border-paper/10" : "border-steel/10"}`} />

                  <div className="flex items-start justify-between">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl ${
                        featured ? "bg-paper/10 text-sand" : "bg-mist text-steel"
                      }`}
                    >
                      <Icon name={iconName} size={22} />
                    </span>
                    <span className={`font-mono text-[9px] tracking-[0.18em] ${featured ? "text-paper/40" : "text-muted/50"}`}>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[18px] font-semibold tracking-[-0.025em]">{skill.title}</h3>
                  <p className={`mt-2.5 text-[12.5px] leading-[1.8] ${featured ? "text-fog/80" : "text-muted"}`}>
                    {skill.description}
                  </p>

                  {featured ? (
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-sand/15 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-sand">
                      <span className="h-1 w-1 rounded-full bg-sand" />
                      Primary skill
                    </span>
                  ) : null}

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] ${
                          featured ? "border-paper/15 text-paper/70" : "border-line text-muted"
                        }`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <div className="flex items-end justify-between gap-3">
                      <span className={`font-mono text-[8px] uppercase tracking-[0.16em] ${featured ? "text-paper/45" : "text-muted"}`}>
                        Proficiency
                      </span>
                      <span className="font-display text-[15px] font-semibold tracking-[-0.02em]">
                        {skill.level}
                        <span className={`text-[10px] font-normal ${featured ? "text-paper/50" : "text-muted"}`}>%</span>
                      </span>
                    </div>
                    <div
                      className={`mt-2.5 h-[5px] w-full overflow-hidden rounded-full ${featured ? "bg-paper/15" : "bg-mist"}`}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.title}
                    >
                      <span
                        style={{ width: `${skill.level}%` }}
                        className={`block h-full origin-left scale-x-0 rounded-full transition-transform duration-[1400ms] ease-out [.reveal.is-visible_&]:scale-x-100 ${
                          featured ? "bg-sand" : "bg-steel"
                        }`}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.55fr]">
          <Reveal delay={60} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-line bg-mist/70 p-6 sm:p-7">
              <div>
                <p className="eyebrow text-[9px]">
                  <span className="hairline" />
                  {copy.skills.currentlyLearning}
                </p>
                <p className="mt-4 font-display text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-ink">
                  {copy.skills.learningNote}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {copy.skills.learning.map((item) => (
                  <li key={item} className="rounded-full border border-steel/15 bg-paper px-3 py-1.5 text-[10.5px] font-medium text-steel">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={110} className="h-full">
            <div className="h-full rounded-[1.4rem] border border-line bg-white/70 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-[9px]">
                  <span className="hairline" />
                  {copy.skills.toolsLabel}
                </p>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted/60">Daily toolkit</span>
              </div>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {copy.skills.extra.map((item, index) => {
                  const iconName = EXTRA_ICONS[index] ?? "image";
                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-3 rounded-xl border border-transparent bg-paper/60 px-3 py-3 transition-all duration-300 hover:border-line hover:bg-white"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-mist text-steel transition-colors group-hover:bg-steel group-hover:text-paper">
                        <Icon name={iconName} size={17} />
                      </span>
                      <div>
                        <p className="text-[12px] font-medium text-ink">{item.title}</p>
                        <p className="text-[10px] leading-snug text-muted">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
