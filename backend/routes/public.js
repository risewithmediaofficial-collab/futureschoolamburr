import express from 'express'
import Application from '../models/Application.js'
import News from '../models/News.js'
import Gallery from '../models/Gallery.js'
import Staff from '../models/Staff.js'
import Settings from '../models/Settings.js'

const router = express.Router()

// ============ NEWS ============
// Get all published news
router.get('/news', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10

    const news = await News.find({ isPublished: true })
      .sort({ publishedDate: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .populate('author', 'name email')

    const total = await News.countDocuments({ isPublished: true })

    res.status(200).json({
      news,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get single news by ID
router.get('/news/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate('author', 'name email')

    if (!news || !news.isPublished) {
      return res.status(404).json({ message: 'News not found' })
    }

    // Increment views
    news.views += 1
    await news.save()

    res.status(200).json({ news })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ GALLERY ============
// Get all gallery images with optional filtering
router.get('/gallery', async (req, res) => {
  try {
    const category = req.query.category
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 12

    const filter = {}
    if (category) filter.category = category

    const gallery = await Gallery.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)

    const total = await Gallery.countDocuments(filter)

    res.status(200).json({
      gallery,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get gallery categories
router.get('/gallery/categories', async (req, res) => {
  try {
    const categories = await Gallery.distinct('category')
    res.status(200).json({ categories })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ STAFF ============
// Get all active staff
router.get('/staff', async (req, res) => {
  try {
    const position = req.query.position

    const filter = { isActive: true }
    if (position) filter.position = position

    const staff = await Staff.find(filter)
      .sort({ position: 1, name: 1 })

    res.status(200).json({ staff })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get staff by ID
router.get('/staff/:id', async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id)

    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' })
    }

    res.status(200).json({ staff })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ SETTINGS ============
// Get public settings
router.get('/settings', async (req, res) => {
  try {
    let settings = await Settings.findOne()

    if (!settings) {
      // Create default settings if not exists
      settings = new Settings()
      await settings.save()
    }

    res.status(200).json({ settings })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ APPLICATIONS ============
// Submit new application (admission or job)
router.post('/applications', async (req, res) => {
  try {
    const { applicationType, studentName, parentName, currentGrade, jobTitle, candidateName, qualifications, email, phone, message } = req.body

    if (!applicationType || !email || !phone) {
      return res.status(400).json({ message: 'Please provide all required fields' })
    }

    if (applicationType === 'admission' && (!studentName || !parentName || !currentGrade)) {
      return res.status(400).json({ message: 'Admission requires: studentName, parentName, currentGrade' })
    }

    if (applicationType === 'job' && (!candidateName || !jobTitle || !qualifications)) {
      return res.status(400).json({ message: 'Job requires: candidateName, jobTitle, qualifications' })
    }

    const application = new Application({
      applicationType,
      studentName,
      parentName,
      currentGrade,
      jobTitle,
      candidateName,
      qualifications,
      email,
      phone,
      message
    })

    await application.save()

    res.status(201).json({
      message: 'Application submitted successfully',
      applicationId: application._id
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
