import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "loan-prediction-api",
    title: "Loan Prediction API",
    category: "ML Inference API & Serving",
    description:
      "Production Flask API serving Random Forest loan qualification decisions with automated data validation, 88.6% model accuracy, and complete pytest coverage.",
    status: "Live",
    metrics: "88.6% Accuracy · pytest 100% pass · Live on Render",
    tags: ["Flask", "scikit-learn", "pytest", "Docker", "Render"],
    image: "/images/loan-api.png",
    links: {
      github: "https://github.com/olatunjitobiloba",
      live: "https://loan-predictor-api-91xu.onrender.com/app",
    },
    featuredInBento: true,
    bentoSpan: "col-span-2",
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Automated Pipeline",
    category: "MLOps & CI/CD",
    description:
      "Automated end-to-end model evaluation and deployment pipeline with GitHub Actions CI/CD, lint checks, test suites, and Docker containerization.",
    status: "Production",
    metrics: "Automated CI/CD · Dockerized · Zero manual deploys",
    tags: ["GitHub Actions", "Docker", "pytest", "MLOps", "Python"],
    image: "/images/mlops.png",
    links: {
      github: "https://github.com/olatunjitobiloba/MLOps-Pipeline",
    },
    featuredInBento: true,
    bentoSpan: "col-span-1",
  },
  {
    id: "focuspilot",
    title: "FocusPilot",
    category: "AI Product & Chrome Extension",
    description:
      "Focus and distraction management extension for developers and students with real-time Supabase cloud sync and telemetry tracking.",
    status: "Live",
    metrics: "Real-time sync · Active user base",
    tags: ["Chrome API", "Supabase", "JavaScript", "Product"],
    image: "/images/focuspilot.png",
    links: {
      github: "https://github.com/olatunjitobiloba",
      live: "https://focuspilot.vercel.app",
    },
    featuredInBento: true,
    bentoSpan: "col-span-1",
  },
  {
    id: "fedrec",
    title: "FedRec Decentralized Recommender",
    category: "Federated Learning & Privacy ML",
    description:
      "Privacy-preserving recommendation engine research project using decentralized training across edge nodes without exposing raw user data.",
    status: "Research",
    metrics: "Federated Learning · Privacy-First",
    tags: ["Python", "Federated Learning", "PyTorch", "NumPy"],
    image: "/images/fedrec.png",
    links: {
      github: "https://github.com/olatunjitobiloba/FedRec-Privacy-First-Recommendation-Engine",
    },
    featuredInBento: true,
    bentoSpan: "col-span-2",
  },
  {
    id: "finsight-ai",
    title: "FinSight AI",
    category: "Fintech & Financial Assistant",
    description:
      "Financial planning and analysis platform tailored for the Nigerian economic environment, providing transaction categorisation and predictive insights.",
    status: "Live",
    metrics: "Nigerian Market Focus · FastAPI Backend",
    tags: ["FastAPI", "React", "AI Assistant", "Fintech"],
    image: "/images/finsight.png",
    links: {
      github: "https://github.com/olatunjitobiloba",
      live: "https://finsightng.vercel.app/",
    },
  },
  {
    id: "heroes-conference",
    title: "Heroes Conference '26 Platform",
    category: "High-Concurrency Live Event Platform",
    description:
      "Live event engagement platform built for 500+ simultaneous attendees with real-time raffle, audience polling, and protected admin controls with 100% uptime.",
    status: "Archived",
    metrics: "500+ Concurrent Users · Zero Downtime",
    tags: ["React", "Supabase", "WebSockets", "High Concurrency"],
    image: "/images/heroes-conference.png",
    links: {
      github: "https://github.com/olatunjitobiloba",
      demo: "https://heroesconference26.vercel.app",
    },
  },
];
