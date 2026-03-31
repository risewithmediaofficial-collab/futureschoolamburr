import { useState, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PromotionPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 3 seconds as requested
    const timer = setTimeout(() => {
      // Only show if not closed in this session (optional but better UX)
      const isClosed = sessionStorage.getItem('promoClosed')
      if (!isClosed) {
        setIsVisible(true)
      }
    }, 3000) // 3s delay for maximum attraction

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsVisible(false)
    sessionStorage.setItem('promoClosed', 'true')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[500px] w-full"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-[#c0392b] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-gray-100">
               <img 
                 src="/assets/admission-banner.jpg" 
                 alt="Admissions Open" 
                 className="w-full h-full object-cover object-center"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
               
               {/* Call to Action */}
               <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-red-300 mb-2">Future School CBSE</p>
                  <h3 className="serif text-2xl mb-4 leading-tight">Admissions Open for <br/> 2026–2027</h3>
                  <Link 
                    to="/admissions" 
                    onClick={closePopup}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#c0392b] text-white font-bold text-[0.65rem] uppercase tracking-widest rounded-lg hover:bg-[#a93226] transition-all hover:gap-3"
                  >
                    Register Now <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
