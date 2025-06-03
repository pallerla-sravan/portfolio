// import React from 'react';
// import { motion } from 'framer-motion';
// import { HashLoader } from 'react-spinners';

// const LoadingScreen = ({ isLoading }) => {
//   if (!isLoading) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
//     >
//       <div className="text-center">
//         <HashLoader
//           color="#7C3AED"
//           loading={true}
//           size={60}
//           aria-label="Loading"
//         />
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mt-4 text-gray-600 dark:text-gray-300"
//         >
//           Loading amazing things...
//         </motion.p>
//       </div>
//     </motion.div>
//   );
// };

// export default LoadingScreen;




import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const name = "SRAVAN";
  const letters = name.split('');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="text-7xl font-bold text-indigo-500 transition-all duration-300"
                style={{
                  animation: `bounce 0.5s ease ${index * 0.1}s infinite`,
                  opacity: progress > (index + 1) * (100 / letters.length) ? 1 : 0.3,
                  transform: progress > (index + 1) * (100 / letters.length) ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-indigo-500 mt-2 font-mono">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;