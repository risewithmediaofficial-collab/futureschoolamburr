import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export const Reveal = ({ children, className = '', delay = 0, y = 20, direction = 'up' }) => {
  const directionOffset = {
    up: { y, x: 0 },
    down: { y: -y, x: 0 },
    left: { x: y, y: 0 },
    right: { x: -y, y: 0 }
  }
  
  const initialOffset = directionOffset[direction] || directionOffset.up

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.01, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ 
        duration: 0.5, 
        delay: delay / 1000, // framer-motion uses seconds, but we passed ms in many places
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}

export const useReveal = (threshold = 0.1) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  
  return [ref, visible]
}
