import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { projects } from "@/content/projects";
import { fetchProjectByTitle } from "@/lib/queries";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/(^-|-$)/g, "");
}

const proseClass =
  "text-rosewood/80 text-[16px] leading-[1.75] space-y-4 [&>h2]:font-display [&>h2]:text-xl [&>h2]:text-rosewood [&>h2]:mt-7 [&>h2]:mb-1 [&>h3]:font-display [&>h3]:text-lg [&>h3]:text-rosewood [&>h3]:mt-5 [&>h3]:mb-1 [&>a]:text-sunburst-amber [&>a]:underline [&>a]:underline-offset-4 [&>code]:font-mono [&>code]:text-[0.85em] [&>code]:bg-rosewood/5 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&_pre]:bg-rosewood [&_pre]:text-cream [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:font-mono [&>blockquote]:border-l-2 [&>blockquote]:border-rosewood/20 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-rosewood/60 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ readonly slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.title) === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.blurb,
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  readonly params: Promise<{ readonly slug: string }>;
}) {
  const { slug } = await params;
  const localProject = projects.find((p) => slugify(p.title) === slug);
  if (!localProject) notFound();

  const project = (await fetchProjectByTitle(localProject.title)) ?? localProject;

  const hasContent =
    project.context || project.features || project.approach || project.outcome;

  return (
    <main className="min-h-screen bg-cream px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* Nav */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-rosewood/60 hover:text-rosewood transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Projects
        </Link>

        {/* Hero */}
        <header className="mt-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="font-mono text-[11px] uppercase tracking-widest text-rosewood/40">
              {project.category} · {project.year}
            </span>
            <div className="flex items-center gap-5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-rosewood/60 hover:text-sunburst-amber transition-colors"
                >
                  Live <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-rosewood/60 hover:text-sunburst-amber transition-colors"
                >
                  Code <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-rosewood font-light tracking-tight leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-4 text-rosewood/65 text-[17px] leading-relaxed max-w-2xl">
            {project.blurb}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-rosewood/5 text-rosewood/60"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* Cover image */}
        {project.image && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-rosewood/8 shadow-sm aspect-[16/9] relative bg-rosewood/5">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Case study body */}
        {hasContent && (
          <article className="mt-16 space-y-0 divide-y divide-rosewood/8">
            {/* Problem */}
            {project.context && (
              <CaseSection label="Problem">
                <div className={proseClass}>
                  <PortableText value={project.context} />
                </div>
              </CaseSection>
            )}

            {/* What it does */}
            {project.features && project.features.length > 0 && (
              <CaseSection label="What it does">
                <ul className="space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-rosewood/80 text-[16px] leading-snug">
                      <span className="mt-1 w-1 h-1 rounded-full bg-rosewood/30 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CaseSection>
            )}

            {/* Stack */}
            {project.stackDetail && project.stackDetail.length > 0 ? (
              <CaseSection label="Stack">
                <div className="divide-y divide-rosewood/6">
                  {project.stackDetail.map(({ tool, why }) => (
                    <div key={tool} className="py-3 flex gap-6 items-baseline">
                      <span className="font-mono text-[12px] text-rosewood/90 w-36 flex-shrink-0">
                        {tool}
                      </span>
                      <span className="text-rosewood/60 text-[15px] leading-snug">{why}</span>
                    </div>
                  ))}
                </div>
              </CaseSection>
            ) : (
              <CaseSection label="Stack">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-rosewood/10 bg-white/60 px-3 py-1.5 text-rosewood/80 text-sm font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CaseSection>
            )}

            {/* Architecture */}
            {project.approach && (
              <CaseSection label="Architecture">
                <div className={proseClass}>
                  <PortableText value={project.approach} />
                </div>
              </CaseSection>
            )}

            {/* Outcome */}
            {project.outcome && (
              <CaseSection label="Outcome">
                <div className={proseClass}>
                  <PortableText value={project.outcome} />
                </div>
              </CaseSection>
            )}
          </article>
        )}
      </div>
    </main>
  );
}

function CaseSection({
  label,
  children,
}: {
  readonly label: string;
  readonly children: React.ReactNode;
}) {
  return (
    <section className="py-10 grid md:grid-cols-[140px_1fr] gap-6 md:gap-12">
      <p className="font-mono text-[11px] uppercase tracking-widest text-rosewood/40 pt-1">
        {label}
      </p>
      <div>{children}</div>
    </section>
  );
}
