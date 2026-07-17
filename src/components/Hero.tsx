import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4" id="inicio">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-900 mb-1">
          André Gross.
        </h1>
      </Reveal>
      
      <Reveal delay={200}>
        <h2 className="text-4xl md:text-6xl font-bold text-brand-700 mb-10 tracking-tight opacity-90">
          Criando soluções digitais reais.
        </h2>
      </Reveal>
      
      <Reveal delay={400}>
        <div className="flex gap-4">
          <a 
            href="#projetos" 
            className="bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors"
          >
            Projetos
          </a>
          <a 
            href="#contato" 
            className="bg-transparent border border-brand-300 text-brand-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-100 transition-colors"
          >
            Contato
          </a>
        </div>
      </Reveal>
    </section>
  )
}