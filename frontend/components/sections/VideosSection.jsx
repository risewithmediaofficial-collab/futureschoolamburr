import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'

function VideoModal({ video, onClose }) {
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
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

const videos = [
  { id: 1, youtubeId: 'dQw4w9WgXcQ', title: 'Future School — Campus Tour 2024', dur: '3:48', category: 'Campus',    thumb: '🏫' },
  { id: 2, youtubeId: 'dQw4w9WgXcQ', title: 'Annual Day Celebration 2024',       dur: '6:15', category: 'Events',    thumb: '🎭' },
  { id: 3, youtubeId: 'dQw4w9WgXcQ', title: 'Sports Day 2024 Highlights',        dur: '4:22', category: 'Sports',    thumb: '⚽' },
  { id: 4, youtubeId: 'dQw4w9WgXcQ', title: 'Science Exhibition Showcase',       dur: '5:10', category: 'Academics', thumb: '🔬' },
  { id: 5, youtubeId: 'dQw4w9WgXcQ', title: 'Board Toppers Speak — 2024',        dur: '7:30', category: 'Results',   thumb: '🏆' },
]

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="py-24 md:py-28" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6 font-sans">
                 Watch & Learn
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

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-4">
          {/* Featured */}
          <Reveal direction="left">
            <div className="group relative aspect-video cursor-pointer overflow-hidden border border-gray-100"
              style={{ background: '#f8fafc' }}
              onClick={() => setActiveVideo(videos[0])}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[7rem] opacity-[0.03] select-none">{videos[0].thumb}</span>
              </div>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.05) 0%, transparent 55%)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#c0392b] shadow-[0_0_0_8px_rgba(192,57,43,0.1)] transition-transform group-hover:scale-105">
                  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[0.58rem] tracking-widest uppercase font-bold px-2.5 py-0.5 mb-2 inline-block bg-[#c0392b] text-white">{videos[0].category}</span>
                <p className="serif text-gray-900 text-xl font-normal leading-tight">{videos[0].title}</p>
                <p className="text-xs mt-1 font-mono text-gray-600">{videos[0].dur}</p>
              </div>
            </div>
          </Reveal>

          {/* List */}
          <div className="flex flex-col gap-2">
            {videos.slice(1).map((v, i) => (
              <Reveal key={v.id} delay={i * 60} direction="right">
                <div className="group flex gap-4 p-4 cursor-pointer transition-all duration-200 border border-gray-100 hover:bg-gray-50 bg-white"
                  onClick={() => setActiveVideo(v)}>
                  <div className="relative w-28 h-20 flex-shrink-0 flex items-center justify-center overflow-hidden bg-gray-50 border border-gray-100">
                    <span className="text-3xl opacity-20">{v.thumb}</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#c0392b] transition-transform group-hover:scale-105">
                        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 py-0.5">
                    <p className="text-[0.56rem] tracking-widest uppercase font-black mb-1 text-[#c0392b]">{v.category}</p>
                    <p className="text-sm font-bold leading-snug line-clamp-2 text-gray-900 group-hover:text-gray-900 transition-colors">{v.title}</p>
                    <p className="text-[0.6rem] font-mono mt-1 text-gray-700">{v.dur}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  )
}
