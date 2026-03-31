import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

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
      setError(err.message || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#e8f0fe',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '340px',
        background: '#f1f7fe',
        overflow: 'hidden',
        borderRadius: '16px',
        color: '#010101',
        boxShadow: '0 8px 40px rgba(0,102,255,0.10)'
      }}>
        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: '32px 24px 24px',
          gap: '16px',
          textAlign: 'center'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4px' }}>
            <img src="/admin/logo.png" alt="Future School" style={{ height: '64px', width: 'auto' }} />
          </div>

          <span style={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: 1.2 }}>
            Admin Portal
          </span>
          <span style={{ fontSize: '0.95rem', color: '#666', marginTop: '-8px' }}>
            Sign in to the school control panel.
          </span>

          {/* Inputs box */}
          <div style={{
            overflow: 'hidden',
            borderRadius: '8px',
            backgroundColor: '#fff',
            margin: '0.5rem 0',
            width: '100%'
          }}>
            {/* Email */}
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              autoComplete="email"
              style={{
                background: 'none',
                border: 0,
                outline: 0,
                height: '44px',
                width: '100%',
                borderBottom: '1px solid #eee',
                fontSize: '0.9rem',
                padding: '8px 15px',
                fontFamily: 'inherit',
                color: '#010101',
                display: 'block'
              }}
            />
            {/* Password */}
            <div style={{ position: 'relative' }}>
              <input
                name="password"
                type={showPass ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                autoComplete="current-password"
                style={{
                  background: 'none',
                  border: 0,
                  outline: 0,
                  height: '44px',
                  width: '100%',
                  fontSize: '0.9rem',
                  padding: '8px 40px 8px 15px',
                  fontFamily: 'inherit',
                  color: '#010101',
                  display: 'block'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#999', padding: 0, display: 'flex', alignItems: 'center'
                }}
              >
                {showPass ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: '#fff0f0',
              border: '1px solid #ffc0c0',
              borderRadius: '8px',
              padding: '10px 14px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '-8px'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cc3333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span style={{ color: '#cc3333', fontSize: '12px', fontWeight: 600 }}>{error}</span>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? '#f80909ff' : '#ff0000ff',
              color: '#fff',
              border: 0,
              borderRadius: '24px',
              padding: '11px 16px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color .3s ease',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = '#e60000ff' }}
            onMouseLeave={e => { if (!loading) e.currentTarget.style.backgroundColor = '#ff0000ff' }}
          >
            {loading ? (
              <>
                <svg style={{ animation: 'spin 1s linear infinite' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                </svg>
                Signing in...
              </>
            ) : 'Sign in'}
          </button>
        </form>

        {/* Bottom section */}
        <div style={{
          padding: '14px 24px',
          fontSize: '0.85rem',
          backgroundColor: '#e0ecfb',
          boxShadow: 'rgba(0,0,0,0.08) 0 -1px',
          textAlign: 'center',
          color: '#555'
        }}>
          <p>Future Senior Secondary School — Ambur © 2026</p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  )
}

export default Login
