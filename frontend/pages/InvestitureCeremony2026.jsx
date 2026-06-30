import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen, Users, Award, Flag } from 'lucide-react'
import { Reveal } from '../utils/reveal'

// Ceremony images
import imgHero    from '../assets/pic-assets/IMG_2866.JPG'
import imgOath    from '../assets/pic-assets/IMG_2876.JPG'
import imgBadge   from '../assets/pic-assets/IMG_2878.JPG'
import imgMarch   from '../assets/pic-assets/IMG_2916.JPG'

export default function InvestitureCeremony2026() {
  return (
    <main className="bg-[#fafaf8] overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden bg-gray-900">
        <img
          src={imgHero}
          alt="Investiture Ceremony 2026 — Future School Ambur"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-transparent" />

        {/* Back link */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Events
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-8 pb-10 md:pb-16 z-10 max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-black uppercase tracking-widest text-purple-300 bg-purple-900/50 border border-purple-700/40 px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" /> Leadership
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-black uppercase tracking-widest text-white/70 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                <Calendar className="w-3 h-3" /> June 25, 2026
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-black uppercase tracking-widest text-white/70 bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                <Clock className="w-3 h-3" /> 5 min read
              </span>
            </div>
            <h1 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-3">
              Investiture Ceremony 2026
            </h1>
            <p className="text-white/70 text-base md:text-lg font-medium max-w-2xl">
              Oath Taking Ceremony — Honouring the Leaders of Tomorrow
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ ARTICLE BODY ══ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2">

            {/* Opening pull quote */}
            <Reveal>
              <blockquote className="border-l-4 border-[#c0392b] bg-white pl-6 pr-6 py-6 rounded-r-2xl shadow-sm mb-10">
                <p className="text-gray-700 italic text-lg md:text-xl leading-relaxed font-medium" style={{ fontFamily: "'Georgia', serif" }}>
                  "Leadership is not about being in charge. It is about taking care of those in your charge."
                </p>
                <cite className="block mt-3 text-sm font-bold text-[#c0392b] not-italic">— Simon Sinek</cite>
              </blockquote>
            </Reveal>

            {/* Section 1 — Introduction */}
            <Reveal>
              <div className="prose-section mb-10">
                <h2 className="serif text-2xl md:text-3xl text-gray-900 mb-4">
                  A Morning of Purpose and Pride
                </h2>
                <div className="w-10 h-1 bg-[#c0392b] rounded mb-6" />
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  On the morning of <strong>June 25, 2026</strong>, Future Senior Secondary School, Ambur, witnessed one of its most cherished annual traditions — the <strong>Investiture Ceremony 2026</strong>. The school campus was adorned with vibrant decorations, and the air was filled with a sense of solemn purpose as students, faculty, parents, and distinguished guests gathered to mark a momentous occasion in the school's academic calendar.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  The ceremony formally installed a new student leadership council, comprising the <strong>Head Boy</strong>, <strong>Head Girl</strong>, Class Prefects, Sports Captains, and the four House Captains — Emerald, Ruby, Sapphire, and Topaz — as the guiding leaders of the student body for the academic year 2026–27.
                </p>
              </div>
            </Reveal>

            {/* Image 1 — Oath Taking */}
            <Reveal delay={100}>
              <figure className="mb-10 rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src={imgOath}
                  alt="Students taking the oath at the Investiture Ceremony 2026"
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <figcaption className="bg-white px-5 py-3 text-xs text-gray-500 font-medium border-t border-gray-100 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#c0392b]" />
                  Student leaders take their solemn oath during the Investiture Ceremony 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Section 2 — The Oath Taking */}
            <Reveal>
              <div className="mb-10">
                <h2 className="serif text-2xl md:text-3xl text-gray-900 mb-4">
                  The Solemn Oath — A Pledge to Serve
                </h2>
                <div className="w-10 h-1 bg-[#c0392b] rounded mb-6" />
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  The highlight of the morning was the <strong>Oath Taking Ceremony</strong>. One by one, the appointed student leaders stepped forward in their formal uniforms, badges gleaming, sashes crisp, and in a clear, confident voice, pledged their commitment to serve the school community with honesty, humility, and hard work.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  The oath, administered by the Principal, was a solemn moment of accountability — a public promise to uphold the school's values, to be a role model for younger students, and to act with integrity both inside and outside the classroom.
                </p>

                {/* Callout box — The Oath */}
                <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 my-8">
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#c0392b] mb-3">The Investiture Oath</p>
                  <p className="italic text-white/85 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Georgia', serif" }}>
                    "I solemnly pledge to uphold the honour and traditions of Future Senior Secondary School. I shall serve my fellow students with sincerity and compassion, lead by example, and strive to make our school a better place through discipline, dedication, and unity. I shall be a worthy representative of the ideals of this institution."
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Image 2 — Badge Pinning */}
            <Reveal delay={100}>
              <figure className="mb-10 rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src={imgBadge}
                  alt="Badge pinning ceremony — Head Boy and Head Girl receive their badges"
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <figcaption className="bg-white px-5 py-3 text-xs text-gray-500 font-medium border-t border-gray-100 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#c0392b]" />
                  The Head Boy and Head Girl receive their badges from the Principal during the Badge Pinning ceremony
                </figcaption>
              </figure>
            </Reveal>

            {/* Section 3 — March Past & Guard of Honour */}
            <Reveal>
              <div className="mb-10">
                <h2 className="serif text-2xl md:text-3xl text-gray-900 mb-4">
                  March Past &amp; Guard of Honour
                </h2>
                <div className="w-10 h-1 bg-[#c0392b] rounded mb-6" />
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  Following the oath, the ceremony reached one of its most visually spectacular moments — the <strong>March Past</strong>. The school band played stirring tunes as the newly appointed leaders and the NCC/Scout contingent marched in perfect formation across the school grounds, drawing applause from the assembled parents and staff.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  The <strong>Guard of Honour</strong> was presented to the Chief Guest — a dignitary from the local administration — who inspected the guard and addressed the gathering, praising the school's commitment to holistic education and character building.
                </p>
              </div>
            </Reveal>

            {/* Image 3 — March Past */}
            <Reveal delay={100}>
              <figure className="mb-10 rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src={imgMarch}
                  alt="Students march in formation during the March Past at Investiture Ceremony"
                  className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <figcaption className="bg-white px-5 py-3 text-xs text-gray-500 font-medium border-t border-gray-100 flex items-center gap-2">
                  <Flag className="w-3.5 h-3.5 text-[#c0392b]" />
                  The newly installed leaders march in formation during the March Past
                </figcaption>
              </figure>
            </Reveal>

            {/* Section 4 — Closing */}
            <Reveal>
              <div className="mb-10">
                <h2 className="serif text-2xl md:text-3xl text-gray-900 mb-4">
                  The Principal's Address — Inspiring Words for the Year Ahead
                </h2>
                <div className="w-10 h-1 bg-[#c0392b] rounded mb-6" />
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  The ceremony concluded with an inspiring address by the Principal, who reminded the newly invested leaders that their roles were not positions of privilege but of <strong>responsibility and service</strong>. She emphasised that true leadership lies in empathy, communication, and the courage to act justly, even when it is difficult.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                  She congratulated the outgoing leadership council for their exemplary contributions and welcomed the new council with warm encouragement, expressing confidence that the school community would continue to flourish under their stewardship.
                </p>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  The Investiture Ceremony 2026 was a proud reminder of Future School's unwavering commitment to nurturing not just academic excellence, but <strong>character, compassion, and capable leadership</strong> in every student.
                </p>
              </div>
            </Reveal>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <span className="text-[#c0392b] text-xl">✦</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Leadership', 'Investiture Ceremony', 'Student Council', 'Events 2026', 'Future School Ambur'].map(t => (
                <span key={t} className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                  #{t.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">

            {/* Event Info Card */}
            <Reveal>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#c0392b] mb-4">Event Details</p>
                <ul className="space-y-4">
                  {[
                    { icon: <Calendar className="w-4 h-4 text-[#c0392b]" />, label: 'Date', value: 'June 25, 2026' },
                    { icon: <Clock className="w-4 h-4 text-[#c0392b]" />,    label: 'Time', value: '9:00 AM – 12:00 PM' },
                    { icon: <Users className="w-4 h-4 text-[#c0392b]" />,    label: 'Attendees', value: '700+ Students & Parents' },
                    { icon: <Flag className="w-4 h-4 text-[#c0392b]" />,     label: 'Venue', value: 'School Main Ground, Ambur' },
                  ].map(item => (
                    <li key={item.label} className="flex items-start gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="mt-0.5 w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[0.58rem] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                        <p className="text-sm font-semibold text-gray-800 mt-0.5">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Student Leaders Highlight */}
            <Reveal delay={100}>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-sm">
                <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#c0392b] mb-4">Student Leadership Council 2026–27</p>
                <ul className="space-y-3">
                  {[
                    { role: 'Head Boy',         house: 'Elected by Faculty' },
                    { role: 'Head Girl',        house: 'Elected by Faculty' },
                    { role: 'Emerald Captain',  house: 'Emerald House' },
                    { role: 'Ruby Captain',     house: 'Ruby House' },
                    { role: 'Sapphire Captain', house: 'Sapphire House' },
                    { role: 'Topaz Captain',    house: 'Topaz House' },
                  ].map(l => (
                    <li key={l.role} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#c0392b] flex-shrink-0" />
                      <div>
                        <p className="text-white text-xs font-bold">{l.role}</p>
                        <p className="text-gray-500 text-[0.6rem] uppercase tracking-widest">{l.house}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Photo grid teaser */}
            <Reveal delay={150}>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <p className="text-[0.6rem] font-black uppercase tracking-widest text-[#c0392b] mb-3 px-2">Photo Highlights</p>
                <div className="grid grid-cols-2 gap-2">
                  {[imgHero, imgMarch, imgOath, imgBadge].map((src, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                      <img src={src} alt={`Ceremony moment ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
                <Link
                  to="/gallery"
                  className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#c0392b] hover:gap-3 transition-all"
                >
                  View All Photos <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                </Link>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={200}>
              <div className="bg-red-600 rounded-2xl p-6 text-white">
                <p className="text-[0.6rem] font-black uppercase tracking-widest text-red-200 mb-2">Become Part of Future School</p>
                <h3 className="serif text-xl leading-snug mb-4">Join Our Growing Community</h3>
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 bg-white text-red-600 text-xs font-black uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-red-50 transition-all"
                >
                  Apply for Admissions <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </main>
  )
}
