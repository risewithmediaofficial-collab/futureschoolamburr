const TOKEN_KEY = 'future_school_admin_token'
const ADMIN_KEY = 'future_school_admin_profile'

function getHeaders(isJson = true) {
  const token = localStorage.getItem(TOKEN_KEY)
  const headers = {}

  if (isJson) {
    headers['Content-Type'] = 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export const adminStorage = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setSession: ({ token, admin }) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
  },
  clear: () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(ADMIN_KEY)
  },
  getAdmin: () => {
    try {
      const raw = localStorage.getItem(ADMIN_KEY)
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  },
}

export const adminApi = {
  async login(payload) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload),
    })

    return parseResponse(response)
  },

  async getApplications() {
    const response = await fetch('/api/admin/applications', {
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async updateApplicationStatus(id, payload) {
    const response = await fetch(`/api/admin/applications/${id}/status`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(payload),
    })

    return parseResponse(response)
  },

  async getNews() {
    const response = await fetch('/api/admin/news', {
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async createNews(formData) {
    const response = await fetch('/api/admin/news', {
      method: 'POST',
      headers: getHeaders(false),
      body: formData,
    })

    return parseResponse(response)
  },

  async deleteNews(id) {
    const response = await fetch(`/api/admin/news/${id}`, {
      method: 'DELETE',
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async getGallery() {
    const response = await fetch('/api/admin/gallery', {
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async createGallery(formData) {
    const response = await fetch('/api/admin/gallery', {
      method: 'POST',
      headers: getHeaders(false),
      body: formData,
    })

    return parseResponse(response)
  },

  async deleteGallery(id) {
    const response = await fetch(`/api/admin/gallery/${id}`, {
      method: 'DELETE',
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async getStaff() {
    const response = await fetch('/api/admin/staff', {
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async createStaff(formData) {
    const response = await fetch('/api/admin/staff', {
      method: 'POST',
      headers: getHeaders(false),
      body: formData,
    })

    return parseResponse(response)
  },

  async deleteStaff(id) {
    const response = await fetch(`/api/admin/staff/${id}`, {
      method: 'DELETE',
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async getSettings() {
    const response = await fetch('/api/admin/settings', {
      headers: getHeaders(false),
    })

    return parseResponse(response)
  },

  async updateSettings(payload) {
    const response = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(payload),
    })

    return parseResponse(response)
  },

  async submitAdmission(payload) {
    const response = await fetch('/api/public/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    return parseResponse(response)
  },
}
