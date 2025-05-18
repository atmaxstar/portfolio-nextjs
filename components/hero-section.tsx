"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Mail, Download, ArrowDown, Home } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 px-4 md:px-8 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-up">
            <h2 className="handwritten text-4xl font-bold mb-2 animate-fade-up">FULL-STACK WEB DEVELOPER</h2>
            <h1 className="text-6xl font-bold mb-6 gradient-text animate-fade-up animate-delay-200">Atsutoshi Honda</h1>
            <p className="text-xl mb-6 leading-relaxed animate-fade-up animate-delay-300">
              Software engineering with a passion for developing software that solves people's problems. Will bring
              experience in web development, dedicated to improving UX with an emphasis on system performance and
              intuitive usability.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
              <Link href="#projects" className="btn-primary flex items-center">
                View Projects <ChevronRight size={18} className="ml-1" />
              </Link>
              <Link href="#contact" className="btn-primary flex items-center">
                Contact Me <Mail size={18} className="ml-1" />
              </Link>
              <a href="/Atsutoshi_Honda_Resume.pdf" download className="btn-secondary flex items-center">
                Download Resume <Download size={18} className="ml-1" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center animate-fade-up animate-delay-500">
            <div className="profile-image-container">
              <div className="profile-image-bg"></div>
              <div className="profile-image">
                <Image
                  src="/5741.jpg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="scroll-indicator">
          <span className="scroll-indicator-text">Scroll Down</span>
          <ArrowDown size={20} className="mb-2 text-[#1a9cb3]" />
          <div className="scroll-indicator-line"></div>
        </div> */}
      </div>
    </section>
  )
}
