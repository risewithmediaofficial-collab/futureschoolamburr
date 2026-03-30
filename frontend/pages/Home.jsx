import Hero from '../components/Hero'
import Welcome from '../components/sections/Welcome'
import ProgrammesBand from '../components/sections/ProgrammesBand'
import StatsBand from '../components/sections/StatsBand'
import WhyChooseUs from '../components/WhyChooseUs'
import VideosSection from '../components/sections/VideosSection'
import Management from '../components/sections/Management'
import SchoolComrades from '../components/sections/SchoolComrades'
import AdmissionsCTA from '../components/sections/AdmissionsCTA'
import JoinBanner from '../components/sections/JoinBanner'
import InstagramBand from '../components/sections/InstagramBand'

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-[#fafaf8]">
      <Hero />
      <Welcome />
      <ProgrammesBand />
      <StatsBand />
      <WhyChooseUs />
      <VideosSection />
      <Management />
      <SchoolComrades />
      <AdmissionsCTA />
      <JoinBanner />
      <InstagramBand />
    </main>
  )
}

export default Home
