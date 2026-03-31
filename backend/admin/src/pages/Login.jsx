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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-white">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
               <img src="/admin/logo.png" alt="Future School" className="h-20 w-auto" />
            </div>
            <p className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-red-600 mb-1">Admin Portal</p>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">System Gateway</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email ID</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-red-600 transition-colors" size={18} />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-sm focus:bg-white outline-none focus:ring-4 focus:ring-red-50/50 focus:border-red-600 transition-all"
                  placeholder="admin@futureschool.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-red-600 transition-colors" size={18} />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-sm focus:bg-white outline-none focus:ring-4 focus:ring-red-50/50 focus:border-red-600 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-100 italic">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4.5 bg-red-600 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-red-700 shadow-xl shadow-red-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                'Sign In Secret Portal'
              )}
            </button>
          </form>
        </div>
        <p className="text-center mt-10 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Future Senior Secondary School © 2026</p>
      </div>
    </div>
  )
}

export default Login
