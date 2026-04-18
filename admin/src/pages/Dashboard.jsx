import { useEffect, useState } from 'react'
import apiClient from '../utils/api.js'
import { useAuth } from '../context/AuthContext.jsx'

const StatCard = ({ title, count, icon, accent, delay }) => (
  <div
    className={`glass-card fade-in-${delay}`}
    style={{ padding: '24px', position: 'relative', overflow: 'hidden', cursor: 'default' }}
  >
    {/* Subtle top accent line */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: accent, opacity: 0.6 }} />
    {/* Glow */}
    <div style={{
      position: 'absolute', top: '-40px', right: '-40px',
      width: '120px', height: '120px',
      background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
      borderRadius: '50%', pointerEvents: 'none'
    }} />
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
      <div style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: `${accent}15`, border: `1px solid ${accent}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: accent
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--text-muted)',
        background: 'var(--bg-hover)', border: '1px solid var(--border)',
        padding: '3px 10px', borderRadius: '100px'
      }}>
        Total
      </div>
    </div>
    <p style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '6px' }}>
      {count}
    </p>
    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.02em' }}>
      {title}
    </p>
  </div>
)

export const Dashboard = () => {
  const { admin, token, loading: authLoading } = useAuth()
  const [stats, setStats] = useState({ newsCount: 0, galleryCount: 0, staffCount: 0, applicationsCount: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (authLoading) return
    if (!token) {
      setLoading(false)
      return
    }

    const fetchStats = async () => {
      try {
        const [newsRes, galleryRes, staffRes, applicationsRes] = await Promise.all([
          apiClient.get('/admin/news?limit=1'),
          apiClient.get('/admin/gallery?limit=1'),
          apiClient.get('/admin/staff?limit=1'),
          apiClient.get('/admin/applications?limit=1')
        ])
        setStats({
          newsCount: newsRes.pagination?.total || 0,
          galleryCount: galleryRes.pagination?.total || 0,
          staffCount: staffRes.pagination?.total || 0,
          applicationsCount: applicationsRes.pagination?.total || 0
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [token, authLoading])

  const statCards = [
    {
      title: 'News Articles', count: stats.newsCount, accent: '#3b82f6', delay: 1,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>
    },
    {
      title: 'Gallery Images', count: stats.galleryCount, accent: '#10b981', delay: 2,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    },
    {
      title: 'Staff Members', count: stats.staffCount, accent: '#8b5cf6', delay: 3,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      title: 'Applications', count: stats.applicationsCount, accent: '#f59e0b', delay: 4,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    }
  ]

  const quickLinks = [
    { label: 'Publish News', desc: 'Create and manage news articles', accent: '#3b82f6', path: '/news' },
    { label: 'Upload Photos', desc: 'Add images to the gallery', accent: '#10b981', path: '/gallery' },
    { label: 'Manage Staff', desc: 'Add or update staff profiles', accent: '#8b5cf6', path: '/staff' },
    { label: 'Applications', desc: 'Review student applications', accent: '#f59e0b', path: '/applications' },
  ]

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div style={{ padding: '32px', maxWidth: '1200px' }}>

      {/* Header */}
      <div className="fade-in" style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e02020', marginBottom: '6px' }}>
          {greeting}
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px', marginBottom: '6px' }}>
          {admin?.name || 'Administrator'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
          Here's what's happening at Future School today.
        </p>
      </div>

      {/* Stat Cards */}
      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} className="skeleton" style={{ height: '140px' }} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {statCards.map((card, i) => (
            <StatCard key={i} {...card} />
          ))}
        </div>
      )}

      {/* Quick actions */}
      <div className="fade-in" style={{ marginBottom: '12px' }}>
        <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px' }}>
          Quick Actions
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
          {quickLinks.map((item, i) => (
            <a
              key={i}
              href={`/admin${item.path}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '16px 18px', borderRadius: '12px',
                border: '1px solid var(--border)', background: 'var(--bg-card)',
                textDecoration: 'none', transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${item.accent}40`
                e.currentTarget.style.background = `${item.accent}08`
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: item.accent, flexShrink: 0,
                boxShadow: `0 0 8px ${item.accent}60`
              }} />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>{item.label}</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
              <svg style={{ marginLeft: 'auto', color: 'var(--text-muted)', flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          ))}
        </div>
      </div>

      {/* System info strip */}
      <div className="fade-in" style={{
        marginTop: '32px', padding: '16px 20px', borderRadius: '12px',
        border: '1px solid var(--border)', background: 'var(--bg-card)',
        display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b98180', animation: 'pulse-glow 2s infinite' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)' }}>System Online</span>
        </div>
        <div style={{ width: '1px', height: '16px', background: 'var(--border)' }} />
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Future Senior Secondary School — Ambur</span>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
