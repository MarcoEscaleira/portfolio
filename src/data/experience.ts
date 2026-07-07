// Highlights are sourced from Marco's CV summary and are pending Marco's review.
// TODO(marco): fill exact dates
export interface Experience {
  company: string;
  role: string;
  location?: string;
  period: string;
  highlights: string[];
  url?: string;
}

export const experience: Experience[] = [
  {
    company: "yetipay",
    role: "Software Engineer",
    location: "London, UK",
    period: "Current",
    highlights: [
      "Built the Tap-to-Pay merchant app for iPhone and Android with React Native",
      "Made CI/CD pipelines ~10x faster",
      "Design-system work across the product",
      "On-call for a live payments platform",
    ],
    url: "https://yetipay.me",
  },
  {
    company: "Beacon",
    role: "Software Engineer",
    period: "",
    highlights: ["Improved page-load performance by ~50%"],
  },
  {
    company: "Mindera",
    role: "Software Engineer",
    period: "",
    highlights: ["React product work", "Defined an end-to-end testing strategy using Gherkin/Cucumber-style E2E tests"],
  },
  {
    company: "Mindera Academy",
    role: "Mentor/Teacher",
    period: "",
    highlights: ["Taught and mentored aspiring developers"],
  },
  {
    company: "FMUP (Faculty of Medicine, University of Porto)",
    role: "Early-career developer",
    period: "",
    highlights: ["First steps as a developer, doing web work for the faculty"],
  },
];
