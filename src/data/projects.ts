import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "loan-prediction-api",
    title: "Loan Prediction API (v7.0)",
    category: "ML Inference API & Serving",
    description:
      "Real-time credit intelligence and autonomous underwriting engine serving Random Forest and ensemble loan qualification decisions with 88.62% accuracy, sub-180ms latency, and 100% pytest coverage.",
    status: "Live",
    metrics: "88.62% Accuracy · 100% Pytest · 4-Model Ensemble Suite",
    tags: ["Flask", "scikit-learn", "pytest", "Docker", "Render"],
    image: "/images/loan-api.png",
    links: {
      github: "https://github.com/olatunjitobiloba/loan-predictor-api",
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
    title: "FocusPilot (OS v2.4)",
    category: "AI Productivity OS & Extension",
    description:
      "AI-powered behavioral productivity operating system and Chrome extension that learns your cognitive fingerprint, predicts procrastination in real-time, and adaptively protects deep flow state.",
    status: "Live",
    metrics: "Cognitive Fingerprint ML · Real-Time Telemetry",
    tags: ["FastAPI", "React", "Chrome Extension", "Supabase", "Tailwind CSS"],
    image: "/images/focuspilot.png",
    links: {
      github: "https://github.com/olatunjitobiloba/FocusPilot",
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
