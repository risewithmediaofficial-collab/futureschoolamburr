import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'

const campusTour = {
  youtubeId: 'wMs6jXTJYO0',
  title: 'Future School — Campus Tour 2024',
  category: 'Campus',
}

function VideoModal({ onClose }) {
  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-12 right-0 text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold flex items-center gap-2">
          <span className="w-4 h-px bg-current" /> Close
        </button>
        <div className="aspect-video bg-black overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${campusTour.youtubeId}?autoplay=1&rel=0`}
            title={campusTour.title}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default function VideosSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-24 md:py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6 font-sans">
                Watch &amp; Learn
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                School <span className="text-[#c0392b]">Videos</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link to="/gallery"
              className="text-[0.7rem] font-black tracking-widest uppercase flex items-center gap-3 transition-all hover:text-[#c0392b] group text-gray-700">
              View All Gallery
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#c0392b] group-hover:text-white group-hover:border-[#c0392b] transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </Reveal>
        </div>

        {/* Single Video */}
        <Reveal>
          <div
            className="group relative w-full aspect-video cursor-pointer overflow-hidden border border-gray-100 rounded-sm"
            onClick={() => setOpen(true)}
          >
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${campusTour.youtubeId}/maxresdefault.jpg`}
              alt={campusTour.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#c0392b] shadow-[0_0_0_12px_rgba(192,57,43,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_16px_rgba(192,57,43,0.25)]">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[0.58rem] tracking-widest uppercase font-bold px-2.5 py-0.5 mb-3 inline-block bg-[#c0392b] text-white">
                {campusTour.category}
              </span>
              <p className="serif text-white text-2xl md:text-3xl font-normal leading-tight">
                {campusTour.title}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {open && <VideoModal onClose={() => setOpen(false)} />}
    </section>
  )
}
