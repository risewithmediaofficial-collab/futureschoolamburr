import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bnrJoin from '../../assets/pic-assets/banner-2026-5-1.png'

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.1) {
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

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal()
  const transforms = { up: 'translateY(36px)', left: 'translateX(-48px)', right: 'translateX(48px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.72s ease ${delay}ms, transform 0.72s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

export default function JoinBanner() {
  return (
    <section className="relative h-[450px] overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img src={bnrJoin} alt="Join" className="w-full h-full object-cover grayscale-[0.1] brightness-90 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-[#c0392b]/10" />
      </div>

      <Reveal className="relative z-20 h-full w-full flex items-center justify-end px-4 md:px-10 lg:px-16">
        <div className="bg-white p-10 md:p-14 max-w-xl text-gray-900 border border-gray-100 shadow-2xl rounded-3xl ml-auto">
           <div>
              <p className="text-[#c0392b] text-[0.6rem] font-black tracking-widest uppercase mb-6">Get Started Today</p>
              <h2 className="serif text-4xl md:text-5xl lg:text-5xl leading-tight mb-10 text-gray-900">
                Join with us for a <span className="text-[#c0392b]">Better Future.</span>
              </h2>
              <Link to="/contact" className="inline-flex px-10 py-5 bg-[#c0392b] text-white text-[0.7rem] font-bold uppercase tracking-widest rounded-xl hover:bg-[#a93226] transition-all shadow-xl shadow-red-900/10 hover:-translate-y-1">
                Contact Us Now
              </Link>
           </div>
        </div>
      </Reveal>
    </section>
  )
}
