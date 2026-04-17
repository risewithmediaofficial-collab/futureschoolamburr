import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import { Trophy, Award, Microscope, GraduationCap, Calculator, Dumbbell, Star, Laptop, Palette, Leaf, Heart, ArrowRight, Zap, Target, BookOpen, Clock } from 'lucide-react'

/* ─── Achievement data ─── */
const achievements = [
  {
    year: '2025',
    icon: <Target className="w-6 h-6 text-red-600" />,
    category: 'Academics',
    title: '97.8% Board Pass Rate',
    desc: 'Highest CBSE board pass rate in Vellore district for 2025, with 25 students scoring above 90%.',
    highlight: false,
  },
  {
    year: '2025',
    icon: <Dumbbell className="w-6 h-6 text-red-600" />,
    category: 'Sports',
    title: 'District Kabaddi Champions',
    desc: 'Under-17 team won the district championship, advancing to the state-level competition.',
    highlight: false,
  },
  {
    year: '2025',
    icon: <Calculator className="w-6 h-6 text-red-600" />,
    category: 'Olympiad',
    title: 'Maths Olympiad State Rank',
    desc: 'Student achieved outstanding state ranking in the Mathematics Olympiad 2025-26.',
    highlight: false,
  },
  {
    year: '2024',
    icon: <Microscope className="w-6 h-6 text-red-600" />,
    category: 'Olympiad',
    title: 'National Science Olympiad',
    desc: '5 students ranked in the top 100 nationally. One student secured All India Rank 12.',
    highlight: false,
  },
  {
    year: '2024',
    icon: <GraduationCap className="w-6 h-6 text-red-600" />,
    category: 'Academics',
    title: '100% University Admissions',
    desc: 'All Class XII graduates secured admissions in top universities and professional colleges.',
    highlight: false,
  },
  {
    year: '2024',
    icon: <Calculator className="w-6 h-6 text-red-600" />,
    category: 'Olympiad',
    title: 'State Math Olympiad — 3 Medals',
    desc: '1 gold, 2 silver medals at the Tamil Nadu State Mathematics Olympiad 2024.',
    highlight: false,
  },
  {
    year: '2023',
    icon: <Trophy className="w-6 h-6 text-red-600" />,
    category: 'Sports',
    title: 'Athletics State Championship',
    desc: 'Won 3 gold medals in the 100m sprint, long jump, and 4×100m relay at state level.',
    highlight: false,
  },
  {
    year: '2023',
    icon: <Star className="w-6 h-6 text-red-600" />,
    category: 'Recognition',
    title: 'Best CBSE School — Vellore District',
    desc: 'Awarded by CBSE South India Regional Office for outstanding academic results and infrastructure.',
    highlight: false,
  },
  {
    year: '2023',
    icon: <Laptop className="w-6 h-6 text-red-600" />,
    category: 'Technology',
    title: 'National Coding Hackathon — Runners Up',
    desc: 'Team of Class XI students placed 2nd at the National School Coding Challenge, New Delhi.',
    highlight: false,
  },
  {
    year: '2022',
    icon: <Palette className="w-6 h-6 text-red-600" />,
    category: 'Arts',
    title: 'State Cultural Fest — First Prize',
    desc: 'Won first place in the Inter-School Drama and Dance competitions at the TN State Cultural Fest.',
    highlight: false,
  },
  {
    year: '2022',
    icon: <Award className="w-6 h-6 text-red-600" />,
    category: 'Recognition',
    title: 'ISO Certified Institution',
    desc: 'Received ISO 9001:2015 certification for quality standards in education and administration.',
    highlight: false,
  },
  {
    year: '2021',
    icon: <Leaf className="w-6 h-6 text-red-600" />,
    category: 'Environment',
    title: 'Green School Award',
    desc: 'Recognised by the Tamil Nadu government for eco-friendly campus and sustainability initiatives.',
    highlight: false,
  },
  {
    year: '2020',
    icon: <Heart className="w-6 h-6 text-red-600" />,
    category: 'Recognition',
    title: 'Community Excellence Award',
    desc: 'Honoured by the Ambur Municipal Corporation for contributions to local education and community.',
    highlight: false,
  },
]

const years = ['All', '2025', '2024', '2023', '2022', '2021', '2020']

const categoryStats = [
  { icon: <BookOpen className="w-5 h-5" />, label: 'Academics', count: '15+ Awards' },
  { icon: <Dumbbell className="w-5 h-5" />, label: 'Sports', count: '20+ Medals' },
  { icon: <Target className="w-5 h-5" />, label: 'Olympiads', count: '12 Medals' },
  { icon: <Palette className="w-5 h-5" />, label: 'Arts', count: '8 Prizes' },
  { icon: <Laptop className="w-5 h-5" />, label: 'Technology', count: '5 Awards' },
  { icon: <Leaf className="w-5 h-5" />, label: 'Environment', count: '3 Awards' },
]

export default function Achievements() {
  const [activeYear, setActiveYear] = useState('All')

  const filtered = activeYear === 'All'
    ? achievements
    : achievements.filter((a) => a.year === activeYear)

  return (
    <main className="bg-gray-50 flex flex-col gap-16 md:gap-24 overflow-hidden pb-20">

      {/* ══ HEADER ══ */}
      <section className="bg-white border-b border-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold tracking-widest uppercase mb-6">
              <Trophy className="w-3.5 h-3.5" /> Our Pride
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Our <span className="text-red-600">Achievements</span>
            </h1>
            <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A proud legacy of academic excellence, sporting glory, creative brilliance, and national recognition — year after year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CORE STATS ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { target: '97.8%', label: 'Board Pass Rate' },
              { target: '50+', label: 'Awards Won' },
              { target: '12', label: 'Olympiad Medals' },
              { target: '25+', label: 'Years of Excellence' },
            ].map(({ target, label }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-sm transition-all">
                <span className="block text-3xl font-black text-red-600 mb-1">{target}</span>
                <span className="block text-gray-500 text-xs tracking-wider uppercase font-bold">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══ FILTER & GRID ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <Reveal>
              <h2 className="text-2xl font-black text-gray-900">Excellence Timeline</h2>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveYear(y)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${
                      activeYear === y
                        ? 'bg-red-600 text-white border-red-600 shadow-sm'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-white'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className={`group bg-white border rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-md ${item.highlight ? 'border-red-600 shadow-sm shadow-red-600/5' : 'border-gray-200 hover:border-red-600/30'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${item.highlight ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600'}`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-black text-gray-900 leading-none">{item.year}</span>
                    <span className="text-[0.65rem] font-black uppercase tracking-widest text-red-600 mt-1 block">{item.category}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                {item.highlight && (
                   <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-red-600" />
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-red-600">Major Achievement</span>
                   </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No achievements logged for {activeYear}</p>
          </div>
        )}
      </section>

      {/* ══ CATEGORY SHOWCASE ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
             <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-black text-gray-900 mb-4">Categories of Excellence</h2>
                <p className="text-gray-500 text-sm">Our impact spans across diverse domains, fostering all-round success for every student.</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
                {categoryStats.map((stat, idx) => (
                  <div key={idx} className="text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 text-gray-400 group-hover:text-red-600 transition-colors">
                      {stat.icon}
                    </div>
                    <p className="text-sm font-bold text-gray-900 mb-1">{stat.label}</p>
                    <p className="text-[0.65rem] font-black uppercase tracking-widest text-red-600">{stat.count}</p>
                  </div>
                ))}
             </div>
          </div>
        </Reveal>
      </section>

      {/* ══ CTA ══ */}
      <section className="text-center pt-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Be Part of Our Next Story</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all hover:-translate-y-1"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </section>

    </main>
  )
}