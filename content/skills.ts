export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export type SkillGroup = {
  group: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    group: 'Languages',
    items: [
      { name: 'TypeScript', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'Java', level: 4 },
      { name: 'PHP', level: 4 },
      { name: 'SQL', level: 4 },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'Next.js', level: 5 },
      { name: 'React', level: 5 },
      { name: 'Node.js', level: 4 },
      { name: 'Nest.js', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Prisma', level: 3 },
      { name: 'Springboot', level: 4 },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 3 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'Vercel', level: 4 },
      { name: 'Figma', level: 3 },
    ],
  },
];
