export interface PersonalDetails {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  status: string;
  experienceYears: string;
  projectsCompleted: string;
  happyClients: string;
  resumeUrl: string;
  avatarUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    twitter?: string;
    instagram?: string;
    discord?: string;
  };
}

export interface SkillCategory {
  id: string;
  label: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'databases' | 'devops' | 'tools';
  iconUrl: string;
  fallbackColor?: string;
  isDarkIcon?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  location: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: 'all' | 'web' | 'fullstack' | 'ai' | 'mobile';
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

export interface VolunteeringItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  impactMetrics?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  iconName: string;
  badge: string;
}
