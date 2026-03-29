import mongoose from 'mongoose'

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title']
    },
    image: {
      type: String,
      required: [true, 'Please provide an image path']
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL']
    },
    category: {
      type: String,
      enum: ['events', 'campus', 'activities', 'achievements', 'sports'],
      default: 'events'
    },
    description: {
      type: String,
      default: ''
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    }
  },
  { timestamps: true }
)

gallerySchema.index({ category: 1 })

export default mongoose.model('Gallery', gallerySchema)
