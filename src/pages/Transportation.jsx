import busImg from '../assets/pic-assets/bus.jpg'
import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'

const routes = [
  ['ROUTE NO : 1', ['AMBUR OAT THEATRE', 'KADHARPET', 'TAW SCHOOL', 'VATHIMANAI', 'KRISHNAPURAM']],
  ['ROUTE NO : 2', ['NEW TOWN - VANIYAMBADI', 'VALAYAMBATTU', 'CHINNAPALLIKUPPAM', 'PAPANAPALLI', 'MARAPATTU', 'SENGLIKUPPAM', 'MINNUR', 'VENKATANGALAM', 'IYANOOR', 'ALANGKUPPAM']],
  ['ROUTE NO : 3', ['PERNAMBUT', 'OOMERABAD', 'PANANGATTUR', 'MAACHAMBATTU', 'GADAMBUR', 'CHINNAVIRABAM', 'THUTHIPET', 'AMBUR']],
  ['ROUTE NO : 4', ['OPP TO RAILWAY STATION', 'AKAREM ROAD', 'REGISTER OFFICE', 'KASPA - A', 'KASPA - B', 'AMBUR LOCAL']],
  ['ROUTE NO : 5', ['MADHANUR', 'SUGAR MILL', 'VADAPUDUPET', 'GOVINDAPURAM', 'OAT THEATRE', 'BETHELEHEM', 'SANDRORKUPPAM']],
  ['ROUTE NO : 6', ['FLOWER BAZZAR', 'SIYAJI THEATRE', 'LIGHT HOUSE', 'OM SAKTHI TEMPLE', 'KAFEEL HOSPITAL', 'KADHARPET', 'TEACHERS COLONY', 'PERIYAPETAI']],
]

export default function Transportation() {
  return (
    <DropdownPageLayout
      eyebrow="Curriculum"
      title="Transportation"
      subtitle="The school’s transport arrangement is designed around safety, communication, and route coverage for students across Ambur and nearby areas."
      highlights={[
        { label: 'Safety', value: 'Trained drivers, attendants, and emergency readiness' },
        { label: 'Coverage', value: 'Multiple route buses serving surrounding areas' },
      ]}
      image={busImg}
      imageAlt="Future School transportation bus"
    >
      <DropdownCard title="Transport Overview" eyebrow="Service Details" tone="accent">
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
          <p>The need for safe passage of each child to school and back home is of paramount importance. To ensure safe travel, the school operates outsourced buses designed to standards and manned by trained drivers with transport attendants.</p>
          <p>The transport service is optional and is charged separately. Mobile phones have been provided in each bus for better communication during emergencies, and the staff are trained in first aid and emergency management.</p>
          <p>School transport is provided for the following areas according to the different route buses.</p>
        </div>
      </DropdownCard>

      <div className="grid items-start gap-6 md:grid-cols-2">
        {routes.map(([title, stops]) => (
          <DropdownCard key={title} title={title} eyebrow="Route Coverage" tone="white">
            <ul className="space-y-2 text-sm text-gray-600 md:text-base">
              {stops.map((stop) => (
                <li key={stop} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 bg-red-600" />
                  <span>{stop}</span>
                </li>
              ))}
            </ul>
          </DropdownCard>
        ))}
      </div>
    </DropdownPageLayout>
  )
}
