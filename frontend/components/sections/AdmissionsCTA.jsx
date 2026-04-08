import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'
import { ArrowRight } from 'lucide-react'

export default function AdmissionsCTA() {
  return (
    <section className="py-24 md:py-28 relative overflow-hidden" style={{ background: '#fafaf8' }}>
      {/* Ghost text */}
      <div className="absolute -bottom-6 right-0 pointer-events-none select-none hidden lg:block serif font-normal leading-none"
        style={{ fontSize: 'clamp(6rem, 14vw, 14rem)', color: 'rgba(192,57,43,0.04)' }}>2025</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[1.2fr_1fr] gap-16 items-center relative z-10">
        <div className="flex flex-col gap-6">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-2 font-sans w-fit">
                Open Admissions
             </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-gray-900 leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}>
              Shape Your Child's<br /><span className="text-[#c0392b]">Brightest Future.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-black text-lg md:text-xl leading-relaxed max-w-sm font-medium">
              Applications are now open for 2026–27. Limited seats available across all grades — secure your spot today.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/admissions"
                className="inline-flex items-center gap-3 px-10 py-5 text-[0.7rem] font-bold text-white transition-all duration-200 hover:shadow-xl hover:-translate-y-1 rounded-xl uppercase tracking-widest bg-[#c0392b] shadow-red-900/10 hover:bg-[#a93226]">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 text-[0.75rem] font-bold transition-all duration-200 hover:bg-white hover:shadow-lg rounded-xl uppercase tracking-widest border border-gray-100 text-black hover:text-[#c0392b] hover:border-[#c0392b]">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={100}>
          <div className="grid grid-cols-2 gap-4">
            {[['📅', 'Deadline', 'June 30, 2026'], ['💳', 'App. Fee', '₹500'], ['📚', 'Classes', 'I – XII'], ['✅', 'Affiliation', 'CBSE Board']].map(([icon, label, val]) => (
              <div key={label} className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl group hover:border-[#c0392b]/30 transition-all duration-300 hover:shadow-lg shadow-[#c0392b]/5">
                <span className="text-3xl transition-transform group-hover:scale-110 duration-500">{icon}</span>
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase font-black text-gray-700 group-hover:text-[#c0392b] transition-colors">{label}</p>
                  <p className="serif text-base text-gray-900 mt-1">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
