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
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-red-600 text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative w-72 h-screen bg-white border-r border-gray-100 transition-all duration-300 ${
          isOpen ? 'left-0' : '-left-72 md:left-0'
        } md:translate-x-0 z-40 flex flex-col shadow-sm`}
      >
        <div className="p-8 flex flex-col items-start">
          <div className="mb-2">
             <img src="/admin/logo.png" alt="Future School" className="h-16 w-auto" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-red-600">Admin Panel</p>
            <h1 className="text-xl font-bold text-[#0f172a]">Future School</h1>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-200 group ${
                  active
                    ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-red-600'
                }`}
              >
                <Icon size={22} className={`${active ? 'text-white' : 'text-gray-400 group-hover:text-red-600'} transition-colors`} />
                <span className="font-bold text-sm tracking-wide">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="p-6 border-t border-gray-50 bg-gray-50/50">
          <div className="mb-4 px-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Current User</p>
            <p className="text-gray-900 font-bold text-sm truncate">{admin?.name}</p>
            <p className="text-[10px] text-gray-500 font-medium capitalize">{admin?.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-white border border-gray-200 text-gray-700 hover:text-red-600 hover:border-red-100 hover:bg-red-50 rounded-xl transition-all duration-200 font-bold text-xs shadow-sm"
          >
            <LogOut size={16} />
            LOGOUT SYSTEM
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
