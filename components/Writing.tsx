import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./ui/Reveal";
import { fetchPosts } from "@/lib/queries";

export async function Writing() {
  const posts = (await fetchPosts()).slice(0, 3);

  return (
    <section id="writing" className="relative py-24 px-6 bg-cream">
      <Reveal className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Writing" title="Notes & essays." fret="XII" />

        {posts.length === 0 ? (
          <p className="text-rosewood/60 font-mono text-sm">
            no posts yet — add one in Sanity Studio.
          </p>
        ) : (
          <ul className="divide-y divide-rosewood/10">
            {posts.map((p: { slug: string; title: string; summary: string; date: string }) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex items-start justify-between gap-6 py-5 hover:bg-rosewood/5 -mx-3 px-3 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-rosewood">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-rosewood/70 text-[15px] leading-relaxed">
                      {p.summary}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-rosewood/50">
                      {p.date}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 mt-1.5 text-rosewood/40 group-hover:text-sunburst-amber group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-rosewood/70 hover:text-rosewood"
          >
            All posts <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
