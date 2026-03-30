import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'

export default function Timings() {
  return (
    <DropdownPageLayout
      hideImageSection={true}
      eyebrow="Curriculum"
      title="Timings & Code of Conduct"
      subtitle="School interaction timings and discipline expectations are presented in a clearer, more structured format for parents and students."
      highlights={[
        { label: 'Meetings', value: 'Principal and teacher availability clearly defined' },
        { label: 'Discipline', value: 'Punctuality, ethics, and responsible conduct' },
      ]}
    >
      <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
        <DropdownCard title="Meeting Timings" eyebrow="Availability" tone="accent">
          <div className="space-y-4">
            <div className="rounded-2xl border border-red-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-900">Principal</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">10.30 am to 12.30 pm on weekdays, 10.30 am to 1.30 pm on Saturdays</p>
            </div>
            <div className="rounded-2xl border border-red-100 bg-white p-5">
              <p className="text-sm font-semibold text-gray-900">Teachers</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">During PTM held each term or with an appointment</p>
            </div>
          </div>
        </DropdownCard>

        <DropdownCard title="General Discipline" eyebrow="Expectations" tone="soft">
          <ul className="space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-shrink-0 bg-red-600" />Students are expected to maintain honesty, discipline, integrity, punctuality, ethics, and other values.</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-shrink-0 bg-red-600" />Students are accountable for their conduct in school premises, transport, activities, and public behavior.</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-shrink-0 bg-red-600" />Any objectionable conduct may lead to disciplinary action at the discretion of the Principal.</li>
          </ul>
        </DropdownCard>
      </div>
    </DropdownPageLayout>
  )
}
