export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Core",
    skills: ["TypeScript", "React", "React Native", "Node.js", "GraphQL"],
  },
  {
    label: "AWS & Cloud",
    skills: ["Lambda", "EventBridge", "CloudWatch", "Cognito", "Serverless", "Docker", "Microservices"],
  },
  {
    label: "Data",
    skills: ["SQL", "MongoDB", "DynamoDB"],
  },
  {
    label: "Delivery & Quality",
    skills: ["CI/CD", "E2E Testing", "Monorepo Architecture", "Git", "Agile"],
  },
  {
    label: "Craft",
    skills: ["Design Systems", "AI-assisted engineering"],
  },
];
