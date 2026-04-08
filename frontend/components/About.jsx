import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import { GraduationCap, Award, MapPin, Users, Lightbulb, Heart, BookOpen, Target, Sparkles, Building2, Quote, ArrowRight, Briefcase, Eye, Rocket, CheckCircle2 } from 'lucide-react'
import imgBuilding from '../assets/pic-assets/Secondary.jpg'
import imgKP from '../assets/pic-assets/Mr. K. PANDURANGAN.png'
import imgPS from '../assets/pic-assets/Mr.P.Sureshbabu.png'
import imgPR from '../assets/pic-assets/Ms.P.Rameshbabu SECRETARY.png'
import imgJS from '../assets/pic-assets/Ms.Jayanthi Suresh.png'
import imgJY from '../assets/pic-assets/YUVARANI.png'

/* ─── INSTRUCTOR TEAM DATA ─── */
const instructorsTeam = [
  { sno: 1, name: 'Mrs. YUVARANI J', designation: 'PRINCIPAL' },
  { sno: 2, name: 'Mrs. DEEPA R', designation: 'VICE PRINCIPAL' },
  { sno: 3, name: 'IMMANUEL I', designation: 'PGT' },
  { sno: 4, name: 'NIRMAL KUMAR M', designation: 'PGT' },
  { sno: 5, name: 'B PRIYANGA', designation: 'PGT' },
  { sno: 6, name: 'PRIYA K', designation: 'PGT' },
  { sno: 7, name: 'ANGELIN JAYAKUMARI', designation: 'PGT' },
  { sno: 8, name: 'DEEPAK T', designation: 'TGT' },
  { sno: 9, name: 'KANCHANAMALA G N', designation: 'TGT' },
  { sno: 10, name: 'NIRMALA DEVI P', designation: 'TGT' },
  { sno: 11, name: 'SHYAMALA C', designation: 'TGT' },
  { sno: 12, name: 'MALATHI G', designation: 'TGT' },
  { sno: 13, name: 'ASMA TASNEEM M S', designation: 'PRT' },
  { sno: 14, name: 'C DHANALAKSHMI', designation: 'PRT' },
  { sno: 15, name: 'SANIYA MUSKAN N', designation: 'PRT' },
  { sno: 16, name: 'AYEESHA NEELURI S', designation: 'PRT' },
  { sno: 17, name: 'T.KALAIVANI', designation: 'PRT' },
  { sno: 18, name: 'G M PRIYANKA', designation: 'PRT' },
  { sno: 19, name: 'JAGADESWARI N', designation: 'PRT' },
  { sno: 20, name: 'VIMALA M', designation: 'PRT' },
  { sno: 21, name: 'KEERTHANA B', designation: 'PRT' },
  { sno: 22, name: 'HUMERA ANJUM C', designation: 'PRT' },
  { sno: 23, name: 'SAVITHA K', designation: 'PRT' },
  { sno: 24, name: 'SHAHINA B', designation: 'PRT' },
  { sno: 25, name: 'GEETHA S', designation: 'PRT' },
  { sno: 26, name: 'IRFANA KOUSER N', designation: 'PRT' },
  { sno: 27, name: 'SEETHA V', designation: 'NTT' },
  { sno: 28, name: 'ANU W', designation: 'NTT' },
  { sno: 29, name: 'LAVANYA S', designation: 'NTT' },
  { sno: 30, name: 'SHAGUFTHA THASEEN H', designation: 'OTHER' },
  { sno: 31, name: 'J MURUGAN', designation: 'PET' },
  { sno: 32, name: 'V KOMATHI', designation: 'ADMIN' },
]

/* ─── FACULTY TEAM DATA ─── */
const facultyTeam = [
  ...instructorsTeam.map(item => ({...item})) // Keep it simple and merged for this block
]

/* ─── Faculty Card ─── */
function FacultyCard({ name, subject, delay, img }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex flex-col items-center text-center">
        <div className="w-32 h-44 md:w-36 md:h-48 rounded-2xl border border-gray-100 overflow-hidden bg-gray-50 group-hover:border-[#c0392b] transition-all duration-300 shadow-sm group-hover:shadow-md mb-4">
          <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <h4 className="text-sm font-bold text-gray-900 mb-1">{name}</h4>
        <p className="text-[0.6rem] tracking-widest uppercase font-semibold text-gray-800">{subject}</p>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   ABOUT COMPONENT
══════════════════════════════════════════ */
export default function About() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="bg-gray-50 overflow-x-hidden flex flex-col gap-16 md:gap-24 pb-20">

      {/* ══ PAGE HERO / OVERVIEW ══ */}
      <section className="relative w-full overflow-hidden bg-white pb-16 pt-4 border-b border-gray-100" id="overview">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          <div className="flex flex-col items-center max-w-2xl mb-12 sm:mb-16">
            <Reveal>
              <span className="text-[#c0392b] text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase font-black px-4 py-2 bg-red-50/50 rounded-full inline-flex items-center gap-2 mb-6 border border-red-50 shadow-sm transition-all duration-300">
                <Building2 className="w-3.5 h-3.5" /> About Us
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="serif text-gray-900 leading-[1.1] tracking-tight mt-2 mb-6" 
                style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)' }}>
                About <span className="text-[#c0392b]">Future</span> Senior Secondary School
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-medium max-w-3xl mx-auto space-y-4">
                <p>
                  Future Senior Secondary School, Ambur, is a CBSE-affiliated institution established in 2011. Dedicated to nurturing young minds through a balanced approach of academics, values, and innovation. With a strong focus on holistic development, students are encouraged to learn, explore, and contribute meaningfully to society.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-10 justify-center">
                <Link to="/admissions"
                  className="btn-micro inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[0.7rem] tracking-widest uppercase font-black relative overflow-hidden h-12 px-8 sm:px-10 py-2 bg-gradient-to-r from-[#c0392b] to-[#e74c3c] text-white shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300">
                  Apply for Admission
                  <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/contact"
                  className="btn-micro inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[0.7rem] tracking-widest uppercase font-black relative overflow-hidden h-12 px-10 py-2 bg-white border border-red-200 text-[#c0392b] shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300 hover:bg-red-50">
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400} className="w-full">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-sm bg-gray-100 group">
              <img src={imgBuilding} alt="School" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none z-10" />
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl flex items-center gap-3 sm:gap-4 z-20 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#c0392b] rounded-xl flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-sm">
                  25
                </div>
                <div className="text-left">
                  <p className="text-sm md:text-base font-bold text-gray-900 tracking-tight leading-none mb-1">Years of Excellence</p>
                  <p className="text-[0.6rem] md:text-xs text-[#c0392b] font-bold uppercase tracking-widest leading-none">Est. 1998 · Ambur</p>
                </div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <Users className="w-6 h-6 text-red-600" />, n: '2,000+', l: 'Students Enrolled' },
              { icon: <Briefcase className="w-6 h-6 text-red-600" />, n: '30+', l: 'Faculty Members' },
              { icon: <Award className="w-6 h-6 text-red-600" />, n: '97.8%', l: 'Board Pass Rate' },
              { icon: <Target className="w-6 h-6 text-red-600" />, n: '11+', l: 'Years Excellence' },
            ].map(({ icon, n, l }) => (
              <div key={l} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-red-600/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-50 mx-auto flex items-center justify-center mb-4">
                  {icon}
                </div>
                <span className="serif block text-3xl mb-1">{n}</span>
                <span className="block text-gray-400 text-[0.6rem] tracking-widest uppercase font-bold">{l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="mission-vision">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Reveal>
            <p className="text-[0.6rem] font-black tracking-widest uppercase text-[#c0392b] mb-3">Our Foundation</p>
            <h2 className="serif text-3xl md:text-4xl text-gray-900">
              Mission & <span className="text-[#c0392b]">Vision</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision */}
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 h-full hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#c0392b]" />
              </div>
              <h3 className="serif text-2xl mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Future Senior Secondary School believes in <span className="text-[#c0392b]">Learn, Discover and Share.</span>
              </p>
              <div className="space-y-4">
                {[
                  { title: 'LEARN', desc: 'Learning is Continuous' },
                  { title: 'DISCOVER', desc: 'Discover the Self to bring a positive change & Transformation' },
                  { title: 'SHARE', desc: 'Share your knowledge & fundamentally give back to the society' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                    <span className="text-[#c0392b] font-black text-lg">{item.title}</span>
                    <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={200}>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 h-full hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-[#c0392b]" />
              </div>
              <h3 className="serif text-2xl mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Future Senior Secondary School's core mission is depicted as:
              </p>
              <div className="space-y-3">
                {[
                  { letter: 'F', text: 'Futuristic Learning comes from Continuous Learning & Participation' },
                  { letter: 'U', text: 'Universal Value to be integrated through robust Education' },
                  { letter: 'T', text: 'Train to live; fundamentally lead & Transform' },
                  { letter: 'U', text: 'Useful & Meaningful Human beings giving back to the Society' },
                  { letter: 'R', text: 'Refinement & Reinventing of the intellectual Self' },
                  { letter: 'E', text: 'Empathy & Empowerment resulting from Holistic Education' },
                ].map((item) => (
                  <div key={item.letter} className="flex gap-4 p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <span className="text-[#c0392b] font-black text-lg min-w-[20px]">{item.letter}</span>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ══ CHAIRMAN / PRINCIPAL CARDS ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <Reveal>
          <div className="text-center mb-12">
            <h2 className="serif text-3xl md:text-4xl mb-4">Leadership Messages</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base font-medium">Guided by experience, driven by absolute passion.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Chairman */}
          <Reveal delay={100}>
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-md transition-all flex flex-col sm:flex-row shadow-sm h-full group">
              <div className="sm:w-2/5 md:w-1/3 bg-gray-100 relative overflow-hidden">
                <img src={imgKP} alt="Chairman" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="sm:w-3/5 md:w-2/3 p-6 md:p-8 flex flex-col">
                <Quote className="w-8 h-8 text-red-200 mb-4" />
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6 font-medium">
                  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. We aim to inculcate a respect for diversity, tolerance, and peaceful co-existence."
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg">Mr. K. Pandurangan</h4>
                  <p className="text-red-600 text-xs font-black uppercase tracking-widest mt-1">Chairman</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Principal */}
          <Reveal delay={200}>
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-md transition-all flex flex-col sm:flex-row shadow-sm h-full group">
              <div className="sm:w-2/5 md:w-1/3 bg-gray-100 relative overflow-hidden">
                <img src={imgJY} alt="Principal" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="sm:w-3/5 md:w-2/3 p-6 md:p-8 flex flex-col">
                <Quote className="w-8 h-8 text-red-200 mb-4" />
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-6 font-medium">
                  "Education awakens the power and beauty that lie within us. We come up with a vision to foster different facets of a student in order to see them developing as a vibrant citizen."
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg">Mrs. Yuvarani J</h4>
                  <p className="text-red-600 text-xs font-black uppercase tracking-widest mt-1">Principal</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FACULTY ══ */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-y border-gray-50" id="faculty">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Reveal><p className="text-[0.6rem] font-black tracking-widest uppercase text-[#c0392b] mb-3">Our Core Team</p></Reveal>
            <Reveal delay={100}>
              <h2 className="serif text-3xl md:text-4xl">
                Meet Our <span className="text-[#c0392b]">Faculty</span>
              </h2>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
            <FacultyCard img={imgKP} name="K. Pandurangan"  subject="Chairman"          delay={0}   />
            <FacultyCard img={imgPS} name="P. Sureshbabu"   subject="Correspondent"     delay={50}  />
            <FacultyCard img={imgPR} name="P. Rameshbabu"   subject="Secretary"         delay={100} />
            <FacultyCard img={imgJS} name="Jayanthi Suresh" subject="Academic Director" delay={150} />
            <FacultyCard img={imgJY} name="J. Yuvarani"     subject="Principal"         delay={200} />
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden">
            <div className="p-6 bg-white border-b border-gray-100 flex items-center gap-3">
              <Users className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">Full Teaching Directory</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {instructorsTeam.map((member) => (
                  <div key={member.sno} className="flex items-center justify-between pb-2 border-b border-gray-200/50 min-w-0">
                    <span className="text-sm font-bold text-gray-700 truncate">{member.name}</span>
                    <span className="text-[0.65rem] font-black tracking-widest uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">{member.designation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AFFILIATIONS ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10" id="affiliations">
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 h-full relative overflow-hidden shadow-lg border border-gray-200">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #c0392b 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 flex flex-col h-full">
                <BookOpen className="w-10 h-10 text-[#c0392b] mb-8" />
                <h3 className="serif text-3xl mb-8 text-gray-900">CBSE Affiliation</h3>
                <div className="space-y-4 font-bold text-sm mb-10">
                  <p className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-[#c0392b] font-medium">Board</span> <span className="text-gray-900">Central Board of Secondary Education</span>
                  </p>
                  <p className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-[#c0392b] font-medium">Affiliation Number</span> <span className="text-gray-900">1930465</span>
                  </p>
                  <p className="flex justify-between pb-3">
                    <span className="text-[#c0392b] font-medium">School Code</span> <span className="text-gray-900">55386</span>
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 leading-relaxed font-semibold">
                    Future Senior Secondary School strictly aligns with guidelines formulated entirely by the CBSE board in New Delhi.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 h-full hover:shadow-md transition-all shadow-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#c0392b]" />
               <Award className="w-10 h-10 text-[#c0392b] mb-8" />
               <h3 className="serif text-3xl mb-8">Other Certifications</h3>
               <div className="space-y-4 text-gray-700 font-medium">
                  <div className="flex items-start gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#c0392b] mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-bold">All India Secondary School Certificate Examination (AISSE)</p>
                  </div>
                  <div className="flex items-start gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#c0392b] mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-bold">All India Senior School Certificate Examination (AISSCE)</p>
                  </div>
               </div>
               <p className="mt-8 text-sm text-gray-500 leading-relaxed">
                  Students are completely eligible for AISSCE and AISSE conducted by the Board of Studies.
               </p>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  )
}