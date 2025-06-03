const SkillIcon = ({ skill, index, total }) => {
  // Calculate position in 3D space based on index and total number of skills
  const angle = (index / total) * 2 * Math.PI;
  const radius = 150; // Radius of the orbit
  
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
  
  return (
    <div
      className="absolute skill-item transform-style-3d"
      style={{
        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${-angle * (180 / Math.PI)}deg)`,
        transformOrigin: `center center ${-radius}px`,
      }}
    >
      <div 
        className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full
                 shadow-lg transform transition-transform duration-300 hover:scale-125
                 border-2 border-indigo-500/30"
      >
        <div 
          className="text-3xl text-indigo-400"
          dangerouslySetInnerHTML={{ __html: skill.icon }}
        />
      </div>
    </div>
  );
};

export default SkillIcon;