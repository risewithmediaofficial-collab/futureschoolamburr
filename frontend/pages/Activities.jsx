import rubyImg from '../assets/pic-assets/Ruby-768x576.jpg'
import topazImg from '../assets/pic-assets/Topaz-768x576.jpg'
import sapphireImg from '../assets/pic-assets/Sapphire-768x576.jpg'
import emeraldImg from '../assets/pic-assets/Emerald-768x576.jpg'
import heroImg from '../assets/pic-assets/sports-1.png'
import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'
import SchoolComrades from '../components/SchoolComrades'

const houses = [
  { title: 'Ruby House', img: rubyImg, desc: "Red colour is associated with power, energy, love, vigour, action, determination, and the will to achieve." },
  { title: 'Topaz House', img: topazImg, desc: 'Yellow brings joy, wisdom, understanding, and the brightness of aspiration.' },
  { title: 'Sapphire House', img: sapphireImg, desc: 'Blue reflects truth, harmony, hope, and higher aspirations.' },
  { title: 'Emerald House', img: emeraldImg, desc: "Green is nature's colour, signifying prosperity, peace, healing, and new life." },
]

export default function Activities() {
  return (
    <DropdownPageLayout
      image={heroImg}
      eyebrow="Curriculum"
      title="Activities"
      subtitle="Events, leadership opportunities, and the house system give students a platform to build confidence, teamwork, and school spirit."
      highlights={[
        { label: 'Focus', value: 'Leadership, participation, and belonging' },
        { label: 'System', value: 'Four houses with identity and purpose' },
      ]}
    >
      <DropdownCard title="Student Leadership & Events" eyebrow="Campus Culture" tone="accent">
        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
          Elections, investiture ceremonies, graduation day, annual celebrations, sports day, and cultural observances help students grow in confidence, responsibility, and teamwork.
        </p>
      </DropdownCard>

      <DropdownCard title="The House System" eyebrow="Student Community" tone="soft">
        <div className="grid gap-6 md:grid-cols-2">
          {houses.map((house) => (
            <div key={house.title} className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white">
              <img src={house.img} alt={house.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{house.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{house.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </DropdownCard>

      <SchoolComrades />
    </DropdownPageLayout>
  )
}
