# Portfolio

A personal portfolio site with a subtle Telecaster/Stratocaster visual influence.
Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All copy lives in [`content/`](./content) as plain TypeScript files (and MDX for blog posts). No CMS to set up.

| What you want to change | File |
|---|---|
| Name, title, email, socials, tagline | [`content/profile.ts`](./content/profile.ts) |
| Skills (grouped, with 1–5 levels) | [`content/skills.ts`](./content/skills.ts) |
| Projects (filterable by category) | [`content/projects.ts`](./content/projects.ts) |
| Work history | [`content/experience.ts`](./content/experience.ts) |
| Influences | [`content/influences.ts`](./content/influences.ts) |
| Albums in rotation, gear, Spotify embed | [`content/music.ts`](./content/music.ts) |
| Blog posts | [`content/posts/*.mdx`](./content/posts) |

Look for `// TODO:` comments to find placeholders to replace.

## Design

The Telecaster/Strat influence is tasteful, not literal:

- **Palette** — butterscotch (Telecaster body), cream (vintage pickguard), rosewood (fretboard), sunburst gradient on hero and contact sections.
- **Typography** — [Fraunces](https://fonts.google.com/specimen/Fraunces) display serif for warmth, Inter for body, JetBrains Mono for UI labels.
- **Motifs** — string dividers between sections (thickness matches real low→high E), fret-position Roman numerals in the nav (0 · III · V · VII · IX · XII), double fret-marker dots at "emphasis" moments, knob-style and pickup-switch controls.

## Project structure

```
app/              # Next.js App Router pages (/, /blog, /blog/[slug])
components/       # Section components + ui/ primitives
content/          # All editable site content (incl. posts/*.mdx)
lib/              # cn() helper, MDX post loader
public/           # Static assets (add resume.pdf, project screenshots)
```

## Deploy

Push to GitHub and import at [vercel.com/new](https://vercel.com/new). Zero config needed for Next.js — the default build command and output directory will be detected automatically.

## Scripts

```bash
npm run dev      # local dev at :3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # next lint
```

## License

MIT — use it, change it, ship your own.
