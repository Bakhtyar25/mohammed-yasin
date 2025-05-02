import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import DeveloperAdvisory from "@/components/developer-advisory"
import AdvisoryProjects from "@/components/advisory-projects"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DeveloperAdvisory />
      <AdvisoryProjects />
      <Contact />
    </main>
  )
}
