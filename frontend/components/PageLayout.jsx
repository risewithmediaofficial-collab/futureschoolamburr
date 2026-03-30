import { Reveal } from '../utils/reveal'
import { BookOpen } from 'lucide-react'

export default function PageLayout({ kicker, title, highlight, description, heroImg, children }) {
  return (
    <main className="bg-gray-50 flex flex-col gap-16 md:gap-24 overflow-x-hidden pb-20 pt-4">
      
      {/* ══ HEADER ══ */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        
        <div className={`relative max-w-7xl mx-auto ${heroImg ? 'grid md:grid-cols-2 gap-12 lg:gap-16 items-center' : 'text-center max-w-4xl mx-auto'} z-10`}>
          <Reveal>
            <div className={`flex flex-col gap-6 ${!heroImg && 'items-center text-center max-w-3xl mx-auto'}`}>
              {kicker && (
                <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-red-50 border border-red-50 text-[#c0392b] text-[0.6rem] font-black tracking-widest uppercase">
                  <BookOpen className="w-3.5 h-3.5" /> {kicker}
                </div>
              )}
              
              <h1 className="serif text-4xl md:text-5xl lg:text-7xl text-gray-900 leading-tight">
                {title} <span className="text-[#c0392b]">{highlight}</span>
              </h1>
              
              {description && (
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mt-2">
                  {description}
                </p>
              )}
            </div>
          </Reveal>

          {heroImg && (
            <Reveal delay={200}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-gray-50 group mt-8 md:mt-0">
                <img src={heroImg} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent pointer-events-none" />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <div className="flex flex-col gap-16 md:gap-24">
        {children}
      </div>
      
    </main>
  )
}
