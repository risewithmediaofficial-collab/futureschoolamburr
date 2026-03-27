import { Link } from 'react-router-dom'

const ageRequirements = [
  { grade: 'KG 2', age: '3 Years 6 Months' },
  { grade: 'KG 3', age: '4 years 6 Months' },
  { grade: 'Grade 1', age: '5 years 6 Months' },
  { grade: 'Grade 2', age: '6 years 6 Months' },
  { grade: 'Grade 3', age: '7 years 6 Months' },
  { grade: 'Grade 4', age: '8 years 6 Months' },
  { grade: 'Grade 5', age: '9 years 6 Months' },
  { grade: 'Grade 6', age: '10 years 6 Months' },
  { grade: 'Grade 7', age: '11 years 6 Months' },
  { grade: 'Grade 8', age: '12 years 6 Months' },
  { grade: 'Grade 9', age: '13 years 6 Months' },
  { grade: 'Grade 10', age: '14 years 6 Months' },
  { grade: 'Grade 11', age: '15 years 6 Months' },
  { grade: 'Grade 12', age: '16 years 6 Months' },
]

const stagesOfStudy = [
  'Kindergarten Level K2 - K3',
  'Primary Level – Grade I to V',
  'Middle Years Programme – Grade VI to VIII',
  'Secondary School level – Grade IX and X',
  'Senior secondary level Grades XI and XII',
]

const requiredDocuments = [
  'Transfer Certificate.',
  'Copy of Birth Certificate.',
  'Copy of Community Certificate.',
  'Copy of Aadhar card.',
  'Six passport size photographs, two stamp size photographs of the child and one photograph of parents.',
]

const admissionSteps = [
  'Submission of the admission form',
  'Submission of documents as mentioned in the above section',
  'Payment of the fees.',
]

const Admissions = () => {
  return (
    <main className="pt-20 overflow-x-hidden" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: '#fafaf8' }}>
      {/* ══ ADMISSION PROCEDURE ══ */}
      <section className="py-16 md:py-24" style={{ background: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: '#c0392b' }}>Admissions</p>
            <h1 className="serif text-4xl md:text-5xl font-normal leading-[1.04] relative" style={{ color: '#111' }}>
              Admission<br />Procedure
            </h1>
            <div className="w-8 h-0.5 mt-3" style={{ background: '#c0392b' }} />
            
            <p className="text-sm leading-relaxed font-light mt-6" style={{ color: '#777', maxWidth: '65ch' }}>
              For all grade registration and for the admission to the new academic year commences on 1st Monday of April every year. In all cases, admission procedures laid down by the CBSE, will be followed.
            </p>
          </div>

          {/* Age Eligibility */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-6 relative" style={{ color: '#111' }}>Age Eligibility:</h2>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: '#777' }}>
              For admission to K2, the child must be three & half years old by 31st of July. Corresponding age limits will be followed for respective classes. Children have to meet the stipulated age requirement for admission to Future Senior Secondary School as on June 1st of the year. The required age limit for each grade is mentioned in the following table:
            </p>

            <div className="overflow-x-auto rounded-lg" style={{ border: '1px solid #e5e5e0' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#fafaf8', borderBottom: '1px solid #e5e5e0' }}>
                    <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#111' }}>Grade</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#111' }}>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {ageRequirements.map((item, idx) => (
                    <tr key={item.grade} style={{ background: idx % 2 === 0 ? '#fff' : '#fafaf8', borderBottom: '1px solid #e5e5e0' }}>
                      <td className="px-6 py-3 text-sm" style={{ color: '#777' }}>{item.grade}</td>
                      <td className="px-6 py-3 text-sm" style={{ color: '#777' }}>{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Readiness Assessment */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-4 relative" style={{ color: '#111' }}>Readiness Assessment:</h2>
            <p className="text-sm leading-relaxed font-light mb-4" style={{ color: '#777' }}>
              Student seeking admission for the grades I to XII, readiness assessment will be conducted. In case of K2 and K3 children, interview will be conducted to test the communication and readiness.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
              Parents who wish to apply for the admission can get the application form in the school office. Students must go through the entrance exam and must attain at least 60% to clear the entrance exam.
            </p>
          </div>

          {/* Stages of Study */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-6 relative" style={{ color: '#111' }}>Stages of Study</h2>
            <ol className="space-y-2" style={{ color: '#777' }}>
              {stagesOfStudy.map((stage, idx) => (
                <li key={idx} className="text-sm leading-relaxed font-light">
                  <span className="font-semibold" style={{ color: '#111' }}>{idx + 1}.</span> {stage}
                </li>
              ))}
            </ol>
          </div>

          {/* Submission of Application Form */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-4 relative" style={{ color: '#111' }}>Submission of Application Form</h2>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: '#777' }}>
              The duly filled application form should be submitted to the School Office on or before the stipulated date with the following documents as applicable,
            </p>

            <ul className="space-y-2 mb-6" style={{ color: '#777' }}>
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="text-sm leading-relaxed font-light">
                  <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {doc}
                </li>
              ))}
            </ul>

            <div className="rounded-lg p-6 mb-6" style={{ background: '#fff8f7', border: '1px solid #f0e0de' }}>
              <p className="text-sm leading-relaxed font-light mb-3" style={{ color: '#777' }}>
                <span className="font-semibold" style={{ color: '#111' }}>Note:</span> For students from other Boards, it should be duly verified and counter signed by the competent authority of the Education Department of District /Area from where the T.C has been obtained.
              </p>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
                Original documents of the submitted photocopies should be made available upon request for verification.
              </p>
            </div>
          </div>

          {/* Admission Confirmation */}
          <div>
            <h2 className="serif text-2xl md:text-3xl font-normal mb-4 relative" style={{ color: '#111' }}>Admission Confirmation</h2>
            <p className="text-sm leading-relaxed font-light mb-4" style={{ color: '#777' }}>
              Admission will be confirmed with the following process,
            </p>
            <ol className="space-y-2" style={{ color: '#777' }}>
              {admissionSteps.map((step, idx) => (
                <li key={idx} className="text-sm leading-relaxed font-light">
                  <span className="font-semibold" style={{ color: '#111' }}>{idx + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="py-16 md:py-20" style={{ background: '#111', color: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif text-3xl md:text-4xl font-normal mb-4" style={{ color: '#fff' }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-sm leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Contact our admissions team today to learn more about our programs and schedule your campus visit.
          </p>
          <a
            href="tel:+919962826465"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-lg transition-all duration-200 hover:shadow-lg text-sm"
            style={{ background: '#c0392b', color: '#fff' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  )
}

export default Admissions
