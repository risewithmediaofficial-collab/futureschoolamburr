import AcademicLevelPage from '../components/AcademicLevelPage'
import image from '../assets/pic-assets/WhatsApp-Image-2026-02-20-at-11.38.03-AM-410x260.jpeg'

export default function SeniorSecondaryLevel() {
  return (
    <AcademicLevelPage
      eyebrow="Programs"
      title="Senior Secondary Level"
      subtitle="Career-oriented preparation with focused subject choices, counselling, and deeper academic specialization."
      image={image}
      paragraphs={[
        'Career-oriented preparation of the pupil takes place at this level. Students can choose the areas of study based on their aptitude and seek in-depth knowledge in the areas chosen.',
        'Opportunities are provided for the enrichment of knowledge, and career counselling is conducted to help students choose their field with clarity and confidence.',
        'Besides scholastics, co-scholastic areas are also given equal importance so that students build confidence, mental ability, and readiness for higher education.',
      ]}
      streams={[
        'English, Mathematics, Physics, Chemistry and Biology',
        'English, Mathematics, Physics, Chemistry and Computer Science',
        'English, Physics, Chemistry, Biology and Computer Science',
        'English, Accountancy, Business Studies, Economics and Computer Science',
      ]}
    />
  )
}
