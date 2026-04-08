/**
 * INTEGRATION EXAMPLE: How to update a component
 * 
 * This file shows a complete example of converting an existing component
 * that uses hardcoded data to use the backend API.
 * 
 * Choose one of the two approaches:
 * 1. Simple approach (use apiClient directly)
 * 2. Hook approach (use useApi hook)
 */

import { useState, useEffect } from 'react'

// ============ APPROACH 1: SIMPLE API CLIENT ============
// For simple, straightforward implementations

import { apiClient } from '../utils/apiClient'

export function NewsComponentSimple() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true)
        const response = await apiClient.news.getAll(1, 6)
        setNews(response.news || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [])

  if (loading) return <div className="text-center py-8">Loading news...</div>
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>
  if (news.length === 0) return <div className="text-center py-8">No news available</div>

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item._id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs mb-2 capitalize">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.content.substring(0, 100)}...</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>👁️ {item.views} views</span>
                  <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ APPROACH 2: REACT HOOKS ============
// For cleaner, reusable code (recommended)

import { useNews } from '../hooks/useApi'

export function NewsComponentWithHook() {
  const [page, setPage] = useState(1)
  const { news, loading, error, pagination } = useNews(page, 6)

  if (loading) return <div className="text-center py-8">Loading news...</div>
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>
  if (news.length === 0) return <div className="text-center py-8">No news available</div>

  return (
    <section className="py-12 bg-white\">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article key={item._id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs mb-2 capitalize">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.content.substring(0, 100)}...</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>👁️ {item.views} views</span>
                  <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-4 py-2 rounded ${
                  page === p
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ============ EXAMPLE 3: GALLERY WITH CATEGORIES ============

import { useGallery, useGalleryCategories } from '../hooks/useApi'

export function GalleryComponent() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { gallery, loading, error } = useGallery(1, 12, selectedCategory)
  const { categories } = useGalleryCategories()

  if (loading) return <div className="text-center py-8">Loading gallery...</div>
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>

  return (
    <section className="py-12 bg-white\">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>

        {/* Category Filter */}}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === '' ? 'bg-red-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg capitalize ${
                selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div key={item._id} className="relative group overflow-hidden rounded-lg">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  {item.description && (
                    <p className="text-white text-xs mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {gallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No images in this category</p>
          </div>
        )}
      </div>
    </section>
  )
}

// ============ EXAMPLE 4: STAFF DIRECTORY ============

import { useStaff } from '../hooks/useApi'

export function StaffComponent() {
  const [filter, setFilter] = useState('')
  const { staff, loading, error } = useStaff(filter)

  if (loading) return <div className="text-center py-8">Loading staff...</div>
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>

  const positions = ['Principal', 'Vice-Principal', 'Teacher', 'Support Staff', 'Administrator']

  return (
    <section className="py-12 bg-white\">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Faculty & Staff</h2>

        {/* Position Filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter('')}
            className={`px-4 py-2 rounded-lg ${
              filter === '' ? 'bg-red-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setFilter(pos)}
              className={`px-4 py-2 rounded-lg ${
                filter === pos ? 'bg-red-600 text-white' : 'bg-gray-200'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staff.map((member) => (
            <div key={member._id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              {member.imageUrl && (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-red-600 font-semibold text-sm">{member.position}</p>
                {member.department && (
                  <p className="text-gray-600 text-xs mt-1">{member.department}</p>
                )}
                {member.bio && (
                  <p className="text-gray-600 text-xs mt-2 line-clamp-2">{member.bio}</p>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 text-xs hover:underline mt-2 block"
                  >
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {staff.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No staff members found</p>
          </div>
        )}
      </div>
    </section>
  )
}

// ============ EXAMPLE 5: ADMISSION FORM ============

import { useAdmissionForm } from '../hooks/useApi'

export function AdmissionFormComponent() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    currentGrade: '',
    message: ''
  })
  const { submit, loading, error, success } = useAdmissionForm()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submit(formData)
    if (success) {
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        currentGrade: '',
        message: ''
      })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Apply for Admission</h3>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700">
            ✓ Application submitted successfully! We'll contact you soon.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">✗ Error: {error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Student Name"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Parent/Guardian Name"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <input
          type="text"
          name="currentGrade"
          value={formData.currentGrade}
          onChange={handleChange}
          placeholder="Current Grade/Class"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any additional information..."
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-2 rounded-lg transition"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}

// ============ QUICK REFERENCE ============

/**
 * How to use these examples in your project:
 * 
 * 1. Hook Approach (RECOMMENDED):
 *    - Import the hook: import { useNews } from '../hooks/useApi'
 *    - Use in component: const { news, loading, error } = useNews()
 *    
 * 2. API Client Approach:
 *    - Import client: import { apiClient } from '../utils/apiClient'
 *    - Use in useEffect: const data = await apiClient.news.getAll()
 *    
 * 3. Environment Variable (Optional):
 *    - Create .env file: VITE_API_URL=http://localhost:3000/api
 *    - Or use default: http://localhost:3000/api
 */

export default {
  NewsComponentSimple,
  NewsComponentWithHook,
  GalleryComponent,
  StaffComponent,
  AdmissionFormComponent
}
