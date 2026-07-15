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
    tagline: "New payment capabilities for merchants — no extra hardware required.",
    problem:
      "Small merchants needed to take card payments without buying dedicated hardware, limiting how they could grow revenue.",
    built:
      "Merchant-facing Tap to Pay on iPhone and Android, plus card reader support for those who want it. Designed the backend services and AWS platform underneath so payments stay reliable in production. Day job at yetipay — live in merchants' hands.",
    stack: ["React Native", "TypeScript", "iOS/Android Tap to Pay", "Node.js", "AWS"],
    outcome:
      "A production payments product merchants use today — new revenue opportunities without extra hardware, backed by scalable backend services.",
    links: {
      company: "https://yetipay.me",
    },
    flagship: true,
  },
  {
    slug: "meet-the-countries",
    title: "Meet The Countries",
    tagline: "One product vision — web, API, and mobile — owned end to end.",
    problem:
      "Wanted proof of owning a full product across every layer, not just one surface — and shipping it with the same discipline as production work.",
    built:
      "A full-stack product spanning a TypeScript/React web app, a Node/Express/GraphQL/MongoDB API in Docker, and a React Native/Expo mobile app. CI/CD and Gherkin-driven E2E tests keep releases honest across all three.",
    stack: ["TypeScript", "React", "Node.js", "Express", "GraphQL", "MongoDB", "Docker", "React Native", "Expo"],
    outcome:
      "A live product across web and mobile, with automated tests and pipelines carrying the operational load — end-to-end ownership from idea to ship.",
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
    tagline: "Where I learned how a real store actually works.",
    problem:
      "Needed to understand the full commerce loop — storefront, cart, checkout, and backoffice — by building one that could take real payments.",
    built:
      "An e-commerce site with storefront, shopping cart, admin backoffice, and PayPal checkout. PHP, jQuery, and Bootstrap — not fancy by today's standards, and that's the point.",
    stack: ["PHP", "jQuery", "Bootstrap", "PayPal"],
    outcome:
      "A working end-to-end commerce flow that taught the fundamentals everything since has built on.",
    links: {
      repo: "https://github.com/MarcoEscaleira/motojoy",
    },
  },
  {
    slug: "should-you-do-it",
    title: "shouldYouDoIt",
    tagline: "Can't decide? Let the app make the call.",
    problem: "Sometimes you need a tiny tool that removes decision friction — no accounts, no setup.",
    built: "A playful TypeScript app that answers yes-or-no so you don't have to. One job, done with a smile.",
    stack: ["TypeScript"],
    outcome: "A live, zero-friction decision helper that does exactly one thing well.",
    links: {
      repo: "https://github.com/MarcoEscaleira/shouldyoudoit",
      live: "https://shouldyoudoit.surge.sh/",
    },
  },
];
