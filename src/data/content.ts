/**
 * All of the text and links shown on the site live in this file.
 * To update the portfolio, edit the values below; no component changes needed.
 */
import type {
  Certification,
  Education,
  Involvement,
  Job,
  Project,
  Service,
  Tool,
} from '../types';

export const PROFILE = {
  fullName: 'Light Agnes Charles',
  firstName: 'Light',
  role: 'Frontend Developer & UI/UX Designer',
  email: 'lightcharles08@gmail.com',
  phones: [
    { label: '0703 440 5288', href: 'tel:+2347034405288' },
    { label: '0813 260 9756', href: 'tel:+2348132609756' },
  ],
  linkedin: 'https://www.linkedin.com/in/light-charles-648a05272',
  linkedinLabel: 'linkedin.com/in/light-charles',
  location: 'Lagos State',
  summary:
    'A result-oriented, meticulous, and excellence-driven individual who seizes every opportunity to advance career prospects, contributes positively to the success of teams, and communicates clearly when planning, organizing, and solving problems.',
};

/** Files in /public are served from the site root, so keep the leading slash. */
export const PROFILE_IMAGE = '/light-charles.jpeg';
export const CV_URL = '/Light-Charles-CV.pdf';

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'tools', label: 'Tools' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const;

export const NAV_IDS: string[] = NAV.map((n) => n.id);

export const HERO_CHIPS = ['UI/UX Design', 'React', 'Figma', 'Power Apps', 'Prototyping'];

export const SERVICES: Service[] = [
  {
    icon: 'code',
    title: 'Frontend Development',
    text: 'Responsive, cross-browser web applications built with HTML, CSS, JavaScript, and React, with API integration and performance in mind.',
  },
  {
    icon: 'pen',
    title: 'UI/UX Design',
    text: 'User research, personas, journey maps, wireframes, and interactive prototypes designed in Figma and turned into clean components.',
  },
  {
    icon: 'workflow',
    title: 'Workflow Automation',
    text: 'Internal business apps and automated workflows built with Microsoft Power Apps and Power Automate to save teams time.',
  },
];

export const PROJECTS: Project[] = [
  {
    icon: 'globe',
    title: 'Intranet Portal',
    role: 'Designed & implemented',
    text: 'A central intranet portal that gives staff one place to reach internal tools and information, built on the Microsoft Power Platform.',
    tags: ['Power Apps', 'Power Automate'],
  },
  {
    icon: 'clipboard',
    title: 'Daily Operations Log Form',
    role: 'Designed & implemented',
    text: 'A structured form for logging daily operations, with Power Automate running the workflow behind every submission.',
    tags: ['Power Apps', 'Power Automate'],
  },
  {
    icon: 'users',
    title: 'CRM Solution',
    role: 'Designed & implemented the frontend',
    text: 'The frontend for a CRM solution, designed and built as a clean, responsive interface for managing customer relationships.',
    tags: ['Frontend', 'UI/UX Design'],
  },
  {
    icon: 'home',
    title: 'Real Estate Website',
    role: 'Designed & implemented',
    text: 'A real estate website designed and built from scratch, with a clean, responsive layout for presenting properties to visitors.',
    tags: ['UI/UX Design', 'Frontend'],
  },
  {
    icon: 'bot',
    title: 'Autonomous AI Agent Website',
    role: 'Designed',
    text: 'A website designed to present an autonomous AI agent product clearly, with a modern layout that explains what the agent does.',
    tags: ['Web Design', 'UI/UX Design'],
  },
  {
    icon: 'clipboardCheck',
    title: 'Vehicle Inspection App',
    role: 'Implemented the frontend',
    text: 'The frontend for a vehicle inspection app, turning inspection workflows into fast, easy-to-use screens.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
];

/** `level` drives the fill height of each pill. Set it to your honest self-assessment. */
export const TOOLS: Tool[] = [
  { name: 'React', short: 'Re', level: 90, bg: '#61DAFB', fg: '#0B3B4A' },
  { name: 'TypeScript', short: 'TS', level: 80, bg: '#3178C6', fg: '#FFFFFF' },
  { name: 'Tailwind CSS', short: 'Tw', level: 90, bg: '#38BDF8', fg: '#0B3B4A' },
  { name: 'Figma', short: 'Fg', level: 85, bg: '#F24E1E', fg: '#FFFFFF' },
  { name: 'Power Apps', short: 'PA', level: 85, bg: '#742774', fg: '#FFFFFF' },
  { name: 'Power Automate', short: 'Au', level: 80, bg: '#0066FF', fg: '#FFFFFF' },
];

export const COMPETENCIES = [
  'Microsoft Suite',
  'Written & verbal communication',
  'Problem-solving',
  'Flexible & adaptable',
];

export const EDUCATION: Education[] = [
  { school: 'National Youth Service Corps (NYSC)', detail: 'National service', year: '2025' },
  {
    school: 'Lagos State Polytechnic',
    detail: 'HND, Computer Science (Distinction)',
    year: '2023',
  },
  { school: 'Micky High School, Osun State', detail: 'SSCE & WAEC', year: '2012' },
];

export const JOBS: Job[] = [
  {
    role: 'Frontend Developer',
    org: 'CapitalCore Outsourcing Limited',
    period: 'Aug 2025 – Present',
    bullets: [
      'Develop and maintain responsive web applications using HTML, CSS, JavaScript, and React.',
      'Translate UI/UX designs from Figma into clean, reusable, and functional components.',
      'Build internal business applications and automate workflows using Microsoft Power Apps and Power Automate.',
      'Integrate APIs and optimize applications for performance, scalability, and cross-browser compatibility.',
      'Debug, test, and collaborate with cross-functional teams to deliver seamless, user-centric solutions.',
    ],
  },
  {
    role: 'Product Design (NYSC Intern)',
    org: 'Transport Service Limited',
    period: 'Jun 2024 – Jun 2025',
    bullets: [
      'Designed and maintained user-friendly interfaces for web applications, ensuring cross-browser compatibility.',
      'Conducted user research, created personas, and mapped user journeys to improve the experience.',
      'Designed wireframes, prototypes, and UI elements in Figma to streamline design processes.',
      'Took part in User Acceptance Testing (UAT), identifying and resolving usability issues.',
      'Documented project requirements, design changes, and user feedback for continuous improvement.',
      'Collaborated with team members to keep design quality consistent across projects.',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Project Management Professional', year: '2025' },
  { title: 'Certified Associate in Project Management', year: '2025' },
];

export const LEADERSHIP: Involvement[] = [
  { title: 'Social Media Manager, Magdas_treat', period: '2023 – Present' },
  { title: 'Volunteer, TEP Outreach to Rural Areas', period: '2022' },
];

export const INTERESTS = [
  'Design',
  'React',
  'UI/UX',
  'Writing',
  'Internet Surfing',
  'Travelling',
  'Content Creation',
  'Project Management',
  'Gaming',
];
