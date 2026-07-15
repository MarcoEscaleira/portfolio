import { About, Contact, Experience, Hero, Metrics, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex w-full flex-col divide-y divide-border">
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
