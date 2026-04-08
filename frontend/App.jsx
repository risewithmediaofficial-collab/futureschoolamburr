import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Breadcrumb from './components/Breadcrumb'

/* ─── PAGE LOADER COMPONENT ─── */
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-[#c0392b] rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
)

/* ─── LAZY LOADED PAGES ─── */
// Main Pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Programs = lazy(() => import('./pages/Programs'))
const Admissions = lazy(() => import('./pages/Admissions'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const ApplyAdmission = lazy(() => import('./pages/ApplyAdmission'))
const MissionVision = lazy(() => import('./pages/MissionVision'))
const ChairmanDesk = lazy(() => import('./pages/ChairmanDesk'))
const PrincipalDesk = lazy(() => import('./pages/PrincipalDesk'))
const Instructors = lazy(() => import('./pages/Instructors'))
const Affiliations = lazy(() => import('./pages/Affiliations'))
const Kindergarten = lazy(() => import('./pages/Kindergarten'))
const PrimaryLevel = lazy(() => import('./pages/PrimaryLevel'))
const SecondaryLevel = lazy(() => import('./pages/SecondaryLevel'))
const SeniorSecondaryLevel = lazy(() => import('./pages/SeniorSecondaryLevel'))
const TeachingMethodology = lazy(() => import('./pages/TeachingMethodology'))
const SocialInitiatives = lazy(() => import('./pages/SocialInitiatives'))
const Timings = lazy(() => import('./pages/Timings'))
const Activities = lazy(() => import('./pages/Activities'))
const Transportation = lazy(() => import('./pages/Transportation'))

// Admin Pages
const AdminLogin = lazy(() => import('./pages/admin/Login').then(m => ({ default: m.Login })))
const Dashboard = lazy(() => import('./pages/admin/Dashboard'))
const News = lazy(() => import('./pages/admin/News'))
const Staff = lazy(() => import('./pages/admin/Staff'))
const AdminGallery = lazy(() => import('./pages/admin/Gallery'))
const Applications = lazy(() => import('./pages/admin/Applications'))
const Settings = lazy(() => import('./pages/admin/Settings'))
const Sidebar = lazy(() => import('./components/admin/Sidebar').then(m => ({ default: m.Sidebar })))

// 🛡️ Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  if (loading) return <PageLoader />
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />
}

// 🏢 Admin Layout component
function AdminLayout({ children }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <div style={{ display: 'flex', height: '100vh', background: '#f8fafc' }}>
        <Sidebar />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </Suspense>
  )
}

function AppLayout() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <Breadcrumb />}
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
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

            {/* 🔐 Admin Portal Routes (Integrated) */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            
            <Route path="/admin/dashboard" element={<ProtectedRoute><AdminLayout><Dashboard /></AdminLayout></ProtectedRoute>} />
            <Route path="/admin/news" element={<ProtectedRoute><AdminLayout><News /></AdminLayout></ProtectedRoute>} />
            <Route path="/admin/gallery" element={<ProtectedRoute><AdminLayout><AdminGallery /></AdminLayout></ProtectedRoute>} />
            <Route path="/admin/staff" element={<ProtectedRoute><AdminLayout><Staff /></AdminLayout></ProtectedRoute>} />
            <Route path="/admin/applications" element={<ProtectedRoute><AdminLayout><Applications /></AdminLayout></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute><AdminLayout><Settings /></AdminLayout></ProtectedRoute>} />
          </Routes>
        </Suspense>
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
