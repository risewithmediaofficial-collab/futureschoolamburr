import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'
import { 
  ClipboardList, 
  Calendar, 
  GraduationCap, 
  Layers, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react'

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
  'Transfer Certificate',
  'Copy of Birth Certificate',
  'Copy of Community Certificate',
  'Copy of Aadhar card',
  '6 Passport size photos of child',
  '1 Photograph of parents',
]

const admissionSteps = [
  'Submission of the admission form',
  'Submission of required documents',
  'Payment of the fees',
]

const Admissions = () => {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ══ HEADER SECTION ══ */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-[#c0392b] text-[0.7rem] font-black uppercase tracking-[0.2em] rounded-full border border-red-100 mb-8 mx-auto shadow-sm">
               <ClipboardList className="w-4 h-4" /> Admission Procedure
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#002147] tracking-tight leading-[1.1] mb-8">
              Shape Your Child's <br/>
              <span className="text-[#c0392b]">Academic Future</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              A transparent and straightforward process designed for a smooth transition into our learning community.
            </p>
          </Reveal>
        </div>

        {/* ══ CONTENT GRID ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* 1. AGE ELIGIBILITY CARD (Full width on mobile, span 2 on desktop for prominence if needed, but let's keep it balanced) */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-1/3">
                <div className="p-4 bg-red-50 rounded-2xl w-fit mb-6">
                  <Calendar className="w-10 h-10 text-[#c0392b]" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Age Eligibility</h2>
                <p className="text-slate-500 leading-relaxed font-medium text-[15px]">
                  Children must meet the stipulated age requirement as on June 1st of the academic year. For K2, the minimum age is 3.5 years by July 31st.
                </p>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100/80">
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">Grade</th>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">Required Age</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {ageRequirements.map((item, idx) => (
                        <tr key={idx} className="hover:bg-white transition-colors">
                          <td className="px-6 py-3.5 text-sm font-bold text-slate-800">{item.grade}</td>
                          <td className="px-6 py-3.5 text-sm font-medium text-slate-500">{item.age}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 2. READINESS ASSESSMENT CARD */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="p-4 bg-blue-50 rounded-2xl w-fit mb-8">
              <GraduationCap className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Readiness Assessment</h2>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed font-medium">
                Student seeking admission for Grades I to XII must undergo a readiness assessment.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50">
                <p className="text-sm font-semibold text-slate-800 mb-2">For Kindergarten:</p>
                <p className="text-sm text-slate-500 italic">Individual interviews are conducted to test communication and general readiness.</p>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Note: Students must attain at least 60% in the entrance exam to qualify for admission.
              </p>
            </div>
          </div>

          {/* 3. STAGES OF STUDY CARD */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="p-4 bg-purple-50 rounded-2xl w-fit mb-8">
              <Layers className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Stages of Study</h2>
            <div className="space-y-4">
              {stagesOfStudy.map((stage, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:bg-[#c0392b] group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-slate-600 font-semibold group-hover:text-slate-900 transition-colors uppercase text-xs tracking-wider">
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. REQUIRED DOCUMENTS CARD */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="p-4 bg-orange-50 rounded-2xl w-fit mb-8">
              <FileText className="w-10 h-10 text-orange-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Required Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c0392b] mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-600 font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto bg-amber-50 rounded-2xl p-5 border border-amber-100/50 flex gap-4">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-[11px] text-amber-800 leading-relaxed italic">
                Students from other Boards must have their Transfer Certificate duly verified and countersigned by the competent authority.
              </p>
            </div>
          </div>

          {/* 5. CONFIRMATION PROCESS CARD */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="p-4 bg-green-50 rounded-2xl w-fit mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Admission Confirmation</h2>
            <p className="text-slate-500 mb-8 font-medium italic">Confirmed upon successful completion of:</p>
            <div className="space-y-6">
              {admissionSteps.map((step, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">
                    {idx + 1}
                  </div>
                  {idx < admissionSteps.length - 1 && (
                    <div className="absolute left-4 top-10 w-0.5 h-6 bg-slate-100" />
                  )}
                  <p className="text-slate-800 font-bold uppercase tracking-widest text-[11px] h-8 flex items-center">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ══ FINAL CTA SECTION ══ */}
        <div className="mt-24 pt-16 border-t border-slate-200 text-center">
          <Reveal>
            <h3 className="text-2xl font-bold text-[#002147] mb-4">Start Your Journey Today</h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-500 mb-10 max-w-md mx-auto">Click below to access our online application portal and secure your child's place for 2026-27.</p>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/apply" className="inline-flex items-center gap-4 px-10 py-5 bg-[#c0392b] text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl shadow-red-500/20 hover:bg-[#a93226] hover:shadow-red-500/40 hover:-translate-y-1 transition-all group">
              Apply For Admission <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Reveal>
        </div>

      </div>
    </main>
  );
};

export default Admissions;
