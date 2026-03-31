import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ApplyAdmission from './pages/ApplyAdmission'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

// Dropdown subpages
import MissionVision from './pages/MissionVision'
import ChairmanDesk from './pages/ChairmanDesk'
import PrincipalDesk from './pages/PrincipalDesk'
import Instructors from './pages/Instructors'
import Affiliations from './pages/Affiliations'

import Kindergarten from './pages/Kindergarten'
import PrimaryLevel from './pages/PrimaryLevel'
import SecondaryLevel from './pages/SecondaryLevel'
import SeniorSecondaryLevel from './pages/SeniorSecondaryLevel'
import TeachingMethodology from './pages/TeachingMethodology'
import SocialInitiatives from './pages/SocialInitiatives'

import Timings from './pages/Timings'
import Activities from './pages/Activities'
import Transportation from './pages/Transportation'

function AppLayout() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isAdminRoute && <Header />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyAdmission />} />
          
          {/* Subpages Routes */}
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/chairman-desk" element={<ChairmanDesk />} />
          <Route path="/principal-desk" element={<PrincipalDesk />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/affiliations" element={<Affiliations />} />

          <Route path="/kindergarten" element={<Kindergarten />} />
          <Route path="/primary-level" element={<PrimaryLevel />} />
          <Route path="/secondary-level" element={<SecondaryLevel />} />
          <Route path="/senior-secondary" element={<SeniorSecondaryLevel />} />
          <Route path="/teaching-methodology" element={<TeachingMethodology />} />
          <Route path="/social-initiatives" element={<SocialInitiatives />} />

          <Route path="/timings" element={<Timings />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/transportation" element={<Transportation />} />
          
          <Route path="/transportation" element={<Transportation />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  )
}

export default App
