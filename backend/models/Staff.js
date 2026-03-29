import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide staff name']
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      enum: ['Principal', 'Vice-Principal', 'Teacher', 'Support Staff', 'Administrator']
    },
    department: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    phone: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: null
    },
    imageUrl: {
      type: String,
      default: null
    },
    bio: {
      type: String,
      default: ''
    },
    qualification: {
      type: String,
      default: ''
    },
    experience: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: true
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    }
  },
  { timestamps: true }
)

staffSchema.index({ position: 1, isActive: 1 })

export default mongoose.model('Staff', staffSchema)
