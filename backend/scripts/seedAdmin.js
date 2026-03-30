import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Admin from '../models/Admin.js'
import Settings from '../models/Settings.js'

dotenv.config()

const seedAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data (optional - comment out if you want to keep data)
    // await Admin.deleteMany({})
    // console.log('Cleared previous admin data')

    // Check if super-admin exists
    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL })

    if (existingAdmin) {
      console.log('Super-admin already exists, updating password...')
      existingAdmin.password = process.env.ADMIN_PASSWORD
      await existingAdmin.save()
      console.log('✓ Password updated successfully')
    } else {
      // Create super-admin
      const superAdmin = new Admin({
        name: 'Super Administrator',
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: 'super-admin',
        permissions: {
          canEditNews: true,
          canEditGallery: true,
          canEditStaff: true,
          canEditSettings: true,
          canViewApplications: true,
          canManageAdmins: true
        }
      })

      await superAdmin.save()
      console.log('✓ Super-admin created successfully')
      console.log(`Email: ${superAdmin.email}`)
      console.log(`Password: ${process.env.ADMIN_PASSWORD}`)
      console.log(`Role: ${superAdmin.role}`)
    }

    // Create default settings if doesn't exist
    const existingSettings = await Settings.findOne()
    if (!existingSettings) {
      const settings = new Settings()
      await settings.save()
      console.log('✓ Default settings created')
    } else {
      console.log('Settings already exist')
    }

    console.log('\n✓ Seeding completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error during seeding:', error)
    process.exit(1)
  }
}

seedAdmin()
