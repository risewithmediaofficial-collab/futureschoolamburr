import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Plus, Edit2, Trash2, Upload } from 'lucide-react'

export default function Staff() {
  const { token } = useAuth()
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    position: 'Teacher',
    department: '',
    email: '',
    phone: '',
    bio: '',
    qualification: '',
    experience: '',
    imageUrl: '',
    isActive: true
  })

  const positions = ['Principal', 'Vice-Principal', 'Teacher', 'Support', 'Admin']

  useEffect(() => {
    fetchStaff()
  }, [])

  const fetchStaff = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/staff', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error('Failed to fetch staff')
      const data = await response.json()
      setStaff(data.staff || [])
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
        ? `/api/admin/staff/${editingId}`
        : '/api/admin/staff'

      const method = editingId ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to save staff')

      if (editingId) {
        setStaff(staff.map(item => item._id === editingId ? { ...item, ...formData } : item))
      } else {
        fetchStaff()
      }

      setFormData({
        name: '',
        position: 'Teacher',
        department: '',
        email: '',
        phone: '',
        bio: '',
        qualification: '',
        experience: '',
        imageUrl: '',
        isActive: true
      })
      setEditingId(null)
      setShowForm(false)
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      position: item.position,
      department: item.department || '',
      email: item.email || '',
      phone: item.phone || '',
      bio: item.bio || '',
      qualification: item.qualification || '',
      experience: item.experience || '',
      imageUrl: item.imageUrl || '',
      isActive: item.isActive
    })
    setEditingId(item._id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this staff member?')) return

    try {
      const response = await fetch(`/api/admin/staff/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!response.ok) throw new Error('Failed to delete')
      setStaff(staff.filter(item => item._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Staff Management</h1>
        <button
          onClick={() => {
            setShowForm(true)
            setEditingId(null)
            setFormData({
              name: '',
              position: 'Teacher',
              department: '',
              email: '',
              phone: '',
              bio: '',
              qualification: '',
              experience: '',
              imageUrl: '',
              isActive: true
            })
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          <Plus size={20} /> Add Staff
        </button>
      </div>

      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

      {showForm && (
        <div className="mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit' : 'Add'} Staff Member</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                {positions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
              </select>
              <input
                type="text"
                placeholder="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Experience (e.g., 10 years)"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <textarea
              placeholder="Bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium">Photo</label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
                <img src={formData.imageUrl} alt="Preview" className="w-24 h-24 object-cover rounded" />
              )}
            </div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              />
              <span>Active</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
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
          {staff.map(member => (
            <div key={member._id} className="p-4 bg-white border rounded-lg hover:shadow-lg transition flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex items-center gap-3 sm:gap-4">
                {member.imageUrl && (
                  <img src={member.imageUrl} alt={member.name} className="w-12 h-12 object-cover rounded-full" />
                )}
                <div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                  {member.email && <p className="text-sm text-gray-500">{member.email}</p>}
                </div>
              </div>
              <div className="flex gap-2 self-end sm:self-auto">
                <button onClick={() => handleEdit(member)} className="p-2 hover:bg-blue-100 rounded text-blue-600">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => handleDelete(member._id)} className="p-2 hover:bg-red-100 rounded text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
