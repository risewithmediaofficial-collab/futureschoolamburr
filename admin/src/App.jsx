import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { useAuth } from './context/AuthContext.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import News from './pages/News.jsx'
import Gallery from './pages/Gallery.jsx'
import Staff from './pages/Staff.jsx'
import Applications from './pages/Applications.jsx'
import Settings from './pages/Settings.jsx'

function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-primary)' }}>
      <Sidebar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </div>
    </div>
  )
}

function LoginEntry() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginEntry />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/admin" element={<Navigate to="/" replace />} />
          <Route path="/admin/login" element={<Navigate to="/" replace />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/news"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <News />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Gallery />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/staff"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Staff />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Applications />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Settings />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
