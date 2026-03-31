import { useEffect, useState } from 'react'
import { Newspaper, Image, Users, FileText, Loader } from 'lucide-react'
import apiClient from '../utils/api.js'

export const Dashboard = () => {
  const [stats, setStats] = useState({
    newsCount: 0,
    galleryCount: 0,
    staffCount: 0,
    applicationsCount: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
  }, [])

  const statCards = [
    { title: 'News Posts', count: stats.newsCount, icon: Newspaper, color: 'bg-blue-500' },
    { title: 'Gallery Images', count: stats.galleryCount, icon: Image, color: 'bg-green-500' },
    { title: 'Staff Members', count: stats.staffCount, icon: Users, color: 'bg-purple-500' },
    { title: 'Applications', count: stats.applicationsCount, icon: FileText, color: 'bg-orange-500' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-64 grayscale opacity-30">
          <Loader className="w-10 h-10 animate-spin text-red-600 mb-4" />
          <p className="text-xs font-bold uppercase tracking-[0.2em]">Synchronizing Data...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">{card.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">{card.count}</p>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome Account</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Welcome to the Future School Admin Dashboard. This is your central hub for managing all content,
            applications, and staff information. Use the sidebar to navigate between different sections.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Management Shortcuts</h2>
          <ul className="space-y-3 text-gray-500 text-sm font-medium">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Create and publish news articles</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Upload and manage gallery images</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Add and manage staff profiles</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Review and respond to applications</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
