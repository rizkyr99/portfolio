import { SectionHeader } from "./SectionHeader";
import { StringDivider } from "./ui/StringDivider";
import { FretMarker } from "./ui/FretMarker";
import { influences } from "@/content/influences";
import { profile } from "@/content/profile";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-wood-grain opacity-[0.04] pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader eyebrow="About" title="The short version." fret="III" />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-4 text-rosewood/85 text-[17px] leading-relaxed">
            <p>
              I&apos;m {profile.name}, a {profile.title.toLowerCase()} based in{" "}
              {profile.location}. I care about building software that feels
              considered — fast, honest, and quiet about its own cleverness.
            </p>
            <p>
              When I&apos;m not shipping, I&apos;m usually playing guitar. A lot of
              what I like about instruments shows up in how I like to work:
              simple tools with depth, a preference for tone over flash, and
              a respect for the people who&apos;ve done this for decades.
            </p>
            <p>
              This site is a small place to show what I&apos;ve made, what I&apos;m
              reading, and what&apos;s on the turntable.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <FretMarker variant="double" size="sm" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-rosewood/70">
                Influences
              </h3>
            </div>
            <ul className="space-y-3">
              {influences.map((inf) => (
                <li
                  key={inf.name}
                  className="flex items-baseline gap-3 text-rosewood"
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-butterscotch flex-shrink-0 translate-y-[2px]"
                    aria-hidden
                  />
                  <span className="font-display italic text-lg">
                    {inf.name}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-rosewood/50">
                    {inf.kind}
                  </span>
                  {inf.why && (
                    <span className="text-rosewood/70 text-sm">
                      — {inf.why}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <StringDivider className="mt-16 opacity-50" />
      </div>
    </section>
  );
}
