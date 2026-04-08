import { Reveal } from '../../utils/reveal'
import { Users, GraduationCap, Award, Target } from 'lucide-react'

const stats = [
  { icon: <Users className="w-5 h-5" />, n: '2,000+', l: 'Students Enrolled' },
  { icon: <Award className="w-5 h-5" />, n: '97.8%', l: 'Board Pass Rate' },
  { icon: <GraduationCap className="w-5 h-5" />, n: '30+', l: 'Faculty Members' },
  { icon: <Target className="w-5 h-5" />, n: '11 yrs', l: 'of Excellence' },
]

export default function StatsBand() {
  return (
    <section className="bg-[#c0392b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-800 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map(({ icon, n, l }, i) => (
            <Reveal key={l} delay={i * 100}>
              <div className="flex flex-col items-center py-10 px-6 gap-2 group transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-red-50 group-hover:bg-white group-hover:text-[#c0392b] transition-all duration-300 mb-2">
                   {icon}
                </div>
                <span className="serif text-3xl md:text-5xl text-white tracking-tight">{n}</span>
                <span className="text-[0.55rem] tracking-widest uppercase font-black text-red-100/40 text-center">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
