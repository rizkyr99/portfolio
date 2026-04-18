import { SectionHeader } from "./SectionHeader";
import { FretMarker } from "./ui/FretMarker";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-b from-cream to-[#ede3d2]"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Experience" title="The setlist." fret="IX" />

        <ol className="relative border-l border-rosewood/20 ml-3 space-y-10 pl-8">
          {experience.map((e, i) => {
            const isEmphasis = i % 2 === 1;
            return (
              <li key={`${e.company}-${e.period}`} className="relative">
                <span
                  className="absolute -left-[39px] top-1.5"
                  aria-hidden
                >
                  <FretMarker
                    variant={isEmphasis ? "double" : "single"}
                    size="md"
                  />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl text-rosewood">
                    {e.role}
                  </h3>
                  <span className="font-display italic text-butterscotch">
                    @ {e.company}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-rosewood/60">
                  {e.period}
                  {e.location && ` · ${e.location}`}
                </p>

                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-rosewood/80 text-[15px] leading-relaxed flex gap-3"
                    >
                      <span
                        className="mt-2 inline-block w-1 h-1 rounded-full bg-rosewood/40 flex-shrink-0"
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
