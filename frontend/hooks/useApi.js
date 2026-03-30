/**
 * Custom React Hooks for API calls
 * Use these in your components for automatic data fetching
 * 
 * Example:
 * const { news, loading, error } = useNews()
 */

import { useState, useEffect } from 'react'
import { apiClient } from '../utils/apiClient.js'

// Hook for fetching published news
export const useNews = (page = 1, limit = 10) => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const data = await apiClient.news.getAll(page, limit)
        setNews(data.news || [])
        setPagination(data.pagination || {})
        setError(null)
      } catch (err) {
        setError(err.message)
        setNews([])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [page, limit])

  return { news, loading, error, pagination }
}

// Hook for fetching single news
export const useNewsByID = (id) => {
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchNews = async () => {
      try {
        setLoading(true)
        const data = await apiClient.news.getOne(id)
        setNews(data.news || null)
        setError(null)
      } catch (err) {
        setError(err.message)
        setNews(null)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [id])

  return { news, loading, error }
}

// Hook for fetching gallery images
export const useGallery = (page = 1, limit = 12, category = '') => {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({})

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true)
        const data = category
          ? await apiClient.gallery.getByCategory(category, page, limit)
          : await apiClient.gallery.getAll(page, limit)
        setGallery(data.gallery || [])
        setPagination(data.pagination || {})
        setError(null)
      } catch (err) {
        setError(err.message)
        setGallery([])
      } finally {
        setLoading(false)
      }
    }

    fetchGallery()
  }, [page, limit, category])

  return { gallery, loading, error, pagination }
}

// Hook for fetching gallery categories
export const useGalleryCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const data = await apiClient.gallery.getCategories()
        setCategories(data.categories || [])
        setError(null)
      } catch (err) {
        setError(err.message)
        setCategories([])
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}

// Hook for fetching staff
export const useStaff = (position = '') => {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setLoading(true)
        const data = position
          ? await apiClient.staff.getByPosition(position)
          : await apiClient.staff.getAll()
        setStaff(data.staff || [])
        setError(null)
      } catch (err) {
        setError(err.message)
        setStaff([])
      } finally {
        setLoading(false)
      }
    }

    fetchStaff()
  }, [position])

  return { staff, loading, error }
}

// Hook for fetching single staff member
export const useStaffByID = (id) => {
  const [member, setMember] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    const fetchStaff = async () => {
      try {
        setLoading(true)
        const data = await apiClient.staff.getOne(id)
        setMember(data.staff || null)
        setError(null)
      } catch (err) {
        setError(err.message)
        setMember(null)
      } finally {
        setLoading(false)
      }
    }

    fetchStaff()
  }, [id])

  return { member, loading, error }
}

// Hook for fetching settings
export const useSettings = () => {
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true)
        const data = await apiClient.settings.get()
        setSettings(data.settings || null)
        setError(null)
      } catch (err) {
        setError(err.message)
        setSettings(null)
      } finally {
        setLoading(false)
      }
    }

    fetchSettings()
  }, [])

  return { settings, loading, error }
}

// Hook for submitting admission application
export const useAdmissionForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const submit = async (formData) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      await apiClient.applications.submitAdmission(formData)

      setSuccess(true)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, success }
}

// Hook for submitting job application
export const useJobForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const submit = async (formData) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      await apiClient.applications.submitJob(formData)

      setSuccess(true)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error, success }
}
