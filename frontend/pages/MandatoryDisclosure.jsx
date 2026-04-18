import { Reveal } from '../utils/scroll-reveal'
import { FileText } from 'lucide-react'

export default function MandatoryDisclosure() {
  const generalInfo = [
    { label: 'Name of the School', value: 'Future Senior Secondary School' },
    { label: 'Affiliation No.', value: '1930465' },
    { label: 'School Code', value: '55386' },
    { label: 'Complete Address', value: 'Ambur, Vellore District, Tamil Nadu – 635 814' },
    { label: 'Principal Name & Qualification', value: 'Mrs.VINOTHINI RAMACHANDRAN, M.Sc., B.Ed.' },
    { label: 'School Email ID', value: 'futureschooloffice@gmail.com' },
    { label: 'Contact Details', value: '+91 99628 26465' },
  ]

  const disclosureItems = [
    { sno: 1, title: 'CBSE MANDATORY PUBLIC DISCLOSURE', file: '/uploads/cbse-mandatory-disclosure.pdf' },
    { sno: 2, title: 'COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY', file: '/uploads/AFFILIATION.pdf' },
    { sno: 3, title: 'COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE', file: '/uploads/Trust-Deed.pdf' },
    { sno: 4, title: 'COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT', file: '/uploads/NOC.pdf' },
    { sno: 5, title: 'COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE', file: '/uploads/Recognition.pdf' },
    { sno: 6, title: 'COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE', file: '/uploads/Document-20.pdf' },
    { sno: 7, title: 'COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY', file: '/uploads/FireSafety.pdf' },
    { sno: 8, title: 'COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION', file: '/uploads/LICENCE-FORM-D.pdf' },
    { sno: 9, title: 'COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES', file: '/uploads/Sanitary-Certificate.pdf' },
    { sno: 10, title: 'FEE STRUCTURE OF THE SCHOOL', file: '/uploads/Fee-Structure.pdf' },
    { sno: 11, title: 'ANNUAL ACADEMIC CALENDAR', file: '/uploads/Calendar-2023-2024.pdf' },
    { sno: 12, title: 'LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)', file: '/uploads/deocertificate.pdf' },
    { sno: 13, title: 'LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS', file: '/uploads/PTA.pdf' },
    { sno: 14, title: 'LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY', file: '/uploads/RESULT.pdf' },
  ]

  return (
    <main className="bg-gray-50 overflow-x-hidden">
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
              Mandatory <em className="text-red-600 not-italic">Disclosure</em>
            </h1>
          </Reveal>
          <Reveal delay={200} y={20}>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              In accordance with CBSE guidelines, we maintain full transparency regarding our school's infrastructure, staff, and regulatory compliance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CONTENT ══ */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12">
            
            {/* General Info */}
            <Reveal y={20}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-red-600 rounded-full" />
                  A : General Information
                </h2>
                <div className="grid gap-4">
                  {generalInfo.map((item) => (
                    <div key={item.label} className="grid sm:grid-cols-[250px_1fr] border-b border-gray-50 pb-3 last:border-0">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Documents */}
            <Reveal delay={100} y={20}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-red-600 rounded-full" />
                  B : List of Files to be Added in Mandatory Disclosure
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-600 uppercase tracking-wider">S.No</th>
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-600 uppercase tracking-wider">Particulars</th>
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-600 uppercase tracking-wider">Document</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {disclosureItems.map((item) => (
                        <tr key={item.sno} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 text-sm font-bold text-gray-800">{item.sno}</td>
                          <td className="px-4 py-3 text-sm font-bold text-[#c0392b]">{item.title}</td>
                          <td className="px-4 py-3">
                            <a 
                              href={item.file} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#c0392b] hover:text-red-700 transition-colors text-xs font-bold hover:underline"
                            >
                              <FileText className="w-3.5 h-3.5" /> View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  )
}
