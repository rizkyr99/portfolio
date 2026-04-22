import type { PortableTextProps } from '@portabletext/react';

type PortableTextBlock = PortableTextProps['value'];

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
  context?: PortableTextBlock;
  features?: string[];
  stackDetail?: { tool: string; why: string }[];
  approach?: PortableTextBlock;
  outcome?: PortableTextBlock;
};
