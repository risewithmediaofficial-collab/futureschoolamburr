import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { Mail, Lock, Loader } from 'lucide-react'

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await login(formData.email, formData.password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '32px 32px' }} />
      
      <div className="w-full max-w-[440px] relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-10 md:p-12 border border-white">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-8">
               <img src="/admin/logo.png" alt="Future School" className="h-20 w-auto" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">Admin Console</h1>
            <p className="text-slate-400 text-sm font-medium">Please enter your credentials to manage school portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400 ml-1">Email ID</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-red-600 transition-colors" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-semibold focus:bg-white"
                  placeholder="admin@futureschool.edu"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-red-600 transition-colors" />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 text-sm font-semibold focus:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-100/50 text-red-600 text-xs font-bold animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4.5 bg-red-600 text-white rounded-2xl font-extrabold text-sm uppercase tracking-widest shadow-xl shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/30 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                'Sign In Now'
              )}
            </button>
          </form>
        </div>
        
        <p className="text-center mt-10 text-slate-400 text-xs font-semibold uppercase tracking-widest">
           Future Senior Secondary School © 2026
        </p>
      </div>
    </div>
  )
}

export default Login
