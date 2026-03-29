import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Linkedin, Mail, MapPin, Phone, Send, ExternalLink, ArrowUp, ChevronRight } from 'lucide-react'
import imgLogo from '../assets/logo.png'

/* ─── Social icon SVGs ─── */
const socials = [
  { name: 'Facebook', href: '#', icon: <Facebook className="w-4 h-4" /> },
  { name: 'Instagram', href: '#', icon: <Instagram className="w-4 h-4" /> },
  { name: 'YouTube', href: '#', icon: <Youtube className="w-4 h-4" /> },
  { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-4 h-4" /> },
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
      <footer className="bg-gray-50 text-gray-900 border-t border-gray-100">
        <div className="border-b border-gray-100 bg-red-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#c0392b] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 text-[0.6rem] font-black uppercase tracking-widest">Stay Updated</p>
                  <p className="text-gray-500 text-[0.65rem] font-medium leading-none mt-1">Get school news, events & notices in your inbox</p>
                </div>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                  <Send className="w-4 h-4" />
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
                    className="flex-1 sm:w-60 h-10 px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 text-[0.65rem] font-bold uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-[#c0392b] focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-[0.65rem] font-bold tracking-widest uppercase transition-colors bg-[#c0392b] text-white hover:bg-[#a93226] h-10 px-6 py-2 shadow-sm flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <Link to="/" className="flex items-center group w-fit">
                <img src={imgLogo} alt="Logo" className="h-12 w-auto transition-all" />
              </Link>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                A CBSE-affiliated institution dedicated to providing world-class education with modern pedagogy, holistic development, and strong values since 1998.
              </p>
              <div className="flex flex-wrap gap-2">
                {[['Aff. No.', '1930465'], ['Code', '55386'], ['Board', 'CBSE']].map(([label, val]) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-100 shadow-sm">
                    <span className="text-[0.58rem] font-bold tracking-widest text-gray-400 uppercase">{label}</span>
                    <span className="text-[0.7rem] font-black text-[#c0392b]">{val}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2.5 mt-1">
                <a href="tel:+919962826465" className="flex items-center gap-2.5 text-gray-500 hover:text-[#c0392b] transition-colors group">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#c0392b]/60" />
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase leading-snug">+91 99628 26465</span>
                </a>
                <a href="mailto:futureschooloffice@gmail.com" className="flex items-center gap-2.5 text-gray-500 hover:text-[#c0392b] transition-colors group">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#c0392b]/60" />
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase leading-snug">futureschooloffice@gmail.com</span>
                </a>
                <span className="flex items-start gap-2.5 text-gray-500">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-red-500/60" />
                  <span className="text-xs font-medium leading-snug">Ambur, Tamil Nadu<br/>635 814</span>
                </span>
              </div>
              <div className="flex gap-2.5 mt-1">
                {socials.map(({ name, href, icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-9 h-9 rounded-md bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-[#c0392b] transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-red-600 inline-block" />
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link to={href} className="flex items-center gap-2 text-gray-500 hover:text-[#c0392b] text-[0.65rem] font-bold tracking-widest uppercase transition-colors duration-200 group">
                      <ChevronRight className="w-3.5 h-3.5 text-[#c0392b] opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-red-600 inline-block" />
                Resources
              </p>
              <ul className="space-y-3">
                {resources.map(({ name, href }) => (
                  <li key={name}>
                    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#c0392b] text-[0.6rem] font-semibold tracking-widest uppercase transition-colors duration-200 group">
                      <ExternalLink className="w-3 h-3 text-gray-300 opacity-40 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-gray-900 text-[0.65rem] font-bold tracking-widest uppercase mb-5 flex items-center gap-2">
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

            <div>
              <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-red-600 inline-block" />
                Location
              </p>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-gray-200 flex flex-col items-center justify-center mb-5 group cursor-pointer shadow-sm hover:shadow-md transition-all">
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '16px 16px' }} />
                <div className="text-center z-10 transition-transform group-hover:-translate-y-1 duration-300">
                  <MapPin className="w-7 h-7 text-[#c0392b] mx-auto mb-2" />
                  <span className="text-gray-400 text-[0.55rem] font-black uppercase tracking-widest">View on Maps</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c0392b] to-[#c0392b] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
                className="inline-flex items-center gap-1.5 mt-4 text-[0.6rem] font-bold uppercase tracking-widest text-[#c0392b] hover:text-[#a93226] transition-colors"
              >
                Get Directions
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs font-semibold tracking-wide">
              © {new Date().getFullYear()} Future Senior Secondary School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-gray-900 text-xs font-semibold transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 bg-white border border-gray-200 text-gray-600 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  )
}