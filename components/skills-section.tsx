"use client"

import { useRef, useState, useEffect } from "react"

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if skills section is visible
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setSkillsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to check initial visibility
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="skills" className="py-24 px-4 md:px-8" ref={skillsRef}>
      <div className="container mx-auto">
        <div className="section-title-box mb-16">
          <h2 className="handwritten text-3xl font-bold">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card hover-lift p-8">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Frontend</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">HTML/CSS</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "90%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">JavaScript/TypeScript</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "85%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">React</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "90%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Next.js</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "85%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Tailwind CSS</span>
                  <span className="text-sm">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "95%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Material UI</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "80%" : "0%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card hover-lift p-8">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Backend</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Node.js</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "85%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Express</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "80%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">MongoDB</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "75%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">PostgreSQL</span>
                  <span className="text-sm">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "70%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Firebase</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "80%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Prisma</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "85%" : "0%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card hover-lift p-8">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Others</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Git/GitHub</span>
                  <span className="text-sm">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "90%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Docker</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "75%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">AWS</span>
                  <span className="text-sm">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "70%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Vercel</span>
                  <span className="text-sm">95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "95%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">CI/CD</span>
                  <span className="text-sm">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "80%" : "0%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Agile/Scrum</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: skillsVisible ? "85%" : "0%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
