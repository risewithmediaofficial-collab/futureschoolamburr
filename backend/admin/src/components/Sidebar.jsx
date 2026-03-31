import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { Menu, X, LogOut, Home, Newspaper, Image, Users, FileText, Settings } from 'lucide-react'
import { useState } from 'react'

export const Sidebar = () => {
  const location = useLocation()
  const { admin, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Staff', path: '/staff', icon: Users },
    { name: 'Applications', path: '/applications', icon: FileText },
    ...(admin?.role === 'super-admin' ? [{ name: 'Settings', path: '/settings', icon: Settings }] : [])
  ]

  const isActive = (path) => location.pathname === path

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 left-6 z-[60] p-3 bg-white border border-slate-100 text-slate-600 rounded-2xl shadow-xl"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative w-80 h-screen bg-white border-r border-slate-100 transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } z-50 flex flex-col`}
      >
        {/* Brand Section */}
        <div className="p-10 pb-6 flex flex-col items-start border-b border-slate-50/50">
          <div className="mb-6">
             <img src="/admin/logo.png" alt="Future School" className="h-16 w-auto" />
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] font-extrabold tracking-[0.25em] uppercase text-red-600 mb-1 block">Management System</span>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Future School</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-2 custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-5 py-4 rounded-[1.25rem] transition-all duration-300 group ${
                  active
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10'
                    : 'text-slate-400 hover:bg-slate-50 hover:text-red-600'
                }`}
              >
                <Icon size={18} className={`${active ? 'text-white' : 'text-slate-300 group-hover:text-red-600'} transition-colors`} />
                <span className="font-extrabold text-[13px] tracking-wide">{item.name}</span>
                {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />}
              </Link>
            )
          })}
        </nav>

        {/* Profile & Action */}
        <div className="p-8 pt-4">
          <div className="bg-slate-50/80 rounded-3xl p-5 mb-4 border border-slate-100/50">
             <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-red-600 font-extrabold shadow-sm">
                   {admin?.name?.charAt(0) || 'A'}
                </div>
                <div className="flex-1 min-w-0">
                   <p className="text-[13px] font-extrabold text-slate-900 truncate tracking-tight">{admin?.name || 'Administrator'}</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{admin?.role || 'admin'}</p>
                </div>
             </div>
             <button
               onClick={handleLogout}
               className="w-full flex items-center justify-center gap-2.5 py-3 bg-white border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 rounded-2xl transition-all duration-300 font-extrabold text-[11px] uppercase tracking-wider shadow-sm"
             >
               <LogOut size={14} />
               Sign Out Portal
             </button>
          </div>
          <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">v2.0.4 Unified</p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm md:hidden z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
