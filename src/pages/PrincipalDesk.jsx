import { Link } from 'react-router-dom'
import imgYuvarani from '../assets/pic-assets/YUVARANI.png'

export default function PrincipalDesk() {
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
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">From The Office of The Principal</p>
            <h1 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Principal's</em> <strong className="font-bold">Message</strong>
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          {/* Principal Message Section */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left — text content */}
            <div className="md:col-span-2 space-y-6">
              {/* Main Message */}
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-sm md:text-base italic text-gray-800 font-semibold mb-1">
                    "Education awakens the power and beauty that lie within us."
                  </p>
                  <p className="text-sm md:text-base text-gray-700">
                    Education does not only mean academic excellence. It rather is a harmonious and synchronized combination of hand (skills like various arts), head (Intellectual Power) and heart (Value System). In the present era of digitalized world, it the biggest challenge before educators and parents is to nurture the young minds with the indelible impressions of a holistic education.
                  </p>
                </div>

                <p className="text-sm md:text-base">
                  Therefore, we come up with a vision to foster different facets of a student in order to see him/her developing as a vibrant student, responsible citizen and above all a generous and sentient human being. Our pedagogy is child centric, with emphasis on over- all growth and development of our students.
                </p>

                <p className="text-sm md:text-base">
                  We take the onus of making the child's journey in school rich with many enjoyable learning experiences by providing them an exquisite platform to hone their creative and inter-personal skills.
                </p>

                <p className="text-sm md:text-base">
                  Today's India is an empowered and enlightened nation. We wish to make it even more powerful with smart and confident citizens who would make us proud of their multifaceted growth.
                </p>
              </div>
            </div>

            {/* Right — Principal Image and Info */}
            <div className="md:col-span-1 sticky top-24">
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="aspect-[4/5] bg-gray-50 overflow-hidden">
                  <img
                    src={imgYuvarani}
                    alt="Mrs. YUVARANI J"
                    className="w-full h-full object-contain object-top"
                  />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-red-600" style={{ fontFamily: "'Georgia', serif" }}>
                    Mrs. YUVARANI J
                  </h3>
                  <p className="text-gray-900 font-semibold mt-2">Principal</p>
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

      {/* ══ EDUCATIONAL PHILOSOPHY ══ */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hand</h3>
              <p className="text-red-100 text-sm">Skills like various arts and practical learning</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Head</h3>
              <p className="text-red-100 text-sm">Intellectual Power and critical thinking</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Heart</h3>
              <p className="text-red-100 text-sm">Value System and holistic education</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="py-16 md:py-20 bg-red-50 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Nurture Your <em className="text-red-600 not-italic">Child's Potential</em>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Foster all-round development with our holistic education approach combining skills, intellect, and values.
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
