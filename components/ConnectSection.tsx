"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Calendar, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up at https://emailjs.com (free tier: 200 emails/month)
// 2. Create a service (Gmail) → copy Service ID
// 3. Create a template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Copy Template ID and Public Key
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY"
// ────────────────────────────────────────────────────────────────

export default function ConnectSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus("sent")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
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
            <a href="mailto:ep3369@stern.nyu.edu" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
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
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-purple-400" />
              </div>
              <p className="text-white text-lg font-semibold">Message sent!</p>
              <p className="text-gray-500 text-sm">I&apos;ll get back to you soon.</p>
              <button onClick={() => setStatus("idle")} className="text-xs text-gray-600 hover:text-gray-400 underline mt-2">Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5">
              {[
                { label: "Name", key: "name", type: "text", placeholder: "John Doe" },
                { label: "Email", key: "email", type: "email", placeholder: "john@example.com" },
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
              {status === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Please email me directly at ep3369@stern.nyu.edu</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}
