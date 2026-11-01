import { useState } from "react";
import type { Copy, Project } from "../content";
import { CONTACT_LINKS, projects } from "../content";
import { cn } from "../utils/cn";
import { Icon } from "./MaterialIcon";
import { ButtonLink, Reveal, SectionHeading } from "./ui";

const FILTERS = ["All", "Video Editing", "Motion Graphic", "Poster Design", "Mockup Design", "Social Media Design"] as const;
type Filter = (typeof FILTERS)[number];

const CATEGORY_ICONS: Record<string, string> = {
  "Video Editing": "videocam",
  "Motion Graphic": "animation",
  "Poster Design": "image",
  "Mockup Design": "devices",
  "Social Media Design": "share",
};

const ALL_SPANS = [
  "sm:col-span-12 lg:col-span-7",
  "sm:col-span-12 lg:col-span-5",
  "sm:col-span-6 lg:col-span-4",
  "sm:col-span-6 lg:col-span-4",
  "sm:col-span-12 lg:col-span-4",
];

function sourceLabel(project: Project) {
  return project.href.includes("behance.net") ? "Behance" : "Drive";
}

export function Portfolio({ copy }: { copy: Copy }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const single = filter !== "All" && filtered.length === 1;

  return (
    <section id="work" className="relative overflow-hidden border-t border-line py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-mist/80 blur-[90px]" />
        <div className="absolute -right-20 bottom-24 h-64 w-64 rounded-full bg-sand/10 blur-[80px]" />
      </div>

      <div className="shell relative">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow={copy.work.eyebrow}
            title={copy.work.title}
            description={copy.work.description}
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10 flex flex-col gap-4 border-y border-line py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="-mx-1 flex flex-wrap gap-1.5 px-1" role="group" aria-label={copy.work.title}>
              {FILTERS.map((item) => {
                const count = item === "All" ? projects.length : projects.filter((p) => p.category === item).length;
                const active = filter === item;
                const iconName = item === "All" ? "apps" : CATEGORY_ICONS[item];
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[10.5px] font-medium transition-all duration-300",
                      active
                        ? "border-ink bg-ink text-paper shadow-[0_8px_18px_-14px_rgba(43,45,49,0.9)]"
                        : "border-line bg-white/60 text-muted hover:border-steel/35 hover:text-steel"
                    )}
                  >
                    <Icon name={iconName} size={14} className={active ? "text-sand" : "text-steel/70"} />
                    {item === "All" ? copy.work.all : item}
                    <span
                      className={cn(
                        "rounded-full px-1 font-mono text-[8px]",
                        active ? "bg-paper/15 text-paper/70" : "bg-mist text-muted/80"
                      )}
                    >
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              {String(filtered.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} {copy.work.count}
            </p>
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-[1.4rem] border border-dashed border-steel/25 bg-white/50 px-6 py-16 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-steel">
              <Icon name="image_search" size={24} />
            </span>
            <p className="font-display text-[14px] font-medium tracking-[-0.01em] text-ink">{copy.work.empty}</p>
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-steel/25 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-steel transition-colors hover:bg-steel hover:text-paper"
            >
              <Icon name="apps" size={14} />
              {copy.work.all}
            </button>
          </div>
        ) : (
        <div key={filter} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-12">
          {filtered.map((project, index) => {
            const featured = index < 2 && filter === "All";
            return (
              <a
                key={project.id}
                style={{ animationDelay: `${index * 45}ms` }}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "card-in portfolio-card group relative flex flex-col overflow-hidden rounded-[1.4rem] border border-line bg-white/80 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-steel/30 hover:shadow-[0_28px_60px_-40px_rgba(43,45,49,0.6)]",
                  featureSpan(filter, index, project, single)
                )}
                aria-label={`${copy.work.view}: ${project.title}`}
              >
                <div className={cn("relative overflow-hidden bg-mist", featured ? "aspect-[16/11]" : "aspect-[4/3]")}>
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full select-none object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/10 opacity-90" />

                  <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/25 bg-ink/40 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-paper backdrop-blur-md">
                      <Icon name={CATEGORY_ICONS[project.category] ?? "image"} size={12} className="text-sand" />
                      {project.category}
                    </span>
                    <span className="rounded-full border border-paper/25 bg-ink/35 px-2 py-1.5 font-mono text-[8px] tracking-[0.14em] text-paper/80 backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-paper/70">
                      {sourceLabel(project)} — {project.tools.join(" · ")}
                    </p>
                    <span className="grid h-9 w-9 shrink-0 translate-y-2 place-items-center rounded-full bg-paper text-ink opacity-0 shadow-lg transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="open_in_new" size={17} />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                      <span className="inline-flex items-center gap-1.5 text-steel">
                        <Icon name={CATEGORY_ICONS[project.category] ?? "image"} size={12} />
                        {project.category}
                      </span>
                      <span className="text-muted/60">0{projects.findIndex((p) => p.id === project.id) + 1}</span>
                    </div>
                    <h3 className="mt-2 font-display text-[15.5px] font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors group-hover:text-steel">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-line/80 pt-3">
                    <span className="inline-flex items-center gap-2 text-[11px] font-medium text-ink/75 transition-colors group-hover:text-steel">
                      <span className="link-underline">{copy.work.view}</span>
                      <Icon name="open_in_new" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted/55">{sourceLabel(project)}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        )}

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-5 rounded-[1.5rem] border border-line bg-mist/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper text-steel shadow-sm">
                <Icon name="folder_open" size={22} />
              </span>
              <div className="max-w-md">
                <p className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">{copy.work.driveNote}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[10.5px] leading-relaxed text-muted">
                  <Icon name="open_in_new" size={13} className="shrink-0" />
                  {copy.work.openNote}
                </p>
              </div>
            </div>
            <ButtonLink
              href={CONTACT_LINKS.drive}
              external
              variant="outline"
              className="shrink-0 self-start bg-paper sm:self-auto"
              icon={<Icon name="arrow_outward" size={18} />}
            >
              {copy.work.viewAll}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function featureSpan(filter: Filter, index: number, project: Project, single: boolean) {
  if (single) return "col-span-1 sm:col-span-12";
  if (filter === "All") return ALL_SPANS[index] ?? "sm:col-span-6";
  void project;
  return "sm:col-span-6";
}
