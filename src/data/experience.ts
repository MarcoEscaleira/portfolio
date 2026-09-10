// Highlights are sourced from Marco's CV summary and are pending Marco's review.
export interface Experience {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
  url?: string;
  currentRole?: boolean;
}

export const experience: Experience[] = [
  {
    company: "Flock",
    role: "Senior Software Engineer",
    location: "London, UK",
    period: "Sep 2026 – Present",
    currentRole: true,
    highlights: [
      "Joined the engineering team building connected fleet insurance designed to reduce risk and help keep drivers safer",
    ],
    url: "https://flockcover.com",
  },
  {
    company: "yetipay",
    role: "Fullstack Engineer",
    location: "London, UK",
    period: "Sep 2024 – Sep 2026",
    highlights: [
      "Built the React Native merchant app from scratch — Tap to Pay on iPhone and Android, unlocking new payment capabilities for merchants",
      "Designed and implemented backend APIs powering production payment flows",
      "Owned and maintained AWS infrastructure for a live payments platform",
      "Operated production systems: on-call rotations, incident response, and debugging live issues",
      "Built scalable internal architecture shared across product surfaces",
      "Partnered closely with Design and Product to ship customer-facing features",
      "Introduced an automated E2E testing strategy that raised release confidence",
      "Cut CI/CD runtime by ~10×, unblocking faster iteration across the team",
      "Grew a reusable design system that improved engineering velocity",
    ],
    url: "https://yetipay.me",
  },
  {
    company: "Beacon",
    role: "Software Engineer",
    location: "London, UK",
    period: "Mar 2022 – Aug 2024",
    highlights: [
      "Designed a future-proof architecture for the core shipment-tracking feature",
      "Integrated Chromatic visual testing so UI stayed consistent across releases",
      "Improved page-load performance by ~50% for a lighter, faster app on devices",
      "Built PoCs that helped steer key product decisions",
      "Built a backoffice app that became part of Ops workflows and automated BAU work",
      "Joined on-call rotations — supported production systems and resolved live incidents",
    ],
  },
  {
    company: "Mindera Academy",
    role: "Front End Teacher",
    location: "Remote · alongside Beacon",
    period: "Jun 2023 – Dec 2023",
    highlights: [
      "Built and delivered Front End 101 lesson plans for aspiring developers",
      "Created learning resources — reading materials and coding exercises",
      "Ran live coding sessions tying concepts to real-world product work",
    ],
  },
  {
    company: "Mindera",
    role: "Software Engineer",
    location: "Porto, Portugal · TVG / FanDuel",
    period: "Sep 2019 – Mar 2022",
    highlights: [
      "Implemented a monorepo with custom tooling and CI/CD that improved team delivery efficiency",
      "Owned a challenging TVG / FanDuel project spanning micro-frontends and mobile apps — React, React Native, Redux, GraphQL",
      "Led and assisted in technical interviews",
    ],
  },
  {
    company: "FMUP (Faculty of Medicine, University of Porto)",
    role: "Early-career developer",
    period: "May 2018 – Jul 2018",
    highlights: ["First professional steps — web work that served faculty staff and students"],
  },
];
