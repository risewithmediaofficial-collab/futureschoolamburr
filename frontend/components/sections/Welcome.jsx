import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'
import { ArrowRight, Sparkles, ShieldCheck, Users, GraduationCap, Clock } from 'lucide-react'
import bnrWelcome from '../../assets/pic-assets/Secondary.jpg'

export default function Welcome() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image Composite */}
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative group">
                <img src={bnrWelcome} alt="School Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 p-4 md:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                   <p className="text-[0.6rem] font-black uppercase tracking-widest text-red-50 mb-1">Ambur, Tamil Nadu</p>
                   <p className="serif text-lg text-white leading-tight">Future Senior Secondary School</p>
                </div>
              </div>

              {/* Stats Floating Card */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white border border-gray-100 rounded-3xl p-6 shadow-2xl flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-xl bg-[#c0392b] flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                   <p className="serif text-2xl text-gray-900 leading-none">CBSE</p>
                   <p className="text-[0.55rem] font-bold text-gray-400 uppercase tracking-widest mt-2 px-2 py-0.5 bg-gray-50 rounded-full border border-gray-100">Aff. No. 1930465</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Content */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-bold uppercase tracking-widest rounded-full border border-red-50">
                <Sparkles className="w-3.5 h-3.5" /> Welcome to Future
              </div>
            </Reveal>

            <Reveal delay={100}>
               <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                 Where Every Child <br />
                 <span className="text-[#c0392b]">Finds Their Edge.</span>
               </h2>
            </Reveal>

            <Reveal delay={200}>
               <div className="space-y-4 text-black text-base md:text-lg leading-relaxed font-medium">
                  <p>
                    Future Senior Secondary School has been Ambur's most trusted institution since 1998. Affiliated with CBSE, we shape confident, compassionate and capable individuals ready for tomorrow's world.
                  </p>
                  <p>
                    Dedicated faculty, modern smart classrooms, and a student-Centered philosophy create an environment where every child thrives — academically, socially and personally.
                  </p>
               </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-100">
                {[
                  { icon: <Users className="w-4 h-4 text-[#c0392b]" />, n: '2,000+', l: 'Students' },
                  { icon: <GraduationCap className="w-4 h-4 text-[#c0392b]" />, n: '30+', l: 'Faculty' },
                  { icon: <Clock className="w-4 h-4 text-[#c0392b]" />, n: '11+', l: 'Years' },
                ].map(({ icon, n, l }) => (
                  <div key={l} className="flex flex-col gap-1 items-center md:items-start">
                    <div className="flex items-center gap-2 mb-1">
                       {icon}
                       <span className="serif text-2xl text-gray-900">{n}</span>
                    </div>
                    <span className="text-[0.65rem] font-bold text-gray-800 uppercase tracking-widest">{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4 pt-4">
                 <Link to="/about" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c0392b] text-white font-bold text-[0.65rem] tracking-widest uppercase rounded-xl shadow-xl shadow-red-900/10 hover:bg-[#a93226] transition-all hover:-translate-y-1">
                   Explore More 
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
