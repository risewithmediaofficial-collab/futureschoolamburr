import { useEffect, useMemo, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { adminApi, adminStorage } from '../lib/adminApi'
import { Reveal } from '../utils/reveal'
import { 
  Users, 
  Newspaper, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Plus, 
  RefreshCcw, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Eye, 
  ArrowRight, 
  Mail, 
  Phone, 
  Calendar,
  LayoutDashboard,
  Menu,
  X,
  Loader2,
  AlertCircle
} from 'lucide-react'

const tabs = [
  { id: 'applications', label: 'Applications', icon: <Users className="w-5 h-5" /> },
  { id: 'news', label: 'News Updates', icon: <Newspaper className="w-5 h-5" /> },
  { id: 'gallery', label: 'Gallery', icon: <ImageIcon className="w-5 h-5" /> },
  { id: 'staff', label: 'Staff Team', icon: <Users className="w-5 h-5" /> },
  { id: 'settings', label: 'Site Settings', icon: <Settings className="w-5 h-5" /> },
]

const emptyNews = { title: '', content: '', category: 'event', isPublished: true, image: null }
const emptyGallery = { title: '', category: 'events', description: '', image: null }
const emptyStaff = { name: '', position: 'Teacher', department: '', email: '', phone: '', bio: '', qualification: '', experience: '', image: null }

export default function AdminDashboard() {
  const token = adminStorage.getToken()
  const admin = adminStorage.getAdmin()
  const [activeTab, setActiveTab] = useState('applications')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [applications, setApplications] = useState([])
  const [news, setNews] = useState([])
  const [gallery, setGallery] = useState([])
  const [staff, setStaff] = useState([])
  const [settingsForm, setSettingsForm] = useState({})
  const [newsForm, setNewsForm] = useState(emptyNews)
  const [galleryForm, setGalleryForm] = useState(emptyGallery)
  const [staffForm, setStaffForm] = useState(emptyStaff)
  const [saving, setSaving] = useState(false)

  const canManageSettings = useMemo(() => admin?.role === 'super-admin', [admin])

  const loadData = async () => {
    try {
      setLoading(true)
      setError('')
      const [applicationsData, newsData, galleryData, staffData, settingsData] = await Promise.all([
        adminApi.getApplications(),
        adminApi.getNews(),
        adminApi.getGallery(),
        adminApi.getStaff(),
        canManageSettings ? adminApi.getSettings() : Promise.resolve({ settings: null }),
      ])

      setApplications(applicationsData.applications || [])
      setNews(newsData.news || [])
      setGallery(galleryData.gallery || [])
      setStaff(staffData.staff || [])
      setSettingsForm(settingsData.settings || {})
    } catch (loadError) {
      setError(loadError.message)
      if (/token|unauthorized|invalid/i.test(loadError.message)) adminStorage.clear()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) loadData()
  }, [token, canManageSettings])

  if (!token) return <Navigate to="/admin/login" replace />

  const logout = () => {
    adminStorage.clear()
    window.location.href = '/admin/login'
  }

  const handleApplicationStatus = async (id, status) => {
    try {
      await adminApi.updateApplicationStatus(id, { status })
      await loadData()
    } catch (statusError) {
      setError(statusError.message)
    }
  }

  const handleNewsSubmit = async (event) => {
    event.preventDefault()
    try {
      setSaving(true)
      const formData = new FormData()
      formData.append('title', newsForm.title)
      formData.append('content', newsForm.content)
      formData.append('category', newsForm.category)
      formData.append('isPublished', String(newsForm.isPublished))
      if (newsForm.image) formData.append('file', newsForm.image)
      await adminApi.createNews(formData)
      setNewsForm(emptyNews)
      event.target.reset()
      await loadData()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSaving(false)
    }
  }

  const handleGallerySubmit = async (event) => {
    event.preventDefault()
    try {
      setSaving(true)
      const formData = new FormData()
      formData.append('title', galleryForm.title)
      formData.append('category', galleryForm.category)
      formData.append('description', galleryForm.description)
      if (galleryForm.image) formData.append('file', galleryForm.image)
      await adminApi.createGallery(formData)
      setGalleryForm(emptyGallery)
      event.target.reset()
      await loadData()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSaving(false)
    }
  }

  const handleStaffSubmit = async (event) => {
    event.preventDefault()
    try {
      setSaving(true)
      const formData = new FormData()
      Object.entries(staffForm).forEach(([key, value]) => {
        if (!value) return
        formData.append(key === 'image' ? 'file' : key, value)
      })
      await adminApi.createStaff(formData)
      setStaffForm(emptyStaff)
      event.target.reset()
      await loadData()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSaving(false)
    }
  }

  const handleSettingsSubmit = async (event) => {
    event.preventDefault()
    try {
      setSaving(true)
      await adminApi.updateSettings(settingsForm)
      await loadData()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSaving(false)
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      
      {/* ══ MOBILE SIDEBAR OVERLAY ══ */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ══ SIDEBAR ══ */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-white border-r border-gray-100 z-50 lg:relative lg:translate-x-0 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="p-8 border-b border-gray-50 flex items-center justify-between">
            <div className="flex flex-col">
               <span className="text-[0.6rem] font-black uppercase tracking-widest text-red-600 mb-1">Admin Panel</span>
               <span className="text-xl font-black text-gray-900 leading-tight">Future School</span>
            </div>
            <button className="lg:hidden p-2 hover:bg-gray-50 rounded-lg" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all text-sm
                  ${activeTab === tab.id 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                    : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-6 border-t border-gray-50">
            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Authenticated as</p>
               <p className="text-sm font-black text-gray-900">{admin?.name || 'Administrator'}</p>
               <p className="text-[0.65rem] font-bold text-red-600 uppercase mt-0.5">{admin?.role || 'admin'}</p>
            </div>
            <button 
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* ══ MAIN CONTENT ══ */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-gray-50 rounded-xl" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-xl font-black text-gray-900 flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5 text-red-600" />
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={loadData}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-colors"
            >
              <RefreshCcw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Sync Data
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <Reveal>
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-700 text-sm font-bold">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 grayscale opacity-40">
                <Loader2 className="w-10 h-10 animate-spin text-red-600 mb-4" />
                <p className="font-bold uppercase tracking-widest text-xs">Synchronizing dashboard...</p>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto space-y-8">
                
                {/* ── APPLICATIONS VIEW ── */}
                {activeTab === 'applications' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-2">
                       <div>
                          <h2 className="text-2xl font-black text-gray-900">Manage Applications</h2>
                          <p className="text-gray-500 text-sm">Recently submitted inquiries and admission forms.</p>
                       </div>
                       <span className="px-3 py-1 bg-red-50 text-red-600 font-black text-xs rounded-full">{applications.length} Total</span>
                    </div>

                    <div className="grid gap-4">
                      {applications.length > 0 ? applications.map((item) => (
                        <div key={item._id} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:border-red-600/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                               <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-black">
                                 {item.studentName?.charAt(0) || item.candidateName?.charAt(0) || 'A'}
                               </div>
                               <div>
                                  <h4 className="font-bold text-gray-900">{item.studentName || item.candidateName || 'Unnamed Application'}</h4>
                                  <p className="text-[0.65rem] font-black uppercase text-red-600 tracking-widest">{item.status || 'pending'}</p>
                               </div>
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-gray-400">
                               <div className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> {item.email}</div>
                               <div className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> {item.phone}</div>
                               <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {item.createdAt ? formatDate(item.createdAt) : '--'}</div>
                            </div>
                            {item.message && (
                              <p className="mt-4 text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200/50 italic">
                                "{item.message}"
                              </p>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-2 md:flex-col lg:flex-row">
                             {['pending', 'reviewed', 'approved', 'rejected'].map((status) => (
                               <button
                                 key={status}
                                 onClick={() => handleApplicationStatus(item._id, status)}
                                 className={`
                                   px-4 py-2 rounded-xl text-[0.65rem] font-black uppercase tracking-widest transition-all
                                   ${item.status === status 
                                     ? 'bg-gray-900 text-white' 
                                     : 'bg-white border border-gray-200 text-gray-400 hover:border-red-600 hover:text-red-700'}
                                 `}
                               >
                                 {status}
                               </button>
                             ))}
                          </div>
                        </div>
                      )) : (
                        <div className="py-20 text-center border-2 border-dashed border-gray-200 rounded-3xl">
                           <Users className="w-10 h-10 text-gray-200 mx-auto mb-4" />
                           <p className="text-gray-400 font-bold text-sm tracking-wide">No pending applications</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── NEWS VIEW ── */}
                {activeTab === 'news' && (
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-6">
                       <h2 className="text-2xl font-black text-gray-900">Post Update</h2>
                       <form onSubmit={handleNewsSubmit} className="bg-white border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm">
                          <input 
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" 
                            placeholder="News Title" 
                            value={newsForm.title} 
                            onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} 
                            required 
                          />
                          <textarea 
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-medium text-sm min-h-[160px]" 
                            placeholder="News description and details..." 
                            value={newsForm.content} 
                            onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })} 
                            required 
                          />
                          <div className="grid grid-cols-2 gap-4">
                             <select className="px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-xs uppercase" value={newsForm.category} onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}>
                                <option value="event">Event</option>
                                <option value="announcement">Announcement</option>
                                <option value="achievement">Achievement</option>
                             </select>
                             <div className="relative group overflow-hidden bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">
                                <span className="text-[0.65rem] font-black text-gray-400 uppercase tracking-widest">{newsForm.image ? 'File Selected' : 'Cover Image'}</span>
                                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setNewsForm({ ...newsForm, image: e.target.files?.[0] || null })} />
                             </div>
                          </div>
                          <button 
                            type="submit" 
                            disabled={saving} 
                            className="w-full py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-600/20 hover:bg-red-700 disabled:opacity-50 transition-all"
                          >
                            {saving ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Publish News'}
                          </button>
                       </form>
                    </div>

                    <div className="space-y-6">
                       <h2 className="text-2xl font-black text-gray-900">Recently Published</h2>
                       <div className="space-y-4">
                          {news.length > 0 ? news.slice(0, 5).map(item => (
                            <div key={item._id} className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-center group shadow-sm transition-all hover:border-red-600/20">
                               <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                                  <img src={item.imageUrl} className="w-full h-full object-cover" alt="" />
                               </div>
                               <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-gray-900 truncate">{item.title}</h4>
                                  <p className="text-[0.65rem] font-black uppercase text-red-600 tracking-widest mt-0.5">{item.category}</p>
                               </div>
                               <button 
                                 onClick={() => adminApi.deleteNews(item._id).then(loadData)}
                                 className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                               >
                                  <Trash2 className="w-4 h-4" />
                               </button>
                            </div>
                          )) : <p className="text-gray-400 font-bold text-sm text-center py-10 italic">No news updates yet.</p>}
                       </div>
                    </div>
                  </div>
                )}

                {/* ── GALLERY VIEW ── */}
                {activeTab === 'gallery' && (
                  <div className="space-y-8">
                     <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
                        <div className="max-w-2xl">
                           <h2 className="text-2xl font-black text-gray-900 mb-2">Upload Moments</h2>
                           <p className="text-gray-500 text-sm mb-8">Add new photos to the public gallery sections.</p>
                           <form onSubmit={handleGallerySubmit} className="grid md:grid-cols-2 gap-4">
                              <input className="px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" placeholder="Title" value={galleryForm.title} onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })} required />
                              <input className="px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" placeholder="Category (e.g. Sports)" value={galleryForm.category} onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })} />
                              <div className="relative group overflow-hidden bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">
                                <span className="text-[0.65rem] font-black text-gray-400 uppercase tracking-widest">{galleryForm.image ? 'Photo Ready' : 'Select Photo'}</span>
                                <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.files?.[0] || null })} required />
                              </div>
                              <button type="submit" disabled={saving} className="py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-600/20 hover:bg-red-700 disabled:opacity-50 transition-all">
                                {saving ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Upload'}
                              </button>
                           </form>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {gallery.map(item => (
                          <div key={item._id} className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm aspect-square">
                             <img src={item.imageUrl} className="w-full h-full object-cover" alt="" />
                             <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center backdrop-blur-[2px]">
                                <p className="text-white text-sm font-bold truncate w-full">{item.title}</p>
                                <button 
                                  onClick={() => adminApi.deleteGallery(item._id).then(loadData)}
                                  className="mt-3 p-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
                                >
                                   <Trash2 className="w-4 h-4" />
                                </button>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                )}

                {/* ── STAFF VIEW ── */}
                {activeTab === 'staff' && (
                  <div className="space-y-10">
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
                       <h2 className="text-2xl font-black text-gray-900 mb-6">Onboard New Staff</h2>
                       <form onSubmit={handleStaffSubmit} className="grid md:grid-cols-3 gap-4">
                          <input className="px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" placeholder="Full Name" value={staffForm.name} onChange={(e) => setStaffForm({ ...staffForm, name: e.target.value })} required />
                          <input className="px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" placeholder="Designation" value={staffForm.position} onChange={(e) => setStaffForm({ ...staffForm, position: e.target.value })} required />
                          <input className="px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" placeholder="Department" value={staffForm.department} onChange={(e) => setStaffForm({ ...staffForm, department: e.target.value })} />
                          
                          <div className="md:col-span-2 relative group overflow-hidden bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">
                             <span className="text-[0.65rem] font-black text-gray-400 uppercase tracking-widest">{staffForm.image ? 'Profile Set' : 'Profile Photo'}</span>
                             <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setStaffForm({ ...staffForm, image: e.target.files?.[0] || null })} />
                          </div>

                          <button type="submit" disabled={saving} className="py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-600/20 hover:bg-red-700 disabled:opacity-50 transition-all">
                             {saving ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Add Member'}
                          </button>
                       </form>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                       {staff.map(item => (
                         <div key={item._id} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-5 group hover:border-red-600/20 transition-all">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                               <img src={item.imageUrl} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="flex-1 min-w-0">
                               <h4 className="font-bold text-gray-900 truncate">{item.name}</h4>
                               <p className="text-[0.65rem] font-black uppercase text-red-600 tracking-widest mt-1">{item.position}</p>
                            </div>
                            <button 
                              onClick={() => adminApi.deleteStaff(item._id).then(loadData)}
                              className="p-3 text-gray-400 hover:text-red-600 transition-colors"
                            >
                               <Trash2 className="w-4 h-4" />
                            </button>
                         </div>
                       ))}
                    </div>
                  </div>
                )}

                {/* ── SETTINGS VIEW ── */}
                {activeTab === 'settings' && (
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
                      <div className="max-w-3xl">
                        <h2 className="text-3xl font-black text-gray-900 mb-2 underline decoration-red-600 decoration-4 underline-offset-8 decoration-skip-ink">Global Configuration</h2>
                        <p className="text-gray-500 text-sm mt-8 mb-10">Control metadata and primary contact info displayed across the entire public interface.</p>
                        
                        <form onSubmit={handleSettingsSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                           {[
                             { id: 'schoolName', label: 'School Name' },
                             { id: 'email', label: 'Primary Email' },
                             { id: 'phone', label: 'Contact Phone' },
                             { id: 'address', label: 'Office Address' },
                             { id: 'establishedYear', label: 'Established Year' },
                             { id: 'principalName', label: 'Principal Name' },
                           ].map(field => (
                             <div key={field.id} className="space-y-2">
                               <label className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 ml-1">{field.label}</label>
                               <input 
                                 className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-red-600 transition-all font-bold text-sm" 
                                 value={settingsForm[field.id] || ''} 
                                 onChange={(e) => setSettingsForm({ ...settingsForm, [field.id]: e.target.value })} 
                               />
                             </div>
                           ))}
                           <button 
                             type="submit" 
                             disabled={saving || !canManageSettings} 
                             className="md:col-span-2 mt-6 py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-600/20 hover:bg-red-700 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                           >
                             {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Update Global Settings <CheckCircle2 className="w-5 h-5" /></>}
                           </button>
                        </form>

                        {!canManageSettings && (
                          <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-center gap-3 text-amber-700 text-xs font-bold">
                             <AlertCircle className="w-4 h-4" />
                             Only super-admins can modify global site metadata.
                          </div>
                        )}
                      </div>
                  </div>
                )}

              </div>
            )}
          </Reveal>
        </div>
      </main>
    </div>
  )
}
