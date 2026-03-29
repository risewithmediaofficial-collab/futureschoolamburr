import jwt from 'jsonwebtoken'

// Verify JWT Token
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] || req.cookies?.token

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.admin = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}

// Check if admin has specific role
export const checkRole = (requiredRole) => {
  return (req, res, next) => {
    if (!req.admin) {
      return res.status(401).json({ message: 'Authentication required' })
    }

    if (requiredRole === 'super-admin' && req.admin.role !== 'super-admin') {
      return res.status(403).json({ message: 'Super-admin access required' })
    }

    if (requiredRole === 'editor' && !['super-admin', 'editor'].includes(req.admin.role)) {
      return res.status(403).json({ message: 'Editor or super-admin access required' })
    }

    next()
  }
}

// Error handling middleware
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  
  res.status(status).json({
    success: false,
    status,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}
