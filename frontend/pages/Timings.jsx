import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'
import { ShieldAlert, Shirt, Monitor, Ban, FileX, Clock } from 'lucide-react'

export default function Timings() {
  return (
    <DropdownPageLayout
      hideImageSection={true}
      eyebrow="School Policies"
      title="Code of Conduct & Timings"
      subtitle="We maintain high standards of discipline and personal conduct to ensure a safe and productive environment for all students."
      highlights={[
        { label: 'Integrity', value: 'High standards of personal conduct' },
        { label: 'Safety', value: 'Strict IT and gadget provisions' },
      ]}
    >
      <div className="grid items-start gap-8 lg:grid-cols-2">
        
        {/* Meeting Timings */}
        <DropdownCard title="Meeting Timings" eyebrow="Availability" tone="accent" className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-white shadow-sm">
              <Clock className="w-6 h-6 text-[#c0392b] mt-1" />
              <div>
                <p className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-2">Principal</p>
                <div className="space-y-1 text-sm text-gray-600 font-medium">
                  <p>Weekdays: 10:30 AM – 12:30 PM</p>
                  <p>Saturdays: 10:30 AM – 01:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-100 bg-white shadow-sm">
              <Clock className="w-6 h-6 text-[#c0392b] mt-1" />
              <div>
                <p className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-2">Teachers</p>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">During PTM held each term or with a prior appointment.</p>
              </div>
            </div>
          </div>
        </DropdownCard>

        {/* General Discipline */}
        <DropdownCard title="General Discipline" eyebrow="Expectations" tone="soft">
          <div className="space-y-6">
            <div className="flex gap-4">
              <ShieldAlert className="w-6 h-6 text-red-600 shrink-0" />
              <div className="text-sm leading-relaxed text-gray-700 md:text-base font-medium">
                <p className="mb-4">We expect our students to maintain high standards of personal conduct including honesty, discipline, integrity, humility and ethics.</p>
                <p className="mb-4">Students are accountable to school authorities for their conduct on premises, in transport, at events, and their general behavior outside.</p>
                <p className="text-red-700 font-bold italic">Objectionable conduct will lead to consequences at the discretion of the Principal, whose decision is final.</p>
              </div>
            </div>
          </div>
        </DropdownCard>

        {/* Uniform Policy */}
        <DropdownCard title="School Uniform" eyebrow="Dress Code" tone="white">
          <div className="space-y-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-sm text-gray-600 font-medium">
              Students should be neatly dressed in full School Uniform stitched in the prescribed pattern.
            </div>
            
            <div className="grid gap-6">
              <div>
                <p className="font-bold text-[#c0392b] uppercase text-[0.65rem] tracking-widest mb-3 flex items-center gap-2">
                  <Shirt className="w-3.5 h-3.5" /> General Rules
                </p>
                <ul className="space-y-2 text-sm text-gray-600 font-medium">
                  <li className="flex gap-2"><span>•</span> Sports Uniform every Wednesday and Saturday.</li>
                  <li className="flex gap-2"><span>•</span> White shoe and white socks on Wednesday.</li>
                  <li className="flex gap-2"><span>•</span> Black shoes and blue socks (Mon–Fri).</li>
                  <li className="flex gap-2"><span>•</span> Fancy/expensive footwear or colored clothes are strictly forbidden.</li>
                  <li className="flex gap-2"><span>•</span> No luxury watches, colorful jerkins, or fancy bags/trolleys.</li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-gray-900 uppercase text-[0.65rem] tracking-widest mb-3">For Boys</p>
                  <ul className="space-y-1.5 text-xs text-gray-500 font-medium">
                    <li>- Wear vests daily.</li>
                    <li>- No long side burns or fancy hair styles.</li>
                    <li>- No bands, bracelets, chains, or earrings.</li>
                    <li>- No beards or mustaches.</li>
                    <li>- No low-hip or tight-fit pants.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-900 uppercase text-[0.65rem] tracking-widest mb-3">For Girls</p>
                  <ul className="space-y-1.5 text-xs text-gray-500 font-medium">
                    <li>- Wear slips and cycling shorts.</li>
                    <li>- Grade 1–5 must wear short leggings.</li>
                    <li>- Shoulder-length or long hair must be tied.</li>
                    <li>- No eye makeup or multiple piercings.</li>
                    <li>- Decent ornaments only (no gold/diamonds).</li>
                    <li>- No mehendi or nail paint.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DropdownCard>

        {/* IT & Gadgets */}
        <DropdownCard title="IT Provisions & Gadgets" eyebrow="Technology" tone="soft">
          <div className="space-y-6">
            <div className="flex gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
              <Monitor className="w-6 h-6 text-blue-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-gray-900 mb-2">Computer Usage</p>
                <p className="text-xs text-blue-900 font-medium leading-relaxed">Permitted only for syllabus-related work with faculty permission. Social media use or file deletion is strictly prohibited.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-red-50/50 rounded-2xl border border-red-100">
              <Ban className="w-6 h-6 text-red-600 shrink-0" />
              <div>
                <p className="text-sm font-bold text-gray-900 mb-2">Electronic Gadgets</p>
                <p className="text-xs text-red-900 font-medium leading-relaxed">Mobile phones, i-Pads, cameras, or any electronic gadgets are not permitted. If found, they will be confiscated. Students may use the school telephone for emergencies.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-3">Cyber Bullying Policy</p>
              <p className="text-xs text-gray-500 leading-relaxed font-medium italic">
                ENGAGING IN AGGRESSIVE, THREATENING, OR MALICIOUS ONLINE BEHAVIOR TOWARDS STAFF OR STUDENTS WILL INVITE SEVERE DISCIPLINARY ACTION, INCLUDING EXPULSION.
              </p>
            </div>
          </div>
        </DropdownCard>

        {/* Withdrawals */}
        <DropdownCard title="Withdrawals" eyebrow="Procedure" tone="white">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <FileX className="w-6 h-6 text-red-600 shrink-0" />
              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-800 tracking-wide">NOTICE PERIOD</p>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">One month's notice is required before withdrawal, or one month's fee will be charged in lieu thereof.</p>
                <p className="text-xs text-gray-400 font-medium italic pt-2 border-t border-gray-100">T.C. will be issued 10 working days after application, provided all dues are cleared.</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-widest">Grounds for Removal</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {['Poor attendance', 'Behavioral problem', 'Moral breach', 'Indifference to activities', 'Habitual idleness', 'Disobedience', 'Weakness in studies', 'Failing twice'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DropdownCard>

      </div>
    </DropdownPageLayout>
  )
}
