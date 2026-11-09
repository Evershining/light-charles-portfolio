export type IconName =
  | 'mail'
  | 'phone'
  | 'pin'
  | 'linkedin'
  | 'arrow'
  | 'arrowUpRight'
  | 'download'
  | 'menu'
  | 'close'
  | 'code'
  | 'pen'
  | 'workflow'
  | 'cap'
  | 'briefcase'
  | 'award'
  | 'users'
  | 'send'
  | 'chevron'
  | 'sparkle'
  | 'globe'
  | 'clipboard'
  | 'clipboardCheck'
  | 'bot'
  | 'home';

export interface Service {
  icon: IconName;
  title: string;
  text: string;
}

export interface Project {
  icon: IconName;
  title: string;
  role: string;
  text: string;
  tags: string[];
  /** Optional public URL. When set, the card shows a "View project" link. */
  link?: string;
}

export interface Tool {
  name: string;
  short: string;
  /** Self-assessed proficiency from 0 to 100. */
  level: number;
  bg: string;
  fg: string;
}

export interface Education {
  school: string;
  detail: string;
  year: string;
}

export interface Job {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  title: string;
  year: string;
}

export interface Involvement {
  title: string;
  period: string;
}
