import { Link } from 'react-router-dom'

const ageRequirements = [
  { grade: 'KG 2', age: '3 Years 6 Months' },
  { grade: 'KG 3', age: '4 years 6 Months' },
  { grade: 'Grade 1', age: '5 years 6 Months' },
  { grade: 'Grade 2', age: '6 years 6 Months' },
  { grade: 'Grade 3', age: '7 years 6 Months' },
  { grade: 'Grade 4', age: '8 years 6 Months' },
  { grade: 'Grade 5', age: '9 years 6 Months' },
  { grade: 'Grade 6', age: '10 years 6 Months' },
  { grade: 'Grade 7', age: '11 years 6 Months' },
  { grade: 'Grade 8', age: '12 years 6 Months' },
  { grade: 'Grade 9', age: '13 years 6 Months' },
  { grade: 'Grade 10', age: '14 years 6 Months' },
  { grade: 'Grade 11', age: '15 years 6 Months' },
  { grade: 'Grade 12', age: '16 years 6 Months' },
]

const stagesOfStudy = [
  'Kindergarten Level K2 - K3',
  'Primary Level – Grade I to V',
  'Middle Years Programme – Grade VI to VIII',
  'Secondary School level – Grade IX and X',
  'Senior secondary level Grades XI and XII',
]

const requiredDocuments = [
  'Transfer Certificate.',
  'Copy of Birth Certificate.',
  'Copy of Community Certificate.',
  'Copy of Aadhar card.',
  'Six passport size photographs, two stamp size photographs of the child and one photograph of parents.',
]

const admissionSteps = [
  'Submission of the admission form',
  'Submission of documents as mentioned in the above section',
  'Payment of the fees.',
]

const Admissions = () => {
  return (
    <main className="pt-20 overflow-x-hidden" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: '#fafaf8' }}>
      {/* ══ ADMISSION PROCEDURE ══ */}
      <section className="py-16 md:py-24" style={{ background: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: '#c0392b' }}>Admissions</p>
            <h1 className="serif text-4xl md:text-5xl font-normal leading-[1.04] relative" style={{ color: '#111' }}>
              Admission<br />Procedure
            </h1>
            <div className="w-8 h-0.5 mt-3" style={{ background: '#c0392b' }} />
            
            <p className="text-sm leading-relaxed font-light mt-6" style={{ color: '#777', maxWidth: '65ch' }}>
              For all grade registration and for the admission to the new academic year commences on 1st Monday of April every year. In all cases, admission procedures laid down by the CBSE, will be followed.
            </p>
          </div>

          {/* Age Eligibility */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-6 relative" style={{ color: '#111' }}>Age Eligibility:</h2>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: '#777' }}>
              For admission to K2, the child must be three & half years old by 31st of July. Corresponding age limits will be followed for respective classes. Children have to meet the stipulated age requirement for admission to Future Senior Secondary School as on June 1st of the year. The required age limit for each grade is mentioned in the following table:
            </p>

            <div className="overflow-x-auto rounded-lg" style={{ border: '1px solid #e5e5e0' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#fafaf8', borderBottom: '1px solid #e5e5e0' }}>
                    <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#111' }}>Grade</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#111' }}>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {ageRequirements.map((item, idx) => (
                    <tr key={item.grade} style={{ background: idx % 2 === 0 ? '#fff' : '#fafaf8', borderBottom: '1px solid #e5e5e0' }}>
                      <td className="px-6 py-3 text-sm" style={{ color: '#777' }}>{item.grade}</td>
                      <td className="px-6 py-3 text-sm" style={{ color: '#777' }}>{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Readiness Assessment */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-4 relative" style={{ color: '#111' }}>Readiness Assessment:</h2>
            <p className="text-sm leading-relaxed font-light mb-4" style={{ color: '#777' }}>
              Student seeking admission for the grades I to XII, readiness assessment will be conducted. In case of K2 and K3 children, interview will be conducted to test the communication and readiness.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
              Parents who wish to apply for the admission can get the application form in the school office. Students must go through the entrance exam and must attain at least 60% to clear the entrance exam.
            </p>
          </div>

          {/* Stages of Study */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-6 relative" style={{ color: '#111' }}>Stages of Study</h2>
            <ol className="space-y-2" style={{ color: '#777' }}>
              {stagesOfStudy.map((stage, idx) => (
                <li key={idx} className="text-sm leading-relaxed font-light">
                  <span className="font-semibold" style={{ color: '#111' }}>{idx + 1}.</span> {stage}
                </li>
              ))}
            </ol>
          </div>

          {/* Submission of Application Form */}
          <div className="mb-12">
            <h2 className="serif text-2xl md:text-3xl font-normal mb-4 relative" style={{ color: '#111' }}>Submission of Application Form</h2>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: '#777' }}>
              The duly filled application form should be submitted to the School Office on or before the stipulated date with the following documents as applicable,
            </p>

            <ul className="space-y-2 mb-6" style={{ color: '#777' }}>
              {requiredDocuments.map((doc, idx) => (
                <li key={idx} className="text-sm leading-relaxed font-light">
                  <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {doc}
                </li>
              ))}
            </ul>

            <div className="rounded-lg p-6 mb-6" style={{ background: '#fff8f7', border: '1px solid #f0e0de' }}>
              <p className="text-sm leading-relaxed font-light mb-3" style={{ color: '#777' }}>
                <span className="font-semibold" style={{ color: '#111' }}>Note:</span> For students from other Boards, it should be duly verified and counter signed by the competent authority of the Education Department of District /Area from where the T.C has been obtained.
              </p>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
                Original documents of the submitted photocopies should be made available upon request for verification.
              </p>
            </div>
          </div>

          {/* Admission Confirmation */}
          <div>
            <h2 className="serif text-2xl md:text-3xl font-normal mb-4 relative" style={{ color: '#111' }}>Admission Confirmation</h2>
            <p className="text-sm leading-relaxed font-light mb-4" style={{ color: '#777' }}>
              Admission will be confirmed with the following process,
            </p>
            <ol className="space-y-2" style={{ color: '#777' }}>
              {admissionSteps.map((step, idx) => (
                <li key={idx} className="text-sm leading-relaxed font-light">
                  <span className="font-semibold" style={{ color: '#111' }}>{idx + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══ TIMINGS / CODE OF CONDUCT ══ */}
      <section id="timings" className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: '#c0392b' }}>Curriculum</p>
            <h2 className="serif text-3xl md:text-4xl font-normal leading-[1.08]" style={{ color: '#111' }}>
              Timings &amp; Code of Conduct
            </h2>
            <div className="w-8 h-0.5 mt-3" style={{ background: '#c0392b' }} />
          </div>

          <div className="mb-10">
            <h3 className="text-base font-bold mb-2" style={{ color: '#111' }}>HOW TO MEET THE PRINCIPAL / TEACHER ?</h3>
            <p className="text-sm leading-relaxed font-light mb-4" style={{ color: '#777' }}>
              You can call the school office for an appointment to meet the Principal / Teacher in any working days.
            </p>

            <div className="overflow-x-auto rounded-lg bg-white" style={{ border: '1px solid #e5e5e0' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ background: '#fafaf8', borderBottom: '1px solid #e5e5e0' }}>
                    <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#111' }}>To Meet</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#111' }}>Feasible Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#fff', borderBottom: '1px solid #e5e5e0' }}>
                    <td className="px-6 py-3 text-sm font-semibold" style={{ color: '#111' }}>PRINCIPAL</td>
                    <td className="px-6 py-3 text-sm" style={{ color: '#777' }}>
                      10.30 am to 12.30 pm in Weekdays<br />
                      10.30 am to 1.30 pm in Saturdays
                    </td>
                  </tr>
                  <tr style={{ background: '#fafaf8' }}>
                    <td className="px-6 py-3 text-sm font-semibold" style={{ color: '#111' }}>TEACHERS</td>
                    <td className="px-6 py-3 text-sm" style={{ color: '#777' }}>
                      During PTM held at each term<br />
                      (OR)<br />
                      With an appointment
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-10">
            <div id="code-of-conduct">
              <h3 className="text-base font-bold mb-3" style={{ color: '#111' }}>GENERAL DISCIPLINE</h3>
              <p className="text-sm leading-relaxed font-light mb-3" style={{ color: '#777' }}>
                We expect our students to maintain the high standards of personal conduct. This:
              </p>
              <ul className="space-y-2" style={{ color: '#777' }}>
                {[
                  'includes honesty, discipline, integrity, punctuality, ethics and other values.',
                  'students are accountable to the school authorities for their conduct in the school premises, in the school transport, at any events / activities inside & outside the school and their general behaviour outside.',
                  'Any objectionable conduct on the part of the student will lead to commensurate consequences at the discretion of the Principal, whose decision on such matters is final.',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed font-light">
                    <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3" style={{ color: '#111' }}>UNIFORM</h3>
              <ul className="space-y-2 mb-6" style={{ color: '#777' }}>
                {[
                  'Students should neatly dress in full School Uniform stitched in the prescribed pattern.',
                  'Students should wear Sports Uniform on every Wednesdays and Saturdays.',
                  'Students should wear black shoes and blue socks from Monday to Friday.',
                  'Boys should wear vests and girls should wear slips and cycling shorts.',
                  'Colour clothes, fancy or expensive footwear are strictly not allowed.',
                  'Girls from Grade 1 to Grade 5 must wear short leggings.',
                  'Fancy or expensive watches, colourful jorkins or different colour contact lenses, fancy bags and trolley bags are not permitted.',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed font-light">
                    <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                  </li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#111' }}>Boys are not permitted to:</p>
                  <ul className="space-y-2" style={{ color: '#777' }}>
                    {[
                      'have long side burns, long hair streaked hair and fancy hair styles.',
                      'wear bands / bracelets / chains / ear rings.',
                      'grow their beard, moustache.',
                      'wear low-hip pants, tight fit pants.',
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm leading-relaxed font-light">
                        <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#111' }}>Girls are not permitted to:</p>
                  <ul className="space-y-2" style={{ color: '#777' }}>
                    {[
                      'have streaked hair, fancy hair styles, leave shoulder length or long hair untied.',
                      'wear eye makeup and more than one ear piercing.',
                      'wear color / fancy / gold / diamond earrings, bangles and chains (They should wear ornaments that looks decent & neat).',
                      'adorn their hair with flowers or colourful clips, paint their nails or apply mehendi.',
                    ].map((item, idx) => (
                      <li key={idx} className="text-sm leading-relaxed font-light">
                        <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div id="uses-it-electronic-gadgets">
              <h3 className="text-base font-bold mb-3" style={{ color: '#111' }}>IT PROVISIONS</h3>
              <ul className="space-y-2 mb-6" style={{ color: '#777' }}>
                {[
                  'Students are permitted to use the computers at school for any purpose pertaining to the requirements of the school syllabus as specified by the computer faculty or for any other school activity only after obtaining proper permission.',
                  'Students are not allowed to send messages or share anything on any social media network, create or view objectionable visuals, change the system settings or delete files.',
                  'Students who engage in cyber bullying by posting email, blogs, video footage, images, photographs on social networking sites, chat rooms, YouTube, SMS, MMS which are violent, aggressive or threatening, vulgar or obscene, malicious rumour or gossip, classified as teasing or taunting. Verbally attacking, embarrassing or maligning, causing mental trauma or psychological damage by destroying the reputation of staff or students, tarnishing the image of the school, shall invite severe disciplinary action and are liable to be suspended or expelled from school.',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed font-light">
                    <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-base font-bold mb-3" style={{ color: '#111' }}>Usage of Electronic Gadgets</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
                Students are not permitted to carry mobile phones, i-Pods, i-Pads stations, PSPs, cameras or any other electronic gadgets to school, if they do so, it will be confiscated. Students are permitted to use the school telephone to contact their parents in case of emergency.
              </p>
            </div>

            <div id="withdrawals">
              <h3 className="text-base font-bold mb-3" style={{ color: '#111' }}>WITHDRAWALS</h3>
              <ul className="space-y-2 mb-6" style={{ color: '#777' }}>
                {[
                  'One month notice is to be given before the withdrawal of a student or else the fee for the following month will be charged in lieu there off.',
                  'Transfer Certificate will not be given unless all school dues are cleared.',
                  'Issue of T.C. will be done after 10 working days from the date of TC application.',
                  'A student may be removed from the roll by school authority on any of the following grounds,',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed font-light">
                    <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                  </li>
                ))}
              </ul>
              <ol className="space-y-2 pl-5" style={{ color: '#777', listStyleType: 'decimal' }}>
                {[
                  'Poor attendance.',
                  'Behavioural problem.',
                  'Moral broadness considered serious by the school authorities.',
                  'Indifference to the school activities.',
                  'Habituate idleness and disobedience.',
                  'Constant weakness in studies.',
                  'Failing twice times in the same class.',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed font-light">{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ACTIVITIES ══ */}
      <section id="activities" className="py-16 md:py-24" style={{ background: '#fafaf8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: '#c0392b' }}>Curriculum</p>
            <h2 className="serif text-3xl md:text-4xl font-normal leading-[1.08]" style={{ color: '#111' }}>
              Activities
            </h2>
            <div className="w-8 h-0.5 mt-3" style={{ background: '#c0392b' }} />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#111' }}>Pupil's Election / Investiture Ceremony</h3>
              <p className="text-sm leading-relaxed font-light mb-4" style={{ color: '#777' }}>
                Elections are held to elect head members of student's council. Prefects, Deputy Prefects, House captains, Vice captains, Cultural secretaries are elected in the spirit of democracy.
                This inculcates the prudential and moral aspects of democracy in students. Investiture ceremony is held for the announcement of election results and the representatives are announced.
              </p>
              <div className="rounded-lg px-5 py-4 text-center text-sm italic" style={{ background: '#f2f2f0', color: '#666' }}>
                "A leader is the one who knows the way, goes the way and shows the way" - John C. Maxwell
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#111' }}>Student leaders elected are expected to possess the following qualities.</h3>
              <ul className="space-y-2" style={{ color: '#777' }}>
                {[
                  'Should be regular and punctual in duties.',
                  'Should be observant, alert and act promptly as per the needs of the school.',
                  'Should ensure the fellow leaders carry out their duties and responsibilities well.',
                  'Should command the school into discipline.',
                  'Should show loyalty, exemplary behaviour and sound moral value in the school and outside the school.',
                  'Should not be dictatorial in leading and helping the fellow students.',
                  'Elected leaders take oath in grand investiture ceremony and are prepared to lead the student council.',
                ].map((item, idx) => (
                  <li key={idx} className="text-sm leading-relaxed font-light">
                    <span className="font-semibold" style={{ color: '#c0392b' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#111' }}>Graduation day</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
                Every year the graduation day is held for the K3, Grade 10 and Grade 12 students. This fosters the students with confidence as the important milestones are reached and the next grade to set their goals in the journey of life.
                Parents are invited to witness their wards being honoured on this occasion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#111' }}>Other Activities / Days observed in Future School</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
                Ramzan Celebration, Independence day, Onam, Raksha bandhan, Krishna Jayanthi, Teachers day, Ganesh Chaturthi, Moharam, Diwali Celebration, Children's day, Sports day, Annual day, etc are some of the activities / events conducted in Future School to bring out the various talents skills of our students.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#111' }}>The House System</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>
                Students are assigned to four houses in the school with the objective - foster the sense of collective responsibility and solidarity at the same time to arouse and develop the social qualities latent in every child.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Ruby House',
                  desc: "Red colour is associated with Power, Energy, Love, Vigour, Action along with determination and the will to achieve what one's want. It is the key to happiness and success in life.",
                },
                {
                  title: 'Topaz House',
                  desc: 'Yellow is a joyous colour reminding us of the Sun. It brings out wisdom and understanding and represents spiritual perfection. It makes the world a brighter place to live in and is the symbol of power.',
                },
                {
                  title: 'Sapphire House',
                  desc: 'Blue colour is the colour of heavenly consciousness, truth, harmony and hope. It reminds us of our higher aspirations.',
                },
                {
                  title: 'Emerald House',
                  desc: "Green colour is nature's colour which signifies prosperity and new life. It is soothing, peace giving and healing to the mind.",
                },
              ].map((house) => (
                <div key={house.title} className="grid md:grid-cols-[1fr_220px] gap-4 items-start rounded-lg p-4" style={{ background: '#fff', border: '1px solid #e5e5e0' }}>
                  <div>
                    <h4 className="text-base font-semibold mb-2" style={{ color: '#111' }}>{house.title}</h4>
                    <p className="text-sm leading-relaxed font-light" style={{ color: '#777' }}>{house.desc}</p>
                  </div>
                  <div
                    className="h-28 md:h-32 rounded-md flex items-center justify-center text-xs font-semibold uppercase tracking-wider"
                    style={{ border: '2px dashed #d4d4d0', color: '#999', background: '#fafaf8' }}
                  >
                    Add image here
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRANSPORTATION ══ */}
      <section id="transportation" className="py-16 md:py-24" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-3" style={{ color: '#c0392b' }}>Curriculum</p>
            <h2 className="serif text-3xl md:text-4xl font-normal leading-[1.08]" style={{ color: '#111' }}>
              Transportation
            </h2>
            <div className="w-8 h-0.5 mt-3" style={{ background: '#c0392b' }} />
          </div>

          <div className="space-y-4 text-sm leading-relaxed font-light" style={{ color: '#777' }}>
            <p>
              The need for safe passage of each child to school and back to home is of paramount importance to us. To ensure safe travel, the school has
              its own fleet of outsourced school buses designed as per standards and manned by trained drivers. For supervision and monitoring a transport
              attendant is on board throughout the journey.
            </p>
            <p>
              The transport service (optional) is operated by the school and a separate transport fee is charged. Mobile phones have been provided in each
              bus that ensures efficiency in terms of service and better communication in case of emergencies. Besides ensuring the implementation of the
              safety norms, all staff on the bus is well trained in first aid and emergency management.
            </p>
            <p>
              Transport service is an optional service facilitated and outsourced by the school for the convenience of the students. The school bus facility
              available to the student cannot be expected or demanded as a matter of right.
            </p>
            <p>
              School transport is provided for the following areas according to the different route buses.
            </p>
          </div>

          <div
            className="mt-6 rounded-lg flex items-center justify-center text-xs font-semibold uppercase tracking-wider"
            style={{ border: '2px dashed #d4d4d0', color: '#999', background: '#fafaf8', height: '320px' }}
          >
            Add transportation bus image here
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#111' }}>ROUTE NO : 1</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#777' }}>
                {[
                  'AMBUR OAT THEATRE',
                  'KADHARPET',
                  'TAW SCHOOL',
                  'VATHIMANAI',
                  'KRISHNAPURAM',
                ].map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#111' }}>ROUTE NO : 2</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#777' }}>
                {[
                  'NEW TOWN - VANIYAMBADI',
                  'VALAYAMBATTU',
                  'CHINNAPALLIKUPPAM',
                  'PAPANAPALLI',
                  'MARAPATTU',
                  'SENGLIKUPPAM',
                  'MINNUR',
                  'VENKATANGALAM',
                  'IYANOOR',
                  'ALANGKUPPAM',
                ].map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#111' }}>ROUTE NO : 3</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#777' }}>
                {[
                  'PERNAMBUT',
                  'OOMERABAD',
                  'PANANGATTUR',
                  'MAACHAMBATTU',
                  'GADAMBUR',
                  'CHINNAVIRABAM',
                  'THUTHIPET',
                  'AMBUR',
                ].map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#111' }}>ROUTE NO : 4</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#777' }}>
                {[
                  'OPP TO RAILWAY STATION',
                  'AKAREM ROAD',
                  'REGISTER OFFICE',
                  'KASPA - A',
                  'KASPA - B',
                  'AMBUR LOCAL',
                ].map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#111' }}>ROUTE NO : 5</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#777' }}>
                {[
                  'MADHANUR',
                  'SUGAR MILL',
                  'VADAPUDUPET',
                  'GOVINDAPURAM',
                  'OAT THEATRE',
                  'BETHELEHEM',
                  'SANDRORKUPPAM',
                ].map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg p-5" style={{ background: '#fafaf8', border: '1px solid #e5e5e0' }}>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#111' }}>ROUTE NO : 6</h3>
              <ul className="space-y-1 text-sm" style={{ color: '#777' }}>
                {[
                  'FLOWER BAZZAR',
                  'SIYAJI THEATRE',
                  'LIGHT HOUSE',
                  'OM SAKTHI TEMPLE',
                  'KAFEEL HOSPITAL',
                  'KADHARPET',
                  'TEACHERS COLONY',
                  'PERIYAPETAI',
                ].map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="py-16 md:py-20" style={{ background: '#111', color: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif text-3xl md:text-4xl font-normal mb-4" style={{ color: '#fff' }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-sm leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Contact our admissions team today to learn more about our programs and schedule your campus visit.
          </p>
          <a
            href="tel:+919962826465"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-lg transition-all duration-200 hover:shadow-lg text-sm"
            style={{ background: '#c0392b', color: '#fff' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  )
}

export default Admissions
