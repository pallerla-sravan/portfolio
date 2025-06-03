import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const updateCursorType = () => {
    const target = document.elementFromPoint(position.x, position.y);
    if (target) {
      const computed = window.getComputedStyle(target).cursor;
      setIsPointer(computed === 'pointer');
    }
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const interval = setInterval(updateCursorType, 100);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, [position]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none w-8 h-8 rounded-full border-2 border-purple-500 mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none w-2 h-2 bg-white rounded-full mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor;
