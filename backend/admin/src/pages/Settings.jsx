import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Save } from 'lucide-react'

export default function Settings() {
  const { token } = useAuth()
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    phone: [''],
    email: [''],
    website: '',
    aboutUs: '',
    motto: '',
    establishedYear: new Date().getFullYear(),
    principalName: '',
    chairmanName: '',
    socialLinks: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: '',
      linkedin: ''
    }
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/public/settings')
      if (!response.ok) throw new Error('Failed to fetch settings')
      const data = await response.json()
      if (data.settings) {
        setFormData(data.settings)
      }
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
      setSaving(true)
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to save settings')
      
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handlePhoneChange = (index, value) => {
    const newPhones = [...formData.phone]
    newPhones[index] = value
    setFormData({ ...formData, phone: newPhones })
  }

  const handleEmailChange = (index, value) => {
    const newEmails = [...formData.email]
    newEmails[index] = value
    setFormData({ ...formData, email: newEmails })
  }

  const addPhone = () => {
    setFormData({ ...formData, phone: [...formData.phone, ''] })
  }

  const addEmail = () => {
    setFormData({ ...formData, email: [...formData.email, ''] })
  }

  const removePhone = (index) => {
    setFormData({ ...formData, phone: formData.phone.filter((_, i) => i !== index) })
  }

  const removeEmail = (index) => {
    setFormData({ ...formData, email: formData.email.filter((_, i) => i !== index) })
  }

  if (loading) return <div className="p-8 text-center">Loading settings...</div>

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">School Settings</h1>

      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">✓ Settings saved successfully</div>}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              rows="2"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="url"
              placeholder="Website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Numbers</label>
              {formData.phone.map((phone, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => handlePhoneChange(idx, e.target.value)}
                    placeholder="Phone number"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {formData.phone.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePhone(idx)}
                      className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addPhone}
                className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm font-medium"
              >
                + Add Phone
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Addresses</label>
              {formData.email.map((email, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(idx, e.target.value)}
                    placeholder="Email address"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  {formData.email.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEmail(idx)}
                      className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addEmail}
                className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm font-medium"
              >
                + Add Email
              </button>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">About School</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="School Motto"
              value={formData.motto}
              onChange={(e) => setFormData({ ...formData, motto: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="number"
              placeholder="Established Year"
              value={formData.establishedYear}
              onChange={(e) => setFormData({ ...formData, establishedYear: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="About Us"
              value={formData.aboutUs}
              onChange={(e) => setFormData({ ...formData, aboutUs: e.target.value })}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Leadership */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Leadership</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Principal Name"
              value={formData.principalName}
              onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Chairman Name"
              value={formData.chairmanName}
              onChange={(e) => setFormData({ ...formData, chairmanName: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Social Media</h2>
          <div className="space-y-4">
            {Object.keys(formData.socialLinks).map(platform => (
              <input
                key={platform}
                type="url"
                placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                value={formData.socialLinks[platform]}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, [platform]: e.target.value }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition shadow-sm hover:shadow-md disabled:opacity-50"
          >
            <Save size={20} />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}
