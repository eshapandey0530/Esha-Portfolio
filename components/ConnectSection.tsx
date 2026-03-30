"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Calendar } from "lucide-react"

export default function ConnectSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState({ subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=ep3369@stern.nyu.edu&su=${encodeURIComponent(
      form.subject || "Message from Portfolio"
    )}&body=${encodeURIComponent(form.message)}`
    window.open(gmailUrl, "_blank")
    setSent(true)
    setForm({ subject: "", message: "" })
  }

  return (
    <section id="connect" className="relative bg-[#070b13] py-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      >
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Talk</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Interested in working together or just want to say hi? Drop me a line.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://mail.google.com/mail/?view=cm&to=ep3369@stern.nyu.edu" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Mail className="h-4 w-4 text-purple-400" />
              </div>
              <span className="text-sm">ep3369@stern.nyu.edu</span>
            </a>
            <a href="https://linkedin.com/in/eshapandey/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4 text-blue-400" />
              </div>
              <span className="text-sm">linkedin.com/in/eshapandey</span>
            </a>
            <a href="https://calendar.app.google/Sfvzfj3FYdmvDi447" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
              <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Calendar className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="text-sm">Schedule a meeting</span>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <p className="text-white text-lg font-semibold">Opening Gmail...</p>
              <p className="text-gray-500 text-sm">Your message is pre-filled and ready to send.</p>
              <button onClick={() => setSent(false)} className="text-xs text-gray-600 hover:text-gray-400 underline mt-2">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5">
              {[
                { label: "Subject", key: "subject", type: "text", placeholder: "Job Opportunity / Collaboration / Question" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required={key !== "subject"}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              ))}
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
                className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Email
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}
