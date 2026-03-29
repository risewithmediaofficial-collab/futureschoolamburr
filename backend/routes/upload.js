import express from 'express'
import { verifyToken, checkRole } from '../middleware/auth.js'
import { uploadSingle, uploadMultiple, deleteUploadedFile, getFileUrl } from '../middleware/upload.js'

const router = express.Router()

// Upload single file (for news, staff photos, etc.)
router.post('/single', verifyToken, checkRole('editor'), (req, res, next) => {
  uploadSingle(req, res, (err) => {
    if (err) {
      return res.status(400).json({ 
        success: false,
        message: err.message || 'File upload failed' 
      })
    }

    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'No file provided' 
      })
    }

    res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        filename: req.file.filename,
        originalname: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        url: getFileUrl(req.file.filename)
      }
    })
  })
})

// Upload multiple files (for gallery bulk upload)
router.post('/multiple', verifyToken, checkRole('editor'), (req, res, next) => {
  uploadMultiple(req, res, (err) => {
    if (err) {
      return res.status(400).json({ 
        success: false,
        message: err.message || 'File upload failed' 
      })
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ 
        success: false,
        message: 'No files provided' 
      })
    }

    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      size: file.size,
      mimetype: file.mimetype,
      url: getFileUrl(file.filename)
    }))

    res.status(200).json({
      success: true,
      message: `${uploadedFiles.length} files uploaded successfully`,
      files: uploadedFiles
    })
  })
})

// Delete uploaded file
router.delete('/:filename', verifyToken, checkRole('editor'), (req, res) => {
  try {
    const { filename } = req.params

    // Validate filename to prevent directory traversal
    if (filename.includes('..') || filename.includes('/')) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid filename' 
      })
    }

    const deleted = deleteUploadedFile(filename)

    if (deleted) {
      res.status(200).json({ 
        success: true,
        message: 'File deleted successfully' 
      })
    } else {
      res.status(404).json({ 
        success: false,
        message: 'File not found' 
      })
    }
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    })
  }
})

export default router
