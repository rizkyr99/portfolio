import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./ui/Reveal";
import { fetchCertifications } from "@/lib/queries";
import type { SanityCertification } from "@/lib/queries";

export async function Certifications() {
  const certs = await fetchCertifications();

  if (certs.length === 0) return null;

  return (
    <section
      id="certifications"
      className="relative py-24 px-6 bg-cream dark:bg-[#140A04]"
    >
      <Reveal className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Certifications" title="Credentials." />

        <ul className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert: SanityCertification) => (
            <li
              key={`${cert.name}-${cert.issuer}`}
              className="group relative rounded-2xl border border-rosewood/10 dark:border-cream/10 bg-white/50 dark:bg-cream/5 p-5 flex flex-col gap-3 hover:border-rosewood/25 dark:hover:border-cream/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-rosewood dark:text-cream leading-tight">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-rosewood/60 dark:text-cream/60">
                    {cert.issuer}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-rosewood/40 dark:text-cream/40 mt-1 flex-shrink-0">
                  {cert.year}
                </span>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-rosewood/60 dark:text-cream/60 hover:text-sunburst-amber transition-colors self-start"
                >
                  View credential <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {/* decorative accent */}
              <span
                className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-butterscotch/40 to-transparent rounded-full"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
