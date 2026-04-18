import axios from 'axios'

let API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

// Ensure API URL ends with /api if not already present
if (API_BASE_URL !== '/api' && !API_BASE_URL.endsWith('/api')) {
  API_BASE_URL = API_BASE_URL.replace(/\/+$/, '') + '/api'
}

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to request headers
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => Promise.reject(error))

// Handle response errors
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login if token expired
      localStorage.removeItem('adminToken')
      localStorage.removeItem('adminUser')
      window.location.href = '/'
    }
    return Promise.reject(error.response?.data || error.message)
  }
)

export default apiClient
