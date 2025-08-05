"use client"

import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
  Footer,
  Navbar,
} from "@/components/portfolio"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
