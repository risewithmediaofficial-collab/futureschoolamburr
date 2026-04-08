import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronDown, ChevronRight, X, Menu, LogIn, Play, ClipboardList, Clock, Trophy, MoveRight, Users, GraduationCap, Map, Fingerprint, Activity, CarFront, Landmark, Target, CheckCircle2, Navigation, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import imgLogo from '../assets/logo.png'

/* ── nav link data ── */
const navLinks = [
  { name: 'Home', href: '/', icon: <Landmark className="w-4 h-4" /> },
  {
    name: 'About', href: '/about', hasDropdown: true, submenu: [
      { name: 'Overview', href: '/about', icon: <Landmark className="w-4 h-4" /> },
      { name: 'Mission & Vision', href: '/mission-vision', icon: <Target className="w-4 h-4" /> },
      { name: 'Chairman\'s Desk', href: '/chairman-desk', icon: <Users className="w-4 h-4" /> },
      { name: 'Principal\'s Desk', href: '/principal-desk', icon: <Fingerprint className="w-4 h-4" /> },
      { name: 'Instructors', href: '/instructors', icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'Affiliations', href: '/affiliations', icon: <CheckCircle2 className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Programs', href: '/programs', hasDropdown: true, submenu: [
      { name: 'kindergarten level', href: '/kindergarten', icon: <Play className="w-4 h-4" /> },
      { name: 'primary level', href: '/primary-level', icon: <Activity className="w-4 h-4" /> },
      { name: 'secondary level', href: '/secondary-level', icon: <ClipboardList className="w-4 h-4" /> },
      { name: 'senior secondary level', href: '/senior-secondary', icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'teaching methodology', href: '/teaching-methodology', icon: <Trophy className="w-4 h-4" /> },
      { name: 'social initiatives', href: '/social-initiatives', icon: <Users className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Curriculum', href: '/admissions', hasDropdown: true, submenu: [
      { name: 'admissions 2026-2027', href: '/admissions', icon: <ClipboardList className="w-4 h-4" /> },
      { name: 'timings', href: '/timings', icon: <Clock className="w-4 h-4" /> },
      { name: 'activities', href: '/activities', icon: <Activity className="w-4 h-4" /> },
      { name: 'transportation', href: '/transportation', icon: <CarFront className="w-4 h-4" /> },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
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
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
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

  const isActive = (link) => {
    if (link.href === '/') return location.pathname === '/'
    if (location.pathname.startsWith(link.href)) return true

    // Check if any sub-item is active
    if (link.hasDropdown && link.submenu) {
      return link.submenu.some(item => location.pathname === item.href)
    }

    return false
  }

  const handleNavClick = (href) => {
    // If clicking same page, scroll to top
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* 1. TOP UTILITY BAR (Reference Design) */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-gray-500">
          {/* Left links */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="px-3 py-1 bg-red-50 text-[#c0392b] rounded hover:bg-red-100 transition-all">Contact Us</Link>
            <Link to="/apply" className="px-3 py-1 bg-[#c0392b] text-white rounded hover:bg-[#a93226] transition-all">Apply Now</Link>
          </div>

          {/* Middle text */}
          <div className="text-gray-400 normal-case italic">
            Join Future school,Get a Good Future!
          </div>

          {/* Right — Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#c0392b] transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-[#c0392b] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-[#c0392b] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* 2. ADS BOARD (Live Running Mode) */}
      <div className="bg-[#002147] text-white py-2 overflow-hidden relative border-y border-white/5">
        <div className="ticker-track flex whitespace-nowrap items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center px-4">
              <span className="text-[12px] md:text-[14px] font-semibold tracking-wide uppercase">
                Admissions open for the Academic year 2026 - 2027.
              </span>
              <span className="mx-8 w-2 h-2 rounded-full bg-[#c0392b]" />
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          MAIN HEADER — GLASSMORPHISM
      ════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'glassmorphism shadow-lg border-b border-white/20'
          : 'bg-white border-b border-gray-100'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
          <div className="flex items-center justify-between h-12 md:h-14">

            {/* ── LEFT ICON & NAV ── */}
            <div className="hidden xl:flex items-center flex-1 justify-end">
              <nav className="flex items-center">
                {navLinks.slice(0, 3).map((link) => (
                  <NavItem key={link.name} link={link} isActive={isActive} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} handleNavClick={handleNavClick} location={location} />
                ))}
              </nav>
            </div>

            {/* ── CENTER LOGO ── */}
            <div className="flex justify-center px-8">
              <Link to="/" className="flex items-center group" onClick={() => handleNavClick('/')}>
                <img
                  src={imgLogo}
                  alt="Future School Logo"
                  className="h-9 md:h-11 w-auto transition-transform duration-300 group-hover:scale-105 object-contain"
                />
              </Link>
            </div>

            {/* ── RIGHT NAV & ICON ── */}
            <div className="hidden xl:flex items-center flex-1 justify-start">
              <nav className="flex items-center">
                {navLinks.slice(3).map((link) => (
                  <NavItem key={link.name} link={link} isActive={isActive} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} handleNavClick={handleNavClick} location={location} />
                ))}
              </nav>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="xl:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700"
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
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Drawer panel */}
      <div
        ref={mobileNavRef}
        className={`fixed top-0 right-0 z-50 h-[100dvh] w-full max-w-[340px] glassmorphism shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden flex flex-col border-l border-white/20 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => {
            setDrawerOpen(false)
            handleNavClick('/')
          }} className="flex items-center gap-2.5">
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
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                <Link
                  to={link.href}
                  onClick={() => {
                    setDrawerOpen(false)
                    handleNavClick(link.href)
                  }}
                  className={`text-base font-bold tracking-wide uppercase ${isActive(link) ? 'text-red-600' : 'text-gray-800'}`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    }}
                    className="p-2 -mr-2 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180 text-red-600' : ''}`} />
                  </button>
                )}
                {!link.hasDropdown && <ChevronRight className="w-4 h-4 text-gray-300" />}
              </div>

              {link.hasDropdown && link.submenu && openDropdown === link.name && (
                <div className="backdrop-blur-md bg-white/40 pb-2">
                  <div className="space-y-1 ml-4 border-l-2 border-gray-200 pl-3">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => {
                          setDrawerOpen(false)
                          setOpenDropdown(null)
                          handleNavClick(item.href)
                        }}
                        className={`flex items-center gap-2.5 px-3 py-3 text-xs font-semibold rounded-lg transition-colors duration-150 cursor-pointer ${location.pathname === item.href ? 'text-red-600 bg-red-50' : 'text-gray-600 hover:text-red-600 hover:bg-red-50'}`}
                      >
                        <span className={`scale-[0.85] ${location.pathname === item.href ? 'text-red-600' : 'text-gray-400'}`}>
                          {item.icon || <Navigation className="w-4 h-4" />}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
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

          <a href="/admin/login" onClick={() => setDrawerOpen(false)} className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-gray-100 border border-gray-200 bg-white h-10 px-4 py-2 text-gray-700">
            <LogIn className="w-4 h-4 mr-2" />
            Log In
          </a>
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

/* ── REUSABLE NAV ITEM ── */
function NavItem({ link, isActive, openDropdown, setOpenDropdown, handleNavClick, location }) {
  let timeout;

  const handleMouseEnter = () => {
    if (timeout) clearTimeout(timeout);
    setOpenDropdown(link.name);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <div 
      className="relative group mx-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={link.href}
        onClick={() => {
          setOpenDropdown(null);
          handleNavClick(link.href);
        }}
        className={`px-4 py-2 text-[13px] font-bold tracking-[0.14em] uppercase transition-all duration-300 rounded-lg hover:bg-gray-50 flex items-center ${isActive(link) ? 'text-[#c0392b]' : 'text-gray-700 hover:text-[#c0392b]'}`}
      >
        {link.name}
      </Link>

      {/* Dropdown menu */}
      {link.hasDropdown && link.submenu && (
        <div 
          className={`absolute top-full left-0 mt-0 pt-2 w-[280px] transition-all duration-300 z-50 ${openDropdown === link.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
          <div className="glassmorphism rounded-2xl shadow-xl overflow-hidden p-3 flex flex-col gap-0.5 text-left border border-white/20">
            {link.submenu.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  setOpenDropdown(null)
                  handleNavClick(item.href)
                }}
                className="flex items-center gap-3 px-3 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer group"
              >
                <span className={`text-gray-400 p-2 rounded-lg group-hover:text-red-600 group-hover:bg-red-100/50 transition-all ${location.pathname === item.href ? 'text-red-600 bg-red-100' : ''}`}>
                  {item.icon || <Navigation className="w-4 h-4" />}
                </span>
                <span className={location.pathname === item.href ? 'text-red-600 font-bold underline underline-offset-4 decoration-2 uppercase' : 'uppercase text-[11px] tracking-widest'}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
