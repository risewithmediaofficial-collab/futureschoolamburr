/**
 * API Client for Future School Frontend
 * Handles all communication with the backend
 * 
 * Usage:
 * import { apiClient } from './utils/apiClient.js'
 * 
 * const news = await apiClient.news.getAll()
 * const application = await apiClient.applications.submit(data)
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Fetch helper
async function fetchData(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || `API Error: ${response.status}`)
  }

  return response.json()
}

// News API
export const newsApi = {
  async getAll(page = 1, limit = 10) {
    return fetchData(`/public/news?page=${page}&limit=${limit}`)
  },

  async getOne(id) {
    return fetchData(`/public/news/${id}`)
  },

  async getByCategory(category) {
    return fetchData(`/public/news?category=${category}`)
  }
}

// Gallery API
export const galleryApi = {
  async getAll(page = 1, limit = 12) {
    return fetchData(`/public/gallery?page=${page}&limit=${limit}`)
  },

  async getByCategory(category, page = 1, limit = 12) {
    return fetchData(`/public/gallery?category=${category}&page=${page}&limit=${limit}`)
  },

  async getCategories() {
    return fetchData(`/public/gallery/categories`)
  }
}

// Staff API
export const staffApi = {
  async getAll() {
    return fetchData(`/public/staff`)
  },

  async getByPosition(position) {
    return fetchData(`/public/staff?position=${position}`)
  },

  async getOne(id) {
    return fetchData(`/public/staff/${id}`)
  }
}

// Settings API
export const settingsApi = {
  async get() {
    return fetchData(`/public/settings`)
  }
}

// Applications API
export const applicationsApi = {
  async submitAdmission(data) {
    return fetchData('/public/applications', {
      method: 'POST',
      body: JSON.stringify({
        applicationType: 'admission',
        ...data
      })
    })
  },

  async submitJob(data) {
    return fetchData('/public/applications', {
      method: 'POST',
      body: JSON.stringify({
        applicationType: 'job',
        ...data
      })
    })
  }
}

// Combined API Client
export const apiClient = {
  news: newsApi,
  gallery: galleryApi,
  staff: staffApi,
  settings: settingsApi,
  applications: applicationsApi
}

export default apiClient
