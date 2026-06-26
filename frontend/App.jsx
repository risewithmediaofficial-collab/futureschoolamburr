import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Main Website Pages
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ApplyAdmission from './pages/ApplyAdmission'
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
import MandatoryDisclosure from './pages/MandatoryDisclosure'
import Events from './pages/Events'
import InvestitureCeremony2025 from './pages/InvestitureCeremony2025'

// Admin Pages
import { Login as AdminLogin } from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import News from './pages/admin/News'
import Staff from './pages/admin/Staff'
import AdminGallery from './pages/admin/Gallery'
import Applications from './pages/admin/Applications'
import Settings from './pages/admin/Settings'
import { Sidebar } from './components/admin/Sidebar'

// 🛡️ Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  if (loading) return null
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />
}

// 🏢 Admin Layout component
function AdminLayout({ children }) {
  return (
    <div className="admin-shell" style={{ display: 'flex', height: '100dvh', minHeight: '100dvh', background: 'var(--bg-primary)' }}>
      <Sidebar />
      <div className="admin-content-area" style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  )
}

function AppLayout() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  useEffect(() => {
    document.body.classList.toggle('admin-route', isAdminRoute)
    return () => document.body.classList.remove('admin-route')
  }, [isAdminRoute])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isAdminRoute && <Header />}
      <div className="flex-grow">
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyAdmission />} />
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
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/investiture-ceremony-2025" element={<InvestitureCeremony2025 />} />

          {/* 🔐 Admin Portal Routes (Integrated) */}
          <Route path="/dashboard" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminLayout><Dashboard /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/news" element={<ProtectedRoute><AdminLayout><News /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/gallery" element={<ProtectedRoute><AdminLayout><AdminGallery /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/staff" element={<ProtectedRoute><AdminLayout><Staff /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/applications" element={<ProtectedRoute><AdminLayout><Applications /></AdminLayout></ProtectedRoute>} />
          <Route path="/admin/settings" element={<ProtectedRoute><AdminLayout><Settings /></AdminLayout></ProtectedRoute>} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </AuthProvider>
  )
}

export default App
