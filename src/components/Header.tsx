export function Header() {
  return (
    <header className="grid grid-cols-4 items-center py-8 px-8 md:px-16 w-full max-w-7xl mx-auto">
      
      <div className="font-bold text-xl tracking-tight text-brand-900 justify-self-start">
        Gross®
      </div>
      
      <a href="#inicio" className="text-center text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors">
        Home
      </a>
      <a href="#projetos" className="text-center text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors">
        Projetos
      </a>
      <a href="#contato" className="text-center text-sm font-medium text-brand-700 hover:text-brand-500 transition-colors">
        Contato
      </a>
      
    </header>
  )
}