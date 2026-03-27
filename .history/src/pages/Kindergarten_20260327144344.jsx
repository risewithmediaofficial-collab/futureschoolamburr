import { Link } from 'react-router-dom'
import imgPrimary from '../assets/pic-assets/Secondary-410x260.jpg'

export default function Kindergarten() {
  return (
    <main className="pt-20 bg-white overflow-x-hidden">
      {/* ══ HERO SECTION ══ */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Our Programs</p>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Kindergarten</em> Program
            </h1>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Kindergarten: <em className="text-red-600 not-italic">K2 and K3</em>
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-gray-700 leading-relaxed">
                  The main aim at this stage is to develop cognitive and motor skills and to encourage curiosity, imagination and create interest, thus exposing the child to an exciting and wonderful world of learning. Kids are encouraged to study through "techno tools".
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Only child centered education is practiced. Learning through DIGI BOARD, structured play & regular field trips are an integral part of the KG curriculum, as we know that only a solid base in this level will ease out the child's study in future.
                </p>

                <div className="bg-red-50 border-l-4 border-red-600 px-6 py-4 rounded-r-lg">
                  <Link 
                    to="/admissions"
                    className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Click Here To Know The Admission Process →
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://via.placeholder.com/500x400/f3f4f6/dc2626?text=Kindergarten+Learning"
                  alt="Kindergarten"
                  className="w-full h-80 object-cover"
                />
                <div className="p-8 bg-gradient-to-br from-red-50 to-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our Kindergarten?</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✓</span>
                      <span>Child-centered education approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✓</span>
                      <span>Learning through DIGI BOARD and technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✓</span>
                      <span>Structured play and interactive activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✓</span>
                      <span>Regular field trips and experiential learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✓</span>
                      <span>Strong cognitive and motor skill development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRIMARY LEVEL SECTION ══ */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100" id="primary-level">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
            <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
              <img
                src={imgPrimary}
                alt="Primary Level Students"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="mt-6 border-t border-gray-300 pt-4">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                Primary : <strong className="font-semibold">Grades I to VIII</strong>
              </h2>
            </div>

            <div className="mt-5 space-y-5 text-gray-700 leading-relaxed">
              <p>
                At the primary level, there is a greater emphasis on development based curriculum and students are taught the essential
                concepts of various subjects. Futurians are taught specifically through Digi Board, content which inculcate zeal and
                concentration among the students. Special emphasis is also laid on the development of positive attitudes and healthy habits
                among the students. Apart from preparing the students to succeed in academics, they are also taught the importance of moral
                values to lead a disciplined life.
              </p>
              <p>
                Activity based learning is given more focus in this stage. Co scholastic activities augment their physical and mental ability.
                English "Seasons" provide a new dimension to their learning.
              </p>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 text-red-600 font-bold text-lg hover:text-red-700 transition-colors duration-200"
              >
                Click Here To Know The Admission Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ADMISSION PROCEDURE ══ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Complete <em className="text-red-600 not-italic">Admission</em> Details
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              For detailed information about age eligibility, required documents, readiness assessments, and the complete admission process, please visit our admissions page.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              View Full Admission Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="py-16 md:py-20 bg-red-50 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Ready to Join Our <em className="text-red-600 not-italic">Kindergarten</em> Family?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Give your child a head start with our child-centered kindergarten program designed to nurture curiosity and foster a love for learning.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Apply for Admission
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
