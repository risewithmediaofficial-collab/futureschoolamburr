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
  { title: 'Eco Club', category: 'LATEST NEWS', date: 'March 2025' },
  { title: 'ADMISSIONS', category: 'LATEST NEWS', date: 'March 2025' },
  { title: '13th Annual Sports Meet', category: 'LATEST NEWS', date: 'Feb 2025' },
]

const upcoming = [
  { title: 'CHRISTMAS', category: 'UPCOMING EVENTS', date: 'Dec 25' },
  { title: 'GREEN DAY', category: 'UPCOMING EVENTS', date: 'Coming Soon' },
  { title: 'RED DAY', category: 'UPCOMING EVENTS', date: 'Coming Soon' },
]

export default function EventsGrid() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
        
        {/* News Column */}
        <div className="flex flex-col gap-10">
          <Reveal>
            <h2 className="serif text-3xl font-normal pb-4 border-b border-gray-100" style={{ color: '#c0392b' }}>Latest News & Events</h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {news.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} direction="left">
                <div className="flex gap-4 group cursor-pointer p-4 hover:bg-gray-50 transition-colors">
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <span className="text-3xl opacity-20">🖼️</span>
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
            <h2 className="serif text-3xl font-normal pb-4 border-b border-gray-100" style={{ color: '#c0392b' }}>Upcoming Events</h2>
          </Reveal>
          <div className="flex flex-col gap-6">
            {upcoming.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} direction="right">
                <div className="flex gap-4 group cursor-pointer p-4 hover:bg-gray-50 transition-colors">
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <span className="text-3xl opacity-20">📅</span>
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
