import { useState } from 'react'
import { Reveal } from '../utils/scroll-reveal'

/* ─── Category colors ─── */
const categoryStyle = {
  Academics:   { bg: 'bg-red-600',    text: 'text-white' },
  Sports:      { bg: 'bg-green-600',  text: 'text-white' },
  Events:      { bg: 'bg-purple-600', text: 'text-white' },
  Development: { bg: 'bg-amber-500',  text: 'text-white' },
  Achievements:{ bg: 'bg-blue-600',   text: 'text-white' },
  Notice:      { bg: 'bg-gray-700',   text: 'text-white' },
}

/* ─── News data ─── */
const allNews = [
  {
    id: 1,
    date: 'March 15, 2025',
    title: 'Class XII Board Results — Outstanding Performance',
    excerpt: '95% pass rate with 25 students scoring above 90%. Our toppers secured state-level ranks. Congratulations to all achievers and their dedicated teachers!',
    category: 'Academics',
    emoji: '🏆',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 2,
    date: 'March 10, 2025',
    title: 'Annual Sports Day 2025 — A Grand Success',
    excerpt: 'Over 1,000 spectators witnessed thrilling competition across 20 events. New school records were set in the 100m sprint and long jump.',
    category: 'Sports',
    emoji: '⚽',
    featured: false,
    readTime: '2 min read',
  },
  {
    id: 3,
    date: 'March 1, 2025',
    title: 'Science Exhibition — Innovation Showcase',
    excerpt: 'Students displayed innovative projects in robotics, renewable energy, and environmental solutions. Three projects selected for district-level competition.',
    category: 'Events',
    emoji: '🔬',
    featured: false,
    readTime: '4 min read',
  },
  {
    id: 4,
    date: 'February 28, 2025',
    title: 'Staff Development Workshop Conducted',
    excerpt: 'Faculty underwent training in modern pedagogical methods, AI-assisted teaching tools, and digital classroom management strategies.',
    category: 'Development',
    emoji: '👨‍🏫',
    featured: false,
    readTime: '2 min read',
  },
  {
    id: 5,
    date: 'February 20, 2025',
    title: 'District Kabaddi Champions 2025',
    excerpt: 'Our under-17 kabaddi team clinched the district championship title, winning all six matches convincingly. The team will represent Vellore district at state level.',
    category: 'Sports',
    emoji: '🥇',
    featured: false,
    readTime: '2 min read',
  },
  {
    id: 6,
    date: 'February 10, 2025',
    title: 'Admissions Open for 2025–26',
    excerpt: 'Applications are now being accepted for Classes I to XII. Limited seats available. Visit the admissions page or contact the school office for details.',
    category: 'Notice',
    emoji: '📋',
    featured: false,
    readTime: '1 min read',
  },
  {
    id: 7,
    date: 'January 26, 2025',
    title: 'Republic Day Celebrations at Future School',
    excerpt: 'Students presented a spectacular cultural programme, including folk dances, patriotic songs, and a thought-provoking skit on national unity.',
    category: 'Events',
    emoji: '🇮🇳',
    featured: false,
    readTime: '2 min read',
  },
  {
    id: 8,
    date: 'January 15, 2025',
    title: 'State-Level Math Olympiad — 3 Medals',
    excerpt: 'Three of our students won medals at the State Mathematics Olympiad — 1 gold and 2 silver. A proud moment for Future School, Ambur.',
    category: 'Achievements',
    emoji: '🧮',
    featured: false,
    readTime: '2 min read',
  },
]

const categories = ['All', 'Academics', 'Sports', 'Events', 'Achievements', 'Development', 'Notice']

/* ─── Featured card ─── */
function FeaturedCard({ item }) {
  const style = categoryStyle[item.category] || categoryStyle.Notice
  return (
    <Reveal direction="left" y={20}>
      <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-sm transition-all duration-300 h-full flex flex-col">
        {/* Top image area */}
        <div className="relative h-52 bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.06) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
          <span className="text-8xl opacity-25 select-none group-hover:scale-105 transition-transform duration-300">{item.emoji}</span>
          {/* Featured badge */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-md">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            Featured
          </div>
          <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-full ${style.bg} ${style.text} text-xs font-bold`}>{item.category}</span>
          {/* Red top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-1 gap-3">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>{item.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{item.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors duration-200" style={{ fontFamily: "'Georgia', serif" }}>
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.excerpt}</p>
          <button className="flex items-center gap-1.5 text-sm font-bold text-red-600 hover:gap-3 transition-all duration-200 mt-2 w-fit">
            Read Full Story
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Regular news card ─── */
function NewsCard({ item, delay }) {
  const style = categoryStyle[item.category] || categoryStyle.Notice
  return (
    <Reveal delay={delay} y={20}>
      <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-[0_6px_25_rgba(185,28,28,0.06)] transition-all duration-300 flex flex-col">
        {/* Left red border accent */}
        <div className="flex flex-1">
          <div className="w-1 bg-gradient-to-b from-red-600 to-transparent flex-shrink-0 rounded-l-2xl" />
          <div className="p-5 flex flex-col flex-1 gap-3">
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text}`}>{item.category}</span>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors duration-200 line-clamp-2" style={{ fontFamily: "'Georgia', serif" }}>
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
              <span className="text-xs text-gray-300">{item.readTime}</span>
              <button className="flex items-center gap-1 text-xs font-bold text-red-600 hover:gap-2 transition-all duration-200">
                Read More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   NEWS PAGE
══════════════════════════════════════════ */
export default function News() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)

  const featured = allNews.find((n) => n.featured)
  const rest = allNews.filter((n) => !n.featured)

  const filteredRest = activeFilter === 'All'
    ? rest
    : rest.filter((n) => n.category === activeFilter)

  const visible = filteredRest.slice(0, visibleCount)
  const hasMore = visibleCount < filteredRest.length

  return (
    <main style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: '#fafaf8' }} className="overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Stay Informed</p>
          </Reveal>
          <Reveal delay={100} y={20}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              News & <em className="text-red-600 not-italic">Updates</em>
            </h1>
          </Reveal>
          <Reveal delay={200} y={20}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300} y={20}>
            <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
              Latest happenings, achievements, events, and announcements from Future School, Ambur.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[['50+', 'Events Per Year'], ['95%', 'Board Pass Rate'], ['25+', 'Awards Won'], ['2025', 'Academic Year']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-5 px-4">
                <span className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED + GRID ══ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured + sidebar layout */}
          {featured && activeFilter === 'All' && (
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {/* Featured (takes 2 cols) */}
              <div className="lg:col-span-2">
                <FeaturedCard item={featured} />
              </div>

              {/* Sidebar — quick updates */}
              <Reveal direction="right" delay={100} y={20}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 h-full flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-1">Quick Updates</p>
                    <div className="w-8 h-0.5 bg-red-600" />
                  </div>
                  <ul className="flex flex-col gap-4 flex-1">
                    {rest.slice(0, 4).map((item) => {
                      const style = categoryStyle[item.category] || categoryStyle.Notice
                      return (
                        <li key={item.id} className="group flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 cursor-pointer">
                          <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 text-lg group-hover:border-red-200 transition-colors">
                            {item.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-1.5 py-0.5 rounded text-[0.58rem] font-bold ${style.bg} ${style.text}`}>{item.category}</span>
                              <span className="text-[0.6rem] text-gray-400">{item.date}</span>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </Reveal>
            </div>
          )}

          {/* Filter tabs */}
          <Reveal y={20}>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => {
                const count = cat === 'All' ? rest.length : rest.filter(n => n.category === cat).length
                return (
                  <button
                    key={cat}
                    onClick={() => { setActiveFilter(cat); setVisibleCount(6) }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      activeFilter === cat
                        ? 'bg-red-600 text-white border-red-600 shadow-sm'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {cat}
                    <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${activeFilter === cat ? 'bg-white/20' : 'bg-gray-100 text-gray-400'}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* News grid */}
          {visible.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((item, i) => (
                <NewsCard key={item.id} item={item} delay={i * 70} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">📰</p>
              <p className="text-gray-400 text-sm">No news in this category yet.</p>
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <Reveal delay={100} y={20}>
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount((v) => v + 3)}
                  className="flex items-center gap-2 px-8 py-3 border-2 border-red-600 text-red-600 text-sm font-bold rounded-lg hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-200 mx-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Load More News
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ══ NEWSLETTER ══ */}
      <section className="relative bg-red-700 py-14 md:py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-red-900/40 blur-[80px]" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <p className="text-red-200 text-xs font-bold tracking-widest uppercase mb-3">Stay Updated</p>
          </Reveal>
          <Reveal delay={100} y={20}>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-3 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
              Never Miss an <em className="font-bold not-italic">Update</em>
            </h2>
          </Reveal>
          <Reveal delay={200} y={20}>
            <p className="text-red-100 text-sm mb-7 leading-relaxed">
              Subscribe to receive school news, event reminders, and important notices directly in your inbox.
            </p>
          </Reveal>
          <Reveal delay={300} y={20}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 border-0"
              />
              <button className="px-6 py-3 bg-white text-red-700 text-sm font-bold rounded-lg hover:bg-red-50 hover:shadow-lg transition-all duration-200 flex-shrink-0">
                Subscribe →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
