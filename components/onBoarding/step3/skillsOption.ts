import type { IconType } from "react-icons";

import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiSharp,
  SiGo,
  SiRust,
  SiPhp,

  // Frontend
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiDotnet,
  SiGraphql,

  // Database
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiPrisma,

  // DevOps / Cloud
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiLinux,
  SiGooglecloud,
  SiVercel,
  SiNetlify,

  // AI / ML
  SiTensorflow,
  SiPytorch,
  SiHuggingface,

  // Mobile
  SiFlutter,
  SiAndroid,
  SiApple,

  // Testing
  SiJest,
  SiCypress,
  SiSelenium,
  SiPostman,

  // Design
  SiFigma,

  // Other
} from "react-icons/si";

import {
  FaCode,
  FaJava,
  FaServer,
  FaCloud,
  FaBrain,
  FaShieldAlt,
  FaBug,
  FaProjectDiagram,
  FaCogs,
  FaNetworkWired,
  FaLock,
  FaPalette,
  FaUsers,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

export interface Skill {
  name: string;
  category: string;
  icon: IconType;
}

export const skills: Skill[] = [
  // ================= PROGRAMMING =================

  {
    name: "JavaScript",
    category: "Programming",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "Programming",
    icon: SiTypescript,
  },
  {
    name: "Python",
    category: "Programming",
    icon: SiPython,
  },
  {
    name: "Java",
    category: "Programming",
    icon: FaJava,
  },
  {
    name: "C++",
    category: "Programming",
    icon: SiCplusplus,
  },
  {
    name: "C#",
    category: "Programming",
    icon: SiSharp,
  },
  {
    name: "Go",
    category: "Programming",
    icon: SiGo,
  },
  {
    name: "Rust",
    category: "Programming",
    icon: SiRust,
  },
  {
    name: "PHP",
    category: "Programming",
    icon: SiPhp,
  },

  // ================= FRONTEND =================

  {
    name: "HTML",
    category: "Frontend",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: SiCss,
  },
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    icon: SiVuedotjs,
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: SiAngular,
  },
  {
    name: "Svelte",
    category: "Frontend",
    icon: SiSvelte,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: SiBootstrap,
  },
  {
    name: "Material UI",
    category: "Frontend",
    icon: SiMui,
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: SiRedux,
  },

  // ================= BACKEND =================

  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
  },
  {
    name: "NestJS",
    category: "Backend",
    icon: SiNestjs,
  },
  {
    name: "Django",
    category: "Backend",
    icon: SiDjango,
  },
  {
    name: "Flask",
    category: "Backend",
    icon: SiFlask,
  },
  {
    name: "FastAPI",
    category: "Backend",
    icon: SiFastapi,
  },
  {
    name: "Spring Boot",
    category: "Backend",
    icon: SiSpringboot,
  },
  {
    name: ".NET",
    category: "Backend",
    icon: SiDotnet,
  },
  {
    name: "REST API",
    category: "Backend",
    icon: FaServer,
  },
  {
    name: "GraphQL",
    category: "Backend",
    icon: SiGraphql,
  },
  {
    name: "WebSockets",
    category: "Backend",
    icon: FaNetworkWired,
  },

  // ================= DATABASE =================

  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
  },
  {
    name: "Redis",
    category: "Database",
    icon: SiRedis,
  },
  {
    name: "Firebase",
    category: "Database",
    icon: SiFirebase,
  },
  {
    name: "Supabase",
    category: "Database",
    icon: SiSupabase,
  },
  {
    name: "Prisma",
    category: "Database",
    icon: SiPrisma,
  },

  // ================= DEVOPS =================

  {
    name: "Git",
    category: "DevOps",
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "DevOps",
    icon: SiGithub,
  },
  {
    name: "GitLab",
    category: "DevOps",
    icon: SiGitlab,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: SiKubernetes,
  },
  {
    name: "Jenkins",
    category: "DevOps",
    icon: SiJenkins,
  },
  {
    name: "Terraform",
    category: "DevOps",
    icon: SiTerraform,
  },
  {
    name: "Linux",
    category: "DevOps",
    icon: SiLinux,
  },

  // ================= CLOUD =================

  {
    name: "AWS",
    category: "Cloud",
    icon: FaCloud,
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    icon: FaCloud,
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: SiGooglecloud,
  },
  {
    name: "Vercel",
    category: "Cloud",
    icon: SiVercel,
  },
  {
    name: "Netlify",
    category: "Cloud",
    icon: SiNetlify,
  },

  // ================= AI / ML =================

  {
    name: "Artificial Intelligence",
    category: "AI / ML",
    icon: FaBrain,
  },
  {
    name: "Machine Learning",
    category: "AI / ML",
    icon: FaBrain,
  },
  {
    name: "Generative AI",
    category: "AI / ML",
    icon: FaBrain,
  },
  {
    name: "Prompt Engineering",
    category: "AI / ML",
    icon: FaLightbulb,
  },
  {
    name: "OpenAI",
    category: "AI / ML",
    icon: FaBrain,
  },
  {
    name: "TensorFlow",
    category: "AI / ML",
    icon: SiTensorflow,
  },
  {
    name: "PyTorch",
    category: "AI / ML",
    icon: SiPytorch,
  },
  {
    name: "Hugging Face",
    category: "AI / ML",
    icon: SiHuggingface,
  },

  // ================= MOBILE =================

  {
    name: "Flutter",
    category: "Mobile",
    icon: SiFlutter,
  },
  {
    name: "Android",
    category: "Mobile",
    icon: SiAndroid,
  },
  {
    name: "iOS",
    category: "Mobile",
    icon: SiApple,
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: SiReact,
  },

  // ================= TESTING =================

  {
    name: "Jest",
    category: "Testing",
    icon: SiJest,
  },
  {
    name: "Cypress",
    category: "Testing",
    icon: SiCypress,
  },
  {
    name: "Playwright",
    category: "Testing",
    icon: FaBug,
  },
  {
    name: "Selenium",
    category: "Testing",
    icon: SiSelenium,
  },
  {
    name: "Postman",
    category: "Testing",
    icon: SiPostman,
  },

  // ================= CYBERSECURITY =================

  {
    name: "Cybersecurity",
    category: "Security",
    icon: FaShieldAlt,
  },
  {
    name: "Ethical Hacking",
    category: "Security",
    icon: FaShieldAlt,
  },
  {
    name: "Penetration Testing",
    category: "Security",
    icon: FaBug,
  },
  {
    name: "Network Security",
    category: "Security",
    icon: FaNetworkWired,
  },
  {
    name: "Web Security",
    category: "Security",
    icon: FaShieldAlt,
  },
  {
    name: "Cryptography",
    category: "Security",
    icon: FaLock,
  },
  {
    name: "OWASP",
    category: "Security",
    icon: FaShieldAlt,
  },

  // ================= DESIGN =================

  {
    name: "UI/UX Design",
    category: "Design",
    icon: FaPalette,
  },
  {
    name: "Figma",
    category: "Design",
    icon: SiFigma,
  },
  {
    name: "Adobe XD",
    category: "Design",
    icon: FaPalette,
  },
  {
    name: "Adobe Photoshop",
    category: "Design",
    icon: FaPalette,
  },
  {
    name: "Adobe Illustrator",
    category: "Design",
    icon: FaPalette,
  },
  {
    name: "Graphic Design",
    category: "Design",
    icon: FaPalette,
  },

  // ================= SOFTWARE ENGINEERING =================

  {
    name: "Data Structures & Algorithms",
    category: "Software Engineering",
    icon: FaProjectDiagram,
  },
  {
    name: "Object-Oriented Programming",
    category: "Software Engineering",
    icon: FaCode,
  },
  {
    name: "System Design",
    category: "Software Engineering",
    icon: FaProjectDiagram,
  },
  {
    name: "Software Architecture",
    category: "Software Engineering",
    icon: FaProjectDiagram,
  },
  {
    name: "Design Patterns",
    category: "Software Engineering",
    icon: FaCogs,
  },

  // ================= TOOLS =================

  {
    name: "VS Code",
    category: "Tools",
    icon: FaCode,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: SiPostman,
  },
  {
    name: "Jira",
    category: "Tools",
    icon: FaProjectDiagram,
  },
  {
    name: "npm",
    category: "Tools",
    icon: FaCode,
  },

  // ================= SOFT SKILLS =================

  {
    name: "Communication",
    category: "Soft Skills",
    icon: FaComments,
  },
  {
    name: "Leadership",
    category: "Soft Skills",
    icon: FaUsers,
  },
  {
    name: "Teamwork",
    category: "Soft Skills",
    icon: FaUsers,
  },
  {
    name: "Problem Solving",
    category: "Soft Skills",
    icon: FaLightbulb,
  },
  {
    name: "Critical Thinking",
    category: "Soft Skills",
    icon: FaLightbulb,
  },
];