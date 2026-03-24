import { useEffect, useRef, useState } from 'react'

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal()
  const transforms = { up: 'translateY(40px)', left: 'translateX(-50px)', right: 'translateX(50px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── Steps data ─── */
const steps = [
  {
    num: '01',
    icon: (
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
    title: 'Registration',
    desc: 'Fill the online enquiry form or visit the school office from the first Monday of April.',
  },
  {
    num: '02',
    icon: (
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
    title: 'Entrance Test',
    desc: 'Appear for the entrance assessment to evaluate core subject competencies.',
  },
  {
    num: '03',
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
    title: 'Interview',
    desc: 'An interaction session with the school management for lower grades and successful assessment candidates.',
  },
  {
    num: '04',
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        strokeLinecap="round" strokeLinejoin="round" />
    ),
    title: 'Admission Offer',
    desc: 'Submit original documents and complete the fee formalities to confirm admission.',
  },
]

/* ─── Document checklist ─── */
const documents = [
  'Birth Certificate',
  'Transfer Certificate',
  'Aadhaar Card',
  'Community Certificate',
  'Passport-size photos',
]

/* ─── FAQ item ─── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-red-50 transition-colors duration-200"
      >
        <span className="text-sm font-semibold text-gray-800">{q}</span>
        <svg
          className={`w-4 h-4 text-red-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   ADMISSIONS PAGE
══════════════════════════════════════════ */
export default function Admissions() {
  const [form, setForm] = useState({ name: '', parent: '', phone: '', email: '', class: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Join Us</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Admissions <em className="text-red-600 not-italic">2026–2027</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              We welcome motivated students from Kindergarten to Grade XII. Admissions are open from April (First Monday) for the upcoming academic year.
            </p>
          </Reveal>
          {/* Key info pills */}
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[['📅', 'Deadline: June 30, 2025'], ['💳', 'App. Fee: ₹500'], ['📚', 'Classes I – XII'], ['✅', 'CBSE Affiliated']].map(([icon, text]) => (
                <span key={text} className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-700 text-xs font-semibold">
                  {icon} {text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[['Kindergarten–XII', 'Open for All Grades'], ['April Start', 'Application Opens'], ['Prospective', 'Candidates Welcome'], ['Limited', 'Seats Available']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-5 px-4">
                <span className="text-xl md:text-2xl font-bold text-white text-center" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS STEPS ══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">How It Works</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Admission <em className="text-red-600 not-italic">Process</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 text-sm mt-3">Simple, transparent, and student-friendly — four easy steps to join Future School.</p>
            </Reveal>
          </div>

          {/* Desktop: horizontal stepper | Mobile: vertical */}
          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-red-200 via-red-400 to-red-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 120} direction="up">
                  <div className="group flex flex-col items-center text-center gap-4">
                    {/* Circle */}
                    <div className="w-28 h-28 rounded-full bg-white border-2 border-red-100 shadow-[0_4px_24px_rgba(185,28,28,0.1)] flex flex-col items-center justify-center group-hover:border-red-500 group-hover:shadow-[0_8px_32px_rgba(185,28,28,0.2)] transition-all duration-300 relative">
                      <svg className="w-7 h-7 text-red-500 mb-1" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        {step.icon}
                      </svg>
                      <span className="text-xs font-bold text-red-400 tracking-widest">{step.num}</span>
                      {/* Hover fill */}
                      <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1.5" style={{ fontFamily: "'Georgia', serif" }}>{step.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed max-w-[180px] mx-auto">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FORM + SIDEBAR ══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">

          {/* ── Form ── */}
          <div className="lg:col-span-2">
            <Reveal direction="left">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.05)] overflow-hidden">
                {/* Card top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-400 to-transparent" />
                <div className="p-8 md:p-10">
                  <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2">Enquiry Form</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                    Apply for Admission
                  </h2>
                  <p className="text-sm text-gray-400 mb-8">Fill in your details and we'll get back to you within 24 hours.</p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Application Received!</h3>
                      <p className="text-sm text-gray-500">Thank you for applying. Our admissions team will contact you within 24 hours.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 bg-transparent text-red-700 text-sm font-bold rounded-lg border-2 border-red-700 hover:bg-red-50 transition-colors">
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Student Name *</label>
                          <input
                            name="name" value={form.name} onChange={handleChange} required
                            placeholder="Full name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Parent / Guardian Name *</label>
                          <input
                            name="parent" value={form.parent} onChange={handleChange} required
                            placeholder="Parent's full name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Mobile Number *</label>
                          <input
                            name="phone" value={form.phone} onChange={handleChange} required
                            placeholder="+91 XXXXX XXXXX" type="tel"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address</label>
                          <input
                            name="email" value={form.email} onChange={handleChange}
                            placeholder="email@example.com" type="email"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Class Applying For *</label>
                        <select
                          name="class" value={form.class} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200 bg-white"
                        >
                          <option value="">Select class</option>
                          {['Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
                            'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
                            'Class XI – Science', 'Class XI – Commerce', 'Class XII – Science', 'Class XII – Commerce'
                          ].map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                        <textarea
                          name="message" value={form.message} onChange={handleChange}
                          rows={3} placeholder="Any specific questions or requirements..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-transparent text-red-700 text-sm font-bold rounded-xl border-2 border-red-700 hover:bg-red-50 hover:shadow-[0_8px_25px_rgba(185,28,28,0.15)] transition-all duration-200"
                      >
                        Submit Application →
                      </button>
                      <p className="text-xs text-gray-400 text-center">We'll respond within 24 hours · ₹500 registration fee payable after confirmation</p>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-5">
            {/* Quick info */}
            <Reveal direction="right" delay={100}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1 bg-gradient-to-r from-red-600 to-transparent" />
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Key Dates</p>
                  <ul className="space-y-3">
                    {[
                      ['📅', 'Applications Open', 'March 1, 2025'],
                      ['⏰', 'Application Deadline', 'June 30, 2025'],
                      ['📝', 'Entrance Test', 'July 5–10, 2025'],
                      ['📣', 'Results Announced', 'July 15, 2025'],
                      ['🎓', 'Classes Begin', 'July 25, 2025'],
                    ].map(([icon, label, date]) => (
                      <li key={label} className="flex items-start gap-3">
                        <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">{label}</p>
                          <p className="text-xs text-gray-400">{date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Documents */}
            <Reveal direction="right" delay={200}>
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1 bg-gradient-to-r from-red-400 to-transparent" />
                <div className="p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Documents Required</p>
                  <ul className="space-y-2">
                    {documents.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Contact */}
            <Reveal direction="right" delay={300}>
              <div className="bg-red-600 rounded-2xl p-6 text-white">
                <p className="text-xs font-bold tracking-widest uppercase text-red-200 mb-3">Need Help?</p>
                <p className="text-sm font-light mb-4 text-red-100">Our admissions team is here to guide you through the process.</p>
                <div className="space-y-2.5">
                  <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm font-semibold hover:text-red-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    +91 XXXXX XXXXX
                  </a>
                  <a href="mailto:admissions@futureschool.edu.in" className="flex items-center gap-2 text-sm font-semibold hover:text-red-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    admissions@futureschool.edu.in
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">FAQs</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Frequently Asked <em className="text-red-600 not-italic">Questions</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="space-y-3">
              <FaqItem q="What is the age criterion for Class I admission?" a="Children must be at least 6 years old as of June 1, 2025 to be eligible for Class I admission." />
              <FaqItem q="Is there an entrance test for all classes?" a="Entrance tests are conducted for Classes III and above. Classes I and II admissions are based on interaction with parents and students." />
              <FaqItem q="What is the medium of instruction?" a="The medium of instruction is English. Tamil is offered as a second language from Class I onwards." />
              <FaqItem q="Are mid-year admissions available?" a="Mid-year admissions are considered on a case-by-case basis subject to seat availability and relevant documentation." />
              <FaqItem q="What streams are available in Senior Secondary?" a="We offer Science (PCM and PCB) and Commerce streams in Classes XI and XII." />
              <FaqItem q="How do I pay the application fee?" a="The ₹500 application fee can be paid online via UPI, bank transfer, or in person at the school office." />
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}