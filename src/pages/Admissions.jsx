import AdmissionsComponent from '../components/Admissions'
import AdmissionQueryForm from '../components/AdmissionQueryForm'
import imgAdmit from '../assets/pic-assets/admission.png'

const Admissions = () => {
  return (
    <main className="pt-20 bg-gray-50 pb-20 overflow-hidden">
      {/* Existing admissions info */}
      <AdmissionsComponent />
      
      {/* New attractive inquiry form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative mb-12">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white group">
                <img src={imgAdmit} alt="Admissions" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-red-900/10" />
              </div>
              <div className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-red-700 text-white rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl z-20">
                <p className="text-[0.65rem] md:text-sm font-black tracking-widest uppercase leading-none mb-1">Apply Today</p>
                <p className="text-[0.55rem] md:text-[0.6rem] opacity-70 leading-none">Limited Seats Available</p>
              </div>
            </div>
            
            <h2 className="serif text-4xl font-normal text-gray-900 mb-6 leading-tight">Take the first step towards a <em className="text-red-600 not-italic">bright future.</em></h2>
            <p className="text-base font-medium text-gray-500 mb-8 leading-relaxed">
              Join Future School CBSE and give your child the foundation they need to succeed in a rapidly changing world. Our modern curriculum and expert faculty ensure holistic development.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-700 flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Submit Inquiry</h4>
                  <p className="text-sm text-gray-600">Fill out our quick online form</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-700 flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Campus Tour</h4>
                  <p className="text-sm text-gray-600">Visit us and experience our facilities</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-700 flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Entrance Test</h4>
                  <p className="text-sm text-gray-600">Simple assessment for standard placement</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <AdmissionQueryForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Admissions
