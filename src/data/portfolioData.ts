import { PersonalDetails, SkillCategory, SkillItem, ExperienceItem, EducationItem, ProjectItem, VolunteeringItem, AchievementItem } from '../types';
import { OFFICIAL_SKILLS } from './skillLogos';

/**
 * =========================================================================
 * EDITABLE PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Central configuration matching Shree Skanda V's official resume.
 */

export const personalDetails: PersonalDetails = {
  // Personal & Hero Info
  name: "Shree Skanda V",
  title: "Full Stack Web Developer",
  tagline: "Building sleek web architectures, scalable backend services, and interactive user interfaces.",
  bio: "Passionate Full Stack Web Developer focused on building modern web applications, creative UI/UX designs, and AI-powered digital experiences with real-world project expertise.",
  shortBio: "Building modern web applications with React.js, Java, JavaScript, Node.js, and database ecosystems.",
  location: "Bangalore, India",
  status: "Available for work",
  experienceYears: "",
  projectsCompleted: "10+",
  happyClients: "5+",
  resumeUrl: "/Shree_Skanda_V_ISE_CEC.pdf",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  
  // Social & Contact Links
  socials: {
    linkedin: "https://linkedin.com/in/shree-skanda-v-67b5bb332",
    github: "https://github.com/Skanda273",
    instagram: "https://www.instagram.com/skanda0503/",
    twitter: "",
    email: "shreeskanda2704@gmail.com",
    phone: "+91 9019827365",
  }
};

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering in Information Science and Engineering",
    institution: "City Engineering College | Bangalore",
    period: "2023 - 2027",
    location: "Bangalore, India",
    description: "Current CGPA: 8.51. Core focus on data structures, algorithms, full-stack web development, software engineering, and database management systems."
  }
];

export const skillCategories: SkillCategory[] = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "devops", label: "DevOps & Cloud" },
];

/**
 * SKILLS DATA LIST - Exactly matching user's resume:
 * Languages: Java, JavaScript
 * Frontend: React.js, AngularJS, HTML5, CSS3, Tailwind CSS
 * Backend: Node.js, Express.js, Spring Boot, REST APIs
 * Databases: MySQL, MongoDB, SQLite
 * DevOps & Cloud: Git, GitHub, Postman, Docker, Maven, Power BI, Tableau, DevOps
 */
export const skillsData: SkillItem[] = OFFICIAL_SKILLS;

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "Prodigy Infotech",
    companyLogo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=120&q=80",
    period: "Feb 2026 - May 2026",
    location: "Internship",
    description: "Developed responsive full-stack web applications and scalable REST APIs using modern JavaScript frameworks and databases.",
    keyPoints: [
      "Developed 5+ responsive full-stack web applications using React.js, AngularJS, Node.js, Express.js, and MongoDB.",
      "Built 15+ REST APIs, implemented CRUD operations, and integrated MongoDB for efficient data management.",
      "Used Git and GitHub for version control, managing 100+ commits and maintaining collaborative development workflows."
    ],
    technologies: ["React.js", "AngularJS", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"]
  },
  {
    id: "exp-2",
    role: "Data Science And Data Analytics Intern",
    company: "Cognifyz Technologies",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80",
    period: "Jan 2026 - Feb 2026",
    location: "Internship",
    description: "Executed exploratory data analysis, data cleaning, and business visualization across multiple datasets.",
    keyPoints: [
      "Performed Data Cleaning, EDA, and Data Visualization on 5+ datasets.",
      "Built 5+ interactive dashboards using Power BI and Tableau for business insights."
    ],
    technologies: ["Python", "Pandas", "Scikit-Learn", "Power BI", "Tableau"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "Machine Learning Based Financial Fraud Detection System",
    description: "Machine Learning-based system for Credit Card, Debit Card, and UPI Fraud Detection achieving 92%+ prediction accuracy.",
    longDescription: "Integrated React.js, Node.js, Flask, and MongoDB to process 1,000+ simulated transactions for real-time fraud analysis. Implemented Random Forest, SVM, and AdaBoost models, improving fraud detection performance by 18% over baseline models.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    category: "ai",
    technologies: ["React.js", "Node.js", "Express.js", "Python", "Flask", "MongoDB", "Random Forest", "SVM"],
    githubUrl: "https://github.com/Skanda273",
    demoUrl: "https://github.com/Skanda273",
    featured: true
  },
  {
    id: "project-2",
    title: "Parking Slot Manager",
    description: "Parking Slot Management System built with Java, Spring Boot, and MySQL with secure REST API integration.",
    longDescription: "Developed a robust Parking Slot Management System implementing CRUD operations, real-time slot allocation, and vehicle management. Built REST APIs with secure database integration for efficient parking management.",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80",
    category: "fullstack",
    technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "REST APIs", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Skanda273",
    demoUrl: "https://github.com/Skanda273",
    featured: true
  }
];

export const volunteeringData: VolunteeringItem[] = [];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Generative AI for Software Development",
    issuer: "DeepLearning.AI (Coursera)",
    date: "Jul 2026",
    description: "Certified in building software applications with Generative AI tools and LLM integrations.",
    iconName: "Award",
    badge: "Certified"
  },
  {
    id: "ach-2",
    title: "Java Full Stack Web Development",
    issuer: "Parvam ConsulTech Pvt Ltd",
    date: "Nov 2025",
    description: "Full stack Java development certification covering Spring Boot, Hibernate, MySQL, and React.",
    iconName: "Award",
    badge: "Certified"
  },
  {
    id: "ach-3",
    title: "Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise (Forage)",
    date: "Feb 2026",
    description: "Completed practical software engineering simulation tasks at HPE.",
    iconName: "Star",
    badge: "Completed"
  },
  {
    id: "ach-4",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    date: "Jan 2026",
    description: "Validated proficiency in enterprise AI solutions and Microsoft cloud AI architectures.",
    iconName: "Star",
    badge: "Certified"
  }
];
