export interface SkillGroup {
  category: string;
  dotColor: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Machine Learning & Data",
    dotColor: "#10B981", // Emerald
    description: "Statistical modeling, deep learning architectures, and data engineering.",
    skills: [
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Federated Learning",
      "Model Evaluation",
      "Data Pipelines",
    ],
  },
  {
    category: "Backend & Inference APIs",
    dotColor: "#8B5CF6", // Purple
    description: "High-throughput serving APIs, validation schemas, and database layers.",
    skills: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "pytest",
      "REST APIs",
      "Supabase",
    ],
  },
  {
    category: "Infrastructure & MLOps",
    dotColor: "#0EA5E9", // Sky Blue
    description: "Containerization, automated test pipelines, and continuous deployment.",
    skills: [
      "Docker",
      "GitHub Actions",
      "MLOps Pipelines",
      "CI/CD Automation",
      "Render",
      "Linux Administration",
    ],
  },
  {
    category: "Core Languages & Frontend",
    dotColor: "#111827", // Dark
    description: "Systems programming, client applications, and reactive web interfaces.",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chrome Extensions",
    ],
  },
];

export const skillCategories = skillGroups.map((g) => ({
  category: g.category,
  skills: g.skills,
}));
