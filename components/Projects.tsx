"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PickupSwitch } from "./ui/PickupSwitch";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
}

type ProjectCategory = "frontend" | "fullstack" | "backend";

type Project = {
  title: string;
  blurb: string;
  category: ProjectCategory;
  tags: string[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  year: number;
};

const options: [
  { value: ProjectCategory; label: string },
  { value: ProjectCategory; label: string },
  { value: ProjectCategory; label: string }
] = [
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Fullstack" },
  { value: "backend", label: "Backend" },
];

export function Projects({ projects }: { readonly projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory>("fullstack");

  const filtered = useMemo(
    () => projects.filter((p) => p.category === filter),
    [projects, filter]
  );

  return (
    <section id="projects" className="relative py-24 px-6 bg-cream">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work."
            fret="VII"
            className="mb-0"
          />
          <PickupSwitch
            options={options}
            value={filter}
            onChange={(v) => setFilter(v as ProjectCategory)}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <article
                key={p.title}
                className="group relative rounded-2xl bg-white/70 border border-rosewood/10 p-6 shadow-sm hover:shadow-chrome transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl text-rosewood leading-tight">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] text-rosewood/50 uppercase tracking-widest mt-2">
                    {p.year}
                  </span>
                </div>

                <p className="mt-3 text-rosewood/75 text-[15px] leading-relaxed">
                  {p.blurb}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-rosewood/5 text-rosewood/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-4 text-rosewood/70">
                  <Link
                    href={`/projects/${slugify(p.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest hover:text-sunburst-amber transition-colors"
                  >
                    Case Study <ExternalLink className="w-3 h-3" />
                  </Link>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest hover:text-sunburst-amber transition-colors"
                    >
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest hover:text-sunburst-amber transition-colors"
                    >
                      Code <GitBranch className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-rosewood/50 font-mono text-sm py-16">
            nothing in this position — try another pickup.
          </p>
        )}
      </motion.div>
    </section>
  );
}
