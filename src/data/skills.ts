import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & ML",
    skills: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Federated Learning",
      "Model Evaluation",
      "Data Pipelines",
    ],
  },
  {
    category: "Serving & MLOps",
    skills: [
      "FastAPI",
      "Flask",
      "Docker",
      "GitHub Actions",
      "pytest",
      "SQLAlchemy",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    category: "Product & Web",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Chrome Extensions",
    ],
  },
];

export const skills = skillCategories;
