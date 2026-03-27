import { Link } from 'react-router-dom'
import { useReveal } from '../utils/reveal'

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal(0.15)
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

/* ─── Program data ─── */
import imgKG from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgPrimary from '../assets/pic-assets/Secondary-410x260.jpg'
import imgSecondary from '../assets/pic-assets/IMG_4395-1024x683.jpg'
import imgSenior from '../assets/pic-assets/Secondary.jpg'

const programs = [
  {
    id: 1,
    icon: '📚',
    title: 'Kindergarten',
    classes: 'K2 & K3',
    age: 'Ages 3 – 5',
    description: 'Activity-based learning focused on cognitive and motor skills development in a nurturing environment.',
    highlights: ['English & Tamil Language Arts', 'Sensory Development', 'Creative Arts', 'Play-based Learning'],
    badge: 'Foundation Years',
    img: imgKG
  },
  {
    id: 2,
    icon: '🏫',
    title: 'Primary & Middle',
    classes: 'Classes I – VIII',
    age: 'Ages 6 – 13',
    description: 'Concept-based education using modern teaching methodologies and digital tools to build a strong academic foundation.',
    highlights: ['Languages: English, Tamil, Hindi, Urdu', 'Mathematics & Social Science', 'Science Lab Learning', 'Digital Classroom Tools'],
    badge: 'Primary & Middle School',
    img: imgPrimary
  },
  {
    id: 3,
    icon: '🎯',
    title: 'Secondary',
    classes: 'Classes IX – X',
    age: 'Ages 14 – 15',
    description: 'Strong academic foundation with a focused approach towards CBSE board exam preparation and intellectual growth.',
    highlights: ['CBSE Board Preparation', 'Science & Mathematics', 'Social Science & Languages', 'Formative & Summative Assessments'],
    badge: 'Secondary School',
    img: imgSecondary
  },
  {
    id: 4,
    icon: '🏛️',
    title: 'Senior Secondary',
    classes: 'Classes XI – XII',
    age: 'Ages 16 – 17',
    description: 'Stream-based specialization with career-oriented guidance, preparing students for university and professional success.',
    highlights: ['Science Stream (PCM / PCB)', 'Commerce Stream', 'Physics, Chemistry, Biology', 'Computer Science & Accountancy'],
    badge: 'Senior Secondary',
    img: imgSenior
  },
]

/* ─── Subject pill ─── */
function Pill({ text }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-medium text-red-700">
      <span className="w-1 h-1 rounded-full bg-red-500" />
      {text}
    </span>
  )
}

/* ─── Program Card ─── */
function ProgramCard({ program, delay, reversed }) {
  return (
    <Reveal delay={delay} direction={reversed ? 'right' : 'left'}>
      <div className="group grid md:grid-cols-2 gap-0 bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(185,28,28,0.08)] transition-all duration-300">

        {/* Visual side */}
        <div className={`relative flex items-center justify-center overflow-hidden min-h-[260px] ${reversed ? 'md:order-2' : ''}`}>
          <img src={program.img} alt={program.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10 transition-colors duration-400 group-hover:bg-black/20" />
          
          {/* Big icon overlay */}
          <div className="relative z-10 text-center">
            <div className="text-5xl mb-4 transition-transform duration-200 drop-shadow-lg scale-95 group-hover:scale-100">{program.icon}</div>
            <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-[0.62rem] font-black tracking-widest shadow-sm">{program.badge}</span>
          </div>
          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-tl-[60px] backdrop-blur-sm" />
          {/* Red edge */}
          <div className={`absolute top-0 ${reversed ? 'right-0' : 'left-0'} w-1.5 h-full bg-red-600 shadow-[0_0_15px_rgba(185,28,28,0.4)]`} />
        </div>

        {/* Content side */}
        <div className={`p-8 flex flex-col gap-5 ${reversed ? 'md:order-1' : ''}`}>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-1">{program.age}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>{program.title}</h3>
            <p className="text-sm font-semibold text-red-500">{program.classes}</p>
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-600 to-transparent" />
          <p className="text-sm text-gray-500 leading-relaxed">{program.description}</p>
          <div className="flex flex-wrap gap-2">
            {program.highlights.map((h) => <Pill key={h} text={h} />)}
          </div>
          <Link
            to="/admissions"
            className="flex items-center gap-2 text-sm font-bold text-red-600 hover:gap-3 transition-all duration-200 mt-auto w-fit"
          >
            Apply for this programme
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Activity Card ─── */
function ActivityCard({ icon, title, desc, delay }) {
  return (
    <Reveal delay={delay} direction="up">
      <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_6px_25px_rgba(185,28,28,0.06)] transition-all duration-300 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <div className="text-3xl mb-3 group-hover:scale-105 transition-transform duration-200">{icon}</div>
        <h4 className="text-sm font-bold text-gray-900 mb-1.5">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   PROGRAMS PAGE
══════════════════════════════════════════ */
export default function Programs() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Academics</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Programs</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              From foundational primary education to senior secondary streams — a seamless, CBSE-aligned academic journey designed to unlock every student's potential.
            </p>
          </Reveal>
          {/* Quick jump pills */}
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {programs.map((p) => (
                <span key={p.id} className="px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs font-semibold cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-200">
                  {p.title}
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
            {[['Classes I–XII', 'Full CBSE Curriculum'], ['4 Sections', 'Primary to Sr. Secondary'], ['Science & Commerce', 'Sr. Secondary Streams'], ['97.8%', 'Board Pass Rate']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-5 px-4">
                <span className="text-xl md:text-2xl font-bold text-white text-center" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROGRAM CARDS (alternating layout) ══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} delay={0} reversed={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ══ PROGRAM LEVEL DETAILS (DROPDOWN) ══ */}
      <section className="pb-16 md:pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <details className="group bg-white border border-gray-200 rounded-sm">
            <summary className="list-none cursor-pointer px-6 py-5 font-bold text-gray-900 text-2xl flex items-center justify-between">
              <span>Primary : Grades I to VIII</span>
              <span className="text-red-600 text-base font-semibold transition-transform duration-200 group-open:rotate-180">⌄</span>
            </summary>

            <div className="px-6 pb-6 border-t border-gray-200 text-gray-700 leading-relaxed">
              <p className="mt-5 text-[1.02rem]">
                At the primary level, there is a greater emphasis on development based curriculum and students are taught
                the essential concepts of various subjects. Futurians are taught specifically through Digi Board, content
                which inculcate zeal and concentration among the students. Special emphasis is also laid on the development
                of positive attitudes and healthy habits among the students. Apart from preparing the students to succeed in
                academics, they are also taught the importance of moral values to lead a disciplined life.
              </p>

              <p className="mt-5 text-[1.02rem]">
                Activity based learning is given more focus in this stage. Co scholastic activities augment their physical
                and mental ability. English &lsquo;Seasons&rsquo; provide a new dimension to their learning.
              </p>

              <Link
                to="/admissions"
                className="inline-block mt-6 text-2xl font-bold text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                Click Here To Know The Admission Process
              </Link>
            </div>
          </details>
        </div>
      </section>

      {/* ══ CO-CURRICULAR & CLUBS ══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Clubs & Activities</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Beyond the <em className="text-red-600 not-italic">Classroom</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Students actively participate in leadership roles, cultural events, and competitions to enhance overall development.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <ActivityCard icon="🌿" title="Eco Club"        desc="Environmental awareness and sustainability"      delay={0}   />
            <ActivityCard icon="💻" title="Cyber Club"      desc="Digital literacy and technology innovation"     delay={80}  />
            <ActivityCard icon="💡" title="Einstein Club"   desc="Scientific exploration and physics"      delay={160} />
            <ActivityCard icon="🏛️" title="Heritage Club"   desc="Cultural preservation and history"        delay={240} />
          </div>

          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Co-Scholastic Curriculum</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Yoga', 'Arts & Crafts', 'Dance', 'Quiz', 'Karate', 'Archery', 'Physical Education'].map((item) => (
                <Pill key={item} text={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FACILITIES ══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>Our <em className="text-red-600 not-italic">Facilities</em></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: '📱', title: 'Smart Classrooms', desc: 'Digital boards' },
              { icon: '🚌', title: 'Transport', desc: 'Safe facility' },
              { icon: '⚽', title: 'Sports', desc: 'Infrastructure' },
              { icon: '📋', title: 'Activity Clubs', desc: 'Diverse options' },
              { icon: '🛡️', title: 'Safe Campus', desc: 'Secure environment' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl mb-2">{f.icon}</div>
                  <p className="text-sm font-bold text-gray-800">{f.title}</p>
                  <p className="text-xs text-gray-400">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STREAMS (Sr. Secondary detail) ══ */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Classes XI – XII</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Choose Your <em className="text-red-600 not-italic">Stream</em>
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Science */}
            <Reveal direction="left" delay={100}>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 relative overflow-hidden hover:shadow-[0_12px_50px_rgba(185,28,28,0.09)] transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent rounded-l-2xl" />
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>Science Stream</h3>
                <p className="text-xs font-semibold text-red-600 tracking-wide mb-4">PCM · PCB · Computer Science</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Designed for students aspiring to engineering, medicine, research, or technology careers. Rigorous lab work and JEE / NEET foundation coaching included.
                </p>
                <ul className="space-y-2">
                  {['Physics, Chemistry, Mathematics', 'Physics, Chemistry, Biology', 'Computer Science elective', 'JEE / NEET Foundation coaching'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Commerce */}
            <Reveal direction="right" delay={200}>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 relative overflow-hidden hover:shadow-[0_12px_50px_rgba(185,28,28,0.09)] transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-transparent rounded-l-2xl" />
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>Commerce Stream</h3>
                <p className="text-xs font-semibold text-red-600 tracking-wide mb-4">Accountancy · Economics · Business</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Ideal for students interested in business, finance, economics, or management. Builds strong analytical and entrepreneurial thinking from the ground up.
                </p>
                <ul className="space-y-2">
                  {['Accountancy & Business Studies', 'Economics & Statistics', 'Mathematics elective', 'CA / MBA foundation preparation'].map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ══ */}
      <section className="relative bg-red-700 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-red-900/40 blur-[80px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-light text-white mb-4 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Ready to Join <em className="font-bold not-italic">Future School</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-red-100 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Admissions are open for all sections for 2025–26. Limited seats available — apply today.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="px-8 py-3 bg-white text-red-700 text-sm font-bold rounded-lg hover:bg-red-50 hover:shadow-lg transition-all duration-200">
                Apply Now →
              </Link>
              <Link to="/contact" className="px-8 py-3 border-2 border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all duration-200">
                Talk to Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}