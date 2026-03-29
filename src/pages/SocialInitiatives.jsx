import { DropdownGrid, DropdownPageLayout } from '../components/DropdownPageLayout'
import heroImg from '../assets/pic-assets/Eco-cul-1.jpg'

export default function SocialInitiatives() {
  return (
    <DropdownPageLayout
      image={heroImg}
      eyebrow="Programs"
      title="Social Initiatives"
      subtitle="Students are encouraged to care for the environment, engage with the community, and build responsible habits through everyday school culture."
      highlights={[
        { label: 'Theme', value: 'Green campus and social responsibility' },
        { label: 'Practice', value: 'Saplings, awareness, and field engagement' },
      ]}
    >
      <DropdownGrid
        items={[
          {
            title: 'Green Campus',
            eyebrow: 'Initiative 01',
            text: 'One of the main mottos of the school is to encourage a pollution-free environment. The campus is surrounded by greenery, and planting more trees is treated as a meaningful contribution to human livelihood and environmental well-being.',
            tone: 'accent',
          },
          {
            title: 'Community Participation',
            eyebrow: 'Initiative 02',
            text: 'Parents and volunteers eagerly contribute to spreading a green revolution by planting saplings and supporting awareness around sustainability, health, and responsibility.',
          },
          {
            title: 'Learning Beyond Campus',
            eyebrow: 'Initiative 03',
            text: 'The school also extends this spirit beyond campus through field trips and real-world learning experiences that help students engage with society, nature, and everyday life in a thoughtful way.',
            tone: 'soft',
          },
        ]}
      />
    </DropdownPageLayout>
  )
}
