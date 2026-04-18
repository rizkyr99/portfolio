export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Mitra Integrasi Informatika',
    role: 'Application Developer Associate',
    period: '2025 — Present',
    location: 'Jakarta',
    bullets: [
      'Delivered multiple enterprise systems used by 1,000+ users within PTBA (MIND ID Group), including ICT Week platform, Attendance System, and Admin Panel.',
      'Refactored the CISEA Care system by merging ~10 fragmented backend services into a single, modular API layer — reducing duplicated logic, improving reliability, and accelerating new feature development by 25%.',
      'Engineered a scalable Spend Management System (React + TS + React Query + Tailwind), improving data load performance by 35% and reducing redundant API calls by 40% through smart caching.',
    ],
  },
  {
    company: 'Energi Jaring Komunikasi',
    role: 'Fullstack Developer',
    period: '2024 — 2025',
    location: 'Jakarta',
    bullets: [
      'Developed Employee Management System frontend using Next JS and TypeScript, with REST API built using Express, TypeScript, PostgreSQL, and Prisma ORM.',
      'Built location-based attendance mobile app using React Native.',
      'Deploy web services to Linux VPS with Github Actions CI/CD and Nginx.',
    ],
  },
];
