import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { CheckCircle, Clock, Eye } from 'lucide-react'
import apiClient from '../utils/api.js'

export default function Applications() {
  const { token, loading: authLoading } = useAuth()
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')
  const [selectedApp, setSelectedApp] = useState(null)
  const [adminNotes, setAdminNotes] = useState('')

  const statuses = ['pending', 'reviewed', 'approved', 'rejected']

  useEffect(() => {
    if (authLoading) return
    if (!token) {
      setLoading(false)
      setError('Authentication required. Please login again.')
      return
    }
    fetchApplications()
  }, [token, authLoading])

  const getErrorMessage = (err, fallback) => {
    if (typeof err === 'string') return err
    if (err?.message) return err.message
    return fallback
  }

  const fetchApplications = async () => {
    try {
      setLoading(true)
      const data = await apiClient.get('/admin/applications')
      setApplications(data.applications || [])
      setError(null)
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to fetch applications'))
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, newStatus) => {
    try {
      await apiClient.patch(`/admin/applications/${id}/status`, { status: newStatus, adminNotes })
      
      setApplications(applications.map(app =>
        app._id === id ? { ...app, status: newStatus, adminNotes } : app
      ))
      
      setSelectedApp(null)
      setAdminNotes('')
      setError(null)
    } catch (err) {
      setError(getErrorMessage(err, 'Failed to update application'))
    }
  }

  const filtered = filter === 'all'
    ? applications
    : applications.filter(app => app.status === filter)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Applications Management</h1>

      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600 font-medium">Total</p>
          <p className="text-2xl font-bold text-blue-900">{applications.length}</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-600 font-medium">Pending</p>
          <p className="text-2xl font-bold text-yellow-900">
            {applications.filter(a => a.status === 'pending').length}
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-600 font-medium">Approved</p>
          <p className="text-2xl font-bold text-green-900">
            {applications.filter(a => a.status === 'approved').length}
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-sm text-red-600 font-medium">Rejected</p>
          <p className="text-2xl font-bold text-red-900">
            {applications.filter(a => a.status === 'rejected').length}
          </p>
        </div>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['all', ...statuses].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === status
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {filtered.map(app => (
            <div
              key={app._id}
              className="p-4 bg-white border rounded-lg hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedApp(app)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">
                    {app.studentName || app.candidateName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {app.studentName ? `Parent: ${app.parentName}` : `Applied for: ${app.jobTitle}`}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {app.applicationType === 'admission' 
                      ? `Grade: ${app.currentGrade || app.grade || app.class || 'N/A'}`
                      : `Qual: ${app.qualifications || 'N/A'}`}
                  </p>
                  <p className="text-sm text-gray-600">{app.email}</p>
                  {app.phone && <p className="text-sm text-gray-600">Phone: {app.phone}</p>}
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                    app.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedApp.studentName || selectedApp.candidateName}
              </h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Application Type</p>
                  <p className="font-bold text-[#c0392b] uppercase tracking-wider text-xs">
                    {selectedApp.applicationType}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted On</p>
                  <p className="font-medium text-xs">
                    {new Date(selectedApp.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {selectedApp.studentName && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Parent Name</p>
                      <p className="font-medium">{selectedApp.parentName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Grade Applying For</p>
                      <p className="font-bold text-red-700">
                        {selectedApp.currentGrade || selectedApp.grade || selectedApp.class || 'N/A'}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {selectedApp.candidateName && (
                <>
                  <div>
                    <p className="text-sm text-gray-600">Job Title</p>
                    <p className="font-medium">{selectedApp.jobTitle}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Qualifications</p>
                    <p className="font-medium">{selectedApp.qualifications}</p>
                  </div>
                </>
              )}

              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{selectedApp.email}</p>
              </div>

              {selectedApp.phone && (
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{selectedApp.phone}</p>
                </div>
              )}

              {selectedApp.message && (
                <div>
                  <p className="text-sm text-gray-600">Message / Admission Notes</p>
                  <p className="p-3 bg-gray-50 rounded border border-gray-100 text-sm whitespace-pre-wrap italic">"{selectedApp.message}"</p>
                </div>
              )}

              {selectedApp.adminNotes && (
                <div>
                  <p className="text-sm text-gray-600">Admin Notes</p>
                  <p className="font-medium">{selectedApp.adminNotes}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Add Notes</label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Add admin notes..."
                />
              </div>

              <div className="flex gap-2 pt-4 border-t">
                {['pending', 'reviewed', 'approved', 'rejected'].map(status => (
                  <button
                    key={status}
                    onClick={() => updateStatus(selectedApp._id, status)}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
                      selectedApp.status === status
                        ? status === 'approved' ? 'bg-green-600 text-white' :
                          status === 'rejected' ? 'bg-red-600 text-white' :
                          'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedApp(null)}
                className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
