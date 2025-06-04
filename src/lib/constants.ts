
import type { LucideIcon } from 'lucide-react';
import React from 'react';
import type { Skill, Project, SocialLink } from '@/types';
import { Figma, GitMerge, Github, Linkedin, Mail, MonitorPlay, Palette, Smartphone, Server, Pilcrow, BrainCircuit, BarChart4, Bot, Dribbble, Code, Database, Flame, Container, Link as LinkIcon, Youtube, ImageIcon, Video as VideoIconProp } from 'lucide-react';

const AdobeXDIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return React.createElement('svg', {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  },
    React.createElement('path', {
      d: "M14.14 2.86002H9.86C9.16 2.86002 8.59 3.40002 8.54 4.09002L7.83 13.27C7.79 13.81 8.18999 14.29 8.73999 14.35L12.3 14.79C12.91 14.87 13.48 14.36 13.56 13.76L14.46 6.70002C14.52 6.20002 14.14 5.77002 13.64 5.74002L10.55 5.51002C10.21 5.48002 9.98001 5.80002 10.02 6.13002L10.51 10.03C10.53 10.19 10.66 10.31 10.83 10.32L11.67 10.4C11.7536 10.4102 11.8339 10.3886 11.9003 10.3397C11.9666 10.2908 12.0154 10.2181 12.039 10.135L12.51 6.52002C12.53 6.31002 12.36 6.13002 12.15 6.16002L11.16 6.31002",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }),
    React.createElement('path', {
      d: "M15.43 5.43002L16.53 15.39C16.61 16.07 16.12 16.67 15.43 16.76L11.71 17.22C10.94 17.32 10.28 16.73 10.17 15.97L9.00001 10.32",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }),
    React.createElement('path', {
      d: "M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  );
};


export const SKILLS_DATA: Skill[] = [
  { name: 'JavaScript', level: 'Expert', Icon: Pilcrow, category: 'Programming' },
  { name: 'TypeScript', level: 'Advanced', Icon: Pilcrow, category: 'Programming' },
  { name: 'React', level: 'Advanced', Icon: Smartphone, category: 'Programming' },
  { name: 'Next.js', level: 'Advanced', Icon: Smartphone, category: 'Programming' },
  { name: 'Node.js', level: 'Intermediate', Icon: Server, category: 'Programming' },
  { name: 'HTML5', level: 'Expert', Icon: Code, category: 'Programming' },
  { name: 'CSS3', level: 'Expert', Icon: Palette, category: 'Programming' },
  { name: 'Python', level: 'Intermediate', Icon: Code, category: 'Programming' },
  { name: 'SQL', level: 'Intermediate', Icon: Database, category: 'Programming' },
  { name: 'Figma', level: 'Expert', Icon: Figma, category: 'UI/UX Design' },
  { name: 'Adobe XD', level: 'Advanced', Icon: AdobeXDIcon, category: 'UI/UX Design' },
  { name: 'Prototyping', level: 'Advanced', Icon: Bot, category: 'UI/UX Design' },
  { name: 'Accessibility (A11Y)', level: 'Intermediate', Icon: BrainCircuit, category: 'UI/UX Design' },
  { name: 'User Research', level: 'Intermediate', Icon: BarChart4, category: 'UI/UX Design' },
  { name: 'Git', level: 'Advanced', Icon: GitMerge, category: 'Tools & Platforms' },
  { name: 'Vercel', level: 'Advanced', Icon: MonitorPlay, category: 'Tools & Platforms' },
  { name: 'MongoDB', level: 'Intermediate', Icon: Server, category: 'Tools & Platforms' },
  { name: 'Tailwind CSS', level: 'Expert', Icon: Palette, category: 'Tools & Platforms' },
  { name: 'Docker', level: 'Intermediate', Icon: Container, category: 'Tools & Platforms' },
  { name: 'Firebase', level: 'Intermediate', Icon: Flame, category: 'Tools & Platforms' },
];

const frontendProjects: Project[] = [
  {
    id: 'fe-naijastay',
    title: "NaijaStay",
    description: "Frontend concept for an accommodation booking platform tailored for Nigeria.",
    imageUrl: `https://i.ibb.co/gFWNPnBf/image.png`,
    videoUrl: `https://youtube.com/shorts/RbNV4giHtUY`,
    projectUrl: `https://youtube.com/shorts/RbNV4giHtUY`,
    dataAiHint: "travel booking youtube",
    category: 'Frontend',
    tags: ['React', 'Next.js', 'UI/UX', 'Video Demo', 'YouTube Demo', 'Travel'],
    type: 'video',
    repoUrl: '#',
  },
  {
    id: 'fe-betprompt',
    title: "BetPrompt",
    description: "User interface for a sports betting analytics and AI prompt generation tool.",
    imageUrl: `https://i.ibb.co/xtNm3whS/image.png`,
    videoUrl: `https://youtube.com/shorts/5xs2fhJqUto`,
    projectUrl: `https://youtube.com/shorts/5xs2fhJqUto`,
    dataAiHint: "sports betting youtube",
    category: 'Frontend',
    tags: ['Vue.js', 'Nuxt.js', 'AI', 'Video Demo', 'YouTube Demo', 'Sports Tech'],
    type: 'video',
    repoUrl: '#',
  },
  {
    id: 'fe-farmconnect',
    title: "FarmConnect",
    description: "Frontend design for a platform connecting farmers to markets and resources.",
    imageUrl: `https://i.ibb.co/YTY0rjjb/image.png`,
    videoUrl: `https://youtube.com/shorts/XiEfJRIo8bE`,
    projectUrl: `https://youtube.com/shorts/XiEfJRIo8bE`,
    dataAiHint: "agriculture app youtube",
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Video Demo', 'YouTube Demo', 'Agriculture', 'Marketplace'],
    type: 'video',
    repoUrl: '#',
  },
  {
    id: 'fe-santalilhelper',
    title: "Santa LilHelper",
    description: "A festive UI for a Christmas-themed wishlist and gift management app.",
    imageUrl: `https://i.ibb.co/KjWmwY2p/image.png`,
    videoUrl: `https://youtube.com/shorts/XuE_j5OfbzI`,
    projectUrl: `https://youtube.com/shorts/XuE_j5OfbzI`,
    dataAiHint: "holiday app youtube",
    category: 'Frontend',
    tags: ['Svelte', 'SvelteKit', 'Video Demo', 'YouTube Demo', 'Holiday', 'Productivity'],
    type: 'video',
    repoUrl: '#',
  },
  {
    id: 'fe-examplifyai',
    title: "ExamplifyAI",
    description: "AI-enhanced frontend for exam preparation, featuring adaptive learning paths.",
    imageUrl: `https://i.ibb.co/1Y4QNqBS/image.png`,
    videoUrl: `https://youtu.be/kCnNP7Jribg`,
    projectUrl: `https://youtu.be/kCnNP7Jribg`,
    dataAiHint: "education ai youtube",
    category: 'Frontend',
    tags: ['Angular', 'AI', 'EdTech', 'Video Demo', 'YouTube Demo', 'Study Tool'],
    type: 'video',
    repoUrl: '#',
  },
  {
    id: 'fe-chopquick',
    title: "ChopQuick",
    description: "A dynamic frontend for a rapid food ordering and delivery service.",
    imageUrl: `https://i.ibb.co/8D8L7fvB/image.png`,
    videoUrl: `https://youtube.com/shorts/ekb3VWAlKoY`,
    projectUrl: `https://youtube.com/shorts/ekb3VWAlKoY`,
    dataAiHint: "food delivery youtube",
    category: 'Frontend',
    tags: ['React Native', 'Mobile UI', 'Video Demo', 'YouTube Demo', 'FoodTech', 'E-commerce'],
    type: 'video',
    repoUrl: '#',
  },
  {
    id: 'fe-nhs-medreminder',
    title: 'NHS MedReminder',
    description: 'A concept for a medication reminder and adherence app for NHS patients. Watch the demo video!',
    imageUrl: 'https://i.ibb.co/zWWZbpKS/image.png',
    videoUrl: 'https://youtube.com/shorts/U44zvHLoDLQ',
    projectUrl: 'https://youtube.com/shorts/U44zvHLoDLQ',
    dataAiHint: 'medical reminder app youtube',
    category: 'Frontend',
    tags: ['React', 'Next.js', 'Healthcare', 'UI/UX', 'Video Demo', 'YouTube Demo'],
    type: 'video',
    repoUrl: '#',
    imageGallery: ['https://i.ibb.co/zWWZbpKS/image.png']
  },
  {
    id: 'fe-symptoms-checker',
    title: 'Symptoms Checker',
    description: 'A frontend prototype for an AI-powered symptoms checker and health guidance tool. Watch the demo video!',
    imageUrl: 'https://i.ibb.co/FkTVXJWV/image.png',
    videoUrl: 'https://youtube.com/shorts/sfzXi_2v-bA',
    projectUrl: 'https://youtube.com/shorts/sfzXi_2v-bA',
    dataAiHint: 'health symptom checker youtube',
    category: 'Frontend',
    tags: ['Vue.js', 'AI', 'Healthcare', 'UI/UX', 'Video Demo', 'YouTube Demo'],
    type: 'video',
    repoUrl: '#',
    imageGallery: ['https://i.ibb.co/FkTVXJWV/image.png']
  },
  {
    id: 'fe-naijawallet-fintech',
    title: 'NaijaWallet Fintech',
    description: 'Frontend design for a Nigerian fintech wallet, focusing on payments and transfers. Watch the demo video!',
    imageUrl: 'https://i.ibb.co/2332XJdR/image.png',
    videoUrl: 'https://youtube.com/shorts/lfHhqKyjaP8',
    projectUrl: 'https://youtube.com/shorts/lfHhqKyjaP8',
    dataAiHint: 'fintech wallet nigeria youtube',
    category: 'Frontend',
    tags: ['Angular', 'Fintech', 'Mobile UI', 'Nigeria', 'Video Demo', 'YouTube Demo'],
    type: 'video',
    repoUrl: '#',
    imageGallery: ['https://i.ibb.co/2332XJdR/image.png']
  },
  {
    id: 'fe-saas-lite',
    title: "SaaS Lite",
    description: "A lightweight frontend for a flexible SaaS application, demonstrating core SaaS UI patterns.",
    imageUrl: `https://i.ibb.co/WvgG9M64/image.png`,
    videoUrl: `https://youtu.be/OUiFIrtLrN8`,
    projectUrl: `https://youtu.be/OUiFIrtLrN8`,
    dataAiHint: "saas application screenshot",
    category: 'Frontend',
    tags: ['React', 'Next.js', 'SaaS', 'UI/UX', 'Video Demo', 'YouTube Demo'],
    type: 'video',
    repoUrl: '#',
    imageGallery: [`https://i.ibb.co/WvgG9M64/image.png`],
  },
];

const designProjects: Project[] = [
  {
    id: 'project-d1',
    title: 'CoinPay UI',
    description: 'UI/UX concept design for a modern cryptocurrency payment application.',
    imageUrl: '/images/design/CoinPay UI 1.png',
    dataAiHint: 'crypto payment mobile',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Fintech', 'Crypto'],
    type: 'image',
    imageGallery: [
        '/images/design/CoinPay UI 1.png',
        '/images/design/CoinPay UI 2.png',
        '/images/design/CoinPay UI 3.png',
    ]
  },
  {
    id: 'project-d2',
    title: 'Drone Web App UI',
    description: 'Interface design for a web application to control and monitor drone fleets.',
    imageUrl: '/images/design/Drone Web App UI 1.png',
    dataAiHint: 'drone dashboard',
    category: 'Design',
    tags: ['UI Design', 'Web App', 'Dashboard', 'Control Panel'],
    type: 'image',
    imageGallery: [
        '/images/design/Drone Web App UI 1.png',
        '/images/design/Drone Web App UI 2.png',
        '/images/design/Drone Web App UI 3.png',
        '/images/design/Drone Web App UI 4.png'
    ]
  },
  {
    id: 'project-d3',
    title: 'HotelBooking UI',
    description: 'User interface design for an intuitive hotel booking platform.',
    imageUrl: '/images/design/HotelBooking UI 1.png',
    dataAiHint: 'hotel booking mobile',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Travel', 'Booking System'],
    type: 'image',
    imageGallery: [
        '/images/design/HotelBooking UI 1.png',
        '/images/design/HotelBooking UI 2.png',
        '/images/design/HotelBooking UI 3.png'
    ]
  },
  {
    id: 'project-d4',
    title: 'Bank UI',
    description: 'Clean and secure UI design for a digital banking application.',
    imageUrl: '/images/design/Bank UI 1.png',
    dataAiHint: 'banking app mobile',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Fintech', 'Banking'],
    type: 'image',
    imageGallery: [
        '/images/design/Bank UI 1.png',
        '/images/design/Bank UI 2.png',
        '/images/design/Bank UI 3.png'
    ]
  },
  {
    id: 'project-d5',
    title: 'Fitness UI',
    description: 'Engaging user interface for a fitness tracking and workout application.',
    imageUrl: '/images/design/Fitness UI 1.png',
    dataAiHint: 'fitness app mobile',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Health', 'Fitness'],
    type: 'image',
    imageGallery: [
        '/images/design/Fitness UI 1.png',
        '/images/design/Fitness UI 2.png',
        '/images/design/Fitness UI 3.png',
        '/images/design/Fitness UI 4.png'
    ]
  },
  {
    id: 'project-d6',
    title: 'Coffee UI',
    description: 'Aesthetic UI design for a coffee ordering and discovery app.',
    imageUrl: '/images/design/Coffee UI 1.png',
    dataAiHint: 'coffee app mobile',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Food & Drink', 'E-commerce'],
    type: 'image',
    imageGallery: ['/images/design/Coffee UI 1.png']
  },
  {
    id: 'project-d7',
    title: 'Fashion Ecommerce UI',
    description: 'Chic and user-friendly interface for a fashion e-commerce platform.',
    imageUrl: '/images/design/Fashion Ecommerce UI 1.png',
    dataAiHint: 'fashion store online',
    category: 'Design',
    tags: ['UI Design', 'Web App', 'E-commerce', 'Fashion'],
    type: 'image',
    imageGallery: [
        '/images/design/Fashion Ecommerce UI 1.png',
        '/images/design/Fashion Ecommerce UI 2.png',
        '/images/design/Fashion Ecommerce UI 3.png',
        '/images/design/Fashion Ecommerce UI 4.png'
    ]
  },
  {
    id: 'project-d8',
    title: 'Restaurant UI',
    description: 'Appetizing UI design for a restaurant discovery and online ordering application.',
    imageUrl: '/images/design/Restaurant UI 1.png',
    dataAiHint: 'restaurant menu mobile',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Food & Drink', 'Ordering'],
    type: 'image',
    imageGallery: [
        '/images/design/Restaurant UI 1.png',
        '/images/design/Restaurant UI 2.png',
        '/images/design/Restaurant UI 3.png'
    ]
  },
  {
    id: 'project-d9',
    title: 'Taxi UI',
    description: 'User-friendly interface for a modern taxi booking and ride-sharing app.',
    imageUrl: '/images/design/Taxi UI 1.png',
    videoUrl: '/videos/Taxi UI Demo.mp4',
    dataAiHint: 'taxi app ui video',
    category: 'Design',
    tags: ['UI Design', 'Mobile App', 'Transportation', 'Booking', 'Video Demo'],
    type: 'video',
    imageGallery: ['/images/design/Taxi UI 1.png']
  },
];

const otherProjects: Project[] = [
];


export const PROJECTS_DATA: Project[] = [
    ...frontendProjects,
    ...designProjects,
    ...otherProjects
].map(p => ({
    ...p,
    imageUrl: p.imageUrl && (p.imageUrl.startsWith('/') || p.imageUrl.startsWith('http'))
      ? p.imageUrl
      : `https://placehold.co/600x400.png`,
    dataAiHint: p.dataAiHint || 'placeholder image',
    imageGallery: (p.imageGallery && p.imageGallery.length > 0)
      ? p.imageGallery
      : (p.imageUrl && (p.imageUrl.startsWith('/') || p.imageUrl.startsWith('http')) ? [p.imageUrl] : [`https://placehold.co/600x400.png`]),
  }));


export const SOCIAL_LINKS_DATA: SocialLink[] = [
  { name: 'Email', url: 'mailto:Michaeluwakz23@gmail.com', Icon: Mail },
  { name: 'Github', url: 'https://github.com/Michaeluwakz', Icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-uwakwe-70619a217', Icon: Linkedin },
];
  

