import express from 'express'
import compression from 'compression'
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'
import authRoutes from './routes/auth.js'
import publicRoutes from './routes/public.js'
import adminRoutes from './routes/admin.js'
import uploadRoutes from './routes/upload.js'

// Load environment variables — explicit path works in both local and Vercel
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '.env') })

const app = express()

// ── PERFORMANCE OPTIMIZATIONS ──────────────────────────────────────────────────
// Enable gzip compression for all responses
app.use(compression({ level: 6 }))

// Cache control middleware
app.use((req, res, next) => {
  // Static assets with hash - cache for 1 year
  if (/\.(js|css|woff|woff2|ttf|otf|eot)$/.test(req.path)) {
    res.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  // Images - cache for 30 days
  else if (/\.(jpg|jpeg|png|gif|svg|webp)$/.test(req.path)) {
    res.set('Cache-Control', 'public, max-age=2592000')
  }
  // HTML (not cached) - cache for 1 hour
  else if (/\.html$/.test(req.path)) {
    res.set('Cache-Control', 'public, max-age=3600')
  }
  // API responses - no cache
  else if (req.path.startsWith('/api/')) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  }
  next()
})

// Security headers
app.use((req, res, next) => {
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('X-Frame-Options', 'DENY')
  res.set('X-XSS-Protection', '1; mode=block')
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

// Middleware
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Root route — simple status check
app.get('/', ensureDB, async (req, res) => {
  res.status(200).json({
    message: 'Future School Backend API — Online 🚀',
    database: dbReady ? 'Connected ✅' : 'Connecting/Error ⚠️',
    health: `${req.protocol}://${req.get('host')}/api/health`,
    admin: '/admin (if enabled)'
  })
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

// ── Admin Frontend Integration ────────────────────────────────────────────────
const adminDistPath = join(__dirname, '../admin/dist')
app.use('/admin', express.static(adminDistPath))

app.get('/admin/*', (req, res) => {
  const indexPath = join(adminDistPath, 'index.html')
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath)
  } else {
    res.status(404).json({ message: 'Admin portal not built. Run npm run admin:build in the root directory.' })
  }
})

// ── Main School Frontend Integration (Render/Production) ──────────────────────
// Main frontend is built into the root /dist folder
const mainDistPath = join(__dirname, '../dist')
app.use(express.static(mainDistPath))

// NOTE: All API routes must come BEFORE the main frontend catch-all

// ── Lazy DB connection ─────────────────────────────────────────────────────────
import connectDB from './config/db.js'

let dbReady = false

async function ensureDB(req, res, next) {
  if (dbReady) return next()
  try {
    await connectDB()
    dbReady = true
    next()
  } catch (e) {
    console.error('Database connection failed:', e.message)
    res.status(500).json({ message: 'Database connection failed', error: e.message })
  }
}

// Routes (with lazy DB connection guard)
app.use('/api/auth', ensureDB, authRoutes)
app.use('/api/public', ensureDB, publicRoutes)
app.use('/api/admin', ensureDB, adminRoutes)
app.use('/api/upload', ensureDB, uploadRoutes)

// ── SPA Catch-all (for School Website) ──────────────────────────────────────────
// This must be the VERY LAST route in the entire file
app.get('*', (req, res) => {
  const indexPath = join(mainDistPath, 'index.html')
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath)
  } else {
    res.status(404).json({ message: `Route not found: ${req.method} ${req.url}` })
  }
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' })
})

// Start persistent server for non-Vercel environments (like Render or Local)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`))
}

export default app
