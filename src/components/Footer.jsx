import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../assets/logo.png'

/* ─── Social icon SVGs ─── */
const socials = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

/* ─── External resources ─── */
const resources = [
  { name: 'CBSE Official',       href: 'https://cbse.nic.in' },
  { name: 'NCERT',               href: 'https://ncert.nic.in' },
  { name: 'NTA Portal',          href: 'https://nta.ac.in' },
  { name: 'JEE Main',            href: 'https://jeemain.nta.nic.in' },
  { name: 'Ministry of Education', href: 'https://education.gov.in' },
]

/* ─── Quick links ─── */
const quickLinks = [
  { name: 'Home',        href: '/' },
  { name: 'About Us',    href: '/about' },
  { name: 'Programs',    href: '/programs' },
  { name: 'Admissions',  href: '/admissions' },
  { name: 'Gallery',     href: '/gallery' },
  { name: 'Contact',     href: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <>
      {/* ══ FOOTER ══ */}
      <footer className="bg-gray-50 text-gray-900 border-t border-gray-100">

        {/* ── Newsletter strip ── */}
        <div className="border-b border-gray-100 bg-red-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-bold">Stay Updated</p>
                  <p className="text-gray-500 text-xs">Get school news, events & notices in your inbox</p>
                </div>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Subscribed! Thank you.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 sm:w-60 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 transition-all font-medium"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 bg-transparent text-red-700 text-sm font-bold rounded-lg border-2 border-red-700 hover:bg-red-50 transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Col 1 — Brand (2 cols on lg) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Logo */}
              <Link to="/" className="flex items-center group w-fit">
                <img src={imgLogo} alt="Logo" className="h-14 w-auto grayscale-[0.2] hover:grayscale-0 transition-all" />
              </Link>

              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                A CBSE-affiliated institution dedicated to providing world-class education with modern pedagogy, holistic development, and strong values since 1998.
              </p>

              {/* Affiliation badges */}
              <div className="flex flex-wrap gap-2">
                {[['Aff. No.', '1930465'], ['Code', '55386'], ['Board', 'CBSE']].map(([label, val]) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-100">
                    <span className="text-[0.58rem] font-bold tracking-wide text-gray-400 uppercase">{label}</span>
                    <span className="text-[0.7rem] font-black text-red-600">{val}</span>
                  </div>
                ))}
              </div>

              {/* Contact quick */}
              <div className="flex flex-col gap-2.5 mt-1">
                {[
                  { icon: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />, text: '+91 99628 26465', href: 'tel:+919962826465' },
                  { icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />, text: 'futureschooloffice@gmail.com', href: 'mailto:futureschooloffice@gmail.com' },
                  { icon: <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />, text: 'Ambur, Tamil Nadu – 635 814', href: '#' },
                ].map(({ icon, text, href }) => (
                  <a key={text} href={href} className="flex items-start gap-2.5 text-gray-500 hover:text-red-600 transition-colors group">
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-500/60 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {icon}
                    </svg>
                    <span className="text-xs font-medium leading-snug">{text}</span>
                  </a>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-2.5 mt-1">
                {socials.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick links */}
            <div>
              <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-red-600 inline-block" />
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      to={href}
                      className="flex items-center gap-2 text-gray-500 hover:text-red-600 text-xs font-medium transition-colors duration-200 group"
                    >
                      <svg className="w-3 h-3 text-red-600 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Resources */}
            <div>
              <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-red-600 inline-block" />
                Resources
              </p>
              <ul className="space-y-3">
                {resources.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-500 hover:text-red-600 text-xs font-medium transition-colors duration-200 group"
                    >
                      <svg className="w-3 h-3 text-red-400 opacity-40 group-hover:opacity-100 flex-shrink-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Timings card */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-gray-900 text-[0.65rem] font-black tracking-widest uppercase mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Office Hours
                </p>
                <div className="space-y-3">
                  {[
                    ['Mon – Fri', '8:00 AM – 4:30 PM'],
                    ['Saturday',  '8:00 AM – 1:00 PM'],
                    ['Sunday',    'Closed']
                  ].map(([day, time]) => (
                    <div key={day} className="flex flex-col gap-0.5">
                      <span className="text-[0.62rem] tracking-widest uppercase font-bold text-gray-400">{day}</span>
                      <span className="text-[0.7rem] font-black text-gray-700">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 4 — Location */}
            <div>
              <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-red-600 inline-block" />
                Location
              </p>

              {/* Map placeholder */}
              <div className="relative h-36 rounded-xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center mb-5 group cursor-pointer shadow-sm">
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '16px 16px' }} />
                <div className="text-center z-10 transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-8 h-8 text-red-600 mx-auto mb-1.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">View on Maps</span>
                </div>
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-50/40 transition-colors" />
              </div>

              <address className="not-italic text-gray-500 text-xs leading-relaxed font-medium">
                Future Senior Secondary School<br />
                Ambur, Vellore District<br />
                Tamil Nadu – 635 814
              </address>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
              >
                Get Directions
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} Future Senior Secondary School, Ambur.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-red-600 text-xs font-bold uppercase tracking-wider transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Back to Top button ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-red-600 text-white rounded-full shadow-[0_4px_20px_rgba(185,28,28,0.4)] flex items-center justify-center hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(185,28,28,0.5)] transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  )
}