import express from 'express'
import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'
import { verifyToken, checkRole } from '../middleware/auth.js'

const router = express.Router()

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' })
    }

    // Find admin and select password field
    const admin = await Admin.findOne({ email }).select('+password')

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({ message: 'Admin account is inactive' })
    }

    // Compare passwords
    const isPasswordMatch = await admin.comparePassword(password)

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    )

    res.status(200).json({
      message: 'Login successful',
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        permissions: admin.permissions
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Register new admin (only super-admin can create new admins)
router.post('/register', verifyToken, checkRole('super-admin'), async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' })
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin with this email already exists' })
    }

    // Create new admin
    const admin = new Admin({
      name,
      email,
      password,
      role: role || 'editor'
    })

    // Set permissions based on role
    if (admin.role === 'super-admin') {
      admin.permissions = {
        canEditNews: true,
        canEditGallery: true,
        canEditStaff: true,
        canEditSettings: true,
        canViewApplications: true,
        canManageAdmins: true
      }
    }

    await admin.save()

    res.status(201).json({
      message: 'Admin registered successfully',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get current admin profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password')

    res.status(200).json({
      admin
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
