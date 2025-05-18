import { Calendar, Briefcase } from "lucide-react"

export default function CareerSection() {
  return (
    <section id="career" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="section-title-box mb-16">
          <h2 className="handwritten text-3xl font-bold">Career</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1a9cb3] to-[#1abc9c] rounded-full"></div>

          {/* Timeline items */}
          <div className="timeline-container">
            {/* Item 1 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>2022 - Present</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Senior Full Stack Developer</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Tech Innovations Inc.</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Led the development of multiple web applications using Next.js and React</li>
                  <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Optimized database queries resulting in 30% faster application performance</li>
                </ul>
              </div>
            </div>

            {/* Item 2 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>2019 - 2022</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Full Stack Developer</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Digital Solutions Co.</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Developed and maintained multiple client websites and web applications</li>
                  <li>Created RESTful APIs using Node.js and Express</li>
                  <li>Implemented responsive designs using modern CSS frameworks</li>
                  <li>Collaborated with UX/UI designers to implement user-friendly interfaces</li>
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>2017 - 2019</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Frontend Developer</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>WebCraft Studio</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Built responsive and interactive user interfaces using React</li>
                  <li>Collaborated with backend developers to integrate frontend with APIs</li>
                  <li>Implemented state management using Redux</li>
                  <li>Optimized web performance and loading times</li>
                </ul>
              </div>
            </div>

            {/* Item 4 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>2015 - 2017</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Junior Web Developer</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Creative Tech Labs</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                  <li>Assisted senior developers with various development tasks</li>
                  <li>Created and optimized web graphics and assets</li>
                  <li>Participated in client meetings and requirement gathering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
