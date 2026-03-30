import { useEffect, useRef, useState } from 'react'

const useReveal = (threshold = 0.1) => {
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

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, visible] = useReveal()
  const transforms = {
    up: 'translateY(32px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    none: 'none',
  }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

const news = [
  { title: 'Eco Club', category: 'LATEST NEWS', date: 'March 2025', icon: '🌱' },
  { title: 'ADMISSIONS', category: 'LATEST NEWS', date: 'March 2025', icon: '📋' },
  { title: '13th Annual Sports Meet', category: 'LATEST NEWS', date: 'Feb 2025', icon: '🏆' },
]

const upcoming = [
  { title: 'CHRISTMAS', category: 'UPCOMING EVENTS', date: 'Dec 25', icon: '🎄' },
  { title: 'GREEN DAY', category: 'UPCOMING EVENTS', date: 'Coming Soon', icon: '🌿' },
  { title: 'RED DAY', category: 'UPCOMING EVENTS', date: 'Coming Soon', icon: '❤️' },
]

export default function EventsGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6 font-sans">
              Stay Updated
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="serif text-4xl md:text-5xl lg:text-5xl text-gray-900 leading-tight">
              Latest News & <span className="text-[#c0392b]">Events</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
        
        {/* News Column */}
        <div className="flex flex-col gap-10">
          <Reveal>
            <h3 className="serif text-2xl pb-4 border-b border-gray-100 text-gray-900">Recent Highlights</h3>
          </Reveal>
          <div className="flex flex-col gap-6">
            {news.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} direction="left">
                <div className="flex gap-4 group cursor-pointer p-4 hover:bg-gray-50 transition-colors rounded-lg border border-transparent hover:border-gray-200">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg border border-blue-100">
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 serif group-hover:text-red-600 transition-colors">{item.title}</h4>
                    <p className="text-[0.6rem] tracking-widest uppercase font-semibold text-gray-400 mt-1">{item.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <button className="px-6 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors w-fit">View All</button>
            </Reveal>
          </div>
        </div>

        {/* Upcoming Events Column */}
        <div className="flex flex-col gap-10">
          <Reveal>
            <h3 className="serif text-2xl pb-4 border-b border-gray-100 text-gray-900">Upcoming Occasions</h3>
          </Reveal>
          <div className="flex flex-col gap-6">
            {upcoming.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} direction="right">
                <div className="flex gap-4 group cursor-pointer p-4 hover:bg-gray-50 transition-colors rounded-lg border border-transparent hover:border-gray-200">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-50 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg border border-purple-100">
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 serif group-hover:text-red-600 transition-colors">{item.title}</h4>
                    <p className="text-[0.6rem] tracking-widest uppercase font-semibold text-gray-400 mt-1">{item.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <button className="px-6 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors w-fit">View All</button>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  )
}
