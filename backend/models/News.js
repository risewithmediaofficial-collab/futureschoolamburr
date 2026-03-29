import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Please provide content']
    },
    image: {
      type: String,
      default: null
    },
    imageUrl: {
      type: String,
      default: null
    },
    category: {
      type: String,
      enum: ['announcement', 'event', 'achievement', 'general'],
      default: 'general'
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    publishedDate: {
      type: Date,
      default: null
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    views: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

newsSchema.index({ isPublished: 1, publishedDate: -1 })

export default mongoose.model('News', newsSchema)
