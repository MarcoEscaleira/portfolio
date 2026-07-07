import { About, Contact, Experience, Hero, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex w-full flex-col divide-y divide-border">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
