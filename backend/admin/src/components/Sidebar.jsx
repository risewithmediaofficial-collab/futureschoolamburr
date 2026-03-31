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
        className={`fixed md:relative w-64 h-screen bg-gray-900 text-white transition-all duration-300 ${
          isOpen ? 'left-0' : '-left-64 md:left-0'
        } md:translate-x-0 z-40`}
      >
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-red-500">Future School</h1>
          <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 transition ${
                  isActive(item.path)
                    ? 'bg-red-600 border-r-4 border-red-400'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="border-t border-gray-700 p-4">
          <div className="mb-4">
            <p className="text-sm text-gray-400">Logged in as:</p>
            <p className="text-white font-medium text-sm truncate">{admin?.name}</p>
            <p className="text-xs text-gray-500 capitalize">{admin?.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-sm"
          >
            <LogOut size={16} />
            Logout
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
