import { FretMarker } from "./ui/FretMarker";
import { fetchSkills } from "@/lib/queries";
import { cn } from "@/lib/cn";

export async function Skills() {
  const skills = await fetchSkills();
  return (
    <section
      id="skills"
      className="relative py-24 px-6 fretboard-bg text-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 flex flex-col justify-evenly opacity-30 pointer-events-none"
        aria-hidden
      >
        {["a","b","c","d","e","f","g"].map((k) => (
          <div key={k} className="h-px w-full bg-chrome/60" />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10">
          <div className="flex items-center gap-3 text-cream/60">
            <FretMarker size="sm" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
              Skills
            </span>
            <span className="font-mono text-[11px] ml-auto opacity-60">
              fret V
            </span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cream font-light tracking-tight">
            Tools in the case.
          </h2>
        </div>

        <div className="space-y-10">
          {skills.map((group: { group: string; items: { name: string; level: number }[] }) => (
            <div key={group.group}>
              <div className="flex items-center gap-3 mb-4">
                <FretMarker variant="double" size="sm" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-butterscotch">
                  {group.group}
                </h3>
                <div className="flex-1 h-px bg-cream/15" />
              </div>

              <ul className="flex flex-wrap gap-x-6 gap-y-4">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className="inline-flex items-center gap-2.5 group"
                  >
                    <span className="font-display text-lg text-cream">
                      {s.name}
                    </span>
                    <span className="inline-flex gap-1" aria-label={`level ${s.level} of 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={`${s.name}-${i}`}
                          className={cn(
                            "w-1.5 h-1.5 rounded-full transition-colors",
                            i < s.level ? "bg-butterscotch" : "bg-cream/20"
                          )}
                          aria-hidden
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
