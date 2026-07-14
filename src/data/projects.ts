export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  built: string;
  stack: string[];
  outcome: string;
  links: {
    live?: string;
    repo?: string;
    repoBackend?: string;
    repoMobile?: string;
    company?: string;
  };
  flagship?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    slug: "yetipay-merchant-app",
    title: "yetipay Merchant App",
    tagline: "Tap to Pay on your phone — no extra hardware required.",
    problem: "Small merchants need to take card payments without buying extra hardware.",
    built:
      "A React Native merchant app with Tap to Pay on both iPhone and Android, plus card reader integration for merchants who want it. It's backed by an AWS payments platform underneath. This is my day job at yetipay, and it's live in merchants' hands.",
    stack: ["React Native", "TypeScript", "iOS/Android Tap to Pay", "AWS"],
    outcome:
      "A live, in-production payments platform merchants use today to take card payments straight from their phone.",
    links: {
      company: "https://yetipay.me",
    },
    flagship: true,
  },
  {
    slug: "meet-the-countries",
    title: "Meet The Countries",
    tagline: "One product, three codebases, zero excuses.",
    problem: "Wanted to prove I could own a full product end to end — web, API, and mobile — not just one layer of it.",
    built:
      "A full-stack side project spanning a TypeScript/React frontend, a Node/Express/GraphQL/MongoDB backend running in Docker, and a React Native/Expo mobile app. All three share the same product vision, with CI/CD pipelines and Gherkin-driven E2E tests keeping everything honest.",
    stack: ["TypeScript", "React", "Node.js", "Express", "GraphQL", "MongoDB", "Docker", "React Native", "Expo"],
    outcome:
      "A shipped, live product across web and mobile, with automated tests and pipelines doing the boring work for me.",
    links: {
      live: "https://meetthecountries.com",
      repo: "https://github.com/MarcoEscaleira/meetthecountries-frontend",
      repoBackend: "https://github.com/MarcoEscaleira/meetthecountries-backend",
      repoMobile: "https://github.com/MarcoEscaleira/meetthecountries-mobile",
    },
  },
  {
    slug: "motojoy",
    title: "MotoJoy",
    tagline: "Where I started — and I'm not embarrassed about it.",
    problem: "Learning how a real e-commerce store actually works: storefront, cart, checkout, backoffice, all of it.",
    built:
      "A PHP, jQuery, and Bootstrap e-commerce site with a storefront, shopping cart, backoffice for managing it all, and PayPal integration for actual payments. It's not fancy by today's standards, and that's exactly the point.",
    stack: ["PHP", "jQuery", "Bootstrap", "PayPal"],
    outcome: "My first real end-to-end build — the project that taught me most of what came after.",
    links: {
      repo: "https://github.com/MarcoEscaleira/motojoy",
    },
  },
  {
    slug: "should-you-do-it",
    title: "shouldYouDoIt",
    tagline: "Can't decide? Let the app decide for you.",
    problem: "Sometimes you just need something to make the call for you.",
    built:
      "A tiny, playful TypeScript app that makes decisions so you don't have to. No accounts, no config, just an answer.",
    stack: ["TypeScript"],
    outcome: "A small, fun, live tool that does exactly one thing and does it with a smile.",
    links: {
      repo: "https://github.com/MarcoEscaleira/shouldyoudoit",
      live: "https://shouldyoudoit.surge.sh/",
    },
  },
];
