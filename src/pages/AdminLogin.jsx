import { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { adminApi, adminStorage } from '../lib/adminApi'
import { ShieldAlert, LogIn, Mail, Lock, Loader2, Home } from 'lucide-react'
import { Reveal } from '../utils/reveal'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (adminStorage.getToken()) {
    return <Navigate to="/admin" replace />
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setSubmitting(true)
      setError('')
      const data = await adminApi.login(form)
      adminStorage.setSession(data)
      navigate('/admin', { replace: true })
    } catch (loginError) {
      setError(loginError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Background Decor */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} />
      
      <Reveal>
        <div className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl relative z-10">
          {/* Accent Header */}
          <div className="bg-red-600 p-8 text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
             <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                   <ShieldAlert className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-black tracking-tight">Admin Console</h1>
                <p className="text-red-100 text-sm font-medium mt-1">Future Senior Secondary School</p>
             </div>
          </div>

          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all text-sm font-medium"
                    placeholder="admin@school.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-1">Access Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                  <input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 outline-none focus:border-red-600 transition-all text-sm font-medium"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                   <ShieldAlert className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                   <p className="text-xs font-bold text-red-600 leading-relaxed">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 disabled:opacity-70 shadow-lg shadow-red-600/20 transition-all active:scale-[0.98]"
              >
                {submitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Open Dashboard
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                 <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-600 text-xs font-bold transition-colors">
                    <Home className="w-3.5 h-3.5" /> Back to Website
                 </Link>
              </div>

            </form>
          </div>
        </div>
      </Reveal>
    </main>
  )
}
