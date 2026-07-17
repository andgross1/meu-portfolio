export function Contact() {
  // Link gerado com o seu número e mensagem pré-definida
  const whatsappUrl = "https://wa.me/5511985189411?text=Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.";

  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto" id="contato">
      
      <div className="w-full h-[400px] md:h-[600px] bg-gray-200 mb-24 overflow-hidden rounded-lg">
         <img 
           src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop" 
           alt="André Gross" 
           className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" 
         />
      </div>

      <div className="flex flex-col md:flex-row gap-16 items-end">
        
        {/* Lado Esquerdo: Formulário */}
        <div className="md:w-1/2 w-full">
          {/* ATENÇÃO: Substitua o link abaixo pelo seu endpoint do Formspree */}
          <form action="https://formspree.io/f/xdaqewrl" method="POST" className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider">Nome</label>
                {/* Atributo 'name' é obrigatório para o Formspree funcionar */}
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Seu nome" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--color-text-primary)] transition-colors" 
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="seu@email.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--color-text-primary)] transition-colors" 
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider">Mensagem</label>
              <textarea 
                name="message"
                required
                rows={4} 
                placeholder="Como posso ajudar no seu projeto?" 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--color-text-primary)] transition-colors resize-none"
              ></textarea>
            </div>
            
            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                type="submit" 
                className="bg-[var(--color-text-primary)] text-white font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition-colors"
              >
                Enviar Mensagem
              </button>
              
              {/* Botão do WhatsApp */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium py-3 px-8 rounded-full hover:bg-[#20bd5a] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </form>
        </div>

        {/* Lado Direito: Linha Decorativa do Layout */}
        <div className="md:w-1/2 w-full flex flex-col justify-end pb-4 border-b-2 border-[var(--color-text-primary)]">
           <p className="text-[var(--color-text-secondary)] text-right text-sm">
             Aberto para novas oportunidades e conexões.
           </p>
        </div>
        
      </div>
    </section>
  );
}