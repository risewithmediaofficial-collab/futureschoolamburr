import { DropdownCard, DropdownGrid, DropdownPageLayout } from './DropdownPageLayout'

export default function AcademicLevelPage({ eyebrow, title, subtitle, image, paragraphs, streams }) {
  const contentCards = paragraphs.map((paragraph, index) => ({
    eyebrow: `Focus ${String(index + 1).padStart(2, '0')}`,
    title: [
      'Learning Foundation',
      'Classroom Experience',
      'Student Growth',
    ][index] || `Focus Area ${index + 1}`,
    text: paragraph,
    tone: index === 0 ? 'accent' : 'white',
  }))

  return (
    <DropdownPageLayout
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      image={image}
      highlights={[
        { label: 'Approach', value: 'Structured and student-focused learning' },
        { label: 'Outcome', value: 'Confidence, clarity, and academic readiness' },
      ]}
    >
      <DropdownGrid items={contentCards} />

      {streams ? (
        <DropdownCard title="Streams Offered" eyebrow="Academic Choices" tone="soft">
          <div className="grid gap-4 md:grid-cols-2">
            {streams.map((stream, index) => (
              <div key={stream} className="rounded-2xl border border-red-100 bg-[#FFFBF1] p-5">
                <p className="text-[0.68rem] font-bold uppercase tracking-widest text-red-600">Stream {String(index + 1).padStart(2, '0')}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">{stream}</p>
              </div>
            ))}
          </div>
        </DropdownCard>
      ) : null}
    </DropdownPageLayout>
  )
}

