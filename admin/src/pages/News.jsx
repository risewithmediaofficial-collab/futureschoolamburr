import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'

export default function News() {
  const { token, loading: authLoading } = useAuth()
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'announcement',
    imageUrl: '',
    isPublished: true
  })

  const categories = ['announcement', 'event', 'achievement', 'general']

  // Fetch news
  useEffect(() => {
    if (authLoading) return
    if (!token) {
      setLoading(false)
      setError('Authentication required. Please login again.')
      return
    }
    fetchNews()
  }, [token, authLoading])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/news', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error('Failed to fetch news')
      const data = await response.json()
      setNews(data.news || [])
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = editingId
        ? `/api/admin/news/${editingId}`
        : '/api/admin/news'
      
      const method = editingId ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to save news')
      
      if (editingId) {
        setNews(news.map(item => item._id === editingId ? { ...item, ...formData } : item))
      } else {
        fetchNews()
      }

      setFormData({ title: '', content: '', category: 'announcement', imageUrl: '', isPublished: true })
      setEditingId(null)
      setShowForm(false)
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      content: item.content,
      category: item.category,
      imageUrl: item.imageUrl || '',
      isPublished: item.isPublished
    })
    setEditingId(item._id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this news item?')) return

    try {
      const response = await fetch(`/api/admin/news/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error('Failed to delete')
      setNews(news.filter(item => item._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  const togglePublish = async (id, currentStatus) => {
    try {
      const response = await fetch(`/api/admin/news/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ isPublished: !currentStatus })
      })
      if (!response.ok) throw new Error('Failed to update')
      setNews(news.map(item => item._id === id ? { ...item, isPublished: !currentStatus } : item))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">News Management</h1>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingId(null)
            setFormData({ title: '', content: '', category: 'announcement', imageUrl: '', isPublished: true })
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <Plus size={20} /> Add News
        </button>
      </div>

      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

      {showForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit' : 'Add'} News</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <input
              type="url"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
              />
              <span>Published</span>
            </label>
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {news.map(item => (
            <div key={item._id} className="p-4 bg-white border rounded-lg hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.content.substring(0, 100)}...</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">{item.category}</span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {item.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => togglePublish(item._id, item.isPublished)}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    {item.isPublished ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                  <button onClick={() => handleEdit(item)} className="p-2 hover:bg-gray-100 rounded">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(item._id)} className="p-2 hover:bg-red-100 rounded text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
