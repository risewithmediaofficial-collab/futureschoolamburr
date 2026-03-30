import { DropdownGrid, DropdownPageLayout } from '../components/DropdownPageLayout'
import heroImg from '../assets/pic-assets/IMG_4395-1024x683.jpg'

export default function TeachingMethodology() {
  const highlights = [
    {
      title: 'Smart Class & Digi Boards',
      text: 'Future School was among the first schools in Ambur to implement smart class technology across classrooms, helping students connect classroom learning with the real world through digital content and visual understanding.',
      eyebrow: 'Method 01',
      tone: 'accent',
    },
    {
      title: 'Daily Skill Practice',
      text: 'Teaching methods sharpen reading, writing, speaking, critical thinking, mathematics, and creativity every day while coordinating subjects and assignments with the CBSE evaluation pattern.',
      eyebrow: 'Method 02',
    },
    {
      title: 'Holistic Development',
      text: 'Arts, music, dance, sports, archery, yoga, karate, hobby clubs, field trips, and student leadership opportunities help students grow with confidence and personality.',
      eyebrow: 'Method 03',
      tone: 'soft',
    },
  ]

  return (
    <DropdownPageLayout
      image={heroImg}
      eyebrow="Programs"
      title="Teaching Methodology"
      subtitle="Every classroom is designed to make learning active, practical, and meaningful through technology, regular practice, and holistic development."
      highlights={[
        { label: 'Method', value: 'Technology-enabled and activity-based learning' },
        { label: 'Focus', value: 'Skills, confidence, and board readiness' },
      ]}
    >
      <DropdownGrid items={highlights} />
    </DropdownPageLayout>
  )
}
