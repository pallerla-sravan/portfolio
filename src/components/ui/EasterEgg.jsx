import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { initKonamiCode } from '../../utils/konami';

const EasterEgg = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cleanup = initKonamiCode(() => {
      setIsVisible(true);
    });

    return cleanup;
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-lg w-full"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Close easter egg"
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            <div className="text-center">
              <div className="mb-4 text-5xl">🎮</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                You found the secret!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                You've discovered my hidden easter egg by using the Konami Code! You must be a true gamer or developer. I like to add these little surprises to my projects - it shows attention to detail.
              </p>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mb-6">
                <p className="text-sm text-purple-800 dark:text-purple-300 font-medium">
                  Fun fact: I used to be a competitive gamer before focusing on development. Gaming taught me teamwork and problem-solving skills that I use every day as a developer!
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Back to Portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
