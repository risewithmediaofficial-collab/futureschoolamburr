import mongoose from 'mongoose'

const settingsSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      default: 'Future School CBSE'
    },
    address: {
      type: String,
      default: 'No.85, Pillaiyar Koil Street, Solur, Ambur – 635814, Tamil Nadu, India'
    },
    phone: [
      {
        type: String,
        default: '+91 99628 26465'
      }
    ],
    email: [
      {
        type: String,
        default: 'futureschooloffice@gmail.com'
      }
    ],
    website: {
      type: String,
      default: 'https://futureschools.edu'
    },
    logo: {
      type: String,
      default: null
    },
    favicon: {
      type: String,
      default: null
    },
    socialLinks: {
      facebook: { type: String, default: '' },
      instagram: { type: String, default: '' },
      twitter: { type: String, default: '' },
      youtube: { type: String, default: '' },
      linkedin: { type: String, default: '' }
    },
    aboutUs: {
      type: String,
      default: ''
    },
    motto: {
      type: String,
      default: ''
    },
    establishedYear: {
      type: String,
      default: '2024'
    },
    principalName: {
      type: String,
      default: ''
    },
    chairmanName: {
      type: String,
      default: ''
    },
    maintenanceMode: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

export default mongoose.model('Settings', settingsSchema)
