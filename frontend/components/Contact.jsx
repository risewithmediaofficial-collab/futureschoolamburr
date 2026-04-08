import { useRef, useEffect, useState } from 'react'

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

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <Reveal delay={0} direction="left">
            <div className="card-base p-8 text-center group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c0392b] to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="text-4xl mb-6 badge-micro">📍</div>
              <h3 className="serif text-xl text-gray-900 mb-3 font-bold">Address</h3>
              <p className="text-black leading-relaxed text-sm font-semibold tracking-wide">
                No.85, Pillaiyar Koil Street,<br/>
                Solur, Ambur – 635814,<br/>
                Tamil Nadu, India
              </p>
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal delay={100}>
            <div className="card-base p-8 text-center group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c0392b] to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="text-4xl mb-6 badge-micro">📞</div>
              <h3 className="serif text-xl text-gray-900 mb-3 font-bold">Phone</h3>
              <p className="text-black text-sm font-semibold tracking-wide leading-relaxed">
                +91 99628 26465<br/>
                +91 99628 26466<br/>
                <span className="text-xs text-gray-700 font-black block mt-2">Office Hours: 8:00 AM - 4:30 PM</span>
              </p>
            </div>
          </Reveal>

          {/* Email */}
          <Reveal delay={200} direction="right">
            <div className="card-base p-8 text-center group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c0392b] to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="text-4xl mb-6 badge-micro">✉️</div>
              <h3 className="serif text-xl text-gray-900 mb-3 font-bold">Email</h3>
              <p className="text-black text-sm font-semibold tracking-wide leading-relaxed">
                futureschooloffice@gmail.com<br/>
                sureshfutureschool@yahoo.com
              </p>
            </div>
          </Reveal>
        </div>

        {/* Contact Form — Glassmorphism */}
        <Reveal delay={300}>
          <div className="glassmorphism rounded-3xl p-8 md:p-12 max-w-2xl mx-auto backdrop-blur-xl">
            <h3 className="serif text-3xl text-[#c0392b] mb-8 text-center font-bold">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  className="input-material w-full px-6 py-4 bg-white/50 border border-white/30 rounded-xl text-sm font-bold tracking-wide uppercase placeholder-gray-400 focus:outline-none transition-all focus-red"
                />
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="input-material w-full px-6 py-4 bg-white/50 border border-white/30 rounded-xl text-sm font-bold tracking-wide uppercase placeholder-gray-400 focus:outline-none transition-all focus-red"
                />
              </div>
              <input 
                type="text" 
                placeholder="SUBJECT" 
                className="input-material w-full px-6 py-4 bg-white/50 border border-white/30 rounded-xl text-sm font-bold tracking-wide uppercase placeholder-gray-400 focus:outline-none transition-all focus-red"
              />
              <textarea 
                rows="5" 
                placeholder="YOUR MESSAGE" 
                className="input-material w-full px-6 py-4 bg-white/50 border border-white/30 rounded-xl text-sm font-bold tracking-wide uppercase placeholder-gray-400 focus:outline-none transition-all focus-red resize-none"
              ></textarea>
              <button 
                type="submit"
                className="btn-micro w-full px-8 py-5 bg-gradient-to-r from-[#c0392b] to-red-500 text-white font-bold text-sm tracking-widest uppercase rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
