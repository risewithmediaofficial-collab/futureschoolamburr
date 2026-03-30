import { Reveal } from '../utils/scroll-reveal'
import tcImage from '../assets/pic-assets/TC-SPECIMEN-pdf-1.jpg'

export default function TCSpecimen() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* ══ HEADER ══ */}
      <section className="relative bg-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Compliance</p>
          </Reveal>
          <Reveal delay={100} y={20}>
            <h1 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              TC <em className="text-red-600 not-italic">Specimen</em>
            </h1>
          </Reveal>
          <Reveal delay={200} y={20}>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              Official Transfer Certificate (TC) format used by Future Senior Secondary School, Ambur, in accordance with CBSE regulations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ IMAGE SECTION ══ */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal y={20}>
            <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-8 shadow-2xl overflow-hidden">
              <img 
                src={tcImage} 
                alt="Transfer Certificate Specimen" 
                className="w-full h-auto rounded-lg shadow-inner border border-gray-50"
              />
              <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                <a 
                  href={tcImage} 
                  download 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download TC Specimen (PDF/JPG)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER INFO ══ */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            Note: This is a specimen copy for information purposes only. Official TCs are issued by the school office upon written request and clearance of all dues.
          </p>
        </div>
      </section>
    </main>
  )
}
