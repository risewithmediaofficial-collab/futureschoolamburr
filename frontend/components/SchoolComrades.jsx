import { Reveal } from '../utils/scroll-reveal'

const comrades = [
  {
    id: 1,
    name: 'A.N. DHARSHAN',
    position: 'SECRETARY',
    club: 'CYBER CREW',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'KEZIAH MARGARET',
    position: 'DEPUTY',
    club: 'CYBER CREW',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'JAISHREE.B',
    position: 'SECRETARY',
    club: 'ECO CLUB',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'CHINMAYAA SREE A.P',
    position: 'DEPUTY',
    club: 'ECO CLUB',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function SchoolComrades() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Reveal direction="up" delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              School <span className="text-red-600">Comrades</span>
            </h2>
            <p className="text-black mt-3 text-xl font-semibold">Meet our dedicated student leaders</p>
          </div>
        </Reveal>

        {/* Comrades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {comrades.map((comrade, index) => (
            <Reveal
              key={comrade.id}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="group h-full">
                <div
                  className={`h-64 bg-gradient-to-br ${comrade.color} rounded-lg p-6 flex flex-col justify-between text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                >
                  {/* Top Section */}
                  <div>
                    <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-xl font-bold">
                        {comrade.name
                          .split(' ')
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold leading-tight">
                      {comrade.name}
                    </h3>
                    <p className="text-sm md:text-base font-semibold opacity-90">
                      {comrade.position}
                    </p>
                    <p className="text-xs md:text-sm opacity-80 font-medium">
                      {comrade.club}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
