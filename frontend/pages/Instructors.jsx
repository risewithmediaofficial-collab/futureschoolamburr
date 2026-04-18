import { Link } from 'react-router-dom'
import { DropdownPageLayout } from '../components/DropdownPageLayout'
import heroImg from '../assets/pic-assets/banner-2026-3-1.png'

const instructorsTeam = [
  { sno: 1, name: 'Mrs.VINOTHINI RAMACHANDRAN', designation: 'PRINCIPAL' },
  { sno: 2, name: 'Mrs. DEEPA R', designation: 'VICE PRINCIPAL' },
  { sno: 3, name: 'IMMANUEL I', designation: 'PGT' },
  { sno: 4, name: 'NIRMAL KUMAR M', designation: 'PGT' },
  { sno: 5, name: 'B PRIYANGA', designation: 'PGT' },
  { sno: 6, name: 'PRIYA K', designation: 'PGT' },
  { sno: 7, name: 'ANGELIN JAYAKUMARI', designation: 'PGT' },
  { sno: 8, name: 'DEEPAK T', designation: 'TGT' },
  { sno: 9, name: 'KANCHANAMALA G N', designation: 'TGT' },
  { sno: 10, name: 'NIRMALA DEVI P', designation: 'TGT' },
  { sno: 11, name: 'SHYAMALA C', designation: 'TGT' },
  { sno: 12, name: 'MALATHI G', designation: 'TGT' },
  { sno: 13, name: 'ASMA TASNEEM M S', designation: 'PRT' },
  { sno: 14, name: 'C DHANALAKSHMI', designation: 'PRT' },
  { sno: 15, name: 'SANIYA MUSKAN N', designation: 'PRT' },
  { sno: 16, name: 'AYEESHA NEELURI S', designation: 'PRT' },
  { sno: 17, name: 'T.KALAIVANI', designation: 'PRT' },
  { sno: 18, name: 'G M PRIYANKA', designation: 'PRT' },
  { sno: 19, name: 'JAGADESWARI N', designation: 'PRT' },
  { sno: 20, name: 'VIMALA M', designation: 'PRT' },
  { sno: 21, name: 'KEERTHANA B', designation: 'PRT' },
  { sno: 22, name: 'HUMERA ANJUM C', designation: 'PRT' },
  { sno: 23, name: 'SAVITHA K', designation: 'PRT' },
  { sno: 24, name: 'SHAHINA B', designation: 'PRT' },
  { sno: 25, name: 'GEETHA S', designation: 'PRT' },
  { sno: 26, name: 'IRFANA KOUSER N', designation: 'PRT' },
  { sno: 27, name: 'SEETHA V', designation: 'NTT' },
  { sno: 28, name: 'ANU W', designation: 'NTT' },
  { sno: 29, name: 'LAVANYA S', designation: 'NTT' },
  { sno: 30, name: 'SHAGUFTHA THASEEN H', designation: 'OTHER' },
  { sno: 31, name: 'J MURUGAN', designation: 'PET' },
  { sno: 32, name: 'V KOMATHI', designation: 'ADMIN' },
]

export default function Instructors() {
  return (
    <DropdownPageLayout
      hideImageSection={true}
      eyebrow="Our Teaching Staff"
      title="Our Instructors"
      subtitle="Future Senior Secondary School is proud to have a team of experienced and compassionate educators who are committed to inspiring every student to achieve their full potential."
      image={heroImg}
      highlights={[
        { label: 'Excellence', value: '32+ highly qualified educators' },
        { label: 'Impact', value: 'Guiding students toward their future' },
      ]}
    >

      {/* ══ INSTRUCTORS TABLE ══ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Faculty Directory</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Teaching</em> Team
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mt-5" />
          </div>

          {/* Instructors Table */}
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
                {instructorsTeam.map((member, idx) => (
                  <tr
                    key={member.sno}
                    className={`border-b border-gray-100 hover:bg-red-50/30 transition-colors duration-150 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-600 font-medium">{member.sno}</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium">{member.name}</td>
                    <td className="px-4 md:px-6 py-4 text-sm">
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
              <span className="text-xs text-gray-600">Post Graduate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">TGT</span>
              <span className="text-xs text-gray-600">Graduate Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PRT</span>
              <span className="text-xs text-gray-600">Primary Teacher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">NTT</span>
              <span className="text-xs text-gray-600">Non-Teaching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">PET</span>
              <span className="text-xs text-gray-600">Physical Ed.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXCELLENCE STATS ══ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-red-100 mb-4">
                <span className="text-2xl font-bold text-red-600">32+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Teachers</h3>
              <p className="text-sm text-gray-600">Experienced educators committed to excellence</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qualified Staff</h3>
              <p className="text-sm text-gray-600">PGT, TGT, and certified professionals</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-green-100 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Passionate Leaders</h3>
              <p className="text-sm text-gray-600">Inspiring students toward success</p>
            </div>
          </div>
        </div>
      </section>

    </DropdownPageLayout>
  )
}
