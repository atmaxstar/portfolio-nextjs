import { Calendar, Briefcase } from "lucide-react"

export default function CareerSection() {
  return (
    <section id="career" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="section-title-box mb-16">
          <h2 className="handwritten text-3xl font-bold flex items-center">
            <Briefcase className="mr-2" size={28} />
            Experience
          </h2>
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
                  <span>March 2025 - Present</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Software Engineer Intern</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Sairai Inc. | Remote, Japan</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Improved the candidate-job skill matching system by implementing asynchronous processing with asynq, reducing the wait time for individual match evaluations (previously 15 seconds) and enabling batch processing of multiple matches simultaneously</li>
                  <li>Contributed to feature development and system enhancements using Go for the backend and Next.js for the frontend</li>
                </ul>
              </div>
            </div>

            {/* Item 2 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>September 2024 - February 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Software Engineer Intern</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Hexabase | Remote, Japan</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Created an API that returns meeting minutes in a .txt file based on an mp4 of the meeting, using Python, Google Cloud Functions, and the Whisper API</li>
                  <li>Developed a Slack bot using Google Apps Script and the OpenAI API, which allows users to generate questions and answers for IT certification exams in Japan and dive deeper into explanations by asking the AI for clarifications</li>
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>August 2024 - September 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Frontend Engineer Intern</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Askul Corporation | Remote, Japan</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Worked on the modification of an e-commerce site with an annual revenue of 12.76 billion NZD, using Kotlin and TypeScript</li>
                  <li>Performed front-end modifications under a system structured with Clean Architecture, where the front-end was built with Thymeleaf</li>
                </ul>
              </div>
            </div>

            {/* Item 4 */}
            <div className="timeline-item">
              <div className="timeline-content glass-card hover-lift">
                <div className="timeline-date">
                  <Calendar className="mr-2" size={18} />
                  <span>September 2022 - June 2024</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">Web Developer Intern</h3>
                <h4 className="text-xl mb-4 flex items-center">
                  <Briefcase className="mr-2" size={18} />
                  <span>Camellia Planner | Nagoya, Japan</span>
                </h4>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Contributed to full-stack software development proactively pursuing and implementing suitable technologies and best practices into products</li>
                  <li>Implemented responsive design and reduced unnecessary rendering by 40% by organizing dependencies using memo and redux in multifunctional dashboard app using React.js</li>
                  <li>Orchestrated the implementation of user login with JWT authentication and interfaces to retrieve CSV files on facility and patient information in the development of a therapy facilities management API using Spring Boot</li>
                  <li>Proactively communicate with the boss to ensure that design errors do not occur</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
