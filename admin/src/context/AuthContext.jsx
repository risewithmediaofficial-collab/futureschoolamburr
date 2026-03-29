import { createContext, useState, useContext, useEffect } from 'react'
import apiClient from '../utils/api.js'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('adminToken'))
  const [loading, setLoading] = useState(true)

  // Load admin data from localStorage on mount
  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminUser')
    const storedToken = localStorage.getItem('adminToken')

    if (storedAdmin && storedToken) {
      setAdmin(JSON.parse(storedAdmin))
      setToken(storedToken)
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password })

      localStorage.setItem('adminToken', response.token)
      localStorage.setItem('adminUser', JSON.stringify(response.admin))

      setToken(response.token)
      setAdmin(response.admin)

      return response
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    setToken(null)
    setAdmin(null)
  }

  const value = {
    admin,
    token,
    loading,
    isAuthenticated: !!token,
    login,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
