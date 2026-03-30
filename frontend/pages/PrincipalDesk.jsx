import { Link } from 'react-router-dom'
import { DropdownPageLayout } from '../components/DropdownPageLayout'
import imgYuvarani from '../assets/pic-assets/YUVARANI.png'
import heroImg from '../assets/pic-assets/banner-2026-2-1.png'

export default function PrincipalDesk() {
  return (
    <DropdownPageLayout
      hideImageSection={true}
      eyebrow="From The Office of The Principal"
      title="Principal's Message"
      subtitle="Education awakens the power and beauty that lie within us."
      image={heroImg}
    >
      <section className="relative bg-white pt-8 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

    </DropdownPageLayout>
  )
}
