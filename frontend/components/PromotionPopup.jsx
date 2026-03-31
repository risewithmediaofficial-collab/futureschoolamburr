import { useState, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import admissionBanner from '../assets/admission-banner.jpg'

export default function PromotionPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 3 seconds exactly as requested
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsVisible(false)
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
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[500px] w-full border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-[#c0392b] transition-all hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image container */}
            <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
               <img 
                 src={admissionBanner} 
                 alt="Admissions Open 2026-27" 
                 className="w-full h-full object-cover object-center"
                 onError={(e) => {
                   e.target.style.display = 'none'
                   console.error('Popup image failed to load.')
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
               
               {/* Call to Action content */}
               <div className="absolute bottom-7 left-7 right-7 text-white">
                  <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-red-300 mb-2 drop-shadow-sm">Future School — CBSE</p>
                  <h3 className="serif text-3xl mb-5 leading-tight drop-shadow-sm font-medium">Admissions are <br/> Now Open</h3>
                  <Link 
                    to="/admissions" 
                    onClick={closePopup}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#c0392b] text-white font-bold text-[0.7rem] uppercase tracking-widest rounded-xl hover:bg-[#a93226] transition-all hover:gap-4 shadow-lg active:scale-95"
                  >
                    Enquire Now <ExternalLink className="w-4 h-4" />
                  </Link>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
