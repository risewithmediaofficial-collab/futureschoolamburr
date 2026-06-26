import { useEffect, useState } from 'react'
import { Reveal } from '../utils/reveal'
import { 
  Image as ImageIcon, 
  Camera, 
  Play, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Filter,
  Zap,
  Star,
  Clapperboard,
  Monitor
} from 'lucide-react'

/* ─── Gallery data ─── */
const categories = ['All', 'Campus', 'Facilities', 'Sports', 'Events', 'Achievements']

import imgCampus1 from '../assets/pic-assets/Secondary.jpg'
import imgCampus2 from '../assets/pic-assets/Secondary-410x260.jpg'
import imgCampus3 from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgLab from '../assets/pic-assets/IMG_4395-1024x683.jpg'
import imgComp from '../assets/pic-assets/IMG_4396-1024x683.jpg'
import imgLib from '../assets/pic-assets/IMG_4397-1024x683.jpg'
import imgAud from '../assets/pic-assets/IMG_4398-1024x683.jpg'
import imgSports1 from '../assets/pic-assets/sports-1.png'
import imgPlay from '../assets/pic-assets/bnr-1.jpg'
import imgEvent1 from '../assets/pic-assets/Christmas-2.jpg'
import imgEvent2 from '../assets/pic-assets/IMG_4399-1024x683.jpg'
import imgEvent3 from '../assets/pic-assets/IMG_4400-1024x683.jpg'
import imgAchieve from '../assets/pic-assets/Purple-and-Gold-Simple-Congratulations-Poster-1.png'

// Investiture Ceremony images
import imgInv1 from '../assets/pic-assets/IMG_2866.JPG'
import imgInv2 from '../assets/pic-assets/IMG_2876.JPG'
import imgInv3 from '../assets/pic-assets/IMG_2878.JPG'
import imgInv4 from '../assets/pic-assets/IMG_2881.JPG'
import imgInv5 from '../assets/pic-assets/IMG_2884.JPG'
import imgInv6 from '../assets/pic-assets/IMG_2902.JPG'
import imgInv7 from '../assets/pic-assets/IMG_2916.JPG'
import imgInv8 from '../assets/pic-assets/IMG_2920.JPG'
import imgInv9 from '../assets/pic-assets/IMG_2954.JPG'
import imgInv10 from '../assets/pic-assets/IMG_2965.JPG'
import imgInv11 from '../assets/pic-assets/IMG_2969.JPG'
import imgInv12 from '../assets/pic-assets/IMG_2978.JPG'
import imgInv13 from '../assets/pic-assets/IMG_2983.JPG'
import imgInv14 from '../assets/pic-assets/IMG_2985.JPG'
import imgInv15 from '../assets/pic-assets/IMG_3101.JPG'
import imgInv16 from '../assets/pic-assets/IMG_3212.JPG'

const images = [
  { id: 1,  title: 'Main Campus Building',             category: 'Campus',       src: imgCampus1, span: 'lg:col-span-2 lg:row-span-2' },
  { id: 2,  title: 'Modern Science Lab',               category: 'Facilities',   src: imgLab,     span: '' },
  { id: 3,  title: 'Computer Education',               category: 'Facilities',   src: imgComp,    span: '' },
  { id: 4,  title: 'School Library',                   category: 'Facilities',   src: imgLib,     span: '' },
  { id: 5,  title: 'Sports Activities',                category: 'Sports',       src: imgSports1, span: 'lg:col-span-2' },
  { id: 6,  title: 'Christmas Celebration',            category: 'Events',       subEvent: 'Christmas Celebration', src: imgEvent1,  span: '' },
  { id: 7,  title: 'Playground Area',                  category: 'Campus',       src: imgPlay,    span: '' },
  { id: 8,  title: 'Children\'s Day Events',           category: 'Events',       subEvent: 'Children\'s Day Events', src: imgEvent2,  span: '' },
  { id: 9,  title: 'Auditorium Hall',                  category: 'Facilities',   src: imgAud,     span: '' },
  { id: 10, title: 'Board Exam Toppers',               category: 'Achievements', src: imgAchieve, span: 'lg:col-span-2' },
  { id: 11, title: 'Primary Wing',                     category: 'Campus',       src: imgCampus3, span: '' },
  { id: 12, title: 'Cultural Fest Highlights',         category: 'Events',       subEvent: 'Cultural Fest', src: imgEvent3,  span: '' },
  // Investiture Ceremony 2025
  { id: 13, title: 'Investiture Ceremony — Oath Taking',          category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv1,  span: 'lg:col-span-2 lg:row-span-2' },
  { id: 14, title: 'Investiture Ceremony — Badge Pinning',        category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv2,  span: '' },
  { id: 15, title: 'Investiture Ceremony — Head Girl Appointed',  category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv3,  span: '' },
  { id: 16, title: 'Investiture Ceremony — Head Boy Appointed',   category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv4,  span: '' },
  { id: 17, title: 'Investiture Ceremony — Guard of Honour',      category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv5,  span: 'lg:col-span-2' },
  { id: 18, title: 'Investiture Ceremony — Sash Ceremony',        category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv6,  span: '' },
  { id: 19, title: 'Investiture Ceremony — March Past',           category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv7,  span: '' },
  { id: 20, title: 'Investiture Ceremony — Prize Distribution',   category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv8,  span: '' },
  { id: 21, title: 'Investiture Ceremony — Principal Address',    category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv9,  span: '' },
  { id: 22, title: 'Investiture Ceremony — Student Leaders',      category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv10, span: 'lg:col-span-2' },
  { id: 23, title: 'Investiture Ceremony — Flag Hoisting',        category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv11, span: '' },
  { id: 24, title: 'Investiture Ceremony — Group Photo',          category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv12, span: '' },
  { id: 25, title: 'Investiture Ceremony — Assembly',             category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv13, span: '' },
  { id: 26, title: 'Investiture Ceremony — Cultural Program',     category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv14, span: '' },
  { id: 27, title: 'Investiture Ceremony — Prefect Board 2026',   category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv15, span: 'lg:col-span-2' },
  { id: 28, title: 'Investiture Ceremony — Closing Ceremony',     category: 'Events', subEvent: 'Investiture Ceremony 2025', src: imgInv16, span: '' },
]

const subEvents = [
  'Investiture Ceremony 2026',
  'Christmas Celebration',
  "Children's Day Events",
  'Cultural Fest'
]

/* ─── Lightbox ─── */
function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNext, onPrev])

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-md flex items-center justify-center p-4">
      <button onClick={onClose} className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-all z-20">
        <X className="w-6 h-6" />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 hover:scale-110 transition-all">
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 text-white rounded-full hover:bg-white/20 hover:scale-110 transition-all">
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
           <p className="text-[0.7rem] font-black uppercase text-red-500 tracking-[0.2em] mb-2">{image.category}</p>
           <h3 className="text-2xl md:text-3xl font-black text-white">{image.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeSubEvent, setActiveSubEvent] = useState('Investiture Ceremony 2025')
  const [lightbox, setLightbox] = useState(null)

  const filtered = images.filter((img) => {
    if (activeFilter === 'All') {
      if (img.category === 'Events') {
        return img.subEvent === activeSubEvent
      }
      return true
    }
    if (activeFilter === 'Events') {
      return img.category === 'Events' && img.subEvent === activeSubEvent
    }
    return img.category === activeFilter
  })

  const navigate = (dir) => {
    const idx = filtered.findIndex((i) => i.id === lightbox.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <main className="bg-gray-50 flex flex-col gap-16 md:gap-24 overflow-hidden pb-20 pt-8">

      {/* ══ HEADER ══ */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50/50 border border-red-50 text-[#c0392b] text-[0.6rem] font-black tracking-widest uppercase mb-6 font-sans">
              <Camera className="w-3.5 h-3.5" /> Moments of Excellence
            </div>
            <h1 className="serif text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-tight">
              Our <span className="text-[#c0392b]">Visual Journey</span>
            </h1>
            <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A glimpse into life at Future School — explore our world-class infrastructure, high-tech labs, and vibrant campus life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { icon: <Monitor className="w-4 h-4" />, label: 'Modern Labs', n: '12+' },
                 { icon: <Star className="w-4 h-4" />, label: 'Annual Events', n: '50+' },
                 { icon: <Zap className="w-4 h-4" />, label: 'Acres Campus', n: '10+' },
                 { icon: <ImageIcon className="w-4 h-4" />, label: 'Photos Logged', n: '500+' },
               ].map(s => (
                 <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                    <p className="serif text-2xl text-gray-900 mb-2">{s.n}</p>
                    <p className="text-[0.55rem] font-black uppercase text-[#c0392b] tracking-widest">{s.label}</p>
                 </div>
               ))}
            </div>
         </Reveal>
      </section>

      {/* ══ GALLERY GRID ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
           <Filter className="w-4 h-4 text-gray-400 mr-2 hidden sm:block" />
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveFilter(cat)}
               className={`
                 px-6 py-2.5 rounded-xl text-[0.65rem] font-bold uppercase tracking-widest transition-all
                 ${activeFilter === cat 
                   ? 'bg-[#c0392b] text-white shadow-lg shadow-red-900/10 px-8' 
                   : 'bg-white border border-gray-100 text-gray-400 hover:border-[#c0392b] hover:text-[#c0392b]'}
               `}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Sub-Events Selector (displays when activeFilter is 'Events' or 'All') */}
        {(activeFilter === 'Events' || activeFilter === 'All') && (
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12 animate-fadeIn border-t border-gray-100 pt-6">
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-450 mr-2">Select Event:</span>
            {subEvents.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubEvent(sub)}
                className={`
                  px-4 py-2 rounded-xl text-[0.6rem] font-bold uppercase tracking-wider transition-all
                  ${activeSubEvent === sub
                    ? 'bg-gray-800 text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-800 hover:text-gray-800'}
                `}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Masonry-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6">
          {filtered.map((img, i) => (
            <Reveal key={img.id} delay={i * 50} className={img.span}>
               <div 
                 onClick={() => setLightbox(img)}
                 className="group relative w-full h-full rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#c0392b]/5 transition-all duration-500 bg-gray-200"
               >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                     <p className="text-[0.6rem] font-black uppercase text-[#c0392b] tracking-[0.2em] mb-1">{img.category}</p>
                     <p className="serif text-white text-lg leading-tight">{img.title}</p>
                     <div className="mt-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all delay-100">
                        <Maximize2 className="w-4 h-4 text-white" />
                     </div>
                  </div>
                  <div className="absolute top-6 right-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[0.6rem] font-black uppercase text-gray-900 tracking-widest shadow-sm">
                     {img.category}
                  </div>
               </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
             <ImageIcon className="w-12 h-12 text-gray-200 mx-auto mb-4" />
             <p className="text-gray-400 font-black uppercase tracking-widest text-xs">No media found in this category.</p>
          </div>
        )}
      </section>

      {/* ══ VIDEO SECTION ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 relative z-10 mb-16">
               <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[0.65rem] font-black tracking-widest uppercase mb-6 font-sans">
                     <Clapperboard className="w-4 h-4" /> Feature Reels
                  </div>
                  <h2 className="serif text-3xl md:text-5xl lg:text-5xl text-white">Watch Life in <span className="text-[#c0392b]">Motion.</span></h2>
               </div>
               <a href="#" className="px-10 py-5 bg-white text-gray-900 font-bold text-[0.7rem] uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
                  View More Reels
               </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
               {[
                 { title: 'Annual Day Highlights 2024', dur: '4:32', id: '1' },
                 { title: 'Sports Meet Championship', dur: '6:15', id: '2' },
                 { title: 'Campus Virtual Tour', dur: '3:48', id: '3' },
               ].map(v => (
                 <div key={v.id} className="group relative bg-white/5 border border-white/10 rounded-3xl p-3 hover:bg-white/10 transition-all cursor-pointer overflow-hidden">
                    <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative mb-6">
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#c0392b] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                             <Play className="w-6 h-6 fill-current ml-1" />
                          </div>
                       </div>
                       <span className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white font-mono text-xs font-bold tracking-widest">{v.dur}</span>
                    </div>
                    <div className="px-2 pb-2">
                       <h4 className="serif text-white font-bold mb-2 leading-tight">{v.title}</h4>
                       <p className="text-gray-500 font-black text-[0.55rem] uppercase tracking-widest">Future Senior Secondary School</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Lightbox Overlay */}
      {lightbox && (
        <Lightbox
          image={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}

    </main>
  )
}