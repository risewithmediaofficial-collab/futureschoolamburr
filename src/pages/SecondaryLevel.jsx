import AcademicLevelPage from '../components/AcademicLevelPage'
import image from '../assets/pic-assets/Secondary-410x260.jpg'

export default function SecondaryLevel() {
  return (
    <AcademicLevelPage
      eyebrow="Programs"
      title="Secondary Level"
      subtitle="Focused preparation for higher academics through conceptual understanding, discipline, and guided board readiness."
      image={image}
      paragraphs={[
        "During the secondary years, the pupil's intellectual, aesthetic, physical, and cultural growth and development are intensified and extended to a foundation course designed to support long-term academic success.",
        'Students are prepared with consistent mentoring, structured assessment, and a balanced emphasis on scholastic and co-scholastic performance.',
        'The school environment at this stage is designed to strengthen independence, accountability, and a strong work ethic while preparing learners for the next academic leap.',
      ]}
    />
  )
}
