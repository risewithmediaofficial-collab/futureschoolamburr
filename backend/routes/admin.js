import express from 'express'
import fs from 'fs'
import path from 'path'
import { verifyToken, checkRole } from '../middleware/auth.js'
import { uploadSingle, getFileUrl, deleteUploadedFile } from '../middleware/upload.js'
import Admin from '../models/Admin.js'
import News from '../models/News.js'
import Gallery from '../models/Gallery.js'
import Staff from '../models/Staff.js'
import Settings from '../models/Settings.js'
import Application from '../models/Application.js'

const router = express.Router()
const uploadsDir = './uploads'

// Ensure uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

// ============ NEWS MANAGEMENT ============
// Get all news (draft + published)
router.get('/news', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const status = req.query.status // 'published' or 'draft'

    const filter = {}
    if (status === 'published') filter.isPublished = true
    else if (status === 'draft') filter.isPublished = false

    const news = await News.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .populate('author', 'name email')

    const total = await News.countDocuments(filter)

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

// Create new news
router.post('/news', verifyToken, checkRole('editor'), (req, res, next) => {
  // Handle file upload first
  uploadSingle(req, res, async (err) => {
    if (err && err.code !== 'LIMIT_PART_COUNT') {
      return res.status(400).json({ message: err.message || 'File upload failed' })
    }

    try {
      const { title, content, category, isPublished } = req.body

      if (!title || !content) {
        // Delete uploaded file if validation fails
        if (req.file) deleteUploadedFile(req.file.filename)
        return res.status(400).json({ message: 'Title and content are required' })
      }

      const imageUrl = req.file ? getFileUrl(req.file.filename) : null
      const imageName = req.file ? req.file.filename : null

      const news = new News({
        title,
        content,
        category: category || 'general',
        image: imageName,
        imageUrl: imageUrl,
        isPublished: isPublished || false,
        publishedDate: isPublished ? new Date() : null,
        author: req.admin.id
      })

      await news.save()

      res.status(201).json({
        message: 'News created successfully',
        news
      })
    } catch (error) {
      // Delete uploaded file if save fails
      if (req.file) deleteUploadedFile(req.file.filename)
      res.status(500).json({ message: error.message })
    }
  })
})

// Update news
router.put('/news/:id', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const { title, content, category, image, isPublished } = req.body

    const news = await News.findById(req.params.id)

    if (!news) {
      return res.status(404).json({ message: 'News not found' })
    }

    news.title = title || news.title
    news.content = content || news.content
    news.category = category || news.category
    news.image = image !== undefined ? image : news.image
    news.isPublished = isPublished !== undefined ? isPublished : news.isPublished
    news.publishedDate = isPublished && !news.publishedDate ? new Date() : news.publishedDate

    await news.save()

    res.status(200).json({
      message: 'News updated successfully',
      news
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Delete news
router.delete('/news/:id', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id)

    if (!news) {
      return res.status(404).json({ message: 'News not found' })
    }

    // Delete associated image if exists
    if (news.image && fs.existsSync(news.image)) {
      fs.unlinkSync(news.image)
    }

    res.status(200).json({
      message: 'News deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ GALLERY MANAGEMENT ============
// Get all gallery images
router.get('/gallery', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20
    const category = req.query.category

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

// Add image to gallery
router.post('/gallery', verifyToken, checkRole('editor'), (req, res, next) => {
  uploadSingle(req, res, async (err) => {
    if (err && err.code !== 'LIMIT_PART_COUNT') {
      return res.status(400).json({ message: err.message || 'File upload failed' })
    }

    try {
      const { title, category, description } = req.body

      if (!title || !req.file) {
        if (req.file) deleteUploadedFile(req.file.filename)
        return res.status(400).json({ message: 'Title and image are required' })
      }

      const imageUrl = getFileUrl(req.file.filename)
      const imageName = req.file.filename

      const galleryItem = new Gallery({
        title,
        image: imageName,
        imageUrl: imageUrl,
        category: category || 'events',
        description: description || '',
        uploadedBy: req.admin.id
      })

      await galleryItem.save()

      res.status(201).json({
        message: 'Image added to gallery successfully',
        gallery: galleryItem
      })
    } catch (error) {
      if (req.file) deleteUploadedFile(req.file.filename)
      res.status(500).json({ message: error.message })
    }
  })
})

// Delete gallery image
router.delete('/gallery/:id', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id)

    if (!gallery) {
      return res.status(404).json({ message: 'Gallery item not found' })
    }

    // Delete associated image file if exists
    if (gallery.image && fs.existsSync(gallery.image)) {
      fs.unlinkSync(gallery.image)
    }

    res.status(200).json({
      message: 'Gallery item deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ STAFF MANAGEMENT ============
// Get all staff
router.get('/staff', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20

    const staff = await Staff.find()
      .sort({ position: 1, name: 1 })
      .limit(limit)
      .skip((page - 1) * limit)

    const total = await Staff.countDocuments()

    res.status(200).json({
      staff,
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

// Add staff member
router.post('/staff', verifyToken, checkRole('editor'), (req, res, next) => {
  uploadSingle(req, res, async (err) => {
    if (err && err.code !== 'LIMIT_PART_COUNT') {
      return res.status(400).json({ message: err.message || 'File upload failed' })
    }

    try {
      const { name, position, department, email, phone, bio, qualification, experience } = req.body

      if (!name || !position) {
        if (req.file) deleteUploadedFile(req.file.filename)
        return res.status(400).json({ message: 'Name and position are required' })
      }

      const imageUrl = req.file ? getFileUrl(req.file.filename) : null
      const imageName = req.file ? req.file.filename : null

      const staff = new Staff({
        name,
        position,
        department: department || '',
        email: email || '',
        phone: phone || '',
        image: imageName,
        imageUrl: imageUrl,
        bio: bio || '',
        qualification: qualification || '',
        experience: experience || '',
        addedBy: req.admin.id
      })

      await staff.save()

      res.status(201).json({
        message: 'Staff added successfully',
        staff
      })
    } catch (error) {
      if (req.file) deleteUploadedFile(req.file.filename)
      res.status(500).json({ message: error.message })
    }
  })
})

// Update staff
router.put('/staff/:id', verifyToken, checkRole('editor'), (req, res, next) => {
  uploadSingle(req, res, async (err) => {
    if (err && err.code !== 'LIMIT_PART_COUNT') {
      return res.status(400).json({ message: err.message || 'File upload failed' })
    }

    try {
      const { name, position, department, email, phone, bio, qualification, experience, isActive } = req.body

      const staff = await Staff.findById(req.params.id)

      if (!staff) {
        if (req.file) deleteUploadedFile(req.file.filename)
        return res.status(404).json({ message: 'Staff not found' })
      }

      staff.name = name || staff.name
      staff.position = position || staff.position
      staff.department = department !== undefined ? department : staff.department
      staff.email = email || staff.email
      staff.phone = phone || staff.phone
      
      // Handle image update
      if (req.file) {
        // Delete old image if exists
        if (staff.image) deleteUploadedFile(staff.image)
        staff.image = req.file.filename
        staff.imageUrl = getFileUrl(req.file.filename)
      }
      
      staff.bio = bio !== undefined ? bio : staff.bio
      staff.qualification = qualification !== undefined ? qualification : staff.qualification
      staff.experience = experience !== undefined ? experience : staff.experience
      staff.isActive = isActive !== undefined ? isActive : staff.isActive

      await staff.save()

      res.status(200).json({
        message: 'Staff updated successfully',
        staff
      })
    } catch (error) {
      if (req.file) deleteUploadedFile(req.file.filename)
      res.status(500).json({ message: error.message })
    }
  })
})

// Delete staff
router.delete('/staff/:id', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id)

    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' })
    }

    // Delete image if exists
    if (staff.image && fs.existsSync(staff.image)) {
      fs.unlinkSync(staff.image)
    }

    res.status(200).json({
      message: 'Staff deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ APPLICATIONS MANAGEMENT ============
// Get all applications
router.get('/applications', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20
    const applicationType = req.query.type // 'admission' or 'job'
    const status = req.query.status

    const filter = {}
    if (applicationType) filter.applicationType = applicationType
    if (status) filter.status = status

    const applications = await Application.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .populate('reviewedBy', 'name email')

    const total = await Application.countDocuments(filter)

    res.status(200).json({
      applications,
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

// Get single application
router.get('/applications/:id', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('reviewedBy', 'name email')

    if (!application) {
      return res.status(404).json({ message: 'Application not found' })
    }

    res.status(200).json({ application })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update application status
router.patch('/applications/:id/status', verifyToken, checkRole('editor'), async (req, res) => {
  try {
    const { status, adminNotes } = req.body

    if (!status || !['pending', 'reviewed', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Valid status required' })
    }

    const application = await Application.findById(req.params.id)

    if (!application) {
      return res.status(404).json({ message: 'Application not found' })
    }

    application.status = status
    application.adminNotes = adminNotes || application.adminNotes
    application.reviewedBy = req.admin.id
    application.reviewedDate = new Date()

    await application.save()

    res.status(200).json({
      message: 'Application status updated successfully',
      application
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ SETTINGS MANAGEMENT ============
// Get settings
router.get('/settings', verifyToken, checkRole('super-admin'), async (req, res) => {
  try {
    let settings = await Settings.findOne()

    if (!settings) {
      settings = new Settings()
      await settings.save()
    }

    res.status(200).json({ settings })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update settings
router.put('/settings', verifyToken, checkRole('super-admin'), async (req, res) => {
  try {
    const { schoolName, address, phone, email, website, aboutUs, motto, establishedYear, principalName, chairmanName } = req.body

    let settings = await Settings.findOne()

    if (!settings) {
      settings = new Settings()
    }

    settings.schoolName = schoolName || settings.schoolName
    settings.address = address || settings.address
    settings.phone = phone || settings.phone
    settings.email = email || settings.email
    settings.website = website || settings.website
    settings.aboutUs = aboutUs || settings.aboutUs
    settings.motto = motto || settings.motto
    settings.establishedYear = establishedYear || settings.establishedYear
    settings.principalName = principalName || settings.principalName
    settings.chairmanName = chairmanName || settings.chairmanName

    await settings.save()

    res.status(200).json({
      message: 'Settings updated successfully',
      settings
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ============ ADMIN MANAGEMENT ============
// Get all admins
router.get('/admins', verifyToken, checkRole('super-admin'), async (req, res) => {
  try {
    const admins = await Admin.find().select('-password')

    res.status(200).json({ admins })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Delete admin (only super-admin)
router.delete('/admins/:id', verifyToken, checkRole('super-admin'), async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id)

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' })
    }

    res.status(200).json({
      message: 'Admin deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
