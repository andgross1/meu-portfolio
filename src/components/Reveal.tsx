import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number; // Permite atrasar a animação de elementos específicos, se necessário
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cria o observador
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se o elemento entrou na tela, marcamos como visível
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Paramos de observar para que a animação aconteça apenas uma vez
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15, // Dispara quando 15% do elemento estiver visível
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
}