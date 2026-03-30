import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'
import { BookOpen, GraduationCap, Microscope, Target, ArrowRight, Zap } from 'lucide-react'

const programs = [
  { 
    icon: <BookOpen className="w-6 h-6" />, 
    grade: 'I – V',     
    title: 'Primary Level',          
    desc: 'Foundational literacy, numeracy, and creative inquiry through hands-on activity.', 
    num: '01' 
  },
  { 
    icon: <Microscope className="w-6 h-6" />, 
    grade: 'VI – VIII', 
    title: 'Middle School',    
    desc: 'Science labs, advanced mathematics, computing, and structured critical thinking.', 
    num: '02' 
  },
  { 
    icon: <Target className="w-6 h-6" />, 
    grade: 'IX – X',    
    title: 'Secondary',        
    desc: 'Board-focused preparation with personal mentoring and continuous assessment.',       
    num: '03' 
  },
  { 
    icon: <GraduationCap className="w-6 h-6" />, 
    grade: 'XI – XII',  
    title: 'Senior Secondary', 
    desc: 'Science & Commerce with JEE / NEET coaching and university counselling.',            
    num: '04' 
  },
]

export default function ProgrammesBand() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
              <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6 font-sans">
                    <Zap className="w-3.5 h-3.5" /> Academics
                  </div>
                  <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                    Our Academic <span className="text-[#c0392b]">Journey.</span>
                  </h2>
              </Reveal>
           </div>
           <Reveal delay={100}>
              <p className="text-gray-500 text-sm md:text-base font-medium max-w-sm leading-relaxed">
                 A seamless CBSE journey designed carefully from foundational primary years to senior secondary excellence.
              </p>
           </Reveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
           {programs.map((p, i) => (
             <Reveal key={p.num} delay={i * 80}>
               <div className="group bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:bg-white hover:border-[#c0392b]/30 hover:shadow-xl hover:shadow-[#c0392b]/5 transition-all duration-300 h-full flex flex-col">
                  {/* Icon & Number */}
                   <div className="flex items-start justify-between mb-10">
                      <span className="serif text-5xl text-gray-100 group-hover:text-[#c0392b]/10 transition-colors">
                        {p.num}
                      </span>
                      <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-[#c0392b] group-hover:bg-red-50 group-hover:text-[#c0392b] group-hover:border-[#c0392b] shadow-sm transition-all duration-300 group-hover:-translate-y-1">
                         {p.icon}
                      </div>
                   </div>

                   {/* Body Content */}
                   <div className="flex-1">
                      <p className="text-[0.6rem] font-black uppercase text-gray-900 tracking-widest mb-3">{p.grade}</p>
                      <h3 className="serif text-xl text-gray-900 mb-4">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{p.desc}</p>
                   </div>

                  {/* Link Foot */}
                   <div className="mt-8 pt-6 border-t border-gray-100">
                     <Link to="/programs" className="inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#c0392b] transition-colors">
                        Learn More 
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                     </Link>
                   </div>
               </div>
             </Reveal>
           ))}
        </div>

      </div>
    </section>
  )
}
