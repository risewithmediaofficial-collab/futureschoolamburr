import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'

export default function OtherSupport() {
  return (
    <DropdownPageLayout
      eyebrow="Programs"
      title="Others"
      subtitle="Additional academic options and language pathways are structured to support student interests, future readiness, and flexibility across grades."
      highlights={[
        { label: 'Streams', value: 'Science and Commerce combinations' },
        { label: 'Languages', value: 'Tamil, Hindi, and Urdu options' },
      ]}
    >
      <div className="grid items-start gap-6 lg:grid-cols-3">
        <DropdownCard title="Science" eyebrow="Subject Group" tone="accent">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
            <p>English, Mathematics, Physics, Chemistry and Biology</p>
            <p>English, Mathematics, Physics, Chemistry and Computer Science</p>
            <p>English, Biology, Physics, Chemistry and Computer Science</p>
          </div>
        </DropdownCard>

        <DropdownCard title="Commerce" eyebrow="Subject Group" tone="white">
          <p className="text-sm leading-relaxed text-gray-700 md:text-base">
            English, Accountancy, Business Studies, Economics and Computer Science
          </p>
        </DropdownCard>

        <DropdownCard title="Language Option" eyebrow="Choice Structure" tone="soft">
          <div className="space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
            <p>Students from classes I to IV have Tamil as second language and Hindi as third language.</p>
            <p>Students from classes V to VIII may choose from Tamil, Hindi, or Urdu according to school rules.</p>
            <p>Students in standards IX and X can choose one language from Hindi, Tamil, or Urdu as their second language.</p>
          </div>
        </DropdownCard>
      </div>
    </DropdownPageLayout>
  )
}
