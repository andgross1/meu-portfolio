import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative py-8 px-6 md:px-12 w-full max-w-7xl mx-auto text-sm font-medium">
      
      {/* --- LAYOUT DESKTOP --- */}
      {/* Usamos flex e justify-between com 4 elementos para distribuí-los perfeitamente */}
      <div className="hidden md:flex w-full justify-between items-center text-[var(--color-text-secondary)]">
        <div className="font-bold text-xl tracking-tight text-[var(--color-text-primary)]">
          Gross®
        </div>
        <a href="#inicio" className="hover:text-[var(--color-text-primary)] transition-colors">
          Início
        </a>
        <a href="#projetos" className="hover:text-[var(--color-text-primary)] transition-colors">
          Projetos
        </a>
        <a href="#contato" className="hover:text-[var(--color-text-primary)] transition-colors">
          Contato
        </a>
      </div>

      {/* --- LAYOUT MOBILE (CELULAR) --- */}
      <div className="flex md:hidden w-full justify-between items-center">
        <div className="font-bold text-xl tracking-tight text-[var(--color-text-primary)] z-20">
          Gross®
        </div>
        <button 
          className="z-20 p-2 text-[var(--color-text-primary)] font-bold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {/* --- MENU DROPDOWN MOBILE --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden z-10 border-t border-gray-100">
          <a href="#inicio" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Início
          </a>
          <a href="#projetos" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Projetos
          </a>
          <a href="#contato" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Contato
          </a>
        </div>
      )}

    </header>
  );
}