/**
 * Official Technology Logos Dictionary
 * Filtered to match the exact skills listed on Shree Skanda V's official resume.
 */

export interface SkillLogoInfo {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'databases' | 'devops' | 'tools';
  iconUrl: string;
  fallbackColor: string;
  isDarkIcon?: boolean;
}

export const OFFICIAL_SKILLS: SkillLogoInfo[] = [
  // ================= PROGRAMMING LANGUAGES (User explicit requirement: Java, JavaScript) =================
  {
    name: "Java",
    category: "languages",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    fallbackColor: "#007396",
  },
  {
    name: "JavaScript",
    category: "languages",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    fallbackColor: "#F7DF1E",
  },

  // ================= FRONTEND =================
  {
    name: "React.js",
    category: "frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    fallbackColor: "#61DAFB",
  },
  {
    name: "AngularJS",
    category: "frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    fallbackColor: "#DD0031",
  },
  {
    name: "HTML5",
    category: "frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    fallbackColor: "#E34F26",
  },
  {
    name: "CSS3",
    category: "frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    fallbackColor: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    fallbackColor: "#06B6D4",
  },

  // ================= BACKEND =================
  {
    name: "Node.js",
    category: "backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    fallbackColor: "#339933",
  },
  {
    name: "Express.js",
    category: "backend",
    iconUrl: "https://cdn.simpleicons.org/express/white",
    fallbackColor: "#FFFFFF",
    isDarkIcon: true,
  },
  {
    name: "Spring Boot",
    category: "backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    fallbackColor: "#6DB33F",
  },
  {
    name: "REST APIs",
    category: "backend",
    iconUrl: "https://cdn.simpleicons.org/fastapi/009688",
    fallbackColor: "#009688",
  },

  // ================= DATABASES =================
  {
    name: "MySQL",
    category: "databases",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    fallbackColor: "#4479A1",
  },
  {
    name: "MongoDB",
    category: "databases",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    fallbackColor: "#47A248",
  },
  {
    name: "SQLite",
    category: "databases",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    fallbackColor: "#003B57",
  },

  // ================= DEVOPS & CLOUD =================
  {
    name: "Git",
    category: "devops",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    fallbackColor: "#F05032",
  },
  {
    name: "GitHub",
    category: "devops",
    iconUrl: "https://cdn.simpleicons.org/github/white",
    fallbackColor: "#FFFFFF",
    isDarkIcon: true,
  },
  {
    name: "Postman",
    category: "devops",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    fallbackColor: "#FF6C37",
  },
  {
    name: "Docker",
    category: "devops",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    fallbackColor: "#2496ED",
  },
  {
    name: "Maven",
    category: "devops",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
    fallbackColor: "#C71A36",
  },
  {
    name: "Power BI",
    category: "devops",
    iconUrl: "https://cdn.simpleicons.org/powerbi/F2C811",
    fallbackColor: "#F2C811",
  },
  {
    name: "Tableau",
    category: "devops",
    iconUrl: "https://cdn.simpleicons.org/tableau/E97627",
    fallbackColor: "#E97627",
  },
  {
    name: "DevOps",
    category: "devops",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    fallbackColor: "#0089D6",
  }
];
