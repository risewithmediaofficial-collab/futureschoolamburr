import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import imgBuilding from '../assets/pic-assets/Secondary.jpg'
import imgKP from '../assets/pic-assets/Mr. K. PANDURANGAN.png'
import imgPS from '../assets/pic-assets/Mr.P.Sureshbabu.png'
import imgPR from '../assets/pic-assets/Ms.P.Rameshbabu SECRETARY.png'
import imgJS from '../assets/pic-assets/Ms.Jayanthi Suresh.png'
import imgJY from '../assets/pic-assets/YUVARANI.png'

/* ─── INSTRUCTOR TEAM DATA ─── */
const instructorsTeam = [
  { sno: 1, name: 'Mrs. YUVARANI J', designation: 'PRINCIPAL' },
  { sno: 2, name: 'Mrs. DEEPA R', designation: 'VICE PRINCIPAL' },
  { sno: 3, name: 'IMMANUEL I', designation: 'PGT' },
  { sno: 4, name: 'NIRMAL KUMAR M', designation: 'PGT' },
  { sno: 5, name: 'B PRIYANGA', designation: 'PGT' },
  { sno: 6, name: 'PRIYA K', designation: 'PGT' },
  { sno: 7, name: 'ANGELIN JAYAKUMARI', designation: 'PGT' },
  { sno: 8, name: 'DEEPAK T', designation: 'TGT' },
  { sno: 9, name: 'KANCHANAMALA G N', designation: 'TGT' },
  { sno: 10, name: 'NIRMALA DEVI P', designation: 'TGT' },
  { sno: 11, name: 'SHYAMALA C', designation: 'TGT' },
  { sno: 12, name: 'MALATHI G', designation: 'TGT' },
  { sno: 13, name: 'ASMA TASNEEM M S', designation: 'PRT' },
  { sno: 14, name: 'C DHANALAKSHMI', designation: 'PRT' },
  { sno: 15, name: 'SANIYA MUSKAN N', designation: 'PRT' },
  { sno: 16, name: 'AYEESHA NEELURI S', designation: 'PRT' },
  { sno: 17, name: 'T.KALAIVANI', designation: 'PRT' },
  { sno: 18, name: 'G M PRIYANKA', designation: 'PRT' },
  { sno: 19, name: 'JAGADESWARI N', designation: 'PRT' },
  { sno: 20, name: 'VIMALA M', designation: 'PRT' },
  { sno: 21, name: 'KEERTHANA B', designation: 'PRT' },
  { sno: 22, name: 'HUMERA ANJUM C', designation: 'PRT' },
  { sno: 23, name: 'SAVITHA K', designation: 'PRT' },
  { sno: 24, name: 'SHAHINA B', designation: 'PRT' },
  { sno: 25, name: 'GEETHA S', designation: 'PRT' },
  { sno: 26, name: 'IRFANA KOUSER N', designation: 'PRT' },
  { sno: 27, name: 'SEETHA V', designation: 'NTT' },
  { sno: 28, name: 'ANU W', designation: 'NTT' },
  { sno: 29, name: 'LAVANYA S', designation: 'NTT' },
  { sno: 30, name: 'SHAGUFTHA THASEEN H', designation: 'OTHER' },
  { sno: 31, name: 'J MURUGAN', designation: 'PET' },
  { sno: 32, name: 'V KOMATHI', designation: 'ADMIN' },
]

/* ─── FACULTY TEAM DATA ─── */
const facultyTeam = [
  { sno: 1, name: 'Mrs. YUVARANI J', designation: 'PRINCIPAL' },
  { sno: 2, name: 'Mrs. DEEPA R', designation: 'Vice PRINCIPAL' },
  { sno: 3, name: 'RAJEANUIEL J', designation: 'PGT' },
  { sno: 4, name: 'NIRMAL KUMAR M', designation: 'PGT' },
  { sno: 5, name: 'PRIYA K', designation: 'PGT' },
  { sno: 6, name: 'B PRIYANDA', designation: 'PGT' },
  { sno: 7, name: 'ANIRUDN JAYALKUMARI', designation: 'PGT' },
  { sno: 8, name: 'DEEPAK T', designation: 'TGT' },
  { sno: 9, name: 'HIMALLA DEVI P', designation: 'TGT' },
  { sno: 10, name: 'SHYAMALA C', designation: 'TGT' },
  { sno: 11, name: 'MALATHI D', designation: 'TGT' },
  { sno: 12, name: 'KANCHINAMALA O M', designation: 'TGT' },
  { sno: 13, name: 'ASMA TAYYEEM M S', designation: 'PRT' },
  { sno: 14, name: 'C CHARULAKSHMI', designation: 'PRT' },
  { sno: 15, name: 'SANIYA MAUSEAN H', designation: 'PRT' },
  { sno: 16, name: 'AYESHA NEELLARI S', designation: 'PRT' },
  { sno: 17, name: 'T KALAIVANI', designation: 'PRT' },
  { sno: 18, name: 'G M PRIYANKA', designation: 'PRT' },
  { sno: 19, name: 'JAGADESWARI H', designation: 'PRT' },
  { sno: 20, name: 'VINILA M', designation: 'PRT' },
  { sno: 21, name: 'KEERITHANA B', designation: 'PRT' },
  { sno: 22, name: 'HUMERA ANJUM C', designation: 'PRT' },
  { sno: 23, name: 'SAVITHA K', designation: 'PRT' },
  { sno: 24, name: 'BHAVSA B', designation: 'PRT' },
  { sno: 25, name: 'GEETHA S', designation: 'PRT' },
  { sno: 26, name: 'BIYANA KOUSER N', designation: 'PRT' },
  { sno: 27, name: 'BETHA V', designation: 'NIT' },
  { sno: 28, name: 'ANU W', designation: 'NIT' },
  { sno: 29, name: 'LAVANYA S', designation: 'NIT' },
  { sno: 30, name: 'LAVANYA S', designation: 'NIT' },
  { sno: 31, name: 'SHARIQUE THAHSEN H', designation: 'OTHER' },
  { sno: 32, name: 'J MURUGAN', designation: 'PRT' },
  { sno: 33, name: 'SATHISH E S', designation: 'PFI' },
  { sno: 34, name: 'V KOMATHI', designation: 'ADMIN' },
]

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

function Reveal({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

/* ─── Value Card ─── */
function ValueCard({ icon, title, desc, delay }) {
  return (
    <Reveal delay={delay} direction="up">
      <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(185,28,28,0.08)] transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
          <svg className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h4 className="text-sm font-bold text-gray-900 mb-1.5">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </Reveal>
  )
}

/* ─── Faculty Card ─── */
function FacultyCard({ name, subject, delay, img }) {
  return (
    <Reveal delay={delay} direction="up">
      <div className="group bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-[0_6px_25px_rgba(185,28,28,0.06)] transition-all duration-300">
        <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 border-2 border-red-100 group-hover:border-red-600 bg-gray-50 flex items-center justify-center transition-all duration-200 shadow-inner">
          <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102" 
          />
        </div>
        <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
        <p className="text-[0.62rem] tracking-widest uppercase font-black text-red-600 mt-2">{subject}</p>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════ */
export default function About() {
  useEffect(() => {
    // Handle hash navigation on component mount and location change
    const hash = window.location.hash.slice(1) // Remove the '#' character
    
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HERO (OVERVIEW) ══ */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden" id="overview">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-red-100/50 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white group">
                <img src={imgBuilding} alt="School" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-4 bg-white border border-gray-100 rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl flex items-center gap-3 md:gap-4 z-20">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-700 rounded-xl flex items-center justify-center text-white serif text-lg md:text-xl shadow-lg">25</div>
              <div>
                <p className="text-xs md:text-sm font-black text-gray-900 tracking-tight leading-none mb-1">Years of Excellence</p>
                <p className="text-[0.55rem] md:text-[0.6rem] text-gray-400 font-bold uppercase tracking-widest leading-none">Est. 1998 · Ambur</p>
              </div>
            </div>
          </div>
        </Reveal>

          {/* Right — text */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-xs font-bold tracking-widest uppercase text-red-600">About Us</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                About <em className="text-red-600 not-italic">Future</em><br />
                <strong className="font-bold">Senior Secondary School</strong>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="w-10 h-0.5 bg-red-600" />
            </Reveal>
            <Reveal delay={300}>
              <p className="text-gray-500 leading-relaxed text-sm">
                Future Senior Secondary School, Ambur, is a CBSE-affiliated institution established in 2011 under the Prem Educational Trust. The school is dedicated to nurturing young minds through a balanced approach of academics, values, and innovation.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-gray-500 leading-relaxed text-sm">
                With a strong focus on holistic development, students are encouraged to learn, explore, and contribute meaningfully to society. Our teaching approach focuses on student-centered learning supported by technology-enabled classrooms, fostering creativity, critical thinking, and multiple intelligences.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/admissions"
                  className="flex items-center gap-2 px-6 py-3 bg-transparent text-red-700 text-sm font-bold rounded-lg border-2 border-red-700 hover:bg-red-50 hover:shadow-[0_8px_25px_rgba(185,28,28,0.15)] transition-all duration-200"
                >
                  Apply for Admission
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[
              ['5,000+', 'Students Enrolled'],
              ['200+',   'Faculty Members'],
              ['97.8%',  'Board Pass Rate'],
              ['25+',    'Years of Excellence'],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-6 px-4">
                <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.65rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="py-20 md:py-28 bg-gray-50" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Our Foundation</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Mission & <em className="text-red-600 not-italic">Vision</em>
              </h2>
            </Reveal>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Reveal direction="left" delay={100}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 relative overflow-hidden hover:shadow-[0_12px_50px_rgba(185,28,28,0.08)] transition-shadow duration-300" id="vision">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent rounded-l-2xl" />
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Vision</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-semibold mb-6">
                  Future Senior Secondary School believes in <em className="text-red-600 not-italic">Learn, Discover and Share.</em>
                </p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                    <span className="text-red-600 font-black text-lg min-w-fit">LEARN</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Learning is Continuous</p>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                    <span className="text-red-600 font-black text-lg min-w-fit">DISCOVER</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Discover the Self to bring a change & Transformation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-black text-lg min-w-fit">SHARE</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Share your knowledge & give back to the society</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal direction="right" delay={200}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 relative overflow-hidden hover:shadow-[0_12px_50px_rgba(185,28,28,0.08)] transition-shadow duration-300" id="mission">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent rounded-l-2xl" />
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Mission</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-semibold mb-6">
                  Future Senior Secondary School's mission is depicted as:
                </p>
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <span className="text-orange-600 font-black text-sm min-w-fit">F –</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Futuristic Learning comes from Continuous Learning & Participation</p>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <span className="text-orange-600 font-black text-sm min-w-fit">U –</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Universal Value to be integrated through Education</p>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <span className="text-orange-600 font-black text-sm min-w-fit">T –</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Train to live; lead & Transform</p>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <span className="text-orange-600 font-black text-sm min-w-fit">U –</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Useful & Meaningful Human beings who can give back to the Society</p>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <span className="text-orange-600 font-black text-sm min-w-fit">R –</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Refinement & Reinventing of the Self</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-600 font-black text-sm min-w-fit">E –</span>
                    <p className="text-sm text-gray-600 leading-relaxed">Empathy & Empowerment resulting from Holistic Education</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CHAIRMAN'S DESK ══ */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden" id="chairman-desk">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">From The Office of The Chairman</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Chairman's</em> Message
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-50 border-l-4 border-red-600 p-6 md:p-8 rounded-r-lg">
                <p className="text-gray-700 italic leading-relaxed text-base md:text-lg">
                  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today".
                </p>
                <p className="text-gray-600 font-semibold mt-4">— Malcolm X.</p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>It's a moment of pride to share with all the stakeholders and our dear parents & students, within a short span of time Future Senior Secondary School has imprinted its vibrant presence in the educational map of Ambur and the surrounding localities.</p>
                <p>At Future we believe all students can be successful and this belief drives the work we do on a daily basis. We aim to inculcate a respect for diversity, tolerance, mutual understanding and to promote peaceful co-existence among our children. As a progressive school our system is meant to bring out the best out of not only every learner but also every educator.</p>
                <p>Our success lies in what pupils achieve in their lives. Our consistent endeavor is to work with them, share their vision and goals and become anchors in their life during schooldays at Future.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/5] bg-gray-50">
                <img src={imgKP} alt="Mr. K. PANDURANGAN" className="w-full h-full object-contain object-top" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-red-600">Mr. K. PANDURANGAN</h3>
                <p className="text-gray-900 font-semibold mt-2">Chairman</p>
                <p className="text-sm text-gray-600 mt-1">Future Senior Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRINCIPAL'S DESK ══ */}
      <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden" id="principal-desk">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">From The Office of The Principal</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Principal's</em> Message
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border-l-4 border-red-600 p-6 md:p-8 rounded-r-lg">
                <p className="text-gray-700 italic leading-relaxed font-semibold mb-4">
                  "Education awakens the power and beauty that lie within us."
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Education does not only mean academic excellence. It rather is a harmonious and synchronized combination of hand (skills like various arts), head (Intellectual Power) and heart (Value System).
                </p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>In the present era of digitalized world, the biggest challenge before educators and parents is to nurture the young minds with the indelible impressions of a holistic education.</p>
                <p>We come up with a vision to foster different facets of a student in order to see him/her developing as a vibrant student, responsible citizen and a generous and sentient human being. Our pedagogy is child centric.</p>
                <p>Today's India is an empowered and enlightened nation. We wish to make it even more powerful with smart and confident citizens who would make us proud of their multifaceted growth.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/5] bg-gray-50">
                <img src={imgJY} alt="Mrs. YUVARANI J" className="w-full h-full object-contain object-top" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-red-600">Mrs. YUVARANI J</h3>
                <p className="text-gray-900 font-semibold mt-2">Principal</p>
                <p className="text-sm text-gray-600 mt-1">Future Senior Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FACULTY ══ */}
      <section className="py-20 md:py-24 bg-white" id="faculty">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Our Team</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Meet Our <em className="text-red-600 not-italic">Faculty</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Experienced, passionate educators committed to every student's success.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <FacultyCard img={imgKP} name="K. Pandurangan"      subject="Chairman"   delay={0}   />
            <FacultyCard img={imgPS} name="P. Sureshbabu"       subject="Correspondent"  delay={80}  />
            <FacultyCard img={imgPR} name="P. Rameshbabu"       subject="Secretary"      delay={160} />
            <FacultyCard img={imgJS} name="Jayanthi Suresh"     subject="Academic Director" delay={240} />
            <FacultyCard img={imgJY} name="J. Yuvarani"         subject="Principal"         delay={320} />
          </div>
        </div>
      </section>

      {/* ══ INSTRUCTORS ══ */}
      <section className="py-16 md:py-24 bg-gray-50" id="instructors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Faculty Directory</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Teaching</em> Team
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          {/* Instructors Table */}
          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gradient-to-r from-red-600 to-red-700">
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">S.NO.</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">NAME</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {instructorsTeam.map((member, idx) => (
                  <tr
                    key={member.sno}
                    className={`border-b border-gray-100 hover:bg-red-50/30 transition-colors duration-150 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 font-medium">{member.sno}</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium">{member.name}</td>
                    <td className="px-4 md:px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                        {member.designation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PGT</span>
              <span className="text-xs text-gray-600">Post Graduate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">TGT</span>
              <span className="text-xs text-gray-600">Graduate Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PRT</span>
              <span className="text-xs text-gray-600">Primary Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">NTT</span>
              <span className="text-xs text-gray-600">Non-Teaching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PET</span>
              <span className="text-xs text-gray-600">Physical Ed.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AFFILIATIONS ══ */}
      <section className="py-16 md:py-24 bg-white" id="affiliations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Affiliations & Recognition</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Affiliations</em>
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          {/* Affiliation Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CBSE Affiliation */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">CBSE Affiliation</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">Board:</span> Central Board of Secondary Education (CBSE), New Delhi</p>
                    <p><span className="font-semibold">Affiliation Number:</span> 1930465</p>
                    <p><span className="font-semibold">School Code:</span> 55386</p>
                    <p className="text-xs text-gray-600 pt-2">
                      Future Senior Secondary School is affiliated to the Central Board of Secondary Education (CBSE), New Delhi, vide Affiliation Number 1930465 in accordance with that as prepared and submitted under CBSE guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Affiliations */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Other Board Examinations</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>✓ All India Secondary School Certificate Examination (AISSE)</p>
                    <p>✓ All India Senior School Certificate Examination (AISSCIE)</p>
                    <p className="text-xs text-gray-600 pt-2">
                      Students are eligible for All India Secondary School Certificate and All India Senior School Certificate Examination conducted by the Board of Studies X and XII respectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Table for Affiliations */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Faculty</em> Team
            </h3>
            <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gradient-to-r from-red-600 to-red-700">
                    <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">S.NO.</th>
                    <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">NAME</th>
                    <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">DESIGNATION</th>
                  </tr>
                </thead>
                <tbody>
                  {facultyTeam.map((member, idx) => (
                    <tr
                      key={member.sno}
                      className={`border-b border-gray-100 hover:bg-red-50/30 transition-colors duration-150 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                    >
                      <td className="px-4 md:px-6 py-3 text-sm text-gray-600 font-medium">{member.sno}</td>
                      <td className="px-4 md:px-6 py-3 text-sm text-gray-900 font-medium">{member.name}</td>
                      <td className="px-4 md:px-6 py-3 text-sm">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                          {member.designation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PGT</span>
                <span className="text-sm text-gray-600">Post Graduate Teacher</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">TGT</span>
                <span className="text-sm text-gray-600">Trained Graduate Teacher</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PRT</span>
                <span className="text-sm text-gray-600">Primary Teacher</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">NIT</span>
                <span className="text-sm text-gray-600">Non-Teaching</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PFI</span>
                <span className="text-sm text-gray-600">Physical Education</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="relative bg-red-700 py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-red-900/40 blur-[80px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-light text-white mb-4 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Be Part of the <em className="font-bold not-italic">Future School</em> Family
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-red-100 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Admissions are open for 2025–26. Join thousands of students building their bright futures here.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="px-8 py-3 bg-white text-red-700 text-sm font-bold rounded-lg hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                Apply Now →
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all duration-200">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}