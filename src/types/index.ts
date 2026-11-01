export type ProjectStatus = "Live" | "Production" | "Research" | "Archived";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  metrics?: string;
  tags: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featuredInBento?: boolean;
  bentoSpan?: "col-span-1" | "col-span-2";
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  takeaway: string;
  status: "Read" | "Reading";
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  period: string;
  honors?: string;
}
