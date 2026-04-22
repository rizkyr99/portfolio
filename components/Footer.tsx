import { profile } from "@/content/profile";
import { StringDivider } from "./ui/StringDivider";

export function Footer() {
  return (
    <footer className="bg-cream dark:bg-[#0f0603] text-rosewood dark:text-cream border-t border-rosewood/10 dark:border-cream/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <StringDivider className="opacity-40 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-rosewood/60 dark:text-cream/60">
            &copy; {new Date().getFullYear()} {profile.name}. Built with care &amp; six strings.
          </p>
          <div className="flex gap-4 font-mono text-[11px] uppercase tracking-widest text-rosewood/60 dark:text-cream/60">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sunburst-amber transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
