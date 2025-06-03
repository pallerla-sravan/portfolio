import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import ParticleBackground from '../ui/ParticleBackground';
import { SiLeetcode } from "react-icons/si";


const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block bg-purple-600/10 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium">
              Full-Stack Developer
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Sravan</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                'I build web applications', 
                2000,
                'I create mobile experiences', 
                2000,
                'I design user interfaces', 
                2000,
                'I solve complex problems',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume-1.pdf"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
              download
            >
              Download CV
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex space-x-4"
          >
            <a 
              href="https://github.com/pallerla-sravan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sravan-pallerla-95604a288/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sravanpallerla1234@example.com" 
              className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://leetcode.com/u/sravanpallerla" 
              className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
          >
            <ArrowDown className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;