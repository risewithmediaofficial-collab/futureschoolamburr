import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'
import heroImg from '../assets/pic-assets/banner-2026-4-1.png'

export default function MissionVision() {
  return (
    <DropdownPageLayout
      image={heroImg}
      eyebrow="Our Foundation"
      title="Mission & Vision"
      subtitle="The school’s philosophy is built on continuous learning, self-discovery, responsibility, and the ability to contribute meaningfully to society."
      highlights={[
        { label: 'Vision', value: 'Learn, Discover and Share' },
        { label: 'Goal', value: 'Holistic growth with values and excellence' },
      ]}
    >
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <DropdownCard title="Our Vision" eyebrow="Core Belief" tone="accent">
          <p className="mb-5 text-sm font-semibold text-gray-700 md:text-base">
            Future Senior Secondary School believes in <span className="text-red-600">Learn, Discover and Share.</span>
          </p>
          <div className="space-y-4 text-sm text-gray-600 md:text-base">
            <p><span className="font-semibold text-red-600">LEARN</span> Learning is continuous.</p>
            <p><span className="font-semibold text-red-600">DISCOVER</span> Discover the self to bring change and transformation.</p>
            <p><span className="font-semibold text-red-600">SHARE</span> Share your knowledge and give back to society.</p>
          </div>
        </DropdownCard>

        <DropdownCard title="Our Mission" eyebrow="Future Values" tone="soft">
          <div className="space-y-4 text-sm text-gray-600 md:text-base">
            <p><span className="font-semibold text-red-600">F</span> Futuristic learning comes from continuous learning and participation.</p>
            <p><span className="font-semibold text-red-600">U</span> Universal values are integrated through education.</p>
            <p><span className="font-semibold text-red-600">T</span> Train to live, lead and transform.</p>
            <p><span className="font-semibold text-red-600">U</span> Useful and meaningful human beings should give back to society.</p>
            <p><span className="font-semibold text-red-600">R</span> Respect for diversity, ethics and responsibility is cultivated in every learner.</p>
            <p><span className="font-semibold text-red-600">E</span> Excellence is pursued through holistic development.</p>
          </div>
        </DropdownCard>
      </div>
    </DropdownPageLayout>
  )
}
