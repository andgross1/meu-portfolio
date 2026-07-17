import { useState } from 'react';
import { projectsData, type Project } from '../data/projects';

export function Projects() {
  // O TypeScript agora sabe que activeProject segue a interface Project
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);

  return (
    <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto border-t border-gray-200" id="projetos">
      
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
          Projetos Selecionados.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Lado Esquerdo: Lista de Projetos */}
        <div className="lg:w-5/12 flex flex-col gap-6">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onMouseEnter={() => setActiveProject(project)}
              onClick={() => setActiveProject(project)}
              className={`text-left group flex flex-col gap-2 py-6 border-b border-gray-200 transition-opacity duration-300 ${
                activeProject.id === project.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] transition-transform duration-300 group-hover:translate-x-2">
                {project.title}
              </h3>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
                {project.category}
              </span>
            </button>
          ))}
        </div>

        {/* Lado Direito: Visualizador de Imagem Dinâmico */}
        <div className="lg:w-7/12 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden bg-gray-100 group">
          <img
            key={activeProject.id}
            src={activeProject.image}
            alt={activeProject.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg drop-shadow-md">
              {activeProject.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}