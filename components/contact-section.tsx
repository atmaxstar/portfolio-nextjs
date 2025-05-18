import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="section-title-box mb-16">
          <h2 className="handwritten text-3xl font-bold">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Get In Touch</h3>
            <p className="text-xl mb-10 leading-relaxed">
              Feel free to contact me for project inquiries or any questions you might have. I'm always open to new
              opportunities and collaborations.
            </p>

            <div className="space-y-6 mb-10">
              <div className="contact-icon-box">
                <Mail className="text-[#1a9cb3] mr-6" size={28} />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-lg font-medium hover:text-[#1a9cb3] transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="contact-icon-box">
                <MapPin className="text-[#1a9cb3] mr-6" size={28} />
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-lg font-medium">Tokyo, Japan</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <Link
                href="https://github.com/atmaxstar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={24} />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div className="glass-card hover-lift p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" id="name" className="form-input" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-input" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input type="text" id="subject" className="form-input" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea id="message" rows={6} className="form-input" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
