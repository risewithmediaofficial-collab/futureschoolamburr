import Hero from '../components/Hero'
import Welcome from '../components/sections/Welcome'
import ProgrammesBand from '../components/sections/ProgrammesBand'
import StatsBand from '../components/sections/StatsBand'
import WhyChooseUs from '../components/WhyChooseUs'
import VideosSection from '../components/sections/VideosSection'
import Management from '../components/sections/Management'
import SchoolComrades from '../components/sections/SchoolComrades'
import EventsGrid from '../components/sections/EventsGrid'
import AdmissionsCTA from '../components/sections/AdmissionsCTA'
import JoinBanner from '../components/sections/JoinBanner'
import Testimonials from '../components/sections/Testimonials'
import InstagramBand from '../components/sections/InstagramBand'

const Home = () => {
  return (
    <main style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: '#fafaf8' }} className="overflow-x-hidden">
      <Hero />
      <Welcome />
      <ProgrammesBand />
      <StatsBand />
      <WhyChooseUs />
      <VideosSection />
      <Management />
      <SchoolComrades />
      <EventsGrid />
      <AdmissionsCTA />
      <JoinBanner />
      <Testimonials />
      <InstagramBand />
    </main>
  )
}

export default Home
