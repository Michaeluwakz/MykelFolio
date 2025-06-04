import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  Icon?: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>; // Allow Lucide or custom SVG
  category: 'Programming' | 'UI/UX Design' | 'Tools & Platforms';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string; // For MP4 or YouTube embed link
  projectUrl?: string;
  repoUrl?: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Design';
  tags: string[];
  type: 'image' | 'video'; // To distinguish content type
  dataAiHint?: string; // for placeholder images
  imageGallery?: string[]; // For design projects to show a gallery of images
}

export interface SocialLink {
  name: string;
  url: string;
  Icon: LucideIcon;
}
