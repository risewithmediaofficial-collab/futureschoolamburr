import { Reveal } from '../../utils/reveal'

const instaposts = [
  { id: 1, emoji: '📚', likes: 124 },
  { id: 2, emoji: '⚽', likes: 243 },
  { id: 3, emoji: '🎨', likes: 187 },
  { id: 4, emoji: '🎭', likes: 156 },
  { id: 5, emoji: '🌱', likes: 98  },
  { id: 6, emoji: '🎓', likes: 312 },
]

export default function InstagramBand() {
  return (
    <section className="py-20" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: '#c0392b' }}>Social</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif text-3xl font-normal" style={{ color: '#111' }}>@futureschoolambur</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
              Follow Us
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {instaposts.map((p, i) => (
            <Reveal key={p.id} delay={i * 50} direction="up">
              <div className="relative aspect-square cursor-pointer overflow-hidden bg-[#eeede8] group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-25 select-none">{p.emoji}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.55)' }}>
                  <div className="text-center">
                    <svg className="w-4 h-4 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className="text-white text-xs font-bold">{p.likes}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
