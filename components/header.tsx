"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#1a9cb3] to-[#1abc9c]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="glass-nav fixed top-0 left-0 w-full p-4 flex justify-between items-center z-40">
        <h1 className="text-white text-2xl font-bold">
          <span className="handwritten">Atsutoshi Honda</span>
        </h1>
        <nav className="flex space-x-6">
          <Link
            href="#home"
            className={`nav-link text-white px-2 py-1 ${activeSection === "home" ? "active-nav" : ""}`}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className={`nav-link text-white px-2 py-1 ${activeSection === "projects" ? "active-nav" : ""}`}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className={`nav-link text-white px-2 py-1 ${activeSection === "skills" ? "active-nav" : ""}`}
          >
            Skills
          </Link>
          <Link
            href="#career"
            className={`nav-link text-white px-2 py-1 ${activeSection === "career" ? "active-nav" : ""}`}
          >
            Career
          </Link>
          <Link
            href="#contact"
            className={`nav-link text-white px-2 py-1 ${activeSection === "contact" ? "active-nav" : ""}`}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  )
}
