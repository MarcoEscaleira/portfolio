export const SECTIONS = [
  { id: "home", label: "Home", description: "back to the top" },
  { id: "about", label: "About", description: "who I am" },
  { id: "experience", label: "Experience", description: "where I've worked" },
  { id: "projects", label: "Projects", description: "things I've built" },
  { id: "skills", label: "Skills", description: "tools of the trade" },
  { id: "contact", label: "Contact", description: "say hello" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
