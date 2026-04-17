import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'
import { adminApi } from '../lib/adminApi'
import { Reveal } from '../utils/reveal'
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  FileText, 
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Loader2,
  AlertCircle
} from 'lucide-react'

const initialForm = {
  parentName: '',
  studentName: '',
  grade: '',
  phone: '',
  email: '',
  message: '',
}

const admissionSteps = [
  { 
    icon: <FileText className="w-5 h-5 text-red-600" />, 
    title: 'Admission Enquiry', 
    desc: 'Submit student details directly to our admissions team for preliminary review.' 
  },
  { 
    icon: <Zap className="w-5 h-5 text-red-600" />, 
    title: 'Quick Processing', 
    desc: 'Automated email notifications ensure your request is seen by the office instantly.' 
  },
  { 
    icon: <Clock className="w-5 h-5 text-red-600" />, 
    title: 'Prompt Follow-up', 
    desc: 'Expect a response within 24–48 working hours regarding next steps.' 
  },
]

export default function ApplyAdmission() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const schoolEmail = import.meta.env.VITE_SCHOOL_EMAIL || 'futureschooloffice@gmail.com'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setSending(true)
      setStatus({ type: '', message: '' })

      await adminApi.submitAdmission({
        applicationType: 'admission',
        studentName: form.studentName,
        parentName: form.parentName,
        currentGrade: form.grade,
        email: form.email,
        phone: form.phone,
        message: form.message,
      })

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              to_email: schoolEmail,
              parent_name: form.parentName,
              student_name: form.studentName,
              grade: form.grade,
              phone: form.phone,
              email: form.email,
              message: form.message,
              submitted_at: new Date().toLocaleString(),
            },
            { publicKey },
          )
        } catch (emailError) {
          console.error('EmailJS submission failed, but saved to DB:', emailError)
        }
      }

      setStatus({
        type: 'success',
        message: 'Your admission enquiry has been sent successfully. The school team will follow up with you shortly.',
      })
      setForm(initialForm)
    } catch (error) {
      console.error('Submission failed:', error)
      setStatus({
        type: 'error',
        message: 'The form could not be submitted right now. Please try again later.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="bg-[#fafaf8] flex flex-col gap-12 md:gap-20 overflow-hidden pb-20">
      
      {/* ══ HEADER ══ */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-50 text-[#c0392b] text-[0.6rem] font-bold tracking-widest uppercase mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Admissions 2025-26
            </div>
            <h1 className="serif text-4xl md:text-5xl lg:text-7xl mb-8">
              Apply for <span className="text-[#c0392b]">Admission</span>
            </h1>
            <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Step into a future of academic excellence. Complete the simple form below to begin your child's journey with us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FORM SECTION ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-start">
          
          {/* Form Card */}
          <Reveal>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
               <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b]" />
               <h2 className="serif text-2xl mb-8 flex items-center gap-3">
                 <Send className="w-6 h-6 text-[#c0392b]" />
                 Admission Form
               </h2>

               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Parent / Guardian Name</label>
                    <div className="relative group/field">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-[#c0392b] transition-colors" />
                      <input name="parentName" value={form.parentName} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-100 outline-none focus:border-[#c0392b] bg-gray-50/30 focus:bg-white transition-all text-sm font-bold" placeholder="Full Name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Student Name</label>
                    <div className="relative group/field">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-[#c0392b] transition-colors" />
                      <input name="studentName" value={form.studentName} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-100 outline-none focus:border-[#c0392b] bg-gray-50/30 focus:bg-white transition-all text-sm font-bold" placeholder="Full Name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Applying for Grade</label>
                    <div className="relative group/field">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-[#c0392b] transition-colors" />
                      <input name="grade" value={form.grade} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-100 outline-none focus:border-[#c0392b] bg-gray-50/30 focus:bg-white transition-all text-sm font-bold" placeholder="e.g. Grade VI" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <div className="relative group/field">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-[#c0392b] transition-colors" />
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-100 outline-none focus:border-[#c0392b] bg-gray-50/30 focus:bg-white transition-all text-sm font-bold" placeholder="+91 00000 00000" required />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <div className="relative group/field">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within/field:text-[#c0392b] transition-colors" />
                      <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-100 outline-none focus:border-[#c0392b] bg-gray-50/30 focus:bg-white transition-all text-sm font-bold" placeholder="yourname@example.com" required />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Admission Notes</label>
                    <div className="relative group/field">
                      <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-300 group-focus-within/field:text-[#c0392b] transition-colors" />
                      <textarea name="message" value={form.message} onChange={handleChange} className="w-full pl-11 pr-4 py-5 rounded-xl border border-gray-100 outline-none focus:border-[#c0392b] bg-gray-50/30 focus:bg-white transition-all text-sm font-medium min-h-[140px]" placeholder="Anything else we should know?" required />
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    {status.message && (
                      <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border ${status.type === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-red-50 border-red-100 text-[#c0392b]'}`}>
                        {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                        {status.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 bg-[#c0392b] text-white rounded-xl font-bold uppercase tracking-widest shadow-sm hover:bg-[#a93226] disabled:opacity-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> 
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Application 
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-[0.6rem] text-gray-400 font-bold uppercase tracking-widest italic">
                      Fast processing & direct database sync.
                    </p>
                  </div>
               </form>
            </div>
          </Reveal>

          {/* Sidebar / Info */}
          <div className="space-y-8">
            <Reveal delay={100}>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h3 className="serif text-xl mb-8">Redefining Admissions</h3>
                <div className="space-y-6">
                   {admissionSteps.map((step, idx) => (
                     <div key={idx} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-red-50 flex-shrink-0 flex items-center justify-center">
                           {step.icon}
                        </div>
                        <div>
                           <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                           <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-[#c0392b] rounded-2xl p-10 text-white relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10">
                   <HelpCircle className="w-8 h-8 text-red-200 mb-4" />
                   <h3 className="serif text-2xl text-white mb-4 leading-tight">Need Support?</h3>
                   <p className="text-red-50 text-sm font-medium leading-relaxed mb-8">
                     Our Counsellors are available to answer any questions you have about the process or school life.
                   </p>
                   <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#c0392b] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-red-50 transition-colors shadow-sm">
                      Get Help <ArrowRight className="w-3.5 h-3.5" />
                   </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </main>

  )
}
