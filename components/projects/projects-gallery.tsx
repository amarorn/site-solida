"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import {
  PROJECT_TECHNOLOGIES,
  projects,
  type ProjectTechnology,
} from "@/lib/projects-data";

function TechPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition focus-ring",
        active
          ? "border-amber-500/35 bg-amber-500/10 text-amber-300"
          : "border-border bg-slate-950/50 text-slate-400 hover:text-slate-100",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof PROJECT_TECHNOLOGIES)[number]>(
    "Todos"
  );

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.technology === (filter as ProjectTechnology));
  }, [filter]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {PROJECT_TECHNOLOGIES.map((t) => (
          <TechPill
            key={t}
            label={t}
            active={filter === t}
            onClick={() => setFilter(t)}
          />
        ))}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <li key={p.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-amber-500/30">
              <div className="relative aspect-[5/3] overflow-hidden bg-slate-900">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 rounded-md bg-slate-950/75 px-2 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                  {p.technology}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-amber-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted">
                  <div className="rounded-lg border border-border bg-slate-950/40 px-3 py-2">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Potência
                    </dt>
                    <dd className="mt-1 font-medium tabular-nums text-slate-200">
                      {p.power}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-border bg-slate-950/40 px-3 py-2">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Local
                    </dt>
                    <dd className="mt-1 text-slate-300">{p.location}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

