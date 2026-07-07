export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "PHP"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "GraphQL (Apollo)"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo", "Tap to Pay (iOS & Android)"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST & GraphQL APIs"],
  },
  {
    label: "AWS & Infra",
    skills: ["AWS", "Docker", "CI/CD (GitHub Actions)", "Vercel"],
  },
  {
    label: "Tooling & Testing",
    skills: ["Jest", "E2E testing (Gherkin/Cucumber)", "Git", "Storybook-style design systems"],
  },
];
