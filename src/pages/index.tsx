import { About, Contact, Hero, Skills } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex w-full flex-col divide-y divide-border">
      <Hero />
      <About />
      {/* Projects and Experience sections are inserted here by a later task */}
      <Skills />
      <Contact />
    </div>
  );
}
