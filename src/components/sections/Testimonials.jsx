import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="Trusted by professionals and teams" 
          alignment="center"
        />
        
        <div 
          ref={ref}
          className="relative max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-10 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute top-8 left-8 text-purple-500 dark:text-purple-400 opacity-10">
                <Quote className="h-24 w-24" />
              </div>
              
              <div className="relative z-10">
                <Quote className="h-8 w-8 text-purple-500 dark:text-purple-400 mb-6" />
                <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.text}"
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-purple-100 dark:border-purple-900/50 shadow-sm"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white rounded-full p-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-purple-500 dark:text-purple-400 font-medium">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;