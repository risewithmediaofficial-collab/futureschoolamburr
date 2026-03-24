import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'

const programs = [
  { icon: '📚', grade: 'I – V',     title: 'Primary',          desc: 'Foundational literacy, numeracy, and creative inquiry through hands-on activity.', num: '01' },
  { icon: '🔬', grade: 'VI – VIII', title: 'Middle School',    desc: 'Science labs, advanced mathematics, computing, and structured critical thinking.', num: '02' },
  { icon: '🎯', grade: 'IX – X',    title: 'Secondary',        desc: 'Board-focused preparation with personal mentoring and continuous assessment.',       num: '03' },
  { icon: '🏛️', grade: 'XI – XII',  title: 'Senior Secondary', desc: 'Science & Commerce with JEE / NEET coaching and university counselling.',            num: '04' },
]

export default function ProgrammesBand() {
  return (
    <section className="py-24 md:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase font-black mb-4 text-red-600">Academics</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif text-4xl md:text-5xl font-normal text-gray-900">Our <em className="text-red-600 not-italic">Programmes</em></h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-sm font-medium max-w-xs leading-relaxed text-gray-400">
              A seamless CBSE journey from foundational primary years to senior secondary excellence.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {programs.map((p, i) => (
            <Reveal key={p.num} delay={i * 60}>
              <div className="group flex flex-col p-8 h-full bg-white transition-all duration-200 hover:bg-gray-50/50">
                <div className="flex items-start justify-between mb-10">
                  <span className="serif text-6xl font-normal leading-none transition-colors duration-300 text-gray-100 group-hover:text-red-600/10">
                    {p.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200 border border-gray-100 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white shadow-sm">
                    {p.icon}
                  </div>
                </div>
                <p className="text-[0.6rem] tracking-[0.22em] uppercase font-black mb-3 text-red-600">{p.grade}</p>
                <h3 className="serif text-2xl font-normal text-gray-900 mb-4">{p.title}</h3>
                <p className="text-sm leading-relaxed flex-1 font-medium text-gray-400">{p.desc}</p>
                <Link to="/programs"
                  className="inline-flex items-center gap-2 mt-8 text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform duration-300">
                  Explore Higher →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
