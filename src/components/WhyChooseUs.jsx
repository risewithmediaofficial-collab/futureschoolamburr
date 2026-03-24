import { useEffect, useRef, useState } from 'react'

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.12) {
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

/* ─── Feature data ─── */
const features = [
  {
    icon: '🏢',
    title: 'CBSE Affiliated',
    desc: 'Affiliation No. 1930465 — fully aligned with the latest AISSE & AISSCE board standards and curriculum.',
    stat: 'No. 1930465',
    statLabel: 'Affiliation',
  },
  {
    icon: '🌱',
    title: 'Holistic Learning',
    desc: 'A balanced approach integrating academics, universal human values, arts, sports, and personal empowerment.',
    stat: '360°',
    statLabel: 'Development',
  },
  {
    icon: '💻',
    title: 'Smart Classrooms',
    desc: 'Digital boards, projectors, and modern teaching methodologies that make learning engaging and effective.',
    stat: '100%',
    statLabel: 'Digital Rooms',
  },
  {
    icon: '🛡️',
    title: 'Safe Campus',
    desc: 'Secure, CCTV-monitored environment with dedicated transport, medical room, and sports infrastructure.',
    stat: '24/7',
    statLabel: 'Surveillance',
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty',
    desc: 'Highly qualified, experienced teachers committed to personalised mentoring and student success.',
    stat: '200+',
    statLabel: 'Faculty',
  },
  {
    icon: '🏆',
    title: 'Proven Results',
    desc: 'Consistently among the top CBSE schools in Vellore district — year after year.',
    stat: '97.8%',
    statLabel: 'Pass Rate',
  },
  {
    icon: '🚌',
    title: 'Transport Facility',
    desc: 'GPS-tracked buses covering all major routes in and around Ambur for student safety and convenience.',
    stat: '20+',
    statLabel: 'Bus Routes',
  },
  {
    icon: '🎨',
    title: 'Co-Curricular',
    desc: 'Music, dance, drama, sports, and Olympiad programmes to nurture every talent beyond academics.',
    stat: '30+',
    statLabel: 'Activities',
  },
]

/* ─── Comparison rows ─── */
const comparison = [
  ['CBSE Affiliated & Compliant',         true,  true,  false],
  ['Smart Classrooms (100%)',              true,  false, false],
  ['Dedicated Transport Network',          true,  true,  false],
  ['Olympiad & Competition Coaching',      true,  false, false],
  ['Learning Centre (Special Needs)',      true,  false, false],
  ['Career Counselling from Class IX',     true,  true,  false],
  ['24/7 CCTV Surveillance',              true,  true,  false],
  ['Parent Portal & Communication App',   true,  false, false],
]

/* ─── Feature card ─── */
function FeatureCard({ feature, delay }) {
  return (
    <Reveal delay={delay} direction="up">
      <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(185,28,28,0.08)] transition-all duration-300 overflow-hidden h-full flex flex-col gap-4">
        {/* Hover top stripe */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        {/* Icon + stat row */}
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 flex-shrink-0">
            <span className="group-hover:scale-105 transition-transform duration-200 inline-block">
              {feature.icon}
            </span>
          </div>
          <div className="text-right">
            <p className="text-xl font-black text-red-600 leading-none" style={{ fontFamily: "'Georgia', serif" }}>{feature.stat}</p>
            <p className="text-[0.6rem] tracking-widest uppercase text-gray-400 font-semibold mt-0.5">{feature.statLabel}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-base font-bold text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>{feature.title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
        </div>

        {/* Learn more link */}
        <div className="flex items-center gap-1 text-xs font-bold text-red-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          Learn More
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   WHY CHOOSE US
══════════════════════════════════════════ */
export default function WhyChooseUs() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-xs font-bold tracking-widest uppercase text-red-600">Our Difference</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Why Choose<br />
                <em className="text-red-600 not-italic">Future School</em>,<br />
                <strong className="font-bold">Ambur?</strong>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <div className="w-10 h-0.5 bg-red-600" />
            </Reveal>
            <Reveal delay={300}>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                For over 25 years, Future School has been Ambur's most trusted institution — delivering academic excellence, character-building, and a truly holistic education that prepares every student for a world without limits.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex flex-wrap gap-3 pt-1">
                <button className="flex items-center gap-2 px-6 py-3 bg-transparent text-red-700 text-sm font-bold rounded-lg border-2 border-red-700 hover:bg-red-50 hover:shadow-[0_8px_25px_rgba(185,28,28,0.15)] transition-all duration-200">
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="px-6 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all duration-200">
                  Take a Campus Tour
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right — summary card */}
          <Reveal direction="right" delay={200}>
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-[0_8px_50px_rgba(0,0,0,0.07)] p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent rounded-t-2xl" />
              <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-5">At a Glance</p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  ['3,000+', 'Students'],
                  ['200+',   'Faculty'],
                  ['97.8%',  'Pass Rate'],
                  ['25+',    'Years'],
                  ['30+',    'Activities'],
                  ['20+',    'Bus Routes'],
                ].map(([n, l]) => (
                  <div key={l} className="flex items-center gap-3">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-red-600 to-red-300 flex-shrink-0" />
                    <div>
                      <p className="text-xl font-black text-gray-900 leading-none" style={{ fontFamily: "'Georgia', serif" }}>{n}</p>
                      <p className="text-[0.65rem] tracking-widest uppercase text-gray-400 font-semibold">{l}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[['#1', 'in Ambur (CBSE)'], ['25+', 'Years of Trust'], ['3,000+', 'Happy Students'], ['200+', 'Dedicated Faculty']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-5 px-4">
                <span className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURE CARDS ══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">What We Offer</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Everything a Student <em className="text-red-600 not-italic">Needs</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                From state-of-the-art facilities to dedicated mentors — we have built an environment where every student thrives.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">How We Compare</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Future School vs <em className="text-red-600 not-italic">The Rest</em>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
              {/* Table header */}
              <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
                <div className="p-4 col-span-1">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400">Feature</p>
                </div>
                {[
                  { name: 'Future School', highlight: true },
                  { name: 'Other CBSE Schools', highlight: false },
                  { name: 'Generic Schools', highlight: false },
                ].map(({ name, highlight }) => (
                  <div key={name} className={`p-4 text-center ${highlight ? 'bg-red-600' : ''}`}>
                    <p className={`text-xs font-bold ${highlight ? 'text-white' : 'text-gray-500'}`}>{name}</p>
                    {highlight && <span className="text-[0.55rem] text-red-200 tracking-wide">★ Recommended</span>}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {comparison.map(([label, us, other, generic], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-4 border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <div className="p-4 flex items-center">
                    <p className="text-xs font-medium text-gray-700">{label}</p>
                  </div>
                  {[us, other, generic].map((val, j) => (
                    <div key={j} className={`p-4 flex items-center justify-center ${j === 0 ? 'bg-red-50/40' : ''}`}>
                      {val
                        ? <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        : <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                      }
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Parent Voices</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                What <em className="text-red-600 not-italic">Parents Say</em>
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Razia Begum', role: 'Parent · Grade 12', initials: 'RB', quote: 'Future School gave my daughter more than education — it gave her confidence, discipline, and a lifelong love for learning.' },
              { name: 'Mohammed Farooq', role: 'Parent · Grade 9', initials: 'MF', quote: 'The teachers here genuinely care. My son\'s improvement in maths and science over just one year has been remarkable.' },
              { name: 'Priya Venkat', role: 'Parent · Grade 6', initials: 'PV', quote: 'Safe campus, excellent faculty, and so many activities beyond books. We\'re proud to be part of the Future School family.' },
            ].map(({ name, role, initials, quote }, i) => (
              <Reveal key={name} delay={i * 100} direction="up">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-[0_6px_25px_rgba(185,28,28,0.06)] transition-all duration-300">
                  <div className="text-3xl text-red-200 mb-3" style={{ fontFamily: "'Georgia', serif" }}>"</div>
                  <p className="text-sm text-gray-600 leading-relaxed italic mb-5">{quote}</p>
                  <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
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
              Give Your Child the <em className="font-bold not-italic">Best Start</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-red-100 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Join 3,000+ students who have chosen Future School for a brighter, more confident future. Admissions open for 2025–26.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 text-sm font-bold rounded-lg hover:bg-red-50 hover:shadow-lg transition-all duration-200">
                Apply Now →
              </button>
              <button className="px-8 py-3 border-2 border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all duration-200">
                Schedule a Visit
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}