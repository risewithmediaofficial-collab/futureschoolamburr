import { Reveal } from '../../utils/reveal'

export default function StatsBand() {
  return (
    <section style={{ background: '#c0392b' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[['3,000+', 'Students Enrolled'], ['97.8%', 'Board Pass Rate'], ['200+', 'Faculty Members'], ['25 yrs', 'of Excellence']].map(([n, l], i) => (
            <Reveal key={l} delay={i * 60}>
              <div className="flex flex-col items-center py-10 px-4 gap-1.5"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.14)' : 'none' }}>
                <span className="serif text-3xl md:text-4xl font-normal text-white">{n}</span>
                <span className="text-[0.58rem] tracking-[0.2em] uppercase font-medium text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
