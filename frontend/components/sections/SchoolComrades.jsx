import { useEffect, useRef, useState } from 'react'

const useReveal = (threshold = 0.1) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const comrades = [
  {
    name: 'A.N.DHARSHAN',
    club: 'CYBER CREW',
    position: 'SECRETARY',
    accent: 'from-[#c0392b] to-[#e67e22]',
    chipStyle: 'bg-[#fff2ef] text-[#a93226] border-[#f4d7d1]',
  },
  {
    name: 'KEZIAH MARGARET',
    club: 'CYBER CREW',
    position: 'DEPUTY',
    accent: 'from-[#a93226] to-[#d35400]',
    chipStyle: 'bg-[#fff2ef] text-[#a93226] border-[#f4d7d1]',
  },
  {
    name: 'JAISHREE B',
    club: 'ECO CLUB',
    position: 'SECRETARY',
    accent: 'from-[#1f7a4f] to-[#4caf50]',
    chipStyle: 'bg-[#edf8f1] text-[#1f7a4f] border-[#d4eadc]',
  },
  {
    name: 'CHINMAYAA SREE\u00A0A.P',
    club: 'ECO CLUB',
    position: 'DEPUTY',
    accent: 'from-[#2d8f5f] to-[#7dbd6d]',
    chipStyle: 'bg-[#edf8f1] text-[#1f7a4f] border-[#d4eadc]',
  },
]

const getInitials = (name) =>
  name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')

export default function SchoolComrades() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#fcfbfa] to-white overflow-hidden border-t border-[#f1e3df]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-center md:text-left mb-14">
            <h2 className="serif text-4xl md:text-[2.8rem] font-normal" style={{ color: '#c0392b' }}>
              School Comrades
            </h2>
            <p className="mt-3 text-sm md:text-base tracking-[0.12em] uppercase font-semibold text-gray-700">
              Student Leaders 2026-27
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {comrades.map((c, i) => (
            <Reveal key={c.name} delay={i * 100} direction="up">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[#ecdad4] bg-white p-6 md:p-7 shadow-[0_10px_24px_rgba(110,48,34,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_40px_rgba(110,48,34,0.16)]">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.accent}`} />
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-[#f8ece8] transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-start justify-between gap-2">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#edd7d1] bg-white text-sm font-bold text-[#9d3a2e]">
                      {getInitials(c.name)}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase border ${c.chipStyle}`}
                    >
                      {c.club}
                    </span>
                  </div>

                  <h3 className="serif text-[1.35rem] leading-snug text-[#b0392b]">{c.name}</h3>
                  <p className="mt-3 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-[#1f2937]">{c.position}</p>

                  <div className="mt-6 h-1.5 w-12 rounded-full bg-[#f1d4cb] transition-all duration-500 group-hover:w-20 group-hover:bg-[#d66c55]" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
