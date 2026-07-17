import { useState } from 'react';
import { Reveal } from './Reveal';
import { projectsData, type Project } from '../data/projects';

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);

  return (
    <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto" id="projetos">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-brand-900)]">
            Projetos Selecionados.
          </h2>
        </div>
      </Reveal>

      {/* Grid forçado: 1 coluna no mobile, 2 colunas no md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Lado Esquerdo */}
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <Reveal key={project.id} delay={index * 150}>
              <button
                onMouseEnter={() => setActiveProject(project)}
                onClick={() => setActiveProject(project)}
                className={`text-left w-full group flex flex-col gap-2 py-6 border-b border-[var(--color-brand-100)] transition-opacity duration-300 ${
                  activeProject.id === project.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-brand-900)] transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-[var(--color-brand-500)] uppercase tracking-wider">
                  {project.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Lado Direito - Agora garantimos altura mínima e exibição */}
        <div className="sticky top-24">
          <Reveal delay={300}>
            <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden bg-[var(--color-brand-100)] shadow-xl">
              <img
                key={activeProject.id}
                src={activeProject.image}
                alt={activeProject.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-900)] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-lg drop-shadow-md">
                  {activeProject.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}