import { Reveal } from '../../utils/reveal'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-[10rem] text-red-600/5 serif pointer-events-none select-none">“</div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.6rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-10 font-sans mx-auto">
             Parent Voices
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="serif text-3xl md:text-5xl text-gray-900 leading-tight italic">
            "Future School gave our children more than an education — it gave them confidence, discipline, and a lifelong love for learning."
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg bg-[#c0392b] shadow-xl shadow-red-900/20">
              R
            </div>
            <div>
              <p className="text-gray-900 text-sm font-bold tracking-tight">Razia Begum</p>
              <p className="text-[0.62rem] tracking-widest uppercase font-black text-gray-400 mt-1">Parent · Grade 12 Student</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
