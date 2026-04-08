/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';

import apiClient from '../utils/apiClient'

const AdmissionQueryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await apiClient.applications.submitAdmission({
        parentName: formData.parentName,
        studentName: formData.studentName,
        phone: formData.phone,
        email: formData.email,
        currentGrade: formData.grade,
        message: formData.message
      });
      setIsSubmitted(true);
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        email: '',
        grade: '',
        message: ''
      });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-red-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold font-heading text-gray-900 mb-4">Admission Enquiry</h3>
          <p className="text-gray-600 max-w-lg mx-auto">
            Give your child the best start in life. Fill out the form below and our admissions team will get back to you shortly.
          </p>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h4 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h4>
            <p className="text-green-700">
              Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-green-600 hover:text-green-800 font-medium underline"
            >
              Submit another inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-red-600" />
                  Parent/Guardian Name *
                </label>
                <input 
                  type="text" 
                  name="parentName"
                  required
                  disabled={loading}
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors bg-gray-50 focus:bg-white disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              {/* Student Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-red-600" />
                  Student Name *
                </label>
                <input 
                  type="text" 
                  name="studentName"
                  required
                  disabled={loading}
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors bg-gray-50 focus:bg-white disabled:opacity-50"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-red-600" />
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  disabled={loading}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors bg-gray-50 focus:bg-white disabled:opacity-50"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail size={16} className="text-red-600" />
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  disabled={loading}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors bg-gray-50 focus:bg-white disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              {/* Grade */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <BookOpen size={16} className="text-red-600" />
                  Grade Applying For *
                </label>
                <select 
                  name="grade"
                  required
                  disabled={loading}
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors bg-gray-50 focus:bg-white appearance-none disabled:opacity-50"
                >
                  <option value="" disabled>Select a grade</option>
                  <optgroup label="Kindergarten">
                    <option value="pre-kg">Pre-KG</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                  </optgroup>
                  <optgroup label="Primary (I-V)">
                    <option value="1">Class I</option>
                    <option value="2">Class II</option>
                    <option value="3">Class III</option>
                    <option value="4">Class IV</option>
                    <option value="5">Class V</option>
                  </optgroup>
                  <optgroup label="Secondary (VI-X)">
                    <option value="6">Class VI</option>
                    <option value="7">Class VII</option>
                    <option value="8">Class VIII</option>
                    <option value="9">Class IX</option>
                    <option value="10">Class X</option>
                  </optgroup>
                  <optgroup label="Senior Secondary (XI-XII)">
                    <option value="11">Class XI</option>
                    <option value="12">Class XII</option>
                  </optgroup>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-red-600" />
                  Any Questions or Comments?
                </label>
                <textarea 
                  name="message"
                  rows="4"
                  disabled={loading}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-colors bg-gray-50 focus:bg-white resize-none disabled:opacity-50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              type="submit"
              disabled={loading}
              className={`btn-micro w-full py-4 bg-gradient-to-r from-[#c0392b] to-red-500 text-white font-bold rounded-lg text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all flex justify-center items-center gap-2 hover:-translate-y-1 active:translate-y-0 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send size={20} />
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </motion.button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdmissionQueryForm;
