import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="section-title-box mb-16">
          <h2 className="handwritten text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="glass-card hover-lift overflow-hidden">
            <div className="project-image-container h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Intelts App Screenshot"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="project-image-overlay">
                <div className="project-links">
                  <Link href="#" className="project-link-btn">
                    <Github size={18} /> GitHub
                  </Link>
                  <Link href="#" className="project-link-btn">
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Intelts</h3>
              <p className="mb-4 text-lg">
                This is the app for practicing IELTS and behavioral interview. It generates questions via Gemini API.
              </p>

              <h4 className="text-xl font-bold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Gemini API</span>
                <span className="tech-tag">Speech Recognition</span>
                <span className="tech-tag">Prisma</span>
                <span className="tech-tag">NextAuth.js</span>
              </div>
            </div>
          </div>

          <div className="glass-card hover-lift overflow-hidden">
            <div className="project-image-container h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="My Chat App Screenshot"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="project-image-overlay">
                <div className="project-links">
                  <Link href="#" className="project-link-btn">
                    <Github size={18} /> GitHub
                  </Link>
                  <Link href="#" className="project-link-btn">
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 gradient-text">My Chat App</h3>
              <p className="mb-4 text-lg">
                This is the app for real-time chatting. It allows multiple users to communicate in a group.
              </p>

              <h4 className="text-xl font-bold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Socket.io</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
