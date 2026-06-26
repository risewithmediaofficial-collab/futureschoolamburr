import { useLocation, Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { memo } from 'react'

/* ─── Breadcrumb Configuration ─── */
const breadcrumbConfig = {
  '/': { label: 'Home', parent: null },
  '/about': { label: 'About', parent: '/' },
  '/programs': { label: 'Programs', parent: '/' },
  '/kindergarten': { label: 'Kindergarten', parent: '/programs' },
  '/primary-level': { label: 'Primary', parent: '/programs' },
  '/secondary-level': { label: 'Secondary', parent: '/programs' },
  '/senior-secondary': { label: 'Senior Secondary', parent: '/programs' },
  '/admissions': { label: 'Admissions', parent: '/' },
  '/apply': { label: 'Apply for Admission', parent: '/admissions' },
  '/gallery': { label: 'Gallery', parent: '/' },
  '/contact': { label: 'Contact', parent: '/' },
  '/mission-vision': { label: 'Mission & Vision', parent: '/about' },
  '/chairman-desk': { label: 'Chairman Desk', parent: '/about' },
  '/principal-desk': { label: 'Principal Desk', parent: '/about' },
  '/instructors': { label: 'Faculty', parent: '/about' },
  '/affiliations': { label: 'Affiliations', parent: '/about' },
  '/teaching-methodology': { label: 'Teaching Methodology', parent: '/about' },
  '/social-initiatives': { label: 'Social Initiatives', parent: '/' },
  '/timings': { label: 'Timings', parent: '/' },
  '/activities': { label: 'Activities', parent: '/' },
  '/transportation': { label: 'Transportation', parent: '/' },
  '/events': { label: 'Events', parent: '/' },
  '/events/investiture-ceremony-2025': { label: 'Investiture Ceremony 2025', parent: '/events' },
}

/* ─── Build Breadcrumb Path ─── */
function getBreadcrumbPath(pathname) {
  const path = []
  let current = pathname

  while (current && breadcrumbConfig[current]) {
    path.unshift({ path: current, ...breadcrumbConfig[current] })
    current = breadcrumbConfig[current].parent
  }

  // Always include home
  if (path.length === 0 || path[0].path !== '/') {
    path.unshift({ path: '/', label: 'Home', parent: null })
  }

  return path
}

/* ─── Breadcrumb Component ─── */
const Breadcrumb = memo(() => {
  const location = useLocation()
  const breadcrumbs = getBreadcrumbPath(location.pathname)

  // Don't show breadcrumb on home page or admin routes
  if (location.pathname === '/' || location.pathname.startsWith('/admin')) {
    return null
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-[80px] z-40" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center gap-2 overflow-x-auto">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1

            return (
              <div key={crumb.path} className="flex items-center gap-2 flex-shrink-0">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}

                {isLast ? (
                  <span className="text-sm font-semibold text-gray-900 px-2">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-sm font-medium text-gray-600 hover:text-[#c0392b] px-2 py-1 rounded-md transition-colors duration-200"
                  >
                    {index === 0 ? (
                      <div className="flex items-center gap-1.5">
                        <Home className="w-4 h-4" />
                        <span>{crumb.label}</span>
                      </div>
                    ) : (
                      crumb.label
                    )}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
})

Breadcrumb.displayName = 'Breadcrumb'

export default Breadcrumb
