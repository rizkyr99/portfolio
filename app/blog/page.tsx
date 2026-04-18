import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { StringDivider } from "@/components/ui/StringDivider";

export const metadata = {
  title: "Writing",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-rosewood/70 hover:text-rosewood"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Home
        </Link>

        <h1 className="mt-6 font-display text-5xl text-rosewood font-light tracking-tight">
          Writing
        </h1>
        <p className="mt-3 text-rosewood/70">
          Essays, notes, and occasional tangents.
        </p>

        <StringDivider className="my-10 opacity-50" />

        {posts.length === 0 ? (
          <p className="text-rosewood/60 font-mono text-sm">
            // no posts yet — add an .mdx file under content/posts/
          </p>
        ) : (
          <ul className="divide-y divide-rosewood/10">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex items-start justify-between gap-6 py-5 hover:bg-rosewood/5 -mx-3 px-3 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <h2 className="font-display text-xl text-rosewood">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-rosewood/70 text-[15px] leading-relaxed">
                      {p.summary}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-rosewood/50">
                      {p.date}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 mt-1.5 text-rosewood/40 group-hover:text-sunburst-amber transition-colors flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
