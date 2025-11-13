import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Productivity app with real-time collaboration",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with data visualization",
      tech: ["JavaScript", "Chart.js", "API"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
                <a href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
