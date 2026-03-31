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
    <div className="p-8 md:p-12 max-w-[1600px] mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Overview</h1>
           <p className="text-slate-400 font-medium text-sm mt-1">Snapshot of your school's digital operations</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="px-5 py-2 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-widest">Database Linked</span>
           </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-96 grayscale opacity-30">
          <Loader className="w-10 h-10 animate-spin text-red-600 mb-4" />
          <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Synchronizing Data...</p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => {
              const Icon = card.icon
              return (
                <div key={index} className="group bg-white rounded-[2rem] p-8 border border-white shadow-2xl shadow-slate-200/40 hover:shadow-red-600/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${card.color.replace('bg-', 'bg-')}`} />
                  
                  <div className={`${card.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${card.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-slate-400 text-xs font-extrabold uppercase tracking-widest mb-1">{card.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-black text-slate-900 tracking-tight">{card.count}</p>
                    <span className="text-[10px] font-bold text-slate-300">Records</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Detailed Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-red-600 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-6">Hello Administrator</span>
                <h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-tight">Welcome to the <br />Future School <span className="text-red-500">Hub.</span></h2>
                <p className="text-slate-400 text-base font-medium leading-relaxed max-w-md">
                  Everything you need to manage your institution's digital presence is right here. From publishing news to approving student applications.
                </p>
                <div className="mt-10 flex gap-4">
                   <div className="p-1 px-4 bg-white/5 border border-white/10 rounded-2xl">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Server Status</span>
                      <p className="text-sm font-bold text-white">99.9% Uptime</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/40">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-8">Management Shortcuts</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Post Update', icon: Newspaper, color: 'text-blue-500' },
                  { label: 'Add Image', icon: Image, color: 'text-green-500' },
                  { label: 'Enrol Staff', icon: Users, color: 'text-purple-500' },
                  { label: 'System Check', icon: FileText, color: 'text-orange-500' }
                ].map((action, i) => (
                  <button key={i} className="flex flex-col items-start p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-red-100 hover:shadow-xl hover:shadow-red-600/5 transition-all group">
                    <action.icon className={`${action.color} mb-4 group-hover:scale-110 transition-transform`} size={20} />
                    <span className="text-[13px] font-extrabold text-slate-700">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
