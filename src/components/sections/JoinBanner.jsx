import { Link } from 'react-router-dom'
import bnrJoin from '../../assets/pic-assets/banner-2026-5-1.png'

export default function JoinBanner() {
  return (
    <section className="relative h-[450px] overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img src={bnrJoin} alt="Join" className="w-full h-full object-cover grayscale-[0.2] brightness-75" />
        <div className="absolute inset-0 bg-red-900/30" />
      </div>

      <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white p-8 md:p-14 max-w-xl text-gray-900 border border-gray-100 shadow-xl rounded-2xl mx-auto md:mx-0">
           <div>
              <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">Get Started Today</p>
              <h2 className="serif text-4xl md:text-5xl font-normal leading-[1.1] mb-8 text-gray-900">Join with us for a <em className="text-red-600 not-italic">Better Future.</em></h2>
              <Link to="/contact" className="inline-flex px-10 py-4 bg-transparent text-red-700 text-sm font-bold uppercase tracking-widest rounded-lg border-2 border-red-700 hover:bg-red-50 transition-all shadow-lg hover:shadow-red-700/10">
                Contact Us →
              </Link>
           </div>
        </div>
      </div>
    </section>
  )
}
