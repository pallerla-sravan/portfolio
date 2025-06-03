import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const AllProjects = () => {
  return (
    <section className="py-20 bg-[#060B16] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            All <span className="text-indigo-500">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive showcase of my work, featuring projects that demonstrate
            my skills, creativity, and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;