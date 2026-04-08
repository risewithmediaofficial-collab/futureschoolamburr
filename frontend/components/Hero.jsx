import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import bnr1 from '../assets/pic-assets/banner-2026-1-1.png'
import bnr2 from '../assets/pic-assets/banner-2026-2-1.png'
import bnr3 from '../assets/pic-assets/banner-2026-3-1.png'

const heroSlides = [
  { kicker: 'Est. 2011 · Ambur', heading: 'Shape Your Brightest Future.', sub: 'Future Senior Secondary School — CBSE Affiliated, nurturing excellence for 11 years.', img: bnr1 },
  { kicker: 'Admissions 2026–27', heading: 'Every Student Belongs.', sub: 'Smart classrooms, expert faculty, and a campus that inspires discovery every day.', img: bnr2 },
  { kicker: '11 Years of Trust',  heading: 'Academic Excellence, Holistic Growth.', sub: 'Limited seats available for Classes I–XII. Applications now open.', img: bnr3 },
]

export default function Hero() {
  const [heroIdx, setHeroIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white pb-16 pt-4 md:pt-8 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          {/* Top — Text content */}
          <div className="flex flex-col items-center max-w-5xl mb-12 sm:mb-16">
            <Reveal direction="up" delay={0}>
              <span className="text-[#c0392b] text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase font-black px-4 py-2 bg-red-50/50 rounded-full inline-block mb-6 border border-red-50 shadow-sm transition-all duration-300">
                {heroSlides[heroIdx].kicker}
              </span>
            </Reveal>

            <Reveal direction="up" delay={100}>
              {/* Force text into a single line on lg sizes by preventing wrap and scaling text, or just letting it flow naturally in a wide container */}
              <h1 className="serif text-gray-900 leading-[1.1] tracking-tight mt-2 mb-6" 
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)' }}>
                {heroSlides[heroIdx].heading}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-medium max-w-2xl mx-auto">
                {heroSlides[heroIdx].sub}
              </p>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div className="flex items-center gap-4 mt-10">
                <Link to="/apply"
                  className="btn-micro inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[0.7rem] tracking-widest uppercase font-black relative overflow-hidden h-12 px-10 py-2 bg-gradient-to-r from-[#c0392b] to-[#e74c3c] text-white shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300">
                  Apply for Admission
                  <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>

            {/* Slide dots */}
            <Reveal direction="up" delay={400}>
              <div className="flex justify-center gap-3 mt-10">
                {heroSlides.map((_, i) => (
                  <button key={i} onClick={() => setHeroIdx(i)} aria-label={`Go to slide ${i}`}
                    className={`h-1 transition-all duration-500 rounded-full ${
                      i === heroIdx ? 'w-12 bg-[#c0392b]' : 'w-4 bg-gray-200 hover:bg-red-200'
                    }`}
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Bottom — Image container */}
          <Reveal direction="up" delay={500} className="w-full">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-sm bg-gray-100 group">
              <div className="absolute inset-0 bg-red-900/5 z-10 group-hover:bg-transparent transition-colors duration-700" />
              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${
                    i === heroIdx ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 -z-10'
                  }`}
                >
                  <img src={slide.img} alt="School Highlights" className="w-full h-full object-cover object-center" />
                </div>
              ))}
              
              {/* Soft overlay on corner */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
              
              {/* Image specific badges/tags can go here */}
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* Stats overlay (Separate band below the hero) */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 md:gap-16 flex-wrap justify-center sm:justify-start">
            {[['2,000+', 'Students'], ['97.8%', 'Pass Rate'], ['11 yrs', 'Legacy']].map(([n, l]) => (
              <Reveal key={l} direction="up" delay={100}>
                <div className="flex gap-2 md:gap-3 items-center whitespace-nowrap">
                  <span className="serif text-gray-900 text-2xl md:text-3xl font-medium">{n}</span>
                  <span className="text-[0.6rem] md:text-xs tracking-widest uppercase text-gray-400 font-bold border-l border-gray-200 pl-2 md:pl-3">{l}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="left" delay={200}>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-emerald-700 text-[0.6rem] md:text-xs tracking-widest uppercase font-bold whitespace-nowrap">
                2026 Admissions Open
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="bg-[#c0392b] py-3 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap">
          {[...Array(2)].flatMap((_, ri) =>
            ['🏆 District Kabaddi Champions 2025', '📚 97.8% Board Pass Rate 2024', '🔬 5 Students — National Olympiad Top 100', '🎭 State Cultural Fest First Prize', '🥇 Athletics Championship — 3 Gold', '📋 Admissions Open 2026–27 · Limited Seats']
              .map((t, i) => <span key={`${ri}-${i}`} className="text-white text-[0.65rem] font-bold tracking-[0.1em] uppercase flex-shrink-0">{t}</span>)
          )}
        </div>
      </div>
    </>
  )
}