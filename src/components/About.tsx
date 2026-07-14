import { useState } from 'react';
import { experiencesData, type Experience } from '../data/experiences';

function ExperienceItem({ title, period, company, description }: Experience) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-2 text-left hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <span className="font-bold text-[var(--color-text-primary)] group-hover:text-gray-600 transition-colors">
            {title}
          </span>
          <svg 
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span className="text-[var(--color-text-secondary)] text-sm whitespace-nowrap">{period}</span>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden px-4 -mx-4">
          <div className="flex flex-col gap-2 mt-2">
            <span className="font-medium text-sm text-[var(--color-brand-purple)]">{company}</span>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto" id="sobre">
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-24">
        <div className="md:w-1/3">
          <h3 className="text-lg font-bold text-[var(--color-text-primary)]">Sobre meu trabalho</h3>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-6 text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            Sou o André Gross, desenvolvedor focado em construir produtos digitais significativos
            que unem clareza, velocidade e interação fluida. Minha paixão é trazer ideias de
            frontend à vida com polimento e intenção.
          </p>
          <p>
            Eu trabalho majoritariamente com React, TypeScript e Tailwind CSS, sempre buscando 
            elevar a acessibilidade e a precisão em cada solução. Projetos limpos e atenção aos 
            detalhes refletem o meu cuidado com a estrutura do código.
          </p>
          <p>
            Cada projeto de portfólio aqui é real — um reflexo de envolvimento profundo, 
            resolução de problemas e impacto duradouro. Cada passo visa entregar interfaces 
            limpas e experiências intuitivas para usuários reais.
          </p>
          
          <div className="mt-4">
            <span className="font-['Dancing_Script',cursive] text-4xl text-[var(--color-text-primary)] -rotate-3 inline-block">
              André Gross
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t border-gray-200">
        {/* Renderização dinâmica da lista de experiências usando .map() */}
        {experiencesData.map((experience) => (
          <ExperienceItem 
            key={experience.id}
            id={experience.id}
            title={experience.title}
            period={experience.period}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
}