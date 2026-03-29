import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { errorHandler } from './middleware/auth.js'

// Import routes
import authRoutes from './routes/auth.js'
import publicRoutes from './routes/public.js'
import adminRoutes from './routes/admin.js'
import uploadRoutes from './routes/upload.js'

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Health check (no DB needed)
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    message: 'Backend is running',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/public', publicRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/upload', uploadRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.url}` })
})

// Error handling middleware
app.use(errorHandler)

// Connect to DB then start server (for local dev only)
const startServer = async () => {
  try {
    await connectDB()
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('Failed to connect to DB:', err)
    process.exit(1)
  }
}

// In serverless (Vercel), DB connects per-request via connectDB() inside routes
// In local dev, we start a persistent server
if (process.env.NODE_ENV !== 'production') {
  startServer()
} else {
  // For Vercel: connect DB once when the function cold-starts
  connectDB().catch(err => console.error('DB connection error:', err))
}

export default app
