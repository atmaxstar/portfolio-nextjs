import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<{
    type: "success" | "error" | "sending" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "sending", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="section-title-box mb-16">
          <h2 className="handwritten text-3xl font-bold flex items-center">
            <Mail className="mr-2" size={28} />
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-6 gradient-text">Get In Touch</h3>
            <p className="text-xl mb-10 leading-relaxed">
              Feel free to contact me for inquiries or any questions you might have. I'm always open to new
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
                    haniyasusin@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-icon-box">
                <MapPin className="text-[#1a9cb3] mr-6" size={28} />
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-lg font-medium">Christchurch, New Zealand</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <Link
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={24} />
              </Link>
              <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          <div className="glass-card hover-lift p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-input"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              {status.message && (
                <div
                  className={`p-4 rounded ${
                    status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                className="btn-primary w-full py-4 flex items-center justify-center text-lg"
                disabled={status.type === "sending"}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
