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

// Check if admin has specific role(s)
export const checkRole = (...requiredRoles) => {
  return (req, res, next) => {
    if (!req.admin) {
      return res.status(401).json({ message: 'Authentication required' })
    }

    const adminRole = (req.admin.role || 'editor').toLowerCase()
    
    // Normalize required roles
    const normalizedRequired = requiredRoles.map(r => r.toLowerCase())

    // super-admin always has access
    if (adminRole === 'super-admin') {
       return next()
    }

    // Check if the current role is allowed for this route
    const isAllowed = normalizedRequired.some(role => {
       if (role === 'editor') return ['super-admin', 'editor', 'admin'].includes(adminRole)
       if (role === 'admin') return ['super-admin', 'admin'].includes(adminRole)
       return adminRole === role
    })

    if (!isAllowed) {
      return res.status(403).json({ 
        message: `Access denied. Required role: ${requiredRoles.join(' or ')}. Your role: ${adminRole}` 
      })
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
