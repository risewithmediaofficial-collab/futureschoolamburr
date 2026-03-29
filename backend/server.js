import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// Load environment variables first
dotenv.config()

const app = express()

// Middleware
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// ── Health check (no DB required) ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({
    message: 'Backend is running',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
    dbUri: process.env.MONGODB_URI ? 'SET ✅' : 'NOT SET ❌'
  })
})

// ── Lazy DB connection + routes ───────────────────────────────────────────────
let dbReady = false

async function ensureDB() {
  if (dbReady) return
  const { default: connectDB } = await import('./config/db.js')
  await connectDB()
  dbReady = true
}

// DB middleware — connects lazily on first real API call
app.use('/api/auth', async (req, res, next) => {
  try { await ensureDB(); next() } catch (e) {
    res.status(500).json({ message: 'Database connection failed', error: e.message })
  }
})
app.use('/api/public', async (req, res, next) => {
  try { await ensureDB(); next() } catch (e) {
    res.status(500).json({ message: 'Database connection failed', error: e.message })
  }
})
app.use('/api/admin', async (req, res, next) => {
  try { await ensureDB(); next() } catch (e) {
    res.status(500).json({ message: 'Database connection failed', error: e.message })
  }
})
app.use('/api/upload', async (req, res, next) => {
  try { await ensureDB(); next() } catch (e) {
    res.status(500).json({ message: 'Database connection failed', error: e.message })
  }
})

// Now register the actual route handlers
import('./routes/auth.js').then(m => app.use('/api/auth', m.default))
import('./routes/public.js').then(m => app.use('/api/public', m.default))
import('./routes/admin.js').then(m => app.use('/api/admin', m.default))
import('./routes/upload.js').then(m => app.use('/api/upload', m.default))

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.url}` })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' })
})

// Local dev server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
}

export default app
