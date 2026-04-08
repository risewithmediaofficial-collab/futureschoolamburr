import { useEffect, useRef, useState } from 'react'

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal()
  const transforms = { up: 'translateY(36px)', left: 'translateX(-48px)', right: 'translateX(48px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.72s ease ${delay}ms, transform 0.72s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── Faculty data ─── */
const faculty = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Principal',
    qualification: 'M.A., B.Ed, PhD (Education)',
    specialty: 'Education Leadership & Administration',
    department: 'Leadership',
    exp: '22 yrs',
    initials: 'RK',
    color: 'from-red-100 to-red-200',
    accent: 'text-red-700',
    bio: 'Dr. Kumar brings over 22 years of educational leadership, having transformed schools across Tamil Nadu with his student-first philosophy.',
  },
  {
    name: 'Prof. Priya Sharma',
    title: 'Head of Science',
    qualification: 'M.Sc Physics, B.Ed',
    specialty: 'Physics & Astronomy',
    department: 'Science',
    exp: '15 yrs',
    initials: 'PS',
    color: 'from-blue-50 to-blue-100',
    accent: 'text-blue-700',
    bio: 'An accomplished physicist and passionate educator who has guided over 200 students into IIT and NIT over her career.',
  },
  {
    name: 'Mr. Amit Patel',
    title: 'Head of Mathematics',
    qualification: 'M.Sc Mathematics, B.Ed',
    specialty: 'Advanced Mathematics & Statistics',
    department: 'Mathematics',
    exp: '13 yrs',
    initials: 'AP',
    color: 'from-green-50 to-green-100',
    accent: 'text-green-700',
    bio: 'Known for making complex mathematics accessible, Mr. Patel has mentored district-level Olympiad winners for five consecutive years.',
  },
  {
    name: 'Ms. Neha Singh',
    title: 'Head of English',
    qualification: 'M.A English Literature, B.Ed',
    specialty: 'Language Arts & Literature',
    department: 'Languages',
    exp: '11 yrs',
    initials: 'NS',
    color: 'from-purple-50 to-purple-100',
    accent: 'text-purple-700',
    bio: 'A gifted communicator and writer, Ms. Singh runs the school debate club and has coached state-level elocution champions.',
  },
  {
    name: 'Dr. Arun Verma',
    title: 'Sports Director',
    qualification: 'M.Sc Physical Education, National Coach Cert.',
    specialty: 'Sports Science & Athlete Development',
    department: 'Sports',
    exp: '18 yrs',
    initials: 'AV',
    color: 'from-orange-50 to-orange-100',
    accent: 'text-orange-700',
    bio: 'Former state-level athlete turned coach, Dr. Verma has produced district kabaddi, cricket, and athletics champions consistently.',
  },
  {
    name: 'Mrs. Anjali Gupta',
    title: 'Student Counsellor',
    qualification: 'M.A Psychology, Diploma in Counselling',
    specialty: 'Student Guidance & Wellbeing',
    department: 'Counselling',
    exp: '9 yrs',
    initials: 'AG',
    color: 'from-pink-50 to-pink-100',
    accent: 'text-pink-700',
    bio: 'A trained counsellor and psychologist who creates a safe, nurturing space for students to grow emotionally and academically.',
  },
  {
    name: 'Mr. Farooq Ahmed',
    title: 'Head of Social Science',
    qualification: 'M.A History, M.Ed',
    specialty: 'History, Civics & Geography',
    department: 'Social Science',
    exp: '14 yrs',
    initials: 'FA',
    color: 'from-amber-50 to-amber-100',
    accent: 'text-amber-700',
    bio: 'Mr. Ahmed brings history to life through storytelling and field visits, making social science the most loved subject at Future School.',
  },
  {
    name: 'Ms. Kavitha Rajan',
    title: 'Head of Computer Science',
    qualification: 'M.Sc Computer Science, B.Ed',
    specialty: 'Programming, AI & Digital Literacy',
    department: 'Technology',
    exp: '8 yrs',
    initials: 'KR',
    color: 'from-cyan-50 to-cyan-100',
    accent: 'text-cyan-700',
    bio: 'A tech enthusiast who introduced coding clubs and robotics workshops, Ms. Kavitha has helped students win national-level hackathons.',
  },
  {
    name: 'Mrs. Sumathi Venkat',
    title: 'Head of Tamil',
    qualification: 'M.A Tamil Literature, B.Ed',
    specialty: 'Tamil Language & Classical Literature',
    department: 'Languages',
    exp: '16 yrs',
    initials: 'SV',
    color: 'from-rose-50 to-rose-100',
    accent: 'text-rose-700',
    bio: 'A dedicated Tamil scholar and poet, Mrs. Sumathi has preserved and promoted classical Tamil culture through literature festivals and competitions.',
  },
]

const departments = ['All', 'Leadership', 'Science', 'Mathematics', 'Languages', 'Sports', 'Counselling', 'Technology']

/* ─── Faculty card ─── */
function FacultyCard({ member, delay }) {
  const [flipped, setFlipped] = useState(false)
  const [ref, visible] = useReveal(0.08)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {/* Card flip wrapper */}
      <div
        className="relative cursor-pointer"
        style={{ perspective: '1000px', height: '280px' }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* ── FRONT ── */}
          <div
            className="absolute inset-0 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Top red stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-t-2xl" />

            <div className="flex items-start justify-between">
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <span className={`text-xl font-black ${member.accent}`} style={{ fontFamily: "'Georgia', serif" }}>
                  {member.initials}
                </span>
              </div>
              {/* Exp badge */}
              <div className="flex flex-col items-end">
                <span className="text-lg font-black text-red-600 leading-none" style={{ fontFamily: "'Georgia', serif" }}>{member.exp}</span>
                <span className="text-[0.58rem] tracking-widest uppercase text-gray-400 font-semibold">Experience</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-base font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-red-600">{member.title}</p>
              <p className="text-xs text-gray-400 leading-snug">{member.qualification}</p>
              <div className="mt-auto pt-3 border-t border-gray-50">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-medium text-red-700">
                  <span className="w-1 h-1 rounded-full bg-red-500" />
                  {member.specialty}
                </span>
              </div>
            </div>

            {/* Hover hint */}
            <p className="text-[0.6rem] text-gray-300 text-center tracking-wide">Hover to learn more</p>
          </div>

          {/* ── BACK ── */}
          <div
            className="absolute inset-0 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {/* Dot pattern */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '14px 14px' }} />

            <div className="relative z-10">
              <p className="text-white/60 text-[0.65rem] font-bold tracking-widest uppercase mb-1">{member.department}</p>
              <h3 className="text-white text-lg font-bold leading-tight mb-1" style={{ fontFamily: "'Georgia', serif" }}>{member.name}</h3>
              <p className="text-red-200 text-xs font-semibold mb-4">{member.title}</p>
              <p className="text-white/80 text-xs leading-relaxed">{member.bio}</p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <p className="text-white text-sm font-bold">{member.exp}</p>
                <p className="text-red-200 text-[0.6rem] uppercase tracking-wide">Experience</p>
              </div>
              <div className="flex gap-2">
                {['✉', 'in'].map((s) => (
                  <div key={s} className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs cursor-pointer transition-colors">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   FACULTY PAGE
══════════════════════════════════════════ */
export default function Faculty() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? faculty
    : faculty.filter((f) => f.department === activeFilter)

  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-xs font-bold tracking-widest uppercase text-red-600">Our People</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Meet Our <em className="text-red-600 not-italic">Expert</em><br />
                <strong className="font-bold">Faculty</strong>
              </h1>
            </Reveal>
            <Reveal delay={200}><div className="w-10 h-0.5 bg-red-600" /></Reveal>
            <Reveal delay={300}>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Our educators are more than teachers — they are mentors, guides, and role models. Each faculty member brings deep subject expertise, years of experience, and a genuine passion for student success.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4 pt-1">
                {[['30+', 'Faculty Members'], ['11 yrs', 'Avg. Experience'], ['8', 'Departments']].map(([n, l]) => (
                  <div key={l} className="flex items-center gap-2.5">
                    <div className="w-0.5 h-8 bg-white border border-gray-100 rounded-full" />
                    <div>
                      <p className="text-lg font-black text-gray-900 leading-none" style={{ fontFamily: "'Georgia', serif" }}>{n}</p>
                      <p className="text-[0.62rem] tracking-widest uppercase text-gray-400 font-semibold">{l}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right info card */}
          <Reveal direction="right" delay={200}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent rounded-t-2xl" />
              <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-5">Faculty Highlights</p>
              <ul className="space-y-4">
                {[
                  ['🎓', 'PhD & Post-Graduate Qualified', '100% faculty hold PG degrees or above'],
                  ['📋', 'CBSE Trained Educators', 'Regular training in latest CBSE pedagogy'],
                  ['🏆', 'Award-Winning Teachers', '12 faculty recognised at district/state level'],
                  ['💡', 'Modern Teaching Methods', 'Blended learning, project-based & flipped classrooms'],
                ].map(([icon, title, desc]) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-sm flex-shrink-0">{icon}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{title}</p>
                      <p className="text-xs text-gray-400">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[['30+', 'Total Faculty'], ['11 yrs', 'Avg. Experience'], ['8', 'Departments'], ['100%', 'PG Qualified']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-5 px-4">
                <span className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACULTY GRID ══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Department Leads</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Our <em className="text-red-600 not-italic">Leadership Team</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-400 text-sm mt-3">Hover over a card to learn more about each faculty member.</p>
            </Reveal>
          </div>

          {/* Department filter */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveFilter(d)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                    activeFilter === d
                      ? 'bg-red-600 text-white border-red-600 shadow-sm'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member, i) => (
              <FacultyCard key={member.name} member={member} delay={i * 70} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">👨‍🏫</p>
              <p className="text-gray-400 text-sm">No faculty in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* ══ JOIN US BAND ══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="none">
            <div className="rounded-2xl bg-white border border-gray-100 border border-red-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Join Our Team</p>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                    Passionate About <em className="text-red-600 not-italic">Teaching</em>?
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We're always looking for dedicated, qualified educators who share our commitment to student excellence and holistic development. Join the Future School family.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                  <button className="flex items-center justify-center gap-2 px-7 py-3 bg-transparent text-red-700 text-sm font-bold rounded-lg border-2 border-red-700 hover:bg-red-50 hover:shadow-sm transition-all duration-200">
                    View Open Positions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="px-7 py-3 border border-red-200 text-red-600 text-sm font-bold rounded-lg hover:bg-red-50 transition-all duration-200">
                    Send Your CV
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}