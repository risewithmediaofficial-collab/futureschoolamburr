import { useEffect, useRef, useState } from 'react'
import imgKP from '../../assets/pic-assets/Mr. K. PANDURANGAN.png'
import imgPS from '../../assets/pic-assets/Mr.P.Sureshbabu.png'
import imgPR from '../../assets/pic-assets/Ms.P.Rameshbabu SECRETARY.png'
import imgJS from '../../assets/pic-assets/Ms.Jayanthi Suresh.png'
import imgJY from '../../assets/pic-assets/YUVARANI.png'

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

const management = [
  { name: 'Mr.K.Pandurangan', role: 'CHAIRMAN', img: imgKP },
  { name: 'Mr.P.Sureshbabu', role: 'CORRESPONDENT', img: imgPS },
  { name: 'Ms.P.Rameshbabu', role: 'SECRETARY', img: imgPR },
  { name: 'Ms.Jayanthi Suresh', role: 'ACADEMIC DIRECTOR', img: imgJS },
  { name: 'Mrs.J.Yuvarani', role: 'PRINCIPAL', img: imgJY },
]

export default function Management() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50/50 text-[#c0392b] text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6">
              Leadership
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Our Visionary <span className="text-[#c0392b]">Management</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-black text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Guided by decades of experience and a passion for holistic education, our leadership team ensures that every child receives the best foundation for life.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {management.map((m, i) => (
            <Reveal key={m.name} delay={i * 100} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  {/* Circle frame as seen in screenshot */}
                  <div className="w-32 h-44 md:w-40 md:h-52 rounded-2xl border border-gray-100 overflow-hidden bg-gray-50 group-hover:border-red-600 transition-all duration-200 shadow-sm group-hover:shadow-md">
                    <img 
                      src={m.img} 
                      alt={m.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    />
                  </div>
                  {/* In a real app, images would go here */}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{m.name}</h3>
                <p className="text-[0.65rem] tracking-widest uppercase font-semibold text-gray-800">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
