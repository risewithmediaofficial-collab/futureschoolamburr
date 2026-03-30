import { Link } from 'react-router-dom'
import bnrJoin from '../../assets/pic-assets/banner-2026-5-1.png'

export default function JoinBanner() {
  return (
    <section className="relative h-[450px] overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img src={bnrJoin} alt="Join" className="w-full h-full object-cover grayscale-[0.1] brightness-90 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-[#c0392b]/10" />
      </div>

      <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 md:px-12">
        <div className="bg-white p-10 md:p-14 max-w-xl text-gray-900 border border-gray-100 shadow-2xl rounded-3xl mx-auto md:mx-0">
           <div>
              <p className="text-[#c0392b] text-[0.6rem] font-black tracking-widest uppercase mb-6">Get Started Today</p>
              <h2 className="serif text-4xl md:text-5xl lg:text-5xl leading-tight mb-10 text-gray-900">
                Join with us for a <span className="text-[#c0392b]">Better Future.</span>
              </h2>
              <Link to="/contact" className="inline-flex px-10 py-5 bg-[#c0392b] text-white text-[0.7rem] font-bold uppercase tracking-widest rounded-xl hover:bg-[#a93226] transition-all shadow-xl shadow-red-900/10 hover:-translate-y-1">
                Contact Us Now
              </Link>
           </div>
        </div>
      </div>
    </section>
  )
}
