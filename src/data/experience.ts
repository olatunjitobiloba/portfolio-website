import { ExperienceItem, Education } from "@/types";

export const engineeringExperience: ExperienceItem[] = [
  {
    role: "IT Intern",
    organization: "Union Bank of Nigeria",
    period: "Aug 2026 – Present",
    description:
      "Enterprise IT placement supporting core banking infrastructure, enterprise network administration, internal developer tooling, and automated operational scripts across production banking environments.",
    tags: ["Core Banking", "Systems Administration", "Network Infrastructure", "Automation"],
  },
  {
    role: "HVAC IoT & Building Monitoring Intern",
    organization: "HVAC Solutions Nigeria",
    period: "Aug 2024 – Sep 2024",
    description:
      "Engineered AutoCAD schematics, embedded sensor telemetry pipelines, and a real-time alert daemon for commercial building climate optimization and thermal anomaly detection.",
    tags: ["IoT", "AutoCAD", "Telemetry", "Embedded Systems"],
  },
  {
    role: "SWEP Workshop Engineering Lead",
    organization: "Covenant University",
    period: "Jun 2025 – Aug 2025",
    description:
      "Directed hardware assembly, multidisciplinary safety compliance, 3D CAD modeling in Fusion 360, and technical reporting for sustainable waste biodigester engineering systems.",
    tags: ["CAD", "Fusion 360", "Hardware Engineering", "Safety Compliance"],
  },
];

export const leadershipExperience: ExperienceItem[] = [
  {
    role: "Technical Crew Head of Graphics",
    organization: "Covenant University Technical Crew",
    period: "Sep 2024 – Jun 2025",
    description:
      "Directed visual systems, live stream broadcast graphics, and creative asset pipelines for flagship university assemblies and live programmes reaching 5,000+ simultaneous viewers.",
    tags: ["Live Production", "Graphics Systems", "Broadcasting", "Visual Design"],
  },
  {
    role: "Technical Crew In-Charge",
    organization: "Covenant University Technical Crew",
    period: "Jun 2025 – Jul 2026",
    description:
      "Managed operations and mission-critical audio/visual equipment logistics for a 150+ member technical team; built structured onboarding frameworks for 50+ new recruits.",
    tags: ["Operations", "Leadership", "Team Logistics", "Mentorship"],
  },
];

export const education: Education = {
  degree: "B.Eng. in Computer Engineering",
  institution: "Covenant University",
  cgpa: "4.83 / 5.0",
  period: "2023 – Expected 2028",
  honors: "Chancellor's List, High Honors",
};
