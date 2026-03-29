import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronDown, ChevronRight, X, Menu, LogIn, Play, ClipboardList, Clock, Trophy, MoveRight, Users, GraduationCap, Map, Fingerprint, Activity, CarFront, Landmark, Target, CheckCircle2, Navigation } from 'lucide-react'
import imgLogo from '../assets/logo.png'

/* ── nav link data ── */
const navLinks = [
  { name: 'Home',       href: '/', icon: <Landmark className="w-4 h-4" /> },
  { name: 'About',      href: '/about', hasDropdown: true, submenu: [
    { name: 'Overview', href: '/about', icon: <Landmark className="w-4 h-4" /> },
    { name: 'Mission & Vision', href: '/mission-vision', icon: <Target className="w-4 h-4" /> },
    { name: 'Chairman\'s Desk', href: '/chairman-desk', icon: <Users className="w-4 h-4" /> },
    { name: 'Principal\'s Desk', href: '/principal-desk', icon: <Fingerprint className="w-4 h-4" /> },
    { name: 'Instructors', href: '/instructors', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Affiliations', href: '/affiliations', icon: <CheckCircle2 className="w-4 h-4" /> },
  ]},
  { name: 'Programs',   href: '/programs', hasDropdown: true, submenu: [
    { name: 'KINDERGARTEN LEVEL', href: '/kindergarten', icon: <Play className="w-4 h-4" /> },
    { name: 'PRIMARY LEVEL', href: '/primary-level', icon: <Activity className="w-4 h-4" /> },
    { name: 'SECONDARY LEVEL', href: '/secondary-level', icon: <ClipboardList className="w-4 h-4" /> },
    { name: 'SENIOR SECONDARY LEVEL', href: '/senior-secondary', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'TEACHING METHODOLOGY', href: '/teaching-methodology', icon: <Trophy className="w-4 h-4" /> },
    { name: 'SOCIAL INITIATIVES', href: '/social-initiatives', icon: <Users className="w-4 h-4" /> },
  ]},
  { name: 'Curriculum', href: '/admissions', hasDropdown: true, submenu: [
    { name: 'ADMISSIONS 2026-2027', href: '/admissions', icon: <ClipboardList className="w-4 h-4" /> },
    { name: 'TIMINGS', href: '/timings', icon: <Clock className="w-4 h-4" /> },
    { name: 'ACTIVITIES', href: '/activities', icon: <Activity className="w-4 h-4" /> },
    { name: 'TRANSPORTATION', href: '/transportation', icon: <CarFront className="w-4 h-4" /> },
  ]},
  { name: 'Gallery',    href: '/gallery' },
  { name: 'Contact',    href: '/contact' },
]

/* ── top-bar contact items ── */
const topBarItems = [
  {
    icon: <Phone className="w-3.5 h-3.5 flex-shrink-0" />,
    text: '+91 99628 26465',
    href: 'tel:+919962826465',
  },
  {
    icon: <Mail className="w-3.5 h-3.5 flex-shrink-0" />,
    text: 'futureschooloffice@gmail.com',
    href: 'mailto:futureschooloffice@gmail.com',
  },
  {
    icon: <MapPin className="w-3.5 h-3.5 flex-shrink-0" />,
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
  const mobileNavRef = useRef(null)
  const lastY = useRef(0)
  const location = useLocation()

  /* Close dropdown on click outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      const isOutsideDesktop = dropdownRef.current && !dropdownRef.current.contains(e.target)
      const isOutsideMobile = mobileNavRef.current && !mobileNavRef.current.contains(e.target)
      
      if (isOutsideDesktop && isOutsideMobile) {
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
        className="bg-[#c0392b] text-white overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: topBarVisible ? '48px' : '0px', opacity: topBarVisible ? 1 : 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-10 py-1 flex items-center justify-between gap-3">
          {/* Left — contact info */}
          <div className="hidden sm:flex items-center gap-5">
            {topBarItems.map(({ icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="flex items-center gap-1.5 text-red-50 hover:text-white text-[0.65rem] font-bold tracking-widest uppercase transition-colors duration-150"
              >
                {icon}
                {text}
              </a>
            ))}
          </div>

          {/* Mobile — just location */}
          <div className="sm:hidden min-w-0 flex items-center gap-1.5 text-red-100 text-[11px]">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">Ambur, Tamil Nadu</span>
          </div>

          {/* Right — affiliation badge */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden md:flex items-center gap-1.5 text-[0.6rem] font-bold tracking-widest uppercase text-red-100/80">
              <span className="w-1 h-1 rounded-full bg-red-300" />
              CBSE Affiliation No. 1930465
              <span className="w-1 h-1 rounded-full bg-red-300" />
              School Code: 55386
            </span>
            <Link
              to="/admissions"
              className="px-2.5 sm:px-3 py-1 rounded-sm bg-white text-[#c0392b] text-[0.6rem] sm:text-[0.65rem] font-bold tracking-wide text-center whitespace-nowrap hover:bg-red-50 transition-colors duration-150"
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
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'bg-white border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 h-[72px]">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center group flex-shrink-0 min-w-0">
               <img src={imgLogo} alt="Future School Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden xl:flex items-center" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.name} className="relative group mx-1">
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className="relative px-3 py-2 group flex items-center gap-1.5 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <span
                        className={`text-[0.8rem] font-bold tracking-widest uppercase transition-colors duration-200 ${
                          isActive(link.href) ? 'text-[#c0392b]' : 'text-gray-700 group-hover:text-[#c0392b]'
                        }`}
                      >
                        {link.name}
                      </span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 text-gray-500 group-hover:text-[#c0392b] ${openDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="relative px-3 py-2 group flex items-center gap-1.5 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span
                        className={`text-[0.8rem] font-bold tracking-widest uppercase transition-colors duration-200 ${
                          isActive(link.href) ? 'text-[#c0392b]' : 'text-gray-700 group-hover:text-[#c0392b]'
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {link.hasDropdown && link.submenu && (
                    <div className={`absolute top-full left-0 mt-2 w-[260px] bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-200 z-50 ${
                      openDropdown === link.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}>
                      <div className="p-2 flex flex-col gap-0.5">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-150 cursor-pointer"
                          >
                            <span className="text-gray-400 p-1 bg-gray-50 rounded-md group-hover:text-red-600 transition-colors">{item.icon || <Navigation className="w-4 h-4"/>}</span>
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── DESKTOP CTAs ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/admin/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 border border-gray-200 bg-white h-9 px-4 py-2">
                <LogIn className="w-4 h-4 mr-2" />
                Log In
              </Link>

              <Link
                to="/apply"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-[0.65rem] font-bold tracking-widest uppercase transition-colors bg-[#c0392b] text-white hover:bg-[#a93226] h-10 px-6 py-2 shadow-sm"
              >
                Apply Now
              </Link>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700"
              aria-label="Toggle menu"
            >
              {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════
          MOBILE DRAWER OVERLAY
      ════════════════════════════════════ */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        ref={mobileNavRef}
        className={`fixed top-0 right-0 z-50 h-[100dvh] w-full max-w-[340px] bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2.5">
             <img src={imgLogo} alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navLinks.map((link, i) => (
            <div key={link.name}>
              <div
                style={{ transitionDelay: drawerOpen ? `${i * 30}ms` : '0ms' }}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive(link.href)
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={() => {
                  if (link.hasDropdown) {
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  } else {
                    setDrawerOpen(false)
                  }
                }}
              >
                {link.hasDropdown ? (
                  <span>{link.name}</span>
                ) : (
                  <Link to={link.href} className="flex-1" onClick={() => setDrawerOpen(false)}>
                    {link.name}
                  </Link>
                )}
                {link.hasDropdown ? (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                )}
              </div>
              
              {link.hasDropdown && link.submenu && openDropdown === link.name && (
                <div className="space-y-1 ml-4 mt-2 border-l-2 border-gray-100 pl-3">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        setDrawerOpen(false)
                        setOpenDropdown(null)
                      }}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150 cursor-pointer"
                    >
                      <span className="text-gray-400 scale-[0.85]">{item.icon || <Navigation className="w-4 h-4"/>}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-5 pb-6 pt-4 border-t border-gray-100 space-y-3 bg-gray-50/50 mt-auto">
          <div className="bg-white rounded-xl border border-gray-200 px-4 py-3.5 space-y-2.5 shadow-sm">
            <a href="tel:+919962826465" className="flex items-center gap-2.5 text-xs font-medium text-gray-600 hover:text-red-600 transition-colors">
              <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              +91 99628 26465
            </a>
            <a href="mailto:futureschooloffice@gmail.com" className="flex items-center gap-2.5 text-xs font-medium text-gray-600 hover:text-red-600 transition-colors">
              <Mail className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              futureschooloffice@gmail.com
            </a>
          </div>

          <Link to="/admin/login" onClick={() => setDrawerOpen(false)} className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-gray-100 border border-gray-200 bg-white h-10 px-4 py-2 text-gray-700">
            <LogIn className="w-4 h-4 mr-2" />
            Log In
          </Link>
          <Link
            to="/apply"
            onClick={() => setDrawerOpen(false)}
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-red-600 text-white hover:bg-red-600/90 h-10 px-4 py-2 shadow-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  )
}
