import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState('idle');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    emailjs.send(
      'service_mesravan',
      'template_o19s82u',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '7wmX09a0MXUfQsw5u'
    )
    .then(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 3000);
    })
    .catch(() => {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to chat? Feel free to reach out!" 
        />
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Information</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
                    title: 'Email',
                    content: (
                      <a 
                        href="mailto:sravanpallerla1234@gmail.com" 
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        sravanpallerla1234@gmail.com
                      </a>
                    ),
                    bg: 'bg-purple-100 dark:bg-purple-900/30'
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
                    title: 'Phone',
                    content: '+91 9100055995',
                    bg: 'bg-blue-100 dark:bg-blue-900/30'
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
                    title: 'Location',
                    content: 'Hyderabad, Ramanthapur',
                    bg: 'bg-indigo-100 dark:bg-indigo-900/30'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-3 ${item.bg} rounded-xl shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Currently available for freelance projects and full-time opportunities. Let's create something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, type: 'spring', delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="your name"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="your email id"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.01 }}
                className="mb-6"
              >
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.01 }}
                className="mb-6"
              >
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </motion.div>
              
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full flex items-center justify-center py-4 px-6 rounded-xl text-white font-medium transition-all duration-300 ${
                    formStatus === 'submitting' 
                      ? 'bg-gradient-to-r from-purple-400 to-indigo-400 dark:from-purple-700 dark:to-indigo-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/20'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
                
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-xl text-sm"
                  >
                    Your message has been sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-xl text-sm"
                  >
                    Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;