import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, image, technologies, githubLink, liveLink } = project;

  return (
    <div
      className="relative bg-[#0A1120] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:shadow-indigo-500/30 hover:-translate-y-2 max-w-3xl min-h-[700px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Cover */}
      <div className="h-[500px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0A1120]/80 backdrop-blur-sm px-8 py-6">
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-base mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-3 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm font-medium bg-indigo-500/10 text-indigo-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-base">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 
                  9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-
                  3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.
                  069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.
                  35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 
                  1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 
                  2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 
                  1.705.115 2.504.337 1.909-1.296 
                  2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 
                  1.028 1.595 1.028 2.688 0 3.848-2.339 
                  4.695-4.566 4.943.359.309.678.92.678 
                  1.855 0 1.338-.012 2.419-.012 
                  2.747 0 .268.18.58.688.482A10.019 
                  10.019 0 0022 12.017C22 6.484 
                  17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Code
          </a>

          <span className="text-gray-600">•</span>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
