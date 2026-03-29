import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema(
  {
    applicationType: {
      type: String,
      enum: ['admission', 'job'],
      required: true
    },
    // Admission specific fields
    studentName: {
      type: String,
      required: function() { return this.applicationType === 'admission' }
    },
    parentName: {
      type: String,
      required: function() { return this.applicationType === 'admission' }
    },
    currentGrade: {
      type: String,
      required: function() { return this.applicationType === 'admission' }
    },
    // Job specific fields
    jobTitle: {
      type: String,
      required: function() { return this.applicationType === 'job' }
    },
    candidateName: {
      type: String,
      required: function() { return this.applicationType === 'job' }
    },
    qualifications: {
      type: String,
      required: function() { return this.applicationType === 'job' }
    },
    // Common fields
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required']
    },
    message: {
      type: String,
      default: ''
    },
    resume: {
      type: String,
      default: null
    },
    resumeUrl: {
      type: String,
      default: null
    },
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'approved', 'rejected'],
      default: 'pending'
    },
    adminNotes: {
      type: String,
      default: ''
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      default: null
    },
    reviewedDate: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
)

applicationSchema.index({ applicationType: 1, status: 1 })
applicationSchema.index({ email: 1 })
applicationSchema.index({ createdAt: -1 })

export default mongoose.model('Application', applicationSchema)
