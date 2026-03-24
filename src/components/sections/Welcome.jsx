import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'
import bnrWelcome from '../../assets/pic-assets/Secondary.jpg'

export default function Welcome() {
  return (
    <section className="py-24 md:py-32" style={{ background: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

        <Reveal direction="left">
          <div className="relative">
            <div className="aspect-[5/6] overflow-hidden relative flex flex-col group rounded-3xl" style={{ border: '1px solid #e5e5e0' }}>
              <img src={bnrWelcome} alt="School Building" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88), transparent)' }}>
                <p className="text-[0.6rem] tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Ambur, Tamil Nadu</p>
                <p className="serif text-white text-lg font-normal">Future Senior Secondary School</p>
              </div>
            </div>
            {/* Floating CBSE card */}
            <div className="absolute -bottom-5 -right-5 px-5 py-4 z-10"
              style={{ background: '#fafaf8', border: '1px solid #e5e5e0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <p className="serif text-2xl font-normal" style={{ color: '#c0392b' }}>CBSE</p>
              <p className="text-xs mt-0.5" style={{ color: '#aaa' }}>Aff. No. 1930465 · Code 55386</p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#c0392b' }}>Welcome</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="serif text-4xl md:text-5xl font-normal leading-[1.04] relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#c0392b] after:mt-3" style={{ color: '#111' }}>
              Where Every Child<br />Finds Their Edge.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-sm leading-relaxed font-light" style={{ color: '#777', maxWidth: '38ch' }}>
              Future Senior Secondary School has been Ambur's most trusted institution since 1998. Affiliated with CBSE, we shape confident, compassionate, and capable individuals ready for tomorrow's world.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-sm leading-relaxed font-light" style={{ color: '#777', maxWidth: '38ch' }}>
              Dedicated faculty, modern smart classrooms, and a student-centred philosophy create an environment where every child thrives — academically, socially, and personally.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="grid grid-cols-3 gap-0 py-6 mt-2" style={{ borderTop: '1px solid #e8e8e3', borderBottom: '1px solid #e8e8e3' }}>
              {[['3,000+', 'Students'], ['200+', 'Faculty'], ['25+', 'Years']].map(([n, l], i) => (
                <div key={l} className="flex flex-col gap-1 pr-4"
                  style={{ borderRight: i < 2 ? '1px solid #e8e8e3' : 'none', paddingLeft: i > 0 ? '1rem' : 0 }}>
                  <span className="serif text-3xl font-normal" style={{ color: '#111' }}>{n}</span>
                  <span className="text-[0.58rem] tracking-[0.2em] uppercase font-semibold" style={{ color: '#bbb' }}>{l}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <Link to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 w-fit transition-all duration-200 hover:shadow-lg"
              style={{ background: '#111', color: '#fff' }}>
              About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
