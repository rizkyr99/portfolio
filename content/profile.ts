export const profile = {
  name: 'Rizky Ramadhan',
  title: 'Fullstack Engineer',
  tagline:
    'Building thoughtful software the way a luthier builds a guitar — with attention to tone, feel, and craft.',
  location: 'Palembang, Indonesia',
  email: 'ramarizdev@gmail.com',
  siteUrl: 'https://www.ramarizdev.my.id/',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/rizkyr99' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rizkyrama99' },
    { label: 'Instagram', href: 'https://instagram.com/rizkyr.99' },
  ],
} as const;

export type Profile = typeof profile;
