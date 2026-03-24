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

const comrades = [
  { name: 'ABIYAN YOUSUF V', role: 'DISCIPLINE LEADERS' },
  { name: 'YUVAN SHANKAR S.S', role: 'DISCIPLINE LEADERS' },
  { name: 'ROSNA SREE K', role: 'DISCIPLINE LEADERS' },
  { name: 'BHAVAN CHANDHAR D', role: 'DISCIPLINE LEADERS' },
]

export default function SchoolComrades() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
        <Reveal>
          <h2 className="serif text-4xl font-normal mb-16" style={{ color: '#c0392b' }}>School Comrades</h2>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {comrades.map((c, i) => (
            <Reveal key={c.name} delay={i * 100} direction="up">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-gray-900 tracking-wide serif">{c.name}</h3>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase font-semibold text-gray-400">{c.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
