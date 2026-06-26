import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import { Reveal } from '../utils/reveal'

const events = [
  {
    slug: 'investiture-ceremony-2025',
    date: 'June 25, 2026',
    title: 'Investiture Ceremony 2025',
    subtitle: 'Oath Taking Ceremony — Honouring the Leaders of Tomorrow',
    excerpt:
      'Future School, Ambur held its prestigious Investiture Ceremony 2025, formally investing the new student leadership council with badges, sashes, and responsibilities. The Head Boy, Head Girl, Prefects, and House Captains took their solemn oath to serve the school with integrity, discipline, and dedication.',
    category: 'Events',
    tag: 'Leadership',
    readTime: '5 min read',
    coverImage: new URL('../assets/pic-assets/IMG_2866.JPG', import.meta.url).href,
  },
]

export default function Events() {
  return (
    <main className="bg-[#fafaf8] min-h-screen overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white border-b border-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-red-50/60 blur-[120px] pointer-events-none" />
        <Reveal>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 text-[#c0392b] text-[0.65rem] tracking-[0.2em] uppercase font-black px-4 py-2 bg-red-50/50 rounded-full border border-red-50 mb-6">
              <Calendar className="w-3.5 h-3.5" /> School Life
            </span>
            <h1 className="serif text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
              Events &amp; <span className="text-[#c0392b]">Highlights</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Celebrating milestones, achievements, and vibrant campus life at Future School, Ambur — where every event shapes a memory.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══ EVENTS LIST ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-10 md:gap-12">
          {events.map((event, i) => (
            <Reveal key={event.slug} delay={i * 80}>
              <Link to={`/events/${event.slug}`} className="group block bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500">
                <div className="grid md:grid-cols-5 min-h-[280px]">
                  {/* Cover Image */}
                  <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto bg-gray-100">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                    {/* Date badge */}
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-md">
                      <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#c0392b]">Date</p>
                      <p className="text-xs font-bold text-gray-900 mt-0.5">{event.date}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-black uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                          <Tag className="w-3 h-3" /> {event.tag}
                        </span>
                        <span className="text-[0.6rem] text-gray-400 font-bold uppercase tracking-widest">{event.readTime}</span>
                      </div>
                      <h2 className="serif text-2xl md:text-3xl text-gray-900 leading-snug mb-2 group-hover:text-[#c0392b] transition-colors duration-300">
                        {event.title}
                      </h2>
                      <p className="text-sm text-[#c0392b] font-semibold mb-4">{event.subtitle}</p>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">{event.excerpt}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#c0392b] group-hover:gap-4 transition-all duration-300">
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

    </main>
  )
}
