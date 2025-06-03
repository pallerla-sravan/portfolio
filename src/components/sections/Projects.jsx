import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const [visibleProjects] = useState(3);
  const navigate = useNavigate();
  
  const handleShowMore = () => {
    navigate('/projects');
  };

  return (
    <section id="projects" className="py-20 bg-[#060B16]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and the technologies I've mastered along the way.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600/10 text-indigo-400 rounded-lg
                     hover:bg-indigo-600/20 transition-all duration-300 font-medium"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;