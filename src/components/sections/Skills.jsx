import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillIcon from './Skillicon';
import { skills } from '../../data/skills';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Technologies and tools I've mastered throughout my journey as a full-stack developer.
          </p>
        </motion.div>
        
        {/* 3D Skill Orbit */}
        <div 
          ref={ref}
          className="relative h-96 mt-[10%] mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: 'spring' }}
            className="absolute w-full h-full perspective-1000"
          >
            <div className="skill-orbit w-full h-full transform-style-3d animate-rotate-slow">
              {skills.map((skill, index) => (
                <SkillIcon 
                  key={index}
                  skill={skill}
                  index={index}
                  total={skills.length}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Grid Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="bg-gray-800/40 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 border border-gray-700 group-hover:border-indigo-500/30 group-hover:bg-gray-800/60 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                <div className="flex flex-col items-center justify-center">
                  <div 
                    className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110"
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                  />
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500/20 pointer-events-none transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-900/20 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-900/20 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;