import AcademicLevelPage from '../components/AcademicLevelPage'
import image from '../assets/pic-assets/WhatsApp-Image-2026-02-17-at-3.13.23-PM-410x260.jpeg'

export default function Kindergarten() {
  return (
    <AcademicLevelPage
      eyebrow="Programs"
      title="Kindergarten Level"
      subtitle="A joyful first step into learning where curiosity, confidence, and communication begin to grow every day."
      image={image}
      paragraphs={[
        'The main aim at this stage is to develop cognitive and motor skills and to encourage curiosity, imagination and create interest, thus exposing the child to an exciting and wonderful world of learning.',
        'Kids are encouraged to study through techno tools and child-centered education practices that make learning active, playful, and meaningful.',
        'Learning through digi board, structured play, storytelling, and field trips are an integral part of the KG curriculum, because a strong base at this level eases the child into future learning with confidence.',
      ]}
    />
  )
}
