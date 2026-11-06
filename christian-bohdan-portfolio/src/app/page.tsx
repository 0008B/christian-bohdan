import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Skills } from "@/components/site/skills";
import { Labs } from "@/components/site/labs";
import { Timeline } from "@/components/site/timeline";
import { Certificates } from "@/components/site/certificates";
import { Roadmap } from "@/components/site/roadmap";
import { CoverLetter } from "@/components/site/cover-letter";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Labs />
        <Timeline />
        <Certificates />
        <Roadmap />
        <CoverLetter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
