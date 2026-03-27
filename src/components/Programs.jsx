import { Link } from 'react-router-dom'
import { useReveal } from '../utils/reveal'

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal(0.15)
  const transforms = { up: 'translateY(40px)', left: 'translateX(-50px)', right: 'translateX(50px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── Program data ─── */
import imgKG from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgPrimary from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgSecondary from '../assets/pic-assets/IMG_4395-1024x683.jpg'
import imgSenior from '../assets/pic-assets/Secondary.jpg'

const programs = [
  {
    id: 1,
    anchorId: 'kindergarten-level',
    icon: '📚',
    title: 'Kindergarten',
    classes: 'K2 & K3',
    paragraphs: [
      'The main aim at this stage is to develop cognitive and motor skills and to encourage curiosity, imagination and create interest, thus exposing the child to an exciting and wonderful world of learning. Kids are encouraged to study through "techno tools".',
      "Only child centered education is practiced. Learning through DIGI BOARD, structured play & regular field trips are an integral part of the KG curriculum, as we know that only a solid base in this level will ease out the child's study in future.",
    ],
    img: imgKG
  },
  {
    id: 2,
    anchorId: 'primary-level',
    icon: '🏫',
    title: 'Primary',
    classes: 'Grades I to VIII',
    paragraphs: [
      'At the primary level, there is a greater emphasis on development based curriculum and students are taught the essential concepts of various subjects. Futurians are taught specifically through Digi Board, content which inculcate zeal and concentration among the students. Special emphasis is also laid on the development of positive attitudes and healthy habits among the students. Apart from preparing the students to succeed in academics, they are also taught the importance of moral values to lead a disciplined life.',
      "Activity based learning is given more focus in this stage. Co scholastic activities augment their physical and mental ability. English 'Seasons' provide a new dimension to their learning.",
    ],
    img: imgPrimary
  },
  {
    id: 3,
    anchorId: 'secondary-level',
    icon: '🎯',
    title: 'Secondary',
    classes: 'Grades IX and X',
    paragraphs: [
      "During the three years of Middle School education, the pupil's intellectual, aesthetic, physical and cultural growth and development are intensified and extended to a foundation course designed to suit children from an international background.",
    ],
    img: imgSecondary
  },
  {
    id: 4,
    anchorId: 'senior-secondary-level',
    icon: '🏛️',
    title: 'Senior Secondary',
    classes: 'Grades XI and XII',
    paragraphs: [
      'Carrier oriented preparation of the pupil takes place in this level. Students can choose the areas of study based on their aptitude and seek in-depth knowledge in the areas chosen. Opportunities are provided for the enrichment of knowledge.',
      'Carrier-counselling is conducted to assist the student to choose their field without any dilemma and abide by it. Besides scholastics, co-scholastic areas are also given equal weightage to develop confidence and mental ability in students. Students can choose any one stream out of the following:',
    ],
    streams: [
      'English, Mathematics, Physics, Chemistry and Biology',
      'English, Mathematics, Physics, Chemistry and Computer Science',
      'English, Physics, Chemistry, Biology and Computer Science',
      'English, Accountancy, Business Studies, Economics and Computer Science',
    ],
    img: imgSenior
  },
]

/* ─── Program Card ─── */
function ProgramCard({ program, delay, reversed }) {
  return (
    <Reveal delay={delay} direction={reversed ? 'right' : 'left'}>
      <div id={program.anchorId} className="bg-[#efefef] border border-gray-200 p-5 md:p-7">
        <div className="border border-gray-200 bg-white overflow-hidden">
          <img
            src={program.img}
            alt={program.title}
            className="w-full h-64 md:h-[520px] object-cover"
          />
        </div>

        <div className="mt-6 border-y border-gray-300 py-4">
          <h3 className="text-2xl md:text-[2rem] font-semibold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {program.title} : {program.classes}
          </h3>
        </div>

        <div className="mt-5 space-y-5 text-gray-700 leading-relaxed text-xl">
          {program.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {program.streams && (
            <ol className="list-decimal pl-7 space-y-1">
              {program.streams.map((stream) => (
                <li key={stream}>{stream}</li>
              ))}
            </ol>
          )}
          <Link
            to="/admissions"
            className="inline-flex items-center text-red-600 font-bold text-[2rem] hover:text-red-700 transition-colors duration-200"
          >
            Click Here To Know The Admission Process
          </Link>
        </div>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   PROGRAMS PAGE
══════════════════════════════════════════ */
export default function Programs() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Academics</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Programs</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              From foundational primary education to senior secondary streams — a seamless, CBSE-aligned academic journey designed to unlock every student's potential.
            </p>
          </Reveal>
          {/* Quick jump pills */}
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {programs.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.anchorId}`}
                  className="px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {p.title.toUpperCase()} LEVEL
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ PROGRAM CARDS (alternating layout) ══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} delay={0} reversed={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ══ TEACHING METHODOLOGY ══ */}
      <section id="teaching-methodology" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3 text-center">Teaching Methodology</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Approach</em> to Learning
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                'Child-centered and concept-based instruction',
                'Smart classroom support with digi-board integration',
                'Continuous assessment through formative evaluation',
                'Activity-based and experiential learning methods',
                'Value-based education with discipline and empathy',
                'Individual attention for balanced development',
              ].map((item) => (
                <div key={item} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ SOCIAL INITIATIVES ══ */}
      <section id="social-initiatives" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3 text-center">Social Initiatives</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Building Responsible <em className="text-red-600 not-italic">Citizens</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Eco awareness drives and clean campus campaigns',
                  'Community service and social responsibility activities',
                  'Celebration of national days and cultural harmony events',
                  'Health, hygiene, and wellness awareness programs',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-600 mt-2.5" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ OTHERS ══ */}
      <section id="others" className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3 text-center">Others</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Additional <em className="text-red-600 not-italic">Student Support</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Career and guidance counselling',
                'Transportation support',
                'Parent-teacher interaction programs',
                'Safe and secure campus environment',
              ].map((item) => (
                <div key={item} className="bg-gray-50 border border-gray-100 rounded-xl p-5 text-sm text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="text-center mt-10">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Apply for Admission
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}