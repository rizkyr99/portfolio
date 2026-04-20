# Portfolio

A personal portfolio site with a subtle Telecaster/Stratocaster visual influence.
Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Sanity CMS**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. The Sanity Studio is available at http://localhost:3000/studio.

## Editing content

Content can be managed either through the Sanity Studio or directly in the TypeScript content files.

| What you want to change | File / Location |
|---|---|
| Name, title, email, socials, tagline | [`content/profile.ts`](./content/profile.ts) |
| Skills (grouped, with 1–5 levels) | [`content/skills.ts`](./content/skills.ts) |
| Projects (filterable by category) | [`content/projects.ts`](./content/projects.ts) or Sanity Studio |
| Work history | [`content/experience.ts`](./content/experience.ts) |
| Influences | [`content/influences.ts`](./content/influences.ts) |
| Albums in rotation, gear, Spotify embed | [`content/music.ts`](./content/music.ts) |
| Blog posts | [`content/posts/*.mdx`](./content/posts) |
| Project case studies | Sanity Studio → Projects |

Look for `// TODO:` comments to find placeholders to replace.

## Design

The Telecaster/Strat influence is tasteful, not literal:

- **Palette** — butterscotch (Telecaster body), cream (vintage pickguard), rosewood (fretboard), sunburst gradient on hero and contact sections.
- **Typography** — [Fraunces](https://fonts.google.com/specimen/Fraunces) display serif for warmth, Inter for body, JetBrains Mono for UI labels.
- **Motifs** — string dividers between sections (thickness matches real low→high E), fret-position Roman numerals in the nav (0 · III · V · VII · IX · XII), double fret-marker dots at "emphasis" moments, knob-style and pickup-switch controls.
- **Animations** — scroll-reveal animations powered by Framer Motion across all sections.

## Project structure

```
app/              # Next.js App Router pages (/, /blog, /blog/[slug], /projects/[slug], /studio)
components/       # Section components + ui/ primitives
content/          # Static site content (TypeScript files + posts/*.mdx)
lib/              # cn() helper, MDX post loader
sanity/           # Sanity config and schema definitions
public/           # Static assets (add resume.pdf, project screenshots)
```

## Sanity CMS

Project case studies and rich content are managed via [Sanity](https://sanity.io). Configure your project in [`sanity/sanity.config.ts`](./sanity/sanity.config.ts).

Set the following environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Deploy

Push to GitHub and import at [vercel.com/new](https://vercel.com/new). Add the Sanity environment variables in the Vercel project settings. Zero config needed for Next.js — the default build command and output directory will be detected automatically.

## Scripts

```bash
npm run dev      # local dev at :3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # next lint
```

## License

MIT — use it, change it, ship your own.
