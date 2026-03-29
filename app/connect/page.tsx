"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Calendar } from "lucide-react"
import Header from "@/components/Header"

export default function ConnectPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:ep3369@stern.nyu.edu?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070b13] px-6 md:px-16 pt-32 pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Let&apos;s Talk</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Interested in working together or just want to say hi? Drop me a line.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:ep3369@stern.nyu.edu"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm">ep3369@stern.nyu.edu</span>
              </a>

              <a
                href="https://linkedin.com/in/eshapandey/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Linkedin className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm">linkedin.com/in/eshapandey</span>
              </a>

              <a
                href="https://calendar.app.google/Sfvzfj3FYdmvDi447"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm">Schedule a meeting</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <p className="text-white text-lg font-semibold">Message sent!</p>
                <p className="text-gray-500 text-sm">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Subject</label>
                  <input
                    type="text"
                    placeholder="Job Opportunity / Collaboration / Question"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </main>
    </>
  )
}
