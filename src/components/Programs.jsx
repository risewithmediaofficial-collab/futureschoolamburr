import { Link } from 'react-router-dom'
import { useReveal } from '../utils/reveal'

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal(0.15)
  const transforms = { up: 'translateY(40px)', left: 'translateX(-50px)', right: 'translateX(50px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── Program data ─── */
import imgKG from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgPrimary from '../assets/pic-assets/IMG_20251014_095029-410x260.jpg'
import imgSecondary from '../assets/pic-assets/IMG_4395-1024x683.jpg'
import imgSenior from '../assets/pic-assets/Secondary.jpg'

const programs = [
  {
    id: 1,
    anchorId: 'kindergarten-level',
    icon: '📚',
    title: 'Kindergarten',
    classes: 'K2 & K3',
    paragraphs: [
      'The main aim at this stage is to develop cognitive and motor skills and to encourage curiosity, imagination and create interest, thus exposing the child to an exciting and wonderful world of learning. Kids are encouraged to study through "techno tools".',
      "Only child centered education is practiced. Learning through DIGI BOARD, structured play & regular field trips are an integral part of the KG curriculum, as we know that only a solid base in this level will ease out the child's study in future.",
    ],
    img: imgKG
  },
  {
    id: 2,
    anchorId: 'primary-level',
    icon: '🏫',
    title: 'Primary',
    classes: 'Grades I to VIII',
    paragraphs: [
      'At the primary level, there is a greater emphasis on development based curriculum and students are taught the essential concepts of various subjects. Futurians are taught specifically through Digi Board, content which inculcate zeal and concentration among the students. Special emphasis is also laid on the development of positive attitudes and healthy habits among the students. Apart from preparing the students to succeed in academics, they are also taught the importance of moral values to lead a disciplined life.',
      "Activity based learning is given more focus in this stage. Co scholastic activities augment their physical and mental ability. English 'Seasons' provide a new dimension to their learning.",
    ],
    img: imgPrimary
  },
  {
    id: 3,
    anchorId: 'secondary-level',
    icon: '🎯',
    title: 'Secondary',
    classes: 'Grades IX and X',
    paragraphs: [
      "During the three years of Middle School education, the pupil's intellectual, aesthetic, physical and cultural growth and development are intensified and extended to a foundation course designed to suit children from an international background.",
    ],
    img: imgSecondary
  },
  {
    id: 4,
    anchorId: 'senior-secondary-level',
    icon: '🏛️',
    title: 'Senior Secondary',
    classes: 'Grades XI and XII',
    paragraphs: [
      'Carrier oriented preparation of the pupil takes place in this level. Students can choose the areas of study based on their aptitude and seek in-depth knowledge in the areas chosen. Opportunities are provided for the enrichment of knowledge.',
      'Carrier-counselling is conducted to assist the student to choose their field without any dilemma and abide by it. Besides scholastics, co-scholastic areas are also given equal weightage to develop confidence and mental ability in students. Students can choose any one stream out of the following:',
    ],
    streams: [
      'English, Mathematics, Physics, Chemistry and Biology',
      'English, Mathematics, Physics, Chemistry and Computer Science',
      'English, Physics, Chemistry, Biology and Computer Science',
      'English, Accountancy, Business Studies, Economics and Computer Science',
    ],
    img: imgSenior
  },
]

/* ─── Program Card ─── */
function ProgramCard({ program, delay, reversed }) {
  return (
    <Reveal delay={delay} direction={reversed ? 'right' : 'left'}>
      <div id={program.anchorId} className="bg-[#efefef] border border-gray-200 p-5 md:p-7">
        <div className="border border-gray-200 bg-white overflow-hidden">
          <img
            src={program.img}
            alt={program.title}
            className="w-full h-64 md:h-[520px] object-cover"
          />
        </div>

        <div className="mt-6 border-y border-gray-300 py-4">
          <h3 className="text-2xl md:text-[2rem] font-semibold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {program.title} : {program.classes}
          </h3>
        </div>

        <div className="mt-5 space-y-5 text-gray-700 leading-relaxed text-xl">
          {program.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {program.streams && (
            <ol className="list-decimal pl-7 space-y-1">
              {program.streams.map((stream) => (
                <li key={stream}>{stream}</li>
              ))}
            </ol>
          )}
          <Link
            to="/admissions"
            className="inline-flex items-center text-red-600 font-bold text-[2rem] hover:text-red-700 transition-colors duration-200"
          >
            Click Here To Know The Admission Process
          </Link>
        </div>
      </div>
    </Reveal>
  )
}

/* ══════════════════════════════════════════
   PROGRAMS PAGE
══════════════════════════════════════════ */
export default function Programs() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Academics</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Programs</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              From foundational primary education to senior secondary streams — a seamless, CBSE-aligned academic journey designed to unlock every student's potential.
            </p>
          </Reveal>
          {/* Quick jump pills */}
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {programs.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.anchorId}`}
                  className="px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {p.title.toUpperCase()} LEVEL
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ PROGRAM CARDS (alternating layout) ══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} delay={0} reversed={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* ══ TEACHING METHODOLOGY ══ */}
      <section id="teaching-methodology" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3 text-center">Teaching Methodology</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Approach</em> to Learning
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                We, at Future Senior Secondary School, believe that in life every moment is an opportunity to learn. Our students grow in various directions.
                Their interests are kindled by the large number of different stimuli provided by the “hands on” methodology formulated by us.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Smart Class &amp; Digi Boards
                </h3>
                <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                  <p>
                    Future School was the first school in Ambur to have implemented Smart Class Technology in all our classrooms to help students leverage new
                    communication technologies to bridge the gap between classroom learning and the real world.
                  </p>
                  <p>
                    Our fully digital classrooms along with virtual labs provide teacher-led content solutions to enhance student learning outcomes. Smart class aids
                    in greater clarity in concept-based learning and provides better teaching strategies to assess students and deliver well designed learning modules.
                    Every classroom at Future School is a window into the world.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Daily Skill Practice
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                  Our current teaching methods enable students to practice and sharpen various academic skills like reading, writing, speaking, critical-thinking,
                  mathematics and creativity, on a daily basis. Moreover, our teaching methods coordinate across different subjects and skills to keep the students
                  alert and improve their results. Learning concepts are followed up by activities and assignments that reinforce the evaluation pattern of CBSE.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10">
              <div className="text-center mb-6">
                <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Beyond Academics</p>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                  Holistic <em className="text-red-600 not-italic">Development</em>
                </h3>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                  <p>
                    We believe in the holistic development of each child, and extra-curricular activities are an especially important part of this development.
                    The school has made extensive arrangements to help the students learn different arts, craft, sports, music, dance, archery and vocal training to
                    nurture the talents of each Futurian. Various hobby clubs which develop creative and logical skills have been set up.
                  </p>
                  <p>
                    Evaluation of Work Education/Pre-vocational Education, Art Education and Physical and Health Education will be done by the school. CBSE has developed
                    guidelines for internal assessment in these subjects which the school is expected to keep in view while organizing teaching and evaluation of these subjects.
                    Following publications of the Board are recommended for use and reference which give outlines of syllabi and hints for evaluation:
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 pt-1">
                    {[
                      'Work Education in Schools',
                      'Art Education in Schools',
                      'Health and Physical Education in Schools',
                    ].map((item) => (
                      <div key={item} className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Work Education</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    Work Education aims at restoring dignity and respect to all types of manual work, promoting self-reliance in meeting one’s daily needs and those of one’s
                    family and community, increasing productivity through the development of proper work skills and values, and promoting commitment to the welfare of the society
                    through suitable programme of social work or community service. This is a two-year syllabus for classes IX and X.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Art and Craft</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    At Future School, we believe that nurturing a child’s creativity is vital for his/her overall development. We have art and craft periods for pre-primary,
                    primary and secondary grades, while students in middle and high school may choose art or craft as their club. We have teachers dedicated to guiding students
                    in these activities. In addition, students’ works are exhibited in the school gallery. In the Art &amp; Craft periods, children are taught right from the
                    fundamentals of drawing, sketching, shading, and painting, to constructing complex figures.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Sports</h4>
                  <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    <p>
                      Sports are an integral part of the learning process at Future. We believe that sports not only keep students at the top of their health but also enhance
                      their learning process and improve their level of thinking. Hence, to make sure students get the most out of their Physical Education classes, Future School
                      campus is well equipped with all the equipment for multiple sports and experienced coaches specialized in these sports.
                    </p>
                    <p>
                      We at Future School strongly believe that playing team sports helps inculcate concepts of teamwork and communication into the young learner’s mind. Thus, we
                      have dedicated acres of the Future School campus for a full-sized basketball, volleyball/throw ball, kho-kho, and kabaddi court, along with a football field
                      and cricket nets.
                    </p>
                    <p>
                      This allows students of all grades to enjoy and learn these sports with their friends and coach in a professional manner.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Dance and Western Music</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    Children are exposed to varied kinds of music, and dance forms, and encouraged by the dance masters to formulate pieces of music and choreograph steps on
                    their own. Children in the younger grades have Dance and Western Music classes incorporated into their weekly schedules, allowing them to unwind and express
                    themselves in the most creative way possible. During assemblies, festival celebrations, or the grand annual day event, children get to showcase their skills
                    through melodious musical performances, and dances to peppy tracks.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Karate</h4>
                  <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    <p>
                      Through Karate at School, our aim is to bring the benefits of karate training to as many children as possible, helping them to build their self confidence
                      and emotional skills so they have the chance to reach their full potential in everything they do.
                    </p>
                    <p>Training in Karate will help the school students be the best they can be and use their body and mind to their fullest potential possible. The areas of specialization include:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Self Discipline',
                        'Improving Focus and concentration',
                        'Sharpening the Memory',
                        'Working as a Team',
                        'Control and Patience',
                        'Physical Fitness',
                        'Developing Physical, Mental and Emotional Balance',
                        'Coordination of the mind and body',
                        'Etiquette and Manners',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-red-600 mt-2.5" />
                          <p className="text-sm md:text-base text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p>
                      The program is managed by our Karate Master, Mr. G. Ramesh Kanna. He has finished his Diploma in Karate. He has received 6th Din black belt. At present he
                      has been appointed as the judge of National Karate Association of India.
                    </p>
                    <p>
                      With the safety of school girls becoming a cause for concern, the Central Board of Secondary Education (CBSE) recently asked its affiliated schools to train
                      girls studying in Classes 1 to 10 in self-defence techniques. Experts said the training should be made compulsory in all schools.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Yoga</h4>
                  <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    <p>
                      A unique aspect of Yoga is the mental focus and attention that they exercise while doing the postures. The result is a toning up of both the mind and the body.
                    </p>
                    <p>
                      In adopting and maintaining a posture there is a co-ordination between the nervous system and the muscular system, that influences the physical and mental behaviours.
                    </p>
                    <p>
                      Yoga has been made compulsory in CBSE curriculum for Classes XI and XII while for students of other classes it should be held at least twice a week as part of their
                      physical activity programme.
                    </p>
                    <p>
                      At Future School, students will develop a sense of well-being, and will increase their capacity of mental concentration. It will find harmony between the mind and the body.
                      It makes them develop proper breathing habits.
                    </p>
                    <p>
                      The yoga training is being managed by our yoga master, Dr. K. Neela Krishna Azhwar, who is a professional yoga trainer and has achieved seven world records. He has also been
                      honoured with many awards for yoga therapy.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Archery</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    “Archery is a sport that includes everyone- the sporty and the nerds”. Archery is a sport that’s fun, but also allows participants of any age or skill level to compete
                    against others or challenge themselves individually. The sport has long helped archers gain confidence and physical strength, but teachers have discovered archery also helps
                    students with math. Once the kids realize they can only shoot if they follow the rules, they get it. Even kids with the worst behavioral problems straighten up because they
                    know if they follow the rules, they can shoot. Archery is the only sport I’ve seen that is this structured. Kids learn to wait their turn, follow directions, set goals and
                    challenge themselves. Once they’re instructed, archery develops character, and these students will benefit for the rest of their lives.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Literary Club</h4>
                  <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Debate</p>
                      <p>
                        Students are taught the skills of debating and, through the process, learn to construct meaningful arguments in a professional debating format. Future School takes part
                        in several debate competitions which provide the necessary skills to help students compete with each other.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Quiz</p>
                      <p>
                        Quizzing is a great way for students to nurture a competitive spirit as well as develop an awareness of the world around them, and at the quiz club we guide students
                        through a variety of fields of knowledge required for quizzing. The club is run by students who have been part of several quiz competitions across the nation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Circle Time</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    Circle Time creates a secure and transparent environment that allows even the children who may otherwise be shy or afraid to speak up, to confidently voice their opinions.
                    During Quality Circle Time, children develop key social skills, such as waiting for their turn to speak, listening to others, respecting differing opinions, and abiding by
                    rules. Class bonding and unity are also solidified in this manner, and children are engaged in all areas of development. The sessions may be concluded with a few energizing
                    games, stories, or activities.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Field Trips</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    At Future School, learning is not bound by the walls of the classroom. Field trips allow students to engage with the real world and discover the relevance of what they learn
                    in the classroom. However, field trips are not limited to science. We include field trips in every subject. For example, students learning about Accountancy and Economics are
                    taken to the nearby banks to learn further.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Student Leadership</h4>
                  <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                    <p>
                      We believe in providing ample opportunities and platforms to each and every child to build leadership and dynamic qualities.
                    </p>
                    <p>
                      At Future School, we take pride in the fact that students of Grades 6 to 12 elect their house leaders in a democratic fashion. Captains and Vice Captains for each of the
                      4 houses – Ruby, Emerald, Sapphire and Topaz – are elected at the beginning of the academic year. These elections are fiercely contested with posters, speeches, nominations,
                      withdrawals, ballots etc. similar to political elections.
                    </p>
                    <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                      <p className="font-semibold text-gray-900 mb-3">Student leadership team (2018–19)</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {[
                          'School President: UNEZA IFFATH .N of Grade 12',
                          'School Vice President: SUDIKKSHA .S of Grade 10',
                          'School Captain (Boy): PRANATH KUMAR .K of Grade 11',
                          'School Captain (Girl): KUSHI .R of Grade 11',
                          'Deputy School Captain (Boy): MD. NIBRAS .M .I of Grade 9',
                          'Deputy School Captain (Girl): NIKITHA .R of Grade 9',
                          'Cultural Secretary (Boy): ABISHEK .V .S of Grade 11',
                          'Cultural Secretary (Girl): SHERIN JUANITA LEELAVATHY .J of Grade 11',
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-red-600 mt-2.5" />
                            <p className="text-sm md:text-base text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ SOCIAL INITIATIVES ══ */}
      <section id="social-initiatives" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3 text-center">Social Initiatives</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Building Responsible <em className="text-red-600 not-italic">Citizens</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
              <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                <p>
                  Social Initiatives that taken in our school campus is to “Say No to Pollution “. One of the main motto of our school is to make “Pollution Free
                  Environment”. Our School campus are fully surrounded by Green Environment. Planting more trees helps to increasing livelihood of Humans.
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">“Save the planet by planting more trees”</p>
                  <p>Parents/Volunteers of our institution are eagerly contributing in spreading green revolution by planting saplings.</p>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">“Trees for the Future”</p>
                  <p>
                    Planting a tree is one of the most simple and effective activities that we can perform to improve our green space surroundings. Having a beautiful
                    green space induces to reduce tension, improves attention and also reduces aggression.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">“ A Man doesn’t plant a tree for Himself. He plants it for posterity”</p>
                  <p>
                    Probably Trees are important for Environment,Economic,Social and Personal development.
                    <br />
                    Here some of the pictures to witness the celebration of “World Environmental Day” on June 5th 2018.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                    Field Trips:-
                  </h3>
                  <p>
                    At Future School,learning is not bound by the walls of the classroom.Field trips allow students to engage with real world and discover the relevance
                    of what they learn in the classroom.However, field trips are not limited to Science.We include field trips in every subject.For example,Students learning
                    about the Accountancy and Economics are taken to the nearby banks to learn furthermore.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ OTHERS ══ */}
      <section id="others" className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3 text-center">Others</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Additional <em className="text-red-600 not-italic">Student Support</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
              <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed font-light">
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                      Science
                    </h3>
                    <p>English, Mathematics, Physics, Chemistry and Biology</p>
                    <p>English, Mathematics, Physics, Chemistry and Computer Science</p>
                    <p>English, Biology, Physics, Chemistry and Computer science</p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                      Commerce
                    </h3>
                    <p>English, Accountancy, Business Studies, Economics and Computer Science</p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                      Language Option
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Students from classes I to IV have Tamil as second language and Hindi as third language.</li>
                      <li>Students from classes V to VIII have the option to select any one - Hindi, Tamil or Urdu as their second language and either Hindi or Tamil as their third language.</li>
                      <li>Students in standard IX and X can choose any one language from Hindi, Tamil or Urdu as their II language.</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 space-y-4">
                  <p>
                    The curriculum is designed to ensure the all round development in each student. Apart from being comprehensive, the curriculum is also very practical
                    and stresses the importance of experimenting and experiencing in order to develop the total personality of the students and to enable them to achieve the
                    required academic success.
                  </p>
                  <p>
                    The medium of instruction is English and special emphasis is given for spoken as well as written English. The scheme of study is developed in a flexible
                    manner so that it is linked between all the stages of study.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                    Assessment Method
                  </h3>
                  <p className="mb-4">
                    The school is adapted to the assessment methods laid by the Central Board of Secondary Education CBSE from time to time. Following CBSE's directive to
                    discontinue the CCE pattern of evaluation, revised methods of assessments are being implemented from previous academic session for Classes I to XII.
                  </p>
                  <p className="mb-3">As per the guidelines, the annual examination results will be comprised of</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Annual Examinations 80 Marks</li>
                    <li>Internal Assessment 20 Marks</li>
                  </ul>
                  <ol className="list-decimal pl-9 mt-2 space-y-1">
                    <li>Periodic assessment (10 %) -10 Marks<br />Average of best two Periodic Assessments is taken.</li>
                    <li>Portfolio - 5 Marks</li>
                    <li>Subject Enrichment Activity 5 Marks</li>
                  </ol>
                  <p className="text-center font-semibold text-gray-900 mt-6">
                    The scheme of studies and grading system is given in detail in the student Report Card.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="text-center mt-10">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Apply for Admission
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}