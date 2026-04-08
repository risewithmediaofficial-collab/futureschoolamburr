import { Binoculars, Target } from 'lucide-react'
import heroImg from '../assets/pic-assets/banner-2026-4-1.png'
import classroomImg from '../assets/pic-assets/IMG_4395-1024x683.jpg'

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002147] text-center mb-16 tracking-tight">
          Vision & Mission
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 1. VISION: Image (Left) */}
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[300px] md:h-[400px]">
            <img 
              src={heroImg} 
              alt="School Vision" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent" />
          </div>

          {/* 2. VISION: Card (Right) */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100 flex flex-col justify-center text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-50 rounded-2xl">
                <Binoculars className="w-12 h-12 text-[#c0392b]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
              Future Senior Secondary School believes in <span className="text-[#c0392b] font-bold italic">Learn, Discover and Share.</span>
            </p>
            <div className="space-y-4 text-slate-500">
              <p className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                <span className="font-semibold text-slate-700 uppercase tracking-wider">Learn</span>: Learning is continuous.
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                <span className="font-semibold text-slate-700 uppercase tracking-wider">Discover</span>: Discover the self to bring change.
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c0392b]" />
                <span className="font-semibold text-slate-700 uppercase tracking-wider">Share</span>: Share knowledge and give back.
              </p>
            </div>
          </div>

          {/* 3. MISSION: Card (Left - Zigzag desktop) */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-100 flex flex-col justify-center text-center order-2 lg:order-1">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-50 rounded-2xl">
                <Target className="w-12 h-12 text-[#c0392b]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <div className="text-left space-y-4 text-slate-600">
               {missionItems.map((item, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                   <span className="mt-1 font-bold text-[#c0392b] text-lg w-5 flex-shrink-0">{item.letter}</span>
                   <p className="text-[15px] leading-relaxed italic">{item.text}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* 4. MISSION: Image (Right - Zigzag desktop) */}
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl h-[300px] md:h-[400px] order-1 lg:order-2">
            <img 
              src={classroomImg} 
              alt="School Mission" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#c0392b]/20 to-transparent" />
          </div>

        </div>
      </div>
    </div>
  )
}

const missionItems = [
  { letter: 'F', text: 'Futuristic learning comes from continuous learning and participation.' },
  { letter: 'U', text: 'Universal values are integrated through education.' },
  { letter: 'T', text: 'Train to live, lead and transform.' },
  { letter: 'U', text: 'Useful and meaningful human beings should give back to society.' },
  { letter: 'R', text: 'Respect for diversity, ethics and responsibility is cultivated in every learner.' },
  { letter: 'E', text: 'Excellence is pursued through holistic development.' },
]
