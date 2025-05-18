"use client"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import Background from "@/components/background"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CareerSection from "@/components/career-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)
  const skillsRef = useRef<HTMLDivElement>(null)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress for progress bar
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)

      // Update active section
      const sections = ["home", "projects", "skills", "career", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Check if skills section is visible
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setSkillsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-mesh">
      <Background />
      <Header activeSection={activeSection} />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection skillsVisible={skillsVisible} skillsRef={skillsRef} />
      <CareerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
