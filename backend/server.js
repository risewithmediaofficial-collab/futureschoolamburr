import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import authRoutes from './routes/auth.js'
import publicRoutes from './routes/public.js'
import adminRoutes from './routes/admin.js'
import uploadRoutes from './routes/upload.js'

// Load environment variables — explicit path works in both local and Vercel
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '.env') })

const app = express()

// Middleware
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// ── Admin Frontend Integration ────────────────────────────────────────────────
const adminDistPath = join(__dirname, 'admin/dist')
app.use('/admin', express.static(adminDistPath))
app.get('/admin/*', (req, res) => {
  res.sendFile(join(adminDistPath, 'index.html'))
})

// Health check — no DB required, great for debugging
app.get('/api/health', (req, res) => {
  res.status(200).json({
    message: 'Backend is running ✅',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'unknown',
    dbUri: process.env.MONGODB_URI ? 'SET ✅' : 'NOT SET ❌'
  })
})

// ── Lazy DB connection ─────────────────────────────────────────────────────────
let dbReady = false
let dbError = null

async function ensureDB(req, res, next) {
  if (dbReady) return next()
  if (dbError) return res.status(500).json({ message: 'Database unavailable', error: dbError })
  try {
    const { default: connectDB } = await import('./config/db.js')
    await connectDB()
    dbReady = true
    next()
  } catch (e) {
    dbError = e.message
    res.status(500).json({ message: 'Database connection failed', error: e.message })
  }
}

// Routes (with lazy DB connection guard)
app.use('/api/auth', ensureDB, authRoutes)
app.use('/api/public', ensureDB, publicRoutes)
app.use('/api/admin', ensureDB, adminRoutes)
app.use('/api/upload', ensureDB, uploadRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.url}` })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' })
})

// Local dev only — start a persistent server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`))
}

export default app
