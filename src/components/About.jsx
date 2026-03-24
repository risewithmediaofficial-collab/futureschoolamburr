import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import imgBuilding from '../assets/pic-assets/Secondary.jpg'
import imgKP from '../assets/pic-assets/Mr. K. PANDURANGAN.png'
import imgPS from '../assets/pic-assets/Mr.P.Sureshbabu.png'
import imgPR from '../assets/pic-assets/Ms.P.Rameshbabu SECRETARY.png'
import imgJS from '../assets/pic-assets/Ms.Jayanthi Suresh.png'
import imgJY from '../assets/pic-assets/YUVARANI.png'

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
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HERO ══ */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
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
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Our Foundation</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Mission & <em className="text-red-600 not-italic">Vision</em>
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Reveal direction="left" delay={100}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 relative overflow-hidden hover:shadow-[0_12px_50px_rgba(185,28,28,0.08)] transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent rounded-l-2xl" />
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Mission</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  The mission of Future Senior Secondary School is to provide a futuristic learning environment that integrates universal human values and transforms students into empathetic, empowered leaders.
                </p>
                <ul className="mt-5 space-y-2">
                  {['Futuristic learning environment', 'Universal human values', 'Training students to lead and transform', 'Developing responsible individuals', 'Encouraging self-refinement', 'Promoting empathy and empowerment'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal direction="right" delay={200}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 relative overflow-hidden hover:shadow-[0_12px_50px_rgba(185,28,28,0.08)] transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-transparent rounded-l-2xl" />
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Our Vision</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Learn • Discover • Share
                </p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">LEARN</span>
                    <p className="text-xs text-gray-500">Learning is Continuous</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">DISCOVER</span>
                    <p className="text-xs text-gray-500">Discover the Self to bring change & Transformation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">SHARE</span>
                    <p className="text-xs text-gray-500">Share your knowledge & give back to society</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">What We Stand For</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Our Core <em className="text-red-600 not-italic">Values</em>
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ValueCard
              icon={<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />}
              title="Excellence"
              desc="We pursue the highest standards in academics, character, and every endeavour we undertake."
              delay={0}
            />
            <ValueCard
              icon={<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></>}
              title="Integrity"
              desc="Honesty, transparency, and ethical conduct in everything — from classrooms to corridors."
              delay={100}
            />
            <ValueCard
              icon={<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></>}
              title="Inclusivity"
              desc="Every student is valued, respected, and given equal opportunity to learn and grow."
              delay={200}
            />
            <ValueCard
              icon={<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
              title="Innovation"
              desc="Embracing modern pedagogy, technology, and creative thinking to prepare future-ready students."
              delay={300}
            />
            <ValueCard
              icon={<><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>}
              title="Community"
              desc="Building strong bonds between students, parents, teachers, and the wider Ambur community."
              delay={400}
            />
            <ValueCard
              icon={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>}
              title="Responsibility"
              desc="Nurturing a sense of duty towards self, family, school, society, and the environment."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* ══ FACULTY ══ */}
      <section className="py-20 md:py-24 bg-gray-50">
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