import { Reveal } from '../utils/scroll-reveal'
import { Link } from 'react-router-dom'

export default function MandatoryDisclosure() {
  const generalInfo = [
    { label: 'Name of the School', value: 'Future Senior Secondary School' },
    { label: 'Affiliation No.', value: '1930465' },
    { label: 'School Code', value: '55386' },
    { label: 'Complete Address', value: 'Ambur, Vellore District, Tamil Nadu – 635 814' },
    { label: 'Principal Name & Qualification', value: 'Mrs. YUVARANI J, M.Sc., B.Ed.' },
    { label: 'School Email ID', value: 'futureschooloffice@gmail.com' },
    { label: 'Contact Details', value: '+91 99628 26465' },
  ]

  const documents = [
    { name: 'Affiliation Letter', link: '#' },
    { name: 'Trust/Society/Company Registration', link: '#' },
    { name: 'No Objection Certificate (NOC)', link: '#' },
    { name: 'Recognition Certificate under RTE Act', link: '#' },
    { name: 'Building Safety Certificate', link: '#' },
    { name: 'Fire Safety Certificate', link: '#' },
    { name: 'Self Certification by School', link: '#' },
    { name: 'Water, Health and Sanitation Certificates', link: '#' },
  ]

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
                  B : Documents and Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <a
                      key={doc.name}
                      href={doc.link}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-50 bg-gray-50/30 hover:bg-red-50 hover:border-red-100 hover:text-red-700 transition-all group"
                    >
                      <span className="text-sm font-medium">{doc.name}</span>
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Results & Academics */}
            <Reveal delay={200} y={20}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-red-600 rounded-full" />
                  C : Result and Academics
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Link to="/admissions" className="p-5 rounded-xl border border-gray-50 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Calendar</span>
                    <span className="text-sm font-bold">Annual Academic Calendar</span>
                  </Link>
                  <Link to="/about/instructors" className="p-5 rounded-xl border border-gray-50 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Governance</span>
                    <span className="text-sm font-bold">School Management Committee</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Other Info / TC Specimen */}
            <Reveal delay={300} y={20}>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-red-600 rounded-full" />
                  D : Other Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Link to="/tc-specimen" className="p-5 rounded-xl border border-gray-50 flex flex-col gap-2 hover:bg-gray-50 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600">Compliance</span>
                    <span className="text-sm font-bold">TC Specimen (Format)</span>
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <Link to="/about/affiliations" className="text-red-600 text-sm font-bold hover:underline">
             View Deatiled Affiliation & Faculty Records →
           </Link>
        </div>
      </section>
    </main>
  )
}
