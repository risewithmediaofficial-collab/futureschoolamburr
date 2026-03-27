import { Link } from 'react-router-dom'
import imgKP from '../assets/pic-assets/Mr. K. PANDURANGAN.png'

export default function ChairmanDesk() {
  return (
    <main className="pt-20 bg-white overflow-x-hidden">
      {/* ══ PAGE HERO ══ */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">From The Office of The Chairman</p>
            <h1 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Chairman's</em> <strong className="font-bold">Message</strong>
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          {/* Chairman Message Section */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left — text content */}
            <div className="md:col-span-2 space-y-6">
              {/* Quote Section */}
              <div className="bg-gray-50 border-l-4 border-red-600 p-6 md:p-8 rounded-r-lg">
                <svg className="w-8 h-8 text-red-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-6-3-1.813 0-3 .75-3 2c0 1 0 2 .5 4c.5 2 1 4.042 1 6 0 .5 0 1-.5 1 0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
                <p className="text-gray-700 italic leading-relaxed text-base md:text-lg">
                  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today".
                </p>
                <p className="text-gray-600 font-semibold mt-4">— Malcolm X.</p>
              </div>

              {/* Main Message */}
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-sm md:text-base">
                  It's a moment of pride, to share with all the stakeholders and our dear parents & students, within a short span of time Future Senior Secondary School has imprinted its vibrant presence in the educational map of Ambur and the surrounding localities. At Future we believe all students can be successful and this belief drives the work we do on a daily basis. We aim to inculcate a respect for diversity, tolerance, mutual understanding and to promote peaceful co-existence among our children. As a progressive school our system is meant to bring out the best out of not only every learner but also every educator.
                </p>

                <p className="text-sm md:text-base">
                  Our success lies in what pupils achieve in their lives. Needless to say the consistent success in Board examination speaks for itself. It is therefore our consistent endeavor to work with them, share their vision and goals and become anchors in their life during their schooldays at Future.
                </p>

                <p className="text-sm md:text-base">
                  We do hope your inspiration and support shall continue to make our partnership more and more collaborative.
                </p>
              </div>
            </div>

            {/* Right — Chairman Image and Info */}
            <div className="md:col-span-1 sticky top-24">
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img
                    src={imgKP}
                    alt="Mr. K. PANDURANGAN"
                    className="w-full h-full object-contain object-top"
                  />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-red-600" style={{ fontFamily: "'Georgia', serif" }}>
                    Mr. K. PANDURANGAN
                  </h3>
                  <p className="text-gray-900 font-semibold mt-2">Chairman</p>
                  <p className="text-sm text-gray-600 mt-1">Future Senior Secondary School</p>
                  <div className="w-8 h-0.5 bg-red-600 mx-auto mt-4" />
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 space-y-3">
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 transition-colors duration-200 group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="py-16 md:py-20 bg-red-50 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Be Part of Our <em className="text-red-600 not-italic">Journey</em>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Join Future Senior Secondary School and experience quality education combined with holistic development.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Apply for Admission
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
