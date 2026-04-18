import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Plus, Edit2, Trash2, Upload } from 'lucide-react'

export default function Gallery() {
  const { token, loading: authLoading } = useAuth()
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: 'events',
    description: '',
    imageUrl: ''
  })

  const categories = ['events', 'campus', 'activities', 'achievements', 'sports']

  useEffect(() => {
    if (authLoading) return
    if (!token) {
      setLoading(false)
      setError('Authentication required. Please login again.')
      return
    }
    fetchGallery()
  }, [token, authLoading])

  const fetchGallery = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/gallery', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error('Failed to fetch gallery')
      const data = await response.json()
      setGallery(data.gallery || [])
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploading(true)
      const formDataUpload = new FormData()
      formDataUpload.append('file', file)

      const response = await fetch('/api/upload/single', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formDataUpload
      })

      if (!response.ok) throw new Error('Upload failed')
      const data = await response.json()
      setFormData({ ...formData, imageUrl: data.fileUrl })
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = editingId
        ? `/api/admin/gallery/${editingId}`
        : '/api/admin/gallery'

      const method = editingId ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to save gallery item')

      if (editingId) {
        setGallery(gallery.map(item => item._id === editingId ? { ...item, ...formData } : item))
      } else {
        fetchGallery()
      }

      setFormData({ title: '', category: 'events', description: '', imageUrl: '' })
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
      category: item.category,
      description: item.description || '',
      imageUrl: item.imageUrl
    })
    setEditingId(item._id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image?')) return

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error('Failed to delete')
      setGallery(gallery.filter(item => item._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingId(null)
            setFormData({ title: '', category: 'events', description: '', imageUrl: '' })
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <Plus size={20} /> Add Image
        </button>
      </div>

      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

      {showForm && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit' : 'Add'} Gallery Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium">Upload Image</label>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="flex-1"
                />
                {uploading && <span className="text-sm text-gray-600">Uploading...</span>}
              </div>
              {formData.imageUrl && (
                <img src={formData.imageUrl} alt="Preview" className="w-32 h-32 object-cover rounded" />
              )}
            </div>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map(item => (
            <div key={item._id} className="group relative rounded-lg overflow-hidden bg-gray-100 hover:shadow-lg transition">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-center justify-center gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 bg-blue-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 p-2">
                <p className="text-white text-sm font-bold truncate">{item.title}</p>
                <span className="text-xs text-gray-300">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
