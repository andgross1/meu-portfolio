export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 mb-32 px-4" id="inicio">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--color-text-primary)] mb-1">
        André Gross.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-text-secondary)] mb-10 tracking-tight opacity-70">
        Criando soluções digitais reais.
      </h2>
      
      <div className="flex gap-4">
        <a 
          href="#projetos" 
          className="bg-[var(--color-text-primary)] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Projetos
        </a>
        <a 
          href="#contato" 
          className="bg-gray-100 text-[var(--color-text-primary)] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Contato
        </a>
      </div>
    </section>
  )
}