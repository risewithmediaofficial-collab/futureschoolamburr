import { Reveal } from '../../utils/reveal'
import img1 from '../../assets/pic-assets/IMG_0080-360x260.jpg'
import img2 from '../../assets/pic-assets/IMG_0126-360x260.jpg'
import img3 from '../../assets/pic-assets/IMG_0129-360x260.jpg'
import img4 from '../../assets/pic-assets/IMG_0135-360x260.jpg'
import img5 from '../../assets/pic-assets/IMG_0137-360x260.jpg'
import img6 from '../../assets/pic-assets/IMG_0140-360x260.jpg'

const instaposts = [
  { id: 1, image: img1, likes: 124 },
  { id: 2, image: img2, likes: 243 },
  { id: 3, image: img3, likes: 187 },
  { id: 4, image: img4, likes: 156 },
  { id: 5, image: img5, likes: 98  },
  { id: 6, image: img6, likes: 312 },
]

export default function InstagramBand() {
  return (
    <section className="py-20" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-14 gap-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/50 text-[#c0392b] text-[0.6rem] font-black uppercase tracking-widest rounded-full border border-red-50 mb-6 font-sans">
               Social
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-3xl md:text-5xl lg:text-5xl text-gray-900 leading-tight">
              @futureschoolambur
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <a href="https://instagram.com/futureschoolambur" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-[0.7rem] font-bold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl uppercase tracking-widest shadow-red-900/10"
              style={{ background: 'linear-gradient(135deg, #833ab4, #c0392b, #fcb045)' }}>
              Follow Us
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-w-4xl mx-auto">
          {instaposts.map((p, i) => (
            <Reveal key={p.id} delay={i * 50} direction="up">
              <div className="relative aspect-square cursor-pointer overflow-hidden bg-[#eeede8] group rounded-lg">
                <img src={p.image} alt="post" className="w-full h-full object-cover" />
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
