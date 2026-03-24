import imgContact from '../assets/pic-assets/Secondary.jpg'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="relative h-60 md:h-80 rounded-[2rem] overflow-hidden mb-16 shadow-2xl border-8 border-white group">
          <img src={imgContact} alt="Contact Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-red-900/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="serif text-4xl md:text-6xl text-white font-normal drop-shadow-xl">Get in <em className="not-italic opacity-70 italic font-light">Touch</em></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Address</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              No.85, Pillaiyar Koil Street,<br/>
              Solur, Ambur – 635814,<br/>
              Tamil Nadu, India
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">
              +91 99628 26465<br/>
              +91 99628 26466<br/>
              <span className="text-xs text-gray-400">Office Hours: 9:00 AM - 4:00 PM</span>
            </p>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">
              futureschooloffice@gmail.com<br/>
              sureshfutureschool@yahoo.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-red-900 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-transparent text-red-700 font-bold rounded-lg border-2 border-red-700 hover:bg-red-50 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
