import { useEffect, useRef, useState } from 'react'

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.1) {
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

/* ─── Animated counter ─── */
function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useReveal(0.3)

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

/* ─── Achievement data ─── */
const achievements = [
  {
    year: '2025',
    emoji: '🏆',
    category: 'Academics',
    title: '97.8% Board Pass Rate',
    desc: 'Highest CBSE board pass rate in Vellore district for 2025, with 25 students scoring above 90%.',
    highlight: true,
  },
  {
    year: '2025',
    emoji: '🥇',
    category: 'Sports',
    title: 'District Kabaddi Champions',
    desc: 'Under-17 team won the district championship, advancing to the state-level competition.',
    highlight: false,
  },
  {
    year: '2024',
    emoji: '🔬',
    category: 'Olympiad',
    title: 'National Science Olympiad',
    desc: '5 students ranked in the top 100 nationally. One student secured All India Rank 12.',
    highlight: false,
  },
  {
    year: '2024',
    emoji: '🎓',
    category: 'Academics',
    title: '100% University Admissions',
    desc: 'All Class XII graduates secured admissions in top universities and professional colleges.',
    highlight: false,
  },
  {
    year: '2024',
    emoji: '🧮',
    category: 'Olympiad',
    title: 'State Math Olympiad — 3 Medals',
    desc: '1 gold, 2 silver medals at the Tamil Nadu State Mathematics Olympiad 2024.',
    highlight: false,
  },
  {
    year: '2023',
    emoji: '🏅',
    category: 'Sports',
    title: 'Athletics State Championship',
    desc: 'Won 3 gold medals in the 100m sprint, long jump, and 4×100m relay at state level.',
    highlight: false,
  },
  {
    year: '2023',
    emoji: '🌟',
    category: 'Recognition',
    title: 'Best CBSE School — Vellore District',
    desc: 'Awarded by CBSE South India Regional Office for outstanding academic results and infrastructure.',
    highlight: true,
  },
  {
    year: '2023',
    emoji: '💻',
    category: 'Technology',
    title: 'National Coding Hackathon — Runners Up',
    desc: 'Team of Class XI students placed 2nd at the National School Coding Challenge, New Delhi.',
    highlight: false,
  },
  {
    year: '2022',
    emoji: '🎭',
    category: 'Arts',
    title: 'State Cultural Fest — First Prize',
    desc: 'Won first place in the Inter-School Drama and Dance competitions at the TN State Cultural Fest.',
    highlight: false,
  },
  {
    year: '2022',
    emoji: '📜',
    category: 'Recognition',
    title: 'ISO Certified Institution',
    desc: 'Received ISO 9001:2015 certification for quality standards in education and administration.',
    highlight: false,
  },
  {
    year: '2021',
    emoji: '🌱',
    category: 'Environment',
    title: 'Green School Award',
    desc: 'Recognised by the Tamil Nadu government for eco-friendly campus and sustainability initiatives.',
    highlight: false,
  },
  {
    year: '2020',
    emoji: '🤝',
    category: 'Recognition',
    title: 'Community Excellence Award',
    desc: 'Honoured by the Ambur Municipal Corporation for contributions to local education and community.',
    highlight: false,
  },
]

const years   = ['All', '2025', '2024', '2023', '2022', '2021', '2020']
const catColors = {
  Academics:    'bg-red-600 text-white',
  Sports:       'bg-green-600 text-white',
  Olympiad:     'bg-blue-600 text-white',
  Recognition:  'bg-amber-500 text-white',
  Technology:   'bg-cyan-600 text-white',
  Arts:         'bg-purple-600 text-white',
  Environment:  'bg-emerald-600 text-white',
}

/* ─── Achievement card ─── */
function AchCard({ item, delay, side }) {
  const [ref, visible] = useReveal(0.08)
  const catCls = catColors[item.category] || 'bg-gray-600 text-white'

  return (
    <div
      ref={ref}
      className={`relative bg-white border rounded-2xl p-6 overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(185,28,28,0.08)] ${
        item.highlight ? 'border-red-200 shadow-[0_4px_24px_rgba(185,28,28,0.08)]' : 'border-gray-100'
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : (side === 'left' ? 'translateX(-40px)' : side === 'right' ? 'translateX(40px)' : 'translateY(30px)'),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, box-shadow 0.3s, translate 0.3s`,
      }}
    >
      {/* Top stripe */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-transparent ${item.highlight ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`} />

      {/* Star badge for highlights */}
      {item.highlight && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 border border-red-100">
          <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[0.6rem] font-bold text-red-600">Featured</span>
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Emoji icon */}
        <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
          <span className="group-hover:scale-105 transition-transform duration-200">{item.emoji}</span>
        </div>

        <div className="flex-1 min-w-0">
          {/* Year + category */}
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-xs font-black text-red-600" style={{ fontFamily: "'Georgia', serif" }}>{item.year}</span>
            <span className={`px-2 py-0.5 rounded-full text-[0.6rem] font-bold ${catCls}`}>{item.category}</span>
          </div>
          <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1.5" style={{ fontFamily: "'Georgia', serif" }}>
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Timeline item (desktop alternate layout) ─── */
function TimelineItem({ item, idx }) {
  const isLeft = idx % 2 === 0
  const [ref, visible] = useReveal(0.1)
  const catCls = catColors[item.category] || 'bg-gray-600 text-white'

  return (
    <div ref={ref} className={`relative grid grid-cols-2 gap-8 items-center ${isLeft ? '' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ease ${idx * 80}ms, transform 0.7s ease ${idx * 80}ms`,
        transform: visible ? 'none' : 'translateY(24px)',
      }}
    >
      {/* Left card */}
      <div className={`${isLeft ? 'block' : 'invisible'}`}>
        {isLeft && (
          <div className="bg-white border border-gray-100 rounded-2xl p-5 text-right hover:shadow-[0_8px_30px_rgba(185,28,28,0.08)] transition-shadow duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
            <div className="flex items-center justify-end gap-2 mb-2 flex-wrap">
              <span className={`px-2 py-0.5 rounded-full text-[0.6rem] font-bold ${catCls}`}>{item.category}</span>
              <span className="text-xs font-black text-red-600">{item.year}</span>
            </div>
            <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div className={`w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center text-base ${item.highlight ? 'bg-red-600' : 'bg-white border-red-200'}`}>
          <span>{item.emoji}</span>
        </div>
      </div>

      {/* Right card */}
      <div className={`${!isLeft ? 'block' : 'invisible'}`}>
        {!isLeft && (
          <div className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-[0_8px_30px_rgba(185,28,28,0.08)] transition-shadow duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-black text-red-600">{item.year}</span>
              <span className={`px-2 py-0.5 rounded-full text-[0.6rem] font-bold ${catCls}`}>{item.category}</span>
            </div>
            <h4 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   ACHIEVEMENTS PAGE
══════════════════════════════════════════ */
export default function Achievements() {
  const [activeYear, setActiveYear] = useState('All')
  const [view, setView] = useState('grid') // 'grid' | 'timeline'

  const filtered = activeYear === 'All'
    ? achievements
    : achievements.filter((a) => a.year === activeYear)

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
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Our Pride</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Achievements</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
              A proud legacy of academic excellence, sporting glory, creative brilliance, and national recognition — year after year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ ANIMATED COUNTERS ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[
              { target: 97, suffix: '%', label: 'Board Pass Rate' },
              { target: 50, suffix: '+', label: 'Awards Won' },
              { target: 12, suffix: '',  label: 'Olympiad Medals' },
              { target: 25, suffix: '+', label: 'Years of Excellence' },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="flex flex-col items-center py-6 px-4">
                <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                  <Counter target={target} suffix={suffix} />
                </span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FILTER + VIEW TOGGLE ══ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Controls row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            {/* Year filter */}
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveYear(y)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                      activeYear === y
                        ? 'bg-red-600 text-white border-red-600 shadow-[0_4px_16px_rgba(185,28,28,0.3)]'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* View toggle */}
            <Reveal>
              <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                {[
                  { id: 'grid', icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" strokeLinecap="round" strokeLinejoin="round" /> },
                  { id: 'timeline', icon: <><path d="M12 2v20M6 6h12M6 18h12M4 12h16" strokeLinecap="round" strokeLinejoin="round" /></> },
                ].map(({ id, icon }) => (
                  <button
                    key={id}
                    onClick={() => setView(id)}
                    className={`p-2 rounded-md transition-all duration-200 ${view === id ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-red-600'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">{icon}</svg>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── GRID VIEW ── */}
          {view === 'grid' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item, i) => (
                <AchCard key={item.title} item={item} delay={i * 65} side="up" />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-3 text-center py-16">
                  <p className="text-4xl mb-3">🏆</p>
                  <p className="text-gray-400 text-sm">No achievements found for this year.</p>
                </div>
              )}
            </div>
          )}

          {/* ── TIMELINE VIEW ── */}
          {view === 'timeline' && (
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical center line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-300 to-transparent -translate-x-1/2" />

              {/* Mobile: just stack */}
              <div className="flex flex-col gap-5 md:hidden">
                {filtered.map((item, i) => (
                  <AchCard key={item.title} item={item} delay={i * 65} side="up" />
                ))}
              </div>

              {/* Desktop: alternating */}
              <div className="hidden md:flex flex-col gap-8">
                {filtered.map((item, i) => (
                  <TimelineItem key={item.title} item={item} idx={i} />
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-4xl mb-3">🏆</p>
                  <p className="text-gray-400 text-sm">No achievements found for this year.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ══ TROPHY SHOWCASE ══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Highlights</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Categories of <em className="text-red-600 not-italic">Excellence</em>
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: '📚', label: 'Academics',    count: '15+ Awards' },
              { emoji: '⚽', label: 'Sports',        count: '20+ Medals' },
              { emoji: '🔬', label: 'Olympiads',     count: '12 Medals'  },
              { emoji: '🎭', label: 'Arts',           count: '8 Prizes'   },
              { emoji: '💻', label: 'Technology',    count: '5 Awards'   },
              { emoji: '🌱', label: 'Environment',   count: '3 Awards'   },
            ].map(({ emoji, label, count }, i) => (
              <Reveal key={label} delay={i * 80} direction="up">
                <div className="group bg-white border border-gray-100 rounded-2xl p-5 text-center hover:shadow-[0_6px_25px_rgba(185,28,28,0.06)] transition-all duration-300">
                  <div className="text-3xl mb-2 group-hover:scale-105 transition-transform duration-200">{emoji}</div>
                  <p className="text-xs font-bold text-gray-800">{label}</p>
                  <p className="text-[0.65rem] text-red-500 font-semibold mt-0.5">{count}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative bg-red-700 py-14 md:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-3 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Be Part of Our <em className="font-bold not-italic">Next Achievement</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-red-100 text-sm mb-7 max-w-md mx-auto leading-relaxed">
              Join Future School and write your own success story. Admissions open for 2025–26.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 text-sm font-bold rounded-lg hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                Apply Now →
              </button>
              <button className="px-8 py-3 border-2 border-white/50 text-white text-sm font-bold rounded-lg hover:bg-white/10 transition-all duration-200">
                View Programs
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}