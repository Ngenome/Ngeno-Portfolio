// types.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    playStore?: string;
    appStore?: string;
  };
  category: "ai" | "web" | "mobile" | "all" | "design" | "backend";
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  mode: string;
  logo?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: React.ComponentType;
  category:
    | "ai"
    | "web"
    | "mobile"
    | "cloud"
    | "other"
    | "frontend"
    | "design"
    | "backend";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType;
}
