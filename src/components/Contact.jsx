import imgContact from '../assets/pic-assets/Secondary.jpg'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="relative h-60 md:h-80 rounded-3xl overflow-hidden mb-16 shadow-lg border-8 border-white group">
          <img src={imgContact} alt="Contact Campus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-[#c0392b]/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="serif text-4xl md:text-6xl text-white drop-shadow-2xl">Get in <span className="opacity-70 italic font-light">Touch</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-6">📍</div>
            <h3 className="serif text-xl text-gray-900 mb-3">Address</h3>
            <p className="text-gray-500 leading-relaxed text-[0.65rem] font-bold uppercase tracking-widest">
              No.85, Pillaiyar Koil Street,<br/>
              Solur, Ambur – 635814,<br/>
              Tamil Nadu, India
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-6">📞</div>
            <h3 className="serif text-xl text-gray-900 mb-3">Phone</h3>
            <p className="text-gray-500 text-[0.65rem] font-bold uppercase tracking-widest leading-loose">
              +91 99628 26465<br/>
              +91 99628 26466<br/>
              <span className="text-[0.55rem] text-gray-300 font-black">Office Hours: 8:00 AM - 4:30 PM</span>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0392b] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-6">✉️</div>
            <h3 className="serif text-xl text-gray-900 mb-3">Email</h3>
            <p className="text-gray-500 text-[0.65rem] font-bold uppercase tracking-widest leading-loose">
              futureschooloffice@gmail.com<br/>
              sureshfutureschool@yahoo.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50/50 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto border border-gray-100">
          <h3 className="serif text-2xl text-[#c0392b] mb-8 text-center">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl text-[0.65rem] font-bold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-[#c0392b] transition-all"
              />
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl text-[0.65rem] font-bold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-[#c0392b] transition-all"
              />
            </div>
            <input 
              type="text" 
              placeholder="SUBJECT" 
              className="w-full px-5 py-4 border border-gray-200 rounded-xl text-[0.65rem] font-bold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-[#c0392b] transition-all"
            />
            <textarea 
              rows="5" 
              placeholder="YOUR MESSAGE" 
              className="w-full px-5 py-4 border border-gray-200 rounded-xl text-[0.65rem] font-bold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-[#c0392b] transition-all"
            ></textarea>
            <button 
              type="submit"
              className="w-full px-8 py-5 bg-[#c0392b] text-white font-bold text-[0.7rem] tracking-widest uppercase rounded-xl shadow-lg shadow-red-900/10 hover:bg-[#a93226] transition-all hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
