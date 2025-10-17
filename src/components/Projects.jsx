import React, { useState } from "react";
import Modal from "./Modal.jsx";
import { projects } from '../data/projectsData.js'; // Ruta de los datos de cada proyecto

export default function ProjectGalleryReact() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects py-20 md:py-52 mt-auto mx-6 sm:mx-6 md:mx-8 lg:mx-80" id="projects">
      <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
        <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
        Proyectos
      </h2>

      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
          <div
            className="project-card bg-[#1a1a2e] rounded-xl border border-[#2c2c40] overflow-hidden shadow-2xl"
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image w-full h-64 object-cover"
            />

            <div className="project-info p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <h3 className="text-gray-500 text-sm text-justify mb-4">{project.date}</h3>
              <p className="text-gray-500 text-base text-justify mb-4">{project.description}</p>

              <div className="project-tech-icons flex space-x-3 mb-4 ">
                {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 bg-gray-800 border-2 border-cyan-800 rounded-full  px-2 py-1 text-xs shadow-md"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="w-5 h-5"
                  />
                  <span>{tech.name}</span>
                </div>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  className="w-1/2 project-btn bg-[#8a3ffc] text-white font-bold py-2 px-4 rounded-lg text-center transition duration-200 hover:bg-[#6e2bd8] no-underline cursor-pointer"
                  onClick={() => handleCardClick(project)}
                >
                  <span className="flex items-center justify-evenly">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                    Ver más
                  </span>
                </a>

                <a
                  href={project.url}
                  className="w-1/2 project-btn bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg text-center transition duration-200 hover:bg-gray-300 no-underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-evenly">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  Preview
                  </span>
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />
    </section>
  );
}
