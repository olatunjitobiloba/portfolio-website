import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "loan-prediction-api",
    title: "Loan Prediction API (v7.0)",
    category: "ML Inference API & Serving",
    description:
      "Loan approval prediction API with explainable results serving Random Forest loan qualification decisions with 88.62% accuracy and 31 automated tests passing.",
    status: "Live",
    metrics: "88.62% Accuracy · 31 Tests Passing · 4 Models Compared",
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
      "Automated end-to-end model evaluation and CI pipeline with GitHub Actions CI/CD, lint checks, test suites, and Docker containerization.",
    status: "Research",
    metrics: "Automated CI/CD · Dockerized · Pytest Suite",
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
    category: "AI Productivity OS & Extension",
    description:
      "AI-powered productivity operating system and Chrome extension that detects distraction patterns in real-time, features adaptive focus flow sessions, and syncs telemetry to Supabase.",
    status: "Live",
    metrics: "Real-time behavioral signal collection · 49 tests passing",
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
      "Live event engagement platform built for 250+ simultaneous attendees with real-time raffle, audience polling, and protected admin controls.",
    status: "Archived",
    metrics: "253 Concurrent Users · Real-time Raffle",
    tags: ["React", "Supabase", "WebSockets", "High Concurrency"],
    image: "/images/heroes-conference.png",
    links: {
      github: "https://github.com/olatunjitobiloba",
      demo: "https://heroesconference26.vercel.app",
    },
  },
];
