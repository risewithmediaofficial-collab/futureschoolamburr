import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const MOBILE_BREAKPOINT = 1024

const icons = {
  dashboard: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  news: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>,
  gallery: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>,
  staff: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  applications: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  settings: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  logout: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  close: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
}

export const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { admin, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false))

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!isMobile) setIsOpen(false)
  }, [isMobile])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobile) return undefined
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobile, isOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const menuItems = useMemo(() => ([
    { name: 'Dashboard', path: '/admin/dashboard', icon: icons.dashboard },
    { name: 'News', path: '/admin/news', icon: icons.news },
    { name: 'Gallery', path: '/admin/gallery', icon: icons.gallery },
    { name: 'Staff', path: '/admin/staff', icon: icons.staff },
    { name: 'Applications', path: '/admin/applications', icon: icons.applications },
    ...(admin?.role === 'super-admin' ? [{ name: 'Settings', path: '/admin/settings', icon: icons.settings }] : [])
  ]), [admin?.role])

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const initials = admin?.name
    ? admin.name.split(' ').map((word) => word[0]).join('').toUpperCase().slice(0, 2)
    : 'A'

  const sidebarContent = (
    <div
      style={{
        width: isMobile ? 'min(86vw, 320px)' : '260px',
        height: '100dvh',
        background: '#ffffff',
        borderRight: '1px solid rgba(15, 23, 42, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isMobile ? '0 16px 40px rgba(15, 23, 42, 0.25)' : 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(224,32,32,0.35), transparent)'
        }}
      />

      <div
        style={{
          padding: isMobile ? '22px 16px 16px' : '28px 24px 20px',
          borderBottom: '1px solid var(--border)',
          paddingTop: isMobile ? 'max(22px, env(safe-area-inset-top, 0px))' : '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <img src="/admin/logo.png" alt="Future School" style={{ height: isMobile ? '36px' : '40px', width: 'auto' }} />
          </div>
          {isMobile && (
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                border: '1px solid var(--border)',
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: '#ffffff',
                color: 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                cursor: 'pointer',
              }}
              aria-label="Close sidebar"
            >
              {icons.close}
            </button>
          )}
        </div>
      </div>

      <nav style={{ flex: 1, padding: '14px 12px', overflowY: 'auto' }}>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', padding: '0 12px', marginBottom: '8px' }}>
          Navigation
        </p>
        {menuItems.map((item) => {
          const active = isActive(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: isMobile ? '13px 14px' : '11px 14px',
                borderRadius: '12px',
                marginBottom: '4px',
                textDecoration: 'none',
                fontWeight: active ? 700 : 600,
                fontSize: '15px',
                letterSpacing: '0.01em',
                transition: 'all 0.15s ease',
                color: active ? '#ffffff' : 'var(--text-secondary)',
                background: active ? 'linear-gradient(135deg, #e02020 0%, #c81a1a 100%)' : 'transparent',
                boxShadow: active ? '0 6px 20px rgba(224,32,32,0.28)' : 'none',
              }}
              onMouseEnter={(event) => {
                if (active || isMobile) return
                event.currentTarget.style.background = 'var(--bg-hover)'
                event.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(event) => {
                if (active || isMobile) return
                event.currentTarget.style.background = 'transparent'
                event.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              <span style={{ opacity: active ? 1 : 0.75, display: 'flex' }}>{item.icon}</span>
              <span>{item.name}</span>
              {active && (
                <span
                  style={{
                    marginLeft: 'auto',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#ffffff'
                  }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: '14px 14px 16px', borderTop: '1px solid var(--border)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            borderRadius: '12px',
            background: 'var(--bg-hover)',
            marginBottom: '10px'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e02020, #8b0000)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 800,
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(224,32,32,0.2)'
            }}
          >
            {initials}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {admin?.name || 'Admin'}
            </p>
            <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '1px', textTransform: 'capitalize' }}>
              {admin?.role || 'admin'}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '11px',
            borderRadius: '11px',
            border: '1px solid var(--border)',
            background: '#ffffff',
            color: 'var(--text-secondary)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(event) => {
            if (isMobile) return
            event.currentTarget.style.background = 'rgba(224,32,32,0.08)'
            event.currentTarget.style.borderColor = 'rgba(224,32,32,0.25)'
            event.currentTarget.style.color = '#e02020'
          }}
          onMouseLeave={(event) => {
            if (isMobile) return
            event.currentTarget.style.background = '#ffffff'
            event.currentTarget.style.borderColor = 'var(--border)'
            event.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          {icons.logout}
          Sign Out
        </button>
      </div>
    </div>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'none',
          position: 'fixed',
          top: 'max(12px, env(safe-area-inset-top, 0px))',
          left: '12px',
          zIndex: 70,
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          background: '#ffffff',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(15, 23, 42, 0.14)',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className={`mobile-menu-btn ${isOpen ? 'hidden-while-open' : ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? icons.close : icons.menu}
      </button>

      <div className="sidebar-desktop">
        {sidebarContent}
      </div>

      {isMobile && isOpen && (
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.45)',
              zIndex: 60,
              backdropFilter: 'blur(2px)'
            }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div style={{ position: 'fixed', left: 0, top: 0, zIndex: 65 }}>
            {sidebarContent}
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .mobile-menu-btn { display: inline-flex !important; }
          .mobile-menu-btn.hidden-while-open { display: none !important; }
          .sidebar-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
