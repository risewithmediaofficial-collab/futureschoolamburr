import { Link } from 'react-router-dom'
import { DropdownPageLayout } from '../components/DropdownPageLayout'
import heroImg from '../assets/pic-assets/banner-2026-4-1.png'

const facultyTeam = [
  { sno: 1, name: 'Mrs. YUVARANI J', designation: 'PRINCIPAL' },
  { sno: 2, name: 'Mrs. DEEPA R', designation: 'Vice PRINCIPAL' },
  { sno: 3, name: 'RAJEANUIEL J', designation: 'PGT' },
  { sno: 4, name: 'NIRMAL KUMAR M', designation: 'PGT' },
  { sno: 5, name: 'PRIYA K', designation: 'PGT' },
  { sno: 6, name: 'B PRIYANDA', designation: 'PGT' },
  { sno: 7, name: 'ANIRUDN JAYALKUMARI', designation: 'PGT' },
  { sno: 8, name: 'DEEPAK T', designation: 'TGT' },
  { sno: 9, name: 'HIMALLA DEVI P', designation: 'TGT' },
  { sno: 10, name: 'SHYAMALA C', designation: 'TGT' },
  { sno: 11, name: 'MALATHI D', designation: 'TGT' },
  { sno: 12, name: 'KANCHINAMALA O M', designation: 'TGT' },
  { sno: 13, name: 'ASMA TAYYEEM M S', designation: 'PRT' },
  { sno: 14, name: 'C CHARULAKSHMI', designation: 'PRT' },
  { sno: 15, name: 'SANIYA MAUSEAN H', designation: 'PRT' },
  { sno: 16, name: 'AYESHA NEELLARI S', designation: 'PRT' },
  { sno: 17, name: 'T KALAIVANI', designation: 'PRT' },
  { sno: 18, name: 'G M PRIYANKA', designation: 'PRT' },
  { sno: 19, name: 'JAGADESWARI H', designation: 'PRT' },
  { sno: 20, name: 'VINILA M', designation: 'PRT' },
  { sno: 21, name: 'KEERITHANA B', designation: 'PRT' },
  { sno: 22, name: 'HUMERA ANJUM C', designation: 'PRT' },
  { sno: 23, name: 'SAVITHA K', designation: 'PRT' },
  { sno: 24, name: 'BHAVSA B', designation: 'PRT' },
  { sno: 25, name: 'GEETHA S', designation: 'PRT' },
  { sno: 26, name: 'BIYANA KOUSER N', designation: 'PRT' },
  { sno: 27, name: 'BETHA V', designation: 'NIT' },
  { sno: 28, name: 'ANU W', designation: 'NIT' },
  { sno: 29, name: 'LAVANYA S', designation: 'NIT' },
  { sno: 30, name: 'LAVANYA S', designation: 'NIT' },
  { sno: 31, name: 'SHARIQUE THAHSEN H', designation: 'OTHER' },
  { sno: 32, name: 'J MURUGAN', designation: 'PRT' },
  { sno: 33, name: 'SATHISH E S', designation: 'PFI' },
  { sno: 34, name: 'V KOMATHI', designation: 'ADMIN' },
]

export default function Affiliations() {
  return (
    <DropdownPageLayout
      hideImageSection={true}
      eyebrow="Affiliations & Recognition"
      title="Our Affiliations"
      subtitle="Future Senior Secondary School is affiliated to the Central Board of Secondary Education (CBSE), New Delhi."
      image={heroImg}
    >
      <section className="relative bg-white pt-8 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Affiliation Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CBSE Affiliation */}
            <div className="bg-white border border-gray-100 border border-red-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">CBSE Affiliation</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">Board:</span> Central Board of Secondary Education (CBSE), New Delhi</p>
                    <p><span className="font-semibold">Affiliation Number:</span> 1930465</p>
                    <p><span className="font-semibold">School Code:</span> 55386</p>
                    <p className="text-xs text-gray-600 pt-2">
                      Future Senior Secondary School is affiliated to the Central Board of Secondary Education (CBSE), New Delhi, vide Affiliation Number 1930465 in accordance with that as prepared and submitted under CBSE guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Board Affiliations */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Other Board Examinations</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>✓ All India Secondary School Certificate Examination (AISSE)</p>
                    <p>✓ All India Senior School Certificate Examination (AISSCIE)</p>
                    <p className="text-xs text-gray-600 pt-2">
                      Students are eligible for All India Secondary School Certificate and All India Senior School Certificate Examination conducted by the Board of Studies X and XII respectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Certificate Link */}
          <div className="bg-white border-2 border-red-600 rounded-xl p-6 md:p-8 text-center mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Transfer Certificate Information</h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Specimen Copy of Transfer Certificate
            </a>
          </div>
        </div>
      </section>

      {/* ══ FACULTY TEAM ══ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              <em className="text-red-600 not-italic">Faculty</em> Team
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          {/* Faculty Table */}
          <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-white border border-gray-100">
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">S.NO.</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">NAME</th>
                  <th className="px-4 md:px-6 py-4 text-left text-sm font-bold text-white">DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {facultyTeam.map((member, idx) => (
                  <tr
                    key={member.sno}
                    className={`border-b border-gray-100 hover:bg-red-50/30 transition-colors duration-150 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="px-4 md:px-6 py-3 text-sm text-gray-600 font-medium">{member.sno}</td>
                    <td className="px-4 md:px-6 py-3 text-sm text-gray-900 font-medium">{member.name}</td>
                    <td className="px-4 md:px-6 py-3 text-sm">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
                        {member.designation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PGT</span>
              <span className="text-sm text-gray-600">Post Graduate Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">TGT</span>
              <span className="text-sm text-gray-600">Trained Graduate Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PRT</span>
              <span className="text-sm text-gray-600">Primary Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">NIT</span>
              <span className="text-sm text-gray-600">Non-Teaching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PFI</span>
              <span className="text-sm text-gray-600">Physical Education</span>
            </div>
          </div>
        </div>
      </section>
    </DropdownPageLayout>
  )
}
