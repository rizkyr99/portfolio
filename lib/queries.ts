import { client } from './sanity'

const revalidate = { next: { revalidate: 60 } }

async function safeFetch<T>(query: string, fallback: T, params = {}): Promise<T> {
  try {
    const result = await client.fetch<T>(query, params, revalidate)
    return result ?? fallback
  } catch {
    return fallback
  }
}

export type SanityProfile = {
  name: string; title: string; tagline: string; location: string;
  email: string; siteUrl: string; resumeUrl: string;
  socials: { label: string; href: string }[];
} | null

type PortableTextBlock = import('@portabletext/react').PortableTextProps['value']

export type SanityProject = {
  title: string; blurb: string; category: "frontend" | "fullstack" | "backend"; tags: string[];
  image?: string; repoUrl?: string; liveUrl?: string; year: number;
  context?: PortableTextBlock;
  features?: string[];
  stackDetail?: { tool: string; why: string }[];
  approach?: PortableTextBlock;
  outcome?: PortableTextBlock;
}

export type SanityExperience = {
  company: string; role: string; period: string; location?: string; bullets: string[];
}

export type SanitySkillGroup = {
  group: string; items: { name: string; level: number }[];
}

export type SanityInfluence = { name: string; kind: string; why?: string }

export type SanityMusic = {
  rotation: { artist: string; album: string; year: number }[];
  gear: { name: string; note?: string }[];
  spotifyEmbedUrl?: string;
} | null

export type SanityPostMeta = { slug: string; title: string; date: string; summary: string }

export type SanityPost = SanityPostMeta & { content: import('@portabletext/react').PortableTextProps['value'] } | null

export function fetchProfile() {
  return safeFetch<SanityProfile>(`*[_type == "profile"][0]`, null)
}

export function fetchProjects() {
  return safeFetch<SanityProject[]>(
    `*[_type == "project"] | order(order asc) {
      title, blurb, category, tags, year, repoUrl, liveUrl,
      "image": image.asset->url
    }`,
    [],
  )
}

export function fetchProjectByTitle(title: string) {
  return safeFetch<SanityProject | null>(
    `*[_type == "project" && title == $title][0] {
      title, blurb, category, tags, year, repoUrl, liveUrl,
      "image": image.asset->url,
      context, features,
      stackDetail[]{ tool, why },
      approach, outcome
    }`,
    null,
    { title },
  )
}

export function fetchExperience() {
  return safeFetch<SanityExperience[]>(
    `*[_type == "experience"] | order(order asc) {
      company, role, period, location, bullets
    }`,
    [],
  )
}

export function fetchMusic() {
  return safeFetch<SanityMusic>(`*[_type == "music"][0]`, null)
}

export function fetchSkills() {
  return safeFetch<SanitySkillGroup[]>(`*[_type == "skills"][0].groups`, [])
}

export function fetchInfluences() {
  return safeFetch<SanityInfluence[]>(`*[_type == "influences"][0].items`, [])
}

export function fetchPosts() {
  return safeFetch<SanityPostMeta[]>(
    `*[_type == "post"] | order(date desc) {
      title, "slug": slug.current, date, summary
    }`,
    [],
  )
}

export function fetchPost(slug: string) {
  return safeFetch<SanityPost>(
    `*[_type == "post" && slug.current == $slug][0] {
      title, "slug": slug.current, date, summary, content
    }`,
    null,
    { slug },
  )
}
