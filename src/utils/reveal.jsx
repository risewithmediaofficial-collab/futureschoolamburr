import { useEffect, useRef, useState } from 'react'

export const useReveal = (threshold = 0.1) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

export const Reveal = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
