"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Briefcase, Code2, Mail, Pickaxe } from "lucide-react"
import Image from "next/image"

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

      <header className="glass-nav fixed top-0 left-0 w-full px-6 flex justify-between items-center z-40">
        <Link href="#home" className="flex items-center">
          <Image
            src="/icon_clear.png"
            alt="Atsutoshi Honda"
            width={80}
            height={80}
            className="object-contain w-20 h-20 lg:w-[120px] lg:h-[120px]"
          />
        </Link>
        <nav className="flex space-x-6">
          <Link
            href="#home"
            className={`nav-link text-white px-2 py-1 ${activeSection === "home" ? "active-nav" : ""}`}
          >
            <span className="hidden lg:flex text-lg lg:text-xl lg:flex-col lg:items-center">
              <Home className="mb-1 w-5 h-5" />
              Home
            </span>
            <Home className="lg:hidden w-5 h-5" />
          </Link>
          <Link
            href="#projects"
            className={`nav-link text-white px-2 py-1 ${activeSection === "projects" ? "active-nav" : ""}`}
          >
            <span className="hidden lg:flex text-lg lg:text-xl lg:flex-col lg:items-center">
              <Code2 className="mb-1 w-5 h-5" />
              Projects
            </span>
            <Code2 className="lg:hidden w-5 h-5" />
          </Link>
          <Link
            href="#skills"
            className={`nav-link text-white px-2 py-1 ${activeSection === "skills" ? "active-nav" : ""}`}
          >
            <span className="hidden lg:flex text-lg lg:text-xl lg:flex-col lg:items-center">
              <Pickaxe className="mb-1 w-5 h-5" />
              Skills
            </span>
            <Pickaxe className="lg:hidden w-5 h-5" />
          </Link>
          <Link
            href="#career"
            className={`nav-link text-white px-2 py-1 ${activeSection === "career" ? "active-nav" : ""}`}
          >
            <span className="hidden lg:flex text-lg lg:text-xl lg:flex-col lg:items-center">
              <Briefcase className="mb-1 w-5 h-5" />
              Career
            </span>
            <Briefcase className="lg:hidden w-5 h-5" />
          </Link>
          <Link
            href="#contact"
            className={`nav-link text-white px-2 py-1 ${activeSection === "contact" ? "active-nav" : ""}`}
          >
            <span className="hidden lg:flex text-lg lg:text-xl lg:flex-col lg:items-center">
              <Mail className="mb-1 w-5 h-5" />
              Contact
            </span>
            <Mail className="lg:hidden w-5 h-5" />
          </Link>
        </nav>
      </header>
    </>
  )
}
