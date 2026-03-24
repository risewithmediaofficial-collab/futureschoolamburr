import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'

export default function AdmissionsCTA() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden" style={{ background: '#fafaf8' }}>
      {/* Ghost text */}
      <div className="absolute -bottom-6 right-0 pointer-events-none select-none hidden lg:block serif font-normal leading-none"
        style={{ fontSize: 'clamp(6rem, 14vw, 14rem)', color: 'rgba(192,57,43,0.04)' }}>2025</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center relative z-10">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#c0392b' }}>Admissions 2025–26</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif font-normal leading-[1.02]" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#111' }}>
              Shape Your Child's<br /><span style={{ color: '#c0392b' }}>Brightest Future.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-sm font-light leading-relaxed max-w-sm" style={{ color: '#777' }}>
              Applications are now open for 2026–27. Limited seats available across all grades — secure your spot today.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:shadow-lg"
                style={{ background: '#c0392b' }}>
                Apply Now →
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-200 hover:bg-gray-100"
                style={{ border: '1.5px solid #ddd', color: '#444' }}>
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={100}>
          <div className="grid grid-cols-2 gap-3">
            {[['📅', 'Deadline', 'June 30, 2026'], ['💳', 'App. Fee', '₹500'], ['📚', 'Classes', 'I – XII'], ['✅', 'Affiliation', 'CBSE Board']].map(([icon, label, val]) => (
              <div key={label} className="flex items-center gap-3 p-5" style={{ border: '1px solid #e5e5e0' }}>
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-[0.56rem] tracking-[0.2em] uppercase font-semibold" style={{ color: '#bbb' }}>{label}</p>
                  <p className="text-sm font-bold mt-0.5" style={{ color: '#111' }}>{val}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
