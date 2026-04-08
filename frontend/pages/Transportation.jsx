import busImg from '../assets/pic-assets/bus.jpg'
import { DropdownCard, DropdownPageLayout } from '../components/DropdownPageLayout'
import { MapPin, Bus, ShieldCheck, Compass } from 'lucide-react'

const routes = [
  { id: 1, title: 'ROUTE NO : 1', stops: ['AMBUR OAR THEATRE', 'KADHARPET', 'TAW SCHOOL', 'VATHIMANAI', 'KRISHNAPURAM'] },
  { id: 2, title: 'ROUTE NO : 2', stops: ['NEW TOWN - VANIYAMBADI', 'VALAYAMBATTU', 'CHINNAPALLLIKUPPAM', 'PAPANAPALLLI', 'MARAPATTU', 'SENGILIKUPPAM', 'MINNUR', 'VINNAMANGALAM', 'IYANOOR', 'ALANGKUPPAM'] },
  { id: 3, title: 'ROUTE NO : 3', stops: ['PERNAMBUT', 'OOMERABAD', 'PANANGATUR', 'MAACHAMBATTU', 'GADAMBUR', 'CHINNAVRIGAM', 'THUTHIPET', 'AMBUR'] },
  { id: 4, title: 'ROUTE NO : 4', stops: ['OPP TO RAILWAY STATION', 'A.KAREEM ROAD', 'REGISTER OFFICE', 'KASPA - A', 'KASPA - B', 'AMBUR LOCAL'] },
  { id: 5, title: 'ROUTE NO : 5', stops: ['MADHANUR', 'SUGAR MILL', 'VADAPUDUPET', 'GOVINDAPURAM', 'OAR THEATRE', 'BETHELEHEM', 'SANDRORKUPPAM'] },
  { id: 6, title: 'ROUTE NO : 6', stops: ['FLOWER BAZZAR', 'SIVAJI THEATRE', 'LIGHT HOUSE', 'OM SAKTHI TEMPLE', 'KAFEEL HOSPITAL', 'KADHARPET', 'TEACHERS COLONY', 'PERIYAPETTAI'] },
]

export default function Transportation() {
  return (
    <DropdownPageLayout
      eyebrow="School Services"
      title="Transportation"
      subtitle="Ensuring a safe and reliable journey for every student through our comprehensive bus network."
      highlights={[
        { label: 'Safety First', value: 'Trained staff & GPS-equipped buses' },
        { label: 'Network', value: '6 major routes covering Ambur & nearby' },
      ]}
      image={busImg}
      imageAlt="Future School transportation bus"
      imageContainerClassName="max-w-4xl mx-auto" // REDUCE IMAGE SIZE
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <DropdownCard title="Safe & Systematic Commute" eyebrow="Overview" tone="accent">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4 text-sm leading-relaxed text-gray-600 md:text-base font-medium">
              <p>The safety of our students is of paramount importance. To ensure safe travel, we operate a well-maintained fleet of buses manned by trained drivers and dedicated transport attendants.</p>
              <p>The service covers extensive routes across Ambur and surrounding areas. For better communication, each bus is equipped with mobile phones for emergencies, and our staff are trained in first aid and emergency protocols.</p>
              <p className="bg-red-50 p-4 rounded-xl text-[#c0392b] text-xs font-bold uppercase tracking-widest border border-red-100">
                Transport service is optional and charged separately per academic term.
              </p>
            </div>
            <div className="p-6 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
              <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-4">Core Facilities</h4>
              <ul className="space-y-4">
                {[
                  { icon: ShieldCheck, text: 'Safety Audited Buses' },
                  { icon: Bus, text: 'Attendant Support' },
                  { icon: Compass, text: 'Emergency Protocols' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <item.icon className="w-4 h-4 text-red-600" strokeWidth={3} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DropdownCard>

        {/* Routes Grid */}
        <div className="bg-white/50 backdrop-blur-sm p-2 rounded-[2.5rem] border border-gray-100">
           <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <div key={route.id} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-red-50 rounded-2xl">
                    <MapPin className="w-5 h-5 text-[#c0392b]" />
                  </div>
                  <span className="text-[10px] font-black text-gray-300 tracking-[.25em] uppercase">Route #{route.id}</span>
                </div>
                
                <h3 className="serif text-xl font-normal text-gray-900 mb-6 group-hover:text-red-700 transition-colors uppercase tracking-tight">{route.title}</h3>
                
                <div className="space-y-2.5">
                  <p className="text-[10px] font-black text-red-800/40 uppercase tracking-widest mb-4">Stops Coverage</p>
                  {route.stops.map((stop, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 text-xs md:text-sm text-gray-500 font-bold uppercase tracking-tight">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0 group-hover:bg-red-500 transition-colors" />
                      {stop}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropdownPageLayout>
  )
}
