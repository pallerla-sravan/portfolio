import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LaptopModel from '../3d/LaptopModel';
import SectionTitle from '../ui/SectionTitle';
import { Code, Book, Coffee, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interestCards = [
    {
      icon: <Book className="h-6 w-6 text-purple-600" />,
      title: 'Learning',
      description: 'CSE at Anurag University',
      bgColor: 'bg-purple-50 dark:bg-purple-900/30'
    },
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: 'Coding',
      description: 'Full-Stack Development',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/30'
    },
    {
      icon: <Coffee className="h-6 w-6 text-purple-600" />,
      title: 'Hobbies',
      description: 'Coffee & Coding',
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },
    {
      icon: <Heart className="h-6 w-6 text-purple-600" />,
      title: 'Passion',
      description: 'Creating & Learning',
      bgColor: 'bg-pink-50 dark:bg-pink-900/30'
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Passionate student developer on a journey to create amazing web experiences" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 h-full shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                My <span className="text-purple-600">Journey</span>
              </h3>
              
              <div className="space-y-5 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">
                  I started my academic journey with a diploma in Electrical and Electronics Engineering (EEE) at Government Polytechnic, Nalgonda. During my diploma, I developed a strong foundation in problem-solving and analytical thinking.
                </p>
                
                <p className="leading-relaxed">
                  Later, I transitioned into Computer Science and Engineering at Anurag University, Hyderabad, where I discovered my true passion—building full-stack web applications and exploring innovative tech solutions.
                </p>
                
                <p className="leading-relaxed">
                  When I'm not coding or attending lectures, you'll find me participating in hackathons, contributing to open-source projects, or experimenting with the latest web technologies.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {interestCards.map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                      className={`${card.bgColor}    ml-negative-11 sm:ml-6 rounded-xl border p-5 border-gray-200 dark:border-gray-600 transform hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md overflow-clip`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
                          {card.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{card.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 pl-11">{card.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 h-[500px] relative"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <LaptopModel position={[0, -1, 0]} scale={1.2} />
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate
                  autoRotateSpeed={2}
                  enablePan={false}
                />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;