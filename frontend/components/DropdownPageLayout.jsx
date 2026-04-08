import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

function getToneClasses(tone) {
  switch (tone) {
    case 'accent':
      return 'border-gray-100 bg-white'
    case 'soft':
      return 'border-gray-100 bg-white'
    default:
      return 'border-gray-100 bg-white'
  }
}

export function DropdownPageLayout({ 
  eyebrow, title, subtitle, highlights = [], children, 
  image, imageAlt, ctaTo = '/admissions', ctaLabel = 'Know the Admission Process', 
  hideImageSection = false, imageContainerClassName = '' 
}) {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative w-full overflow-hidden bg-white pb-16 pt-4 md:pt-8 md:pb-24 border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          <Reveal className="flex flex-col items-center max-w-4xl mb-12 sm:mb-16">
            <span className="text-[#c0392b] text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase font-black px-4 py-2 bg-red-50/50 rounded-full inline-block mb-6 border border-red-50 shadow-sm transition-all duration-300">
              {eyebrow}
            </span>

            <h1 className="serif text-gray-900 leading-[1.1] tracking-tight mt-2 mb-6" 
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)' }}>
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 font-medium max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="flex items-center gap-4 mt-10">
              <Link to={ctaTo}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-[0.7rem] tracking-widest uppercase font-black transition-all bg-[#c0392b] text-white hover:bg-[#a93226] h-12 px-10 py-2 shadow-lg shadow-red-900/10 hover:-translate-y-0.5">
                {ctaLabel}
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {!hideImageSection && (
            <Reveal delay={200} className={`w-full ${imageContainerClassName}`}>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-sm bg-gray-100 group">
                {image ? (
                  <img src={image} alt={imageAlt || title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                ) : (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                     <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Image Pending</p>
                   </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none z-10" />
                
                {highlights.length > 0 && (
                  <div className="absolute bottom-6 left-6 right-6 z-20 hidden md:flex gap-4 justify-center">
                     {highlights.map((item, idx) => (
                       <Reveal key={idx} delay={300 + idx * 100}>
                         <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/20 min-w-[200px] text-left">
                           <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#c0392b]">{item.label}</p>
                           <p className="mt-1 text-sm font-bold text-gray-900 leading-snug">{item.value}</p>
                         </div>
                       </Reveal>
                     ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}
          
        </div>
      </section>

      <section className="bg-[#fafaf8] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">{children}</div>
        </div>
      </section>
    </main>
  )
}

export function DropdownCard({ title, eyebrow, children, tone = 'white', className = '' }) {
  return (
    <Reveal delay={0}>
      <div className={`h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 md:p-10 ${className}`.trim()}>
        {eyebrow ? <p className="mb-4 text-[0.65rem] font-black uppercase tracking-widest text-[#c0392b]">{eyebrow}</p> : null}
        {title ? <h2 className="serif mb-6 text-3xl font-normal text-gray-900">{title}</h2> : null}
        {children}
      </div>
    </Reveal>
  )
}

export function DropdownGrid({ items, columns = 'md:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <div className={`grid items-start gap-6 ${columns}`}>
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${index}`} delay={index * 100}>
          <DropdownCard title={item.title} eyebrow={item.eyebrow || `Section ${String(index + 1).padStart(2, '0')}`} tone={item.tone || 'white'}>
            <p className="text-sm leading-relaxed text-gray-600 md:text-base mb-6 font-medium">{item.text}</p>
            {item.points && item.points.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700 md:text-base border-t border-gray-100 pt-6">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-[#c0392b] rounded-full" />
                    <span className="font-semibold">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </DropdownCard>
        </Reveal>
      ))}
    </div>
  )
}
