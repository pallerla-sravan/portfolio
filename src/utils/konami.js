const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export const initKonamiCode = () => {
  let index = 0;

  const keydownHandler = (e) => {
    const key = e.key;
    
    if (key === konamiCode[index]) {
      index++;
      
      if (index === konamiCode.length) {
        // Reset index and run the callback
        index = 0;
        callback();
      }
    } else {
      // Reset index if the sequence is broken
      index = 0;
    }
  };

  document.addEventListener('keydown', keydownHandler);

  return () => {
    document.removeEventListener('keydown', keydownHandler);
  };
};