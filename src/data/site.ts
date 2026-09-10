export const SITE_URL = "https://bymesc.dev";
export const SITE_NAME = "Marco Escaleira";

export const SITE_TITLE = "Marco Escaleira — Senior Software Engineer | Financial Products";

export const SITE_DESCRIPTION =
  "Marco Escaleira — Senior Software Engineer at Flock with 7+ years building financial and SaaS products across web, mobile, backend, and AWS.";

export const SITE_IMAGE = `${SITE_URL}/marco.jpg`;

export const PERSON_SAME_AS = [
  "https://github.com/MarcoEscaleira",
  "https://www.linkedin.com/in/marco-escaleira00/",
] as const;

export const PERSON_EMAIL = "marcoescaleira2000@gmail.com";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  image: SITE_IMAGE,
  email: PERSON_EMAIL,
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Flock",
    url: "https://flockcover.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  sameAs: [...PERSON_SAME_AS],
  description: SITE_DESCRIPTION,
};
