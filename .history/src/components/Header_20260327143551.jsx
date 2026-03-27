import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import imgLogo from '../assets/logo.png'

/* ── nav link data ── */
const navLinks = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about', hasDropdown: true, submenu: [
    { name: 'Overview', href: '/about#overview' },
    { name: 'Mission & Vision', href: '/about#mission-vision' },
    { name: 'Chairman\'s Desk', href: '/about#chairman-desk' },
    { name: 'Principal\'s Desk', href: '/about#principal-desk' },
    { name: 'Instructors', href: '/about#instructors' },
    { name: 'Affiliations', href: '/about#affiliations' },
  ]},
  { name: 'Programs',   href: '/programs', hasDropdown: true, submenu: [
    { name: 'KINDERGARTEN LEVEL', href: '/programs#kindergarten-level' },
    { name: 'PRIMARY LEVEL', href: '/programs#primary-level' },
    { name: 'SECONDARY LEVEL', href: '/programs#secondary-level' },
    { name: 'SENIOR SECONDARY LEVEL', href: '/programs#senior-secondary-level' },
    { name: 'TEACHING METHODOLOGY', href: '/programs#teaching-methodology' },
    { name: 'SOCIAL INITIATIVES', href: '/programs#social-initiatives' },
    { name: 'OTHERS', href: '/programs#others' },
  ]},
  { name: 'Admissions', href: '/admissions' },
  { name: 'Gallery',    href: '/gallery' },
  { name: 'Contact',    href: '/contact' },
]

/* ── top-bar contact items ── */
const topBarItems = [
  {
    icon: (
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        strokeLinecap="round" strokeLinejoin="round"
      />
    ),
    text: '+91 99628 26465',
    href: 'tel:+919962826465',
  },
  {
    icon: (
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        strokeLinecap="round" strokeLinejoin="round"
      />
    ),
    text: 'futureschooloffice@gmail.com',
    href: 'mailto:futureschooloffice@gmail.com',
  },
  {
    icon: (
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        strokeLinecap="round" strokeLinejoin="round"
      />
    ),
    text: 'Ambur, Tamil Nadu',
    href: '#',
  },
]

export default function Header() {
  const [scrolled, setScrolled]       = useState(false)
  const [drawerOpen, setDrawerOpen]   = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const lastY = useRef(0)
  const location = useLocation()

  /* Close dropdown on click outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* scroll behaviour */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      // hide top-bar after 80px, show again near top
      setTopBarVisible(y < 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close drawer on route change */
  useEffect(() => setDrawerOpen(false), [location.pathname])

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <>
      {/* ════════════════════════════════════
          TOP BAR
      ════════════════════════════════════ */}
      <div
        className="bg-red-700 text-white overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: topBarVisible ? '48px' : '0px', opacity: topBarVisible ? 1 : 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          {/* Left — contact info */}
          <div className="hidden sm:flex items-center gap-5">
            {topBarItems.map(({ icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="flex items-center gap-1.5 text-red-100 hover:text-white text-xs font-medium transition-colors duration-150"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {icon}
                </svg>
                {text}
              </a>
            ))}
          </div>

          {/* Mobile — just location */}
          <div className="sm:hidden flex items-center gap-1.5 text-red-100 text-xs">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ambur, Tamil Nadu
          </div>

          {/* Right — affiliation badge */}
          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-1.5 text-[0.65rem] font-bold tracking-widest uppercase text-red-200">
              <span className="w-1 h-1 rounded-full bg-red-300" />
              CBSE Affiliation No. 1930465
              <span className="w-1 h-1 rounded-full bg-red-300" />
              School Code: 55386
            </span>
            <Link
              to="/admissions"
              className="px-3 py-0.5 rounded-sm bg-white text-red-700 text-[0.65rem] font-bold tracking-wide hover:bg-red-50 transition-colors duration-150"
            >
              Admissions 2026–2027
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          MAIN HEADER
      ════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        {/* Animated red underline */}
        <div className="h-[3px] w-full bg-gradient-to-r from-red-800 via-red-500 to-red-800" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center group flex-shrink-0">
               <img src={imgLogo} alt="Future School Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => link.hasDropdown && setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    className="relative px-4 py-2 group flex items-center gap-1"
                  >
                    <span
                      className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                        isActive(link.href) ? 'text-red-600' : 'text-gray-600 group-hover:text-red-600'
                      }`}
                    >
                      {link.name}
                    </span>
                    {link.hasDropdown && (
                      <svg className={`w-4 h-4 transition-transform duration-200 text-gray-600 group-hover:text-red-600 ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown menu */}
                  {link.hasDropdown && link.submenu && (
                    <div className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-200 z-50 ${
                      openDropdown === link.name ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}>
                      {link.submenu.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            setOpenDropdown(null)
                            
                            // Check if it's a hash-based link or regular navigation
                            if (item.href.includes('#')) {
                              const [targetPath, hash] = item.href.split('#')
                              if (hash) {
                                // Navigate first if not on the target page
                                if (location.pathname !== targetPath) {
                                  window.location.href = item.href
                                } else {
                                  const element = document.getElementById(hash)
                                  if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' })
                                    window.location.hash = hash
                                  }
                                }
                              }
                            } else {
                              // Regular navigation
                              window.location.href = item.href
                            }
                          }}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150 border-b border-gray-50 last:border-0 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── DESKTOP CTAs ── */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Portal button */}
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-500 border border-gray-200 rounded-lg hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Log In
              </button>

              {/* Admission CTA */}
              <Link
                to="/admissions"
                className="relative flex items-center gap-2 px-5 py-2.5 bg-transparent text-red-700 text-sm font-bold rounded-lg overflow-hidden group border-2 border-red-700 hover:bg-red-50 hover:shadow-[0_8px_24px_rgba(185,28,28,0.15)] transition-all duration-200"
              >
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="relative z-10">Apply Now</span>
              </Link>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-red-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  drawerOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ${
                  drawerOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  drawerOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════
          MOBILE DRAWER OVERLAY
      ════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
             <img src={imgLogo} alt="Logo" className="h-8 w-auto" />
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navLinks.map((link, i) => (
            <div key={link.name}>
              <div
                style={{ transitionDelay: drawerOpen ? `${i * 40}ms` : '0ms' }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive(link.href)
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
                onClick={() => {
                  if (link.hasDropdown) {
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  } else {
                    // Navigate for regular links
                    window.location.href = link.href
                  }
                }}
              >
                <span>{link.name}</span>
                {link.hasDropdown ? (
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              
              {/* Mobile dropdown submenu */}
              {link.hasDropdown && link.submenu && openDropdown === link.name && (
                    <div className="space-y-1 ml-4 mt-1 border-l border-gray-200 pl-4">
                  {link.submenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setDrawerOpen(false)
                        
                        // Check if it's a hash-based link or regular navigation
                        if (item.href.includes('#')) {
                          const [targetPath, hash] = item.href.split('#')
                          if (hash) {
                            if (location.pathname !== targetPath) {
                              window.location.href = item.href
                            } else {
                              const element = document.getElementById(hash)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' })
                                window.location.hash = hash
                              }
                            }
                          }
                        } else {
                          // Regular navigation
                          window.location.href = item.href
                        }
                      }}
                      className="block px-4 py-2 text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 pb-6 pt-4 border-t border-gray-100 space-y-3">
          {/* Contact quick info */}
          <div className="bg-gray-50 rounded-xl px-4 py-3 space-y-2">
            <a href="tel:+919962826465" className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-600 transition-colors">
              <svg className="w-3.5 h-3.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +91 99628 26465
            </a>
            <a href="mailto:futureschooloffice@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-600 transition-colors">
              <svg className="w-3.5 h-3.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              futureschooloffice@gmail.com
            </a>
          </div>

          <button className="w-full py-2.5 text-sm font-semibold text-gray-500 border border-gray-200 rounded-xl hover:border-red-200 hover:text-red-600 transition-all duration-200">
            Log In
          </button>
          <Link
            to="/admissions"
            className="flex items-center justify-center gap-2 w-full py-3 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Apply for Admission
          </Link>
        </div>
      </div>
    </>
  )
}