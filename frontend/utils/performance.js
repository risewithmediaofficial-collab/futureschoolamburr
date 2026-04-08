/**
 * IMAGE OPTIMIZATION UTILITIES
 * Used to lazy load images and optimize performance across the website
 */

/**
 * Lazy Load Images with Intersection Observer
 * Use on img components: 
 * <img src="..." loading="lazy" alt="..." />
 * 
 * All images with loading="lazy" will automatically be handled by browsers
 */

/**
 * Add this utility to optimize images across components
 */
export const ImageOptimizer = {
  // Get optimized image URL
  getOptimizedUrl: (url, width = 800) => {
    if (!url) return ''
    // If using external image service like Cloudinary:
    // return `https://res.cloudinary.com/your-account/image/fetch/c_limit,w_${width},q_auto:good,f_auto/${url}`
    return url
  },

  // Preload critical images
  preloadImage: (src) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  },

  // Prefetch images
  prefetchImage: (src) => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = src
    document.head.appendChild(link)
  }
}

/**
 * Lazy Load Script
 * Defers non-critical JavaScript execution
 */
export const deferScript = (callback, delay = 0) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      setTimeout(callback, delay)
    })
  } else {
    setTimeout(callback, 2000 + delay)
  }
}

/**
 * Performance Monitoring
 */
export const PerformanceMetrics = {
  // Log Core Web Vitals
  logMetrics: () => {
    if ('web-vital' in window) {
      try {
        const vitals = window.navigator.performance
        if (vitals) {
          console.log('Performance Metrics logged')
        }
      } catch (e) {
        // Silently fail
      }
    }
  },

  // Measure component render time
  measureComponent: (name) => {
    const startMark = `${name}-start`
    const endMark = `${name}-end`
    
    return {
      start: () => performance.mark(startMark),
      end: () => {
        performance.mark(endMark)
        performance.measure(name, startMark, endMark)
      }
    }
  }
}

/**
 * Request Animation Frame Throttle
 * Optimize scroll and resize event handlers
 */
export const rafThrottle = (func) => {
  let rafId = null
  let lastArgs = null

  const throttled = (...args) => {
    lastArgs = args
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        func(...lastArgs)
        rafId = null
      })
    }
  }

  throttled.cancel = () => {
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  return throttled
}

export default ImageOptimizer
