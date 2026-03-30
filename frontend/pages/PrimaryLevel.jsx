import AcademicLevelPage from '../components/AcademicLevelPage'
import image from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'

export default function PrimaryLevel() {
  return (
    <AcademicLevelPage
      eyebrow="Programs"
      title="Primary Level"
      subtitle="Foundational years focused on concepts, values, communication, and confident participation in academics and activities."
      image={image}
      paragraphs={[
        'At the primary level, there is a greater emphasis on development-based curriculum and students are taught the essential concepts of various subjects.',
        'Futurians are taught specifically through Digi Board content which inculcates zeal and concentration among students. Special emphasis is also laid on the development of positive attitudes and healthy habits.',
        'Apart from preparing students to succeed in academics, they are also taught the importance of moral values to lead a disciplined life. Activity-based learning and co-scholastic experiences further augment their physical and mental ability.',
      ]}
    />
  )
}
