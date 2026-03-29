import { useEffect, useState } from 'react'
import { Newspaper, Image, Users, FileText } from 'lucide-react'
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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p>Loading statistics...</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-gray-600 text-sm font-medium">{card.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">{card.count}</p>
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Welcome!</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to the Future School Admin Dashboard. This is your central hub for managing all content,
            applications, and staff information. Use the sidebar to navigate between different sections.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Create and publish news articles</li>
            <li>• Upload and manage gallery images</li>
            <li>• Add and manage staff profiles</li>
            <li>• Review and respond to applications</li>
            <li>• Update school settings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
