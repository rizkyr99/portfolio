export type ProjectCategory = 'frontend' | 'fullstack' | 'backend';

export type Project = {
  title: string;
  blurb: string;
  category: ProjectCategory;
  tags: string[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  year: number;
};

export const projects: Project[] = [
  {
    title: 'Tide',
    blurb: 'Full-featured project management platform with boards, task tracking, and team collaboration — built end-to-end with Next.js and Stripe billing.',
    category: 'fullstack',
    tags: ['Next.js', 'Postgres', 'Tailwind CSS', 'Stripe'],
    year: 2026,
    liveUrl: 'https://next-project-management-three.vercel.app/',
    repoUrl: 'https://github.com/rizkyr99/next-project-management',
  },
  {
    title: 'Tiffany & Co Web',
    blurb:
      'A recreation of the Tiffany & Co. website with a focus on pixel-perfect UI, smooth transitions, and CMS-driven content via Sanity.',
    category: 'frontend',
    tags: ['Next.js', 'Sanity', 'Tailwind CSS'],
    year: 2024,
    liveUrl: 'https://next-tiffanyco.vercel.app/',
    repoUrl: 'https://github.com/rizkyr99/next-tiffanyco',
  },
  {
    title: 'Kitto POS',
    blurb:
      'Point-of-sale REST API for small businesses — handles products, orders, and inventory with a clean Spring Boot architecture backed by PostgreSQL.',
    category: 'backend',
    tags: ['Springboot', 'Postgres'],
    year: 2025,
  },
  {
    title: 'Quotes App',
    blurb: 'Fullstack quotes app with user submissions, voting, and filtering — type-safe from database to UI using tRPC and Postgres.',
    category: 'fullstack',
    tags: ['Next.js', 'Postgres', 'Tailwind CSS', 'tRPC'],
    year: 2025,
    liveUrl: 'https://quotes-app-jet-iota.vercel.app/',
    repoUrl: 'https://github.com/rizkyr99/quotes-app',
  },
];
