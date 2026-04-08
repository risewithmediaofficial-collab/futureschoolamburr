import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import { BookOpen, GraduationCap, Target, Building, MonitorPlay, Zap, Palette, Trophy, Music, BicepsFlexed, ArrowRight, BookMarked, MessageCircle, Navigation, Wind } from 'lucide-react'

/* ─── Program data ─── */
import imgKG from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgPrimary from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgSecondary from '../assets/pic-assets/IMG_4395-1024x683.jpg'
import imgSenior from '../assets/pic-assets/Secondary.jpg'

const programs = [
  {
    id: 1,
    anchorId: 'kindergarten-level',
    icon: <BookOpen className="w-6 h-6 text-red-600" />,
    title: 'Kindergarten',
    classes: 'K2 & K3',
    paragraphs: [
      'Focusing on cognitive and motor skills, we encourage curiosity and imagination. Guided by child-centered education, kids learn through "techno tools", structured play, and field trips.',
      'A solid foundation built through interactive DIGI BOARD learning eases the child’s future study journey seamlessly.'
    ],
    img: imgKG
  },
  {
    id: 2,
    anchorId: 'primary-level',
    icon: <Building className="w-6 h-6 text-red-600" />,
    title: 'Primary',
    classes: 'Grades I to VIII',
    paragraphs: [
      'Emphasizing a development-based curriculum, students grasp fundamental concepts through Digi Board learning to instill concentration and zeal.',
      'Activity-based learning builds physical and mental capacity, while the "English Seasons" initiative adds a robust new dimension to their communication skills.'
    ],
    img: imgPrimary
  },
  {
    id: 3,
    anchorId: 'secondary-level',
    icon: <Target className="w-6 h-6 text-red-600" />,
    title: 'Secondary',
    classes: 'Grades IX and X',
    paragraphs: [
      "In these critical middle school years, intellectual, aesthetic, physical, and cultural growth is heavily intensified.",
      "Our foundation courses are meticulously designed to suit children aiming for international and competitive backgrounds."
    ],
    img: imgSecondary
  },
  {
    id: 4,
    anchorId: 'senior-secondary-level',
    icon: <GraduationCap className="w-6 h-6 text-red-600" />,
    title: 'Senior Secondary',
    classes: 'Grades XI and XII',
    paragraphs: [
      'Focused career-oriented preparation kicks in. Students choose specialized streams based on their aptitude and delve into in-depth knowledge.',
      'Extensive career-counseling ensures students select fields confidently, balancing scholastic strengths with mental resilience.'
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

/* ─── Cards for Teaching Approach ─── */
const approachCards = [
  {
    icon: <MonitorPlay className="w-8 h-8 text-red-600" />,
    title: 'Smart Class & Digi Boards',
    desc: 'The first school in Ambur to implement digital classrooms. Virtual labs and teacher-led smart solutions bridge the gap between classroom learning and the real world.'
  },
  {
    icon: <Zap className="w-8 h-8 text-red-600" />,
    title: 'Daily Skill Practice',
    desc: 'Sharpening reading, writing, speaking, and critical thinking on a daily basis. Coordinated exercises reinforce the CBSE evaluation pattern seamlessly.'
  }
]

/* ─── Cards for Holistic Development ─── */
const holisticCards = [
  {
    icon: <Palette className="w-6 h-6 text-red-600" />,
    title: 'Art and Craft',
    desc: 'Right from sketching and shading to complex constructions, our art and craft periods nurture creative expression in dedicated school galleries.'
  },
  {
    icon: <Trophy className="w-6 h-6 text-red-600" />,
    title: 'Sports & Athletics',
    desc: 'Full-sized basketball, volleyball, kho-kho, football fields, and cricket nets. Professional coaches inculcate teamwork and communication.'
  },
  {
    icon: <Music className="w-6 h-6 text-red-600" />,
    title: 'Dance & Music',
    desc: 'Melodious performances and peppy track choreography allow children to unwind and express their latent talents during school events.'
  },
  {
    icon: <BicepsFlexed className="w-6 h-6 text-red-600" />,
    title: 'Karate Training',
    desc: 'Self-defense, discipline, focus, and physical fitness led by a 6th Dan black belt. Mandated techniques build enormous self-confidence.'
  },
  {
    icon: <Wind className="w-6 h-6 text-red-600" />,
    title: 'Yoga Practice',
    desc: 'Guided posture and breathing logic to tonify the mind and body. Achieves nervous system harmony under the guidance of our record-holding Yoga master.'
  },
  {
    icon: <Target className="w-6 h-6 text-red-600" />,
    title: 'Archery',
    desc: 'Develops immense character, patience, and goal-setting. A highly structured sport bridging concentration and math intuition for all ages.'
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-red-600" />,
    title: 'Literary & Quiz Clubs',
    desc: 'Debates and dynamic quiz clubs build competitive knowledge awareness and professional argumentation formats.'
  },
  {
    icon: <Navigation className="w-6 h-6 text-red-600" />,
    title: 'Field Trips',
    desc: 'Learning unbounded by walls. We take economics students to banks and science students to labs, demonstrating real-world relevance.'
  }
]

export default function Programs() {
  return (
    <main className="bg-gray-50 flex flex-col gap-16 md:gap-24 overflow-hidden pb-20">

      {/* ══ HEADER ══ */}
      <section className="bg-white border-b border-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-50 text-[#c0392b] text-[0.6rem] font-black tracking-widest uppercase mb-6">
              <BookMarked className="w-3.5 h-3.5" /> Academics
            </div>
            <h1 className="serif text-4xl md:text-5xl lg:text-7xl mb-8">
              Our <span className="text-[#c0392b]">Programs</span>
            </h1>
            <p className="mt-6 text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              From foundational primary education to senior secondary streams — a seamless, CBSE-aligned academic journey designed to unlock every student's potential.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CORE PROGRAMS ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 100}>
              <div id={program.anchorId} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Image Section */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-gray-100 shadow-sm group">
                    <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-lg bg-[#c0392b] backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white">{program.icon}</span>
                      </div>
                      <div>
                        <h4 className="serif font-bold text-lg text-white">{program.title}</h4>
                        <p className="text-[0.6rem] text-gray-200 font-bold uppercase tracking-widest">School Level</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-7/12 flex flex-col gap-4">
                  <div className="inline-flex w-fit items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 text-black text-[0.65rem] font-bold uppercase tracking-widest rounded-md">
                    {program.classes}
                  </div>
                  <h3 className="serif text-2xl sm:text-3xl text-gray-900">
                    {program.title} Journey
                  </h3>
                  <div className="space-y-4 text-black text-base sm:text-lg leading-relaxed font-medium">
                    {program.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                  {program.streams && (
                    <div className="mt-4 bg-gray-50/50 border border-gray-100 rounded-xl p-5">
                      <h5 className="font-bold text-gray-900 mb-3 text-[0.6rem] tracking-widest uppercase flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" /> Specialized Streams
                      </h5>
                      <ul className="space-y-2">
                        {program.streams.map((stream, i) => (
                          <li key={i} className="flex gap-2 text-base text-black font-medium">
                            <span className="text-red-500 font-bold mt-0.5">›</span>
                            {stream}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <Link to="/admissions" className="inline-flex items-center gap-2 text-[#c0392b] font-bold hover:text-[#a93226] transition-colors group text-sm sm:text-base">
                      Admission Process 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ APPROACH ══ */}
      <section className="bg-[#c0392b] text-white py-24 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="serif text-3xl md:text-4xl text-white mb-4">Our Teaching Methodology</h2>
              <p className="text-red-50 text-base font-medium">Every moment is an opportunity to learn. Our stimuli-driven methodology ensures holistic absorption.</p>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-6">
            {approachCards.map((card, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white text-gray-900 rounded-2xl p-10 h-full shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-[#c0392b]">{card.icon}</span>
                  </div>
                  <h3 className="serif text-xl mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOLISTIC DEVELOPMENT ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="serif text-3xl md:text-4xl text-gray-900 mb-4">Beyond Academics</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base font-medium">We believe in nurturing all aspects of a child's personality through extensive co-curricular programs mapped directly to CBSE standards.</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {holisticCards.map((item, idx) => (
            <Reveal key={idx} delay={idx * 50}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#c0392b]/30 hover:shadow-md transition-all duration-300 group h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
                  <span className="text-[#c0392b]">{item.icon}</span>
                </div>
                <h3 className="serif text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ ASSESSMENT & SUPPORT ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b]" />
              <h3 className="serif text-2xl mb-8 flex items-center gap-3 text-gray-900">
                <BookMarked className="w-6 h-6 text-[#c0392b]" /> Language & Academics
              </h3>
              <div className="space-y-6 text-sm text-gray-600">
                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="serif text-lg text-gray-900 mb-4">Language Options</h4>
                  <ul className="space-y-3 font-semibold text-gray-600">
                    <li className="flex items-center gap-2 tracking-tight"><span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" /> Classes I to IV: Tamil (2nd) & Hindi (3rd)</li>
                    <li className="flex items-center gap-2 tracking-tight"><span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" /> Classes V to VIII: Hindi, Tamil, or Urdu (2nd) & Hindi or Tamil (3rd)</li>
                    <li className="flex items-center gap-2 tracking-tight"><span className="w-1.5 h-1.5 bg-[#c0392b] rounded-full" /> Classes IX to X: Hindi, Tamil, or Urdu (2nd)</li>
                  </ul>
                </div>
                <p>
                  The medium of instruction is English. Our extremely practical curriculum guarantees balanced development between spoken/written communication and rigorous science testing.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b]" />
              <h3 className="serif text-2xl mb-8 flex items-center gap-3 text-gray-900">
                <Trophy className="w-6 h-6 text-[#c0392b]" /> Assessment Structure
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <p className="font-medium">Adapted directly to central CBSE directives. Continuous and comprehensive structuring ensures a strong metric of knowledge.</p>
                
                <div className="grid grid-cols-2 gap-4 mt-4 text-center">
                  <div className="bg-red-50 border border-red-50 p-5 rounded-2xl">
                    <p className="serif text-4xl text-[#c0392b] mb-1">80%</p>
                    <p className="font-bold text-gray-400 text-[0.6rem] uppercase tracking-widest">Annual Exam</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
                    <p className="serif text-4xl text-gray-700 mb-1">20%</p>
                    <p className="font-bold text-gray-400 text-[0.6rem] uppercase tracking-widest">Internal</p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="font-bold text-gray-900 mb-2">Internal Breakdown:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b border-gray-100 pb-1"><span>Periodic Tests (Best of Two)</span> <span className="font-bold">10 Marks</span></li>
                    <li className="flex justify-between border-b border-gray-100 pb-1"><span>Student Portfolio</span> <span className="font-bold">5 Marks</span></li>
                    <li className="flex justify-between"><span>Subject Enrichment</span> <span className="font-bold">5 Marks</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <div className="text-center pt-8">
        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 px-10 py-4 bg-[#c0392b] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-[#c0392b]/20 hover:bg-[#a93226] transition-all hover:-translate-y-1"
        >
          Begin Your Application
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

    </main>
  )
}
