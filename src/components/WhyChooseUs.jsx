import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import { 
  Building2, 
  Sprout, 
  Monitor, 
  ShieldCheck, 
  Users, 
  Trophy, 
  Bus, 
  Palette, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  HelpCircle,
  Star,
  XCircle
} from 'lucide-react'

const features = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'CBSE Affiliated',
    desc: 'Affiliation No. 1930465 — fully aligned with the latest AISSE & AISSCE board standards and curriculum.',
    stat: 'No. 1930465',
    statLabel: 'Affiliation',
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: 'Holistic Learning',
    desc: 'A balanced approach integrating academics, universal human values, arts, sports, and personal empowerment.',
    stat: '360°',
    statLabel: 'Development',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Smart Classrooms',
    desc: 'Digital boards, projectors, and modern teaching methodologies that make learning engaging and effective.',
    stat: '100%',
    statLabel: 'Digital Rooms',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Safe Campus',
    desc: 'Secure, CCTV-monitored environment with dedicated transport, medical room, and sports infrastructure.',
    stat: '24/7',
    statLabel: 'Surveillance',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Faculty',
    desc: 'Highly qualified, experienced teachers committed to personalised mentoring and student success.',
    stat: '200+',
    statLabel: 'Faculty',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Proven Results',
    desc: 'Consistently among the top CBSE schools in Vellore district — year after year.',
    stat: '97.8%',
    statLabel: 'Pass Rate',
  },
  {
    icon: <Bus className="w-6 h-6" />,
    title: 'Transport Facility',
    desc: 'GPS-tracked buses covering all major routes in and around Ambur for student safety and convenience.',
    stat: '20+',
    statLabel: 'Bus Routes',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Co-Curricular',
    desc: 'Music, dance, drama, sports, and Olympiad programmes to nurture every talent beyond academics.',
    stat: '30+',
    statLabel: 'Activities',
  },
]

const comparisonData = [
  { label: 'CBSE Affiliated & Compliant', us: true, others: true },
  { label: 'Smart Classrooms (100%)', us: true, others: false },
  { label: 'Dedicated Transport Network', us: true, others: true },
  { label: 'Olympiad & Competition Coaching', us: true, others: false },
  { label: 'Learning Centre (Special Needs)', us: true, others: false },
  { label: 'Career Counselling from Class IX', us: true, others: true },
  { label: '24/7 CCTV Surveillance', us: true, others: true },
  { label: 'Parent Portal & Communication App', us: true, others: false },
]

export default function WhyChooseUs() {
  return (
    <main className="bg-gray-50 flex flex-col gap-16 md:gap-24 overflow-hidden pb-20">

      {/* ══ HERO HEADER ══ */}
      <section className="bg-white border-b border-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Our Difference
             </div>
             <h1 className="serif text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-tight mb-8">
               Why Choose <br />
               <span className="text-[#c0392b]">Future School?</span>
             </h1>
             <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mb-8">
               For over 25 years, Future School has been Ambur's most trusted institution — delivering academic excellence and character building.
             </p>
             <div className="flex flex-wrap gap-4">
                <Link to="/apply" className="px-10 py-4 bg-[#c0392b] text-white font-bold text-[0.7rem] tracking-widest uppercase rounded-xl shadow-xl shadow-red-900/10 hover:bg-[#a93226] transition-all hover:-translate-y-1">
                   Apply Now
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-white border border-gray-100 text-gray-500 font-bold text-[0.7rem] tracking-widest uppercase rounded-xl hover:border-[#c0392b] hover:text-[#c0392b] transition-all">
                   Contact Us
                </Link>
             </div>
          </Reveal>

          <Reveal delay={200} direction="right">
             <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#c0392b]" />
                <p className="text-[0.6rem] font-black uppercase text-[#c0392b] tracking-widest mb-6">Institution Snapshot</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                   {[
                     { l: 'Students', n: '5,000+' },
                     { l: 'Success Rate', n: '98%' },
                     { l: 'Establishment', n: '1998' },
                     { l: 'Faculty', n: '200+' },
                   ].map(s => (
                     <div key={s.l}>
                        <p className="serif text-3xl text-gray-900 leading-none mb-1">{s.n}</p>
                        <p className="text-[0.55rem] font-bold text-gray-400 uppercase tracking-widest">{s.l}</p>
                     </div>
                   ))}
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* ══ CORE FEATURES ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <Reveal>
              <h2 className="serif text-3xl md:text-5xl text-gray-900 mb-6">Everything Your Child Needs</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">From modern facilities to dedicated mentors — we have built an environment where every student can excel.</p>
           </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {features.map((f, i) => (
             <Reveal key={f.title} delay={i * 50}>
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-red-600/30 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 group h-full flex flex-col">
                   <div className="flex items-start justify-between mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-red-50/50 text-[#c0392b] flex items-center justify-center transition-colors group-hover:bg-[#c0392b] group-hover:text-white border border-red-50">
                         {f.icon}
                      </div>
                      <div className="text-right">
                         <p className="serif text-2xl text-[#c0392b] leading-none">{f.stat}</p>
                         <p className="text-[0.5rem] font-black text-gray-300 uppercase tracking-widest mt-1.5">{f.statLabel}</p>
                      </div>
                   </div>
                   <h3 className="serif text-xl text-gray-900 mb-3">{f.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 flex-1">{f.desc}</p>
                   <Link to="/about" className="inline-flex items-center gap-2 text-[0.6rem] font-black uppercase tracking-[0.15em] text-gray-300 group-hover:text-[#c0392b] transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </Reveal>
           ))}
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <Reveal>
            <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-sm">
               <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50/30">
                  <div>
                    <h2 className="serif text-3xl text-gray-900">Why We <span className="text-[#c0392b]">Lead</span></h2>
                    <p className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">Premium Standards vs Industry Benchmarks</p>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#c0392b]" />
                        <span className="text-[0.65rem] font-bold text-gray-900 uppercase tracking-widest">Future School</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                        <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">Standard Norms</span>
                     </div>
                  </div>
               </div>
               
               <div className="divide-y divide-gray-50">
                  {comparisonData.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-[1fr_auto_auto] items-center p-6 md:px-12 hover:bg-gray-50 transition-colors">
                       <span className="text-sm font-medium text-gray-700">{row.label}</span>
                       <div className="w-16 flex justify-center">
                          {row.us ? <CheckCircle2 className="w-5 h-5 text-[#c0392b]" /> : <div className="w-5 h-5 rounded-full border border-gray-200" />}
                       </div>
                       <div className="w-16 flex justify-center">
                          {row.others ? <CheckCircle2 className="w-5 h-5 text-gray-200" /> : <XCircle className="w-5 h-5 text-gray-200" />}
                       </div>
                    </div>
                  ))}
               </div>

               <div className="p-8 bg-gray-50/50 text-center">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Based on local educational benchmarks & Vellore district rankings
                  </p>
               </div>
            </div>
         </Reveal>
      </section>

      {/* ══ TESTIMONIALS (Minimal) ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
           {[
             { name: 'Razia Begum', role: 'Parent · Grade 12', quote: 'Confidence, discipline, and a lifelong love for learning.' },
             { name: 'Mohammed Farooq', role: 'Parent · Grade 9', quote: 'The teachers here genuinely care for every student.' },
             { name: 'Priya Venkat', role: 'Parent · Grade 6', quote: 'Safe campus and excellent beyond-book activities.' },
           ].map((t, i) => (
             <Reveal key={i} delay={i * 100}>
                <div className="bg-white border border-gray-100 rounded-3xl p-8 relative shadow-sm">
                   <div className="absolute top-8 right-8 text-red-50">
                      <Star className="w-12 h-12 fill-current" />
                   </div>
                   <p className="text-gray-600 font-medium italic mb-8 leading-relaxed">"{t.quote}"</p>
                   <div>
                      <p className="serif text-lg text-gray-900 leading-none mb-2">{t.name}</p>
                      <p className="text-[0.6rem] font-bold text-[#c0392b] uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
             </Reveal>
           ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="text-center pt-10 pb-10">
         <Reveal>
            <div className="max-w-2xl mx-auto bg-[#c0392b] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-red-900/30">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
               <div className="relative z-10 flex flex-col items-center">
                  <h2 className="serif text-2xl md:text-4xl mb-3">Ready to Start?</h2>
                  <p className="text-red-100 font-medium mb-8 max-w-sm mx-auto text-sm">Join a community dedicated to academic greatness and personal growth.</p>
                  <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#c0392b] font-bold text-[0.65rem] uppercase tracking-widest rounded-xl hover:bg-red-50 transition-all hover:scale-105 active:scale-95">
                     Secure Your Seat <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </Reveal>
      </section>

    </main>
  )
}