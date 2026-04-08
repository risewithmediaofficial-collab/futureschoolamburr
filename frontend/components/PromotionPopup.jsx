import { useState, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import admissionBanner from '../assets/admission-banner.jpeg'

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
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[450px] w-full border-[10px] border-white ring-1 ring-black/5"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-gray-900 border border-gray-100 shadow-md hover:bg-[#c0392b] hover:text-white transition-all hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image container */}
            <div className="relative bg-gray-50 flex flex-col">
              <img
                src={admissionBanner}
                alt="Admissions Open 2026-27"
                className="w-full h-auto block"
                onError={(e) => {
                  e.target.style.display = 'none'
                  console.error('Popup image failed to load.')
                }}
              />

              {/* Action area below image if desired, or overlaying button */}
              <div className="p-6 bg-white flex justify-center border-t border-gray-50">
                <Link
                  to="/admissions"
                  onClick={closePopup}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#c0392b] text-white font-bold text-[0.75rem] uppercase tracking-widest rounded-xl hover:bg-[#a93226] transition-all hover:gap-4 shadow-xl shadow-red-900/20 active:scale-95 group w-full justify-center"
                >
                  Apply For Admission <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
