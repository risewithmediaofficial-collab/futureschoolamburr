import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import bnr1 from '../assets/pic-assets/banner-2026-1-1.png'
import bnr2 from '../assets/pic-assets/banner-2026-2-1.png'
import bnr3 from '../assets/pic-assets/banner-2026-3-1.png'

const heroSlides = [
  { kicker: 'Est. 1998 · Ambur', heading: 'Shape Your\nBrightest\nFuture.', sub: 'Future Senior Secondary School — CBSE Affiliated, nurturing excellence for 25 years.', img: bnr1 },
  { kicker: 'Admissions 2026–27', heading: 'Every\nStudent\nBelongs.', sub: 'Smart classrooms, expert faculty, and a campus that inspires discovery every day.', img: bnr2 },
  { kicker: '25 Years of Trust',  heading: 'Academic\nExcellence,\nHolistic Growth.', sub: 'Limited seats available for Classes I–XII. Applications now open.', img: bnr3 },
]

export default function Hero() {
  const [heroIdx, setHeroIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <section className="relative h-[85vh] min-h-[580px] max-h-[850px] overflow-hidden bg-white">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-red-50/30 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full relative z-10 flex items-center">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center w-full pb-10">
            
            {/* Left — Text content */}
            <div className="flex flex-col gap-6">
              <div className="animate-fade-in-up">
                <span className="text-red-700 text-xs tracking-[0.28em] uppercase font-black px-3 py-1 bg-red-50 rounded-full inline-block mb-2">
                  {heroSlides[heroIdx].kicker}
                </span>
                <h1 className="serif text-gray-900 leading-[1.05] tracking-tight whitespace-pre-line mt-4" 
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
                  {heroSlides[heroIdx].heading}
                </h1>
                <p className="text-lg leading-relaxed text-gray-600 font-medium max-w-sm mt-6">
                  {heroSlides[heroIdx].sub}
                </p>
                
                <div className="flex items-center gap-4 mt-10">
                  <Link to="/admissions"
                    className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold text-red-700 transition-all duration-300 bg-transparent border-2 border-red-700 hover:bg-red-50 rounded-xl shadow-lg shadow-red-700/10">
                    Apply for Admission
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Slide dots */}
              <div className="flex items-center gap-3 mt-12">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setHeroIdx(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      i === heroIdx ? 'w-10 bg-red-700' : 'w-4 bg-gray-200 hover:bg-red-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right — Image container */}
            <div className="hidden lg:block relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-up" 
              style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-red-900/10 z-10" />
              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    i === heroIdx ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 -z-10'
                  }`}
                >
                  <img src={slide.img} alt="School" className="w-full h-full object-cover" />
                </div>
              ))}
              
              {/* Soft overlay on corner */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
          </div>
        </div>

        {/* Stats overlay (very slim bottom bar) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 z-20 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 md:gap-12 flex-wrap justify-center sm:justify-start">
              {[['3,000+', 'Students'], ['97.8%', 'Pass Rate'], ['25 yrs', 'Legacy']].map(([n, l]) => (
                <div key={l} className="flex gap-2 md:gap-3 items-center whitespace-nowrap">
                  <span className="serif text-gray-900 text-xl md:text-2xl font-normal">{n}</span>
                  <span className="text-[0.55rem] md:text-[0.6rem] tracking-widest uppercase text-gray-400 font-bold border-l border-gray-200 pl-2 md:pl-3">{l}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-gray-400 text-[0.55rem] md:text-[0.6rem] tracking-widest uppercase font-bold whitespace-nowrap">
                {window.innerWidth < 640 ? 'Admissions Open' : '2026 Admissions Open'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div style={{ background: '#b91c1c' }} className="py-2.5 overflow-hidden">
        <div className="ticker-track flex gap-16 whitespace-nowrap">
          {[...Array(2)].flatMap((_, ri) =>
            ['🏆 District Kabaddi Champions 2025', '📚 97.8% Board Pass Rate 2024', '🔬 5 Students — National Olympiad Top 100', '🎭 State Cultural Fest First Prize', '🥇 Athletics Championship — 3 Gold', '📋 Admissions Open 2026–27 · Limited Seats']
              .map((t, i) => <span key={`${ri}-${i}`} className="text-white text-xs font-semibold tracking-wide flex-shrink-0">{t}</span>)
          )}
        </div>
      </div>
    </>
  )
}