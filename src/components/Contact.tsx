import { useForm } from '@formspree/react';
import { Reveal } from './Reveal';

export function Contact() {
  const [state, handleSubmit] = useForm("xdaqewrl");
  const whatsappUrl = "https://wa.me/5511985189411?text=Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.";

  return (
    <section className="bg-brand-900 text-white py-24" id="contato">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        
        <Reveal>
          <div className="w-full h-100 mb-24 overflow-hidden rounded-lg">
             <img 
               src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop" 
               alt="André Gross" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
             />
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 w-full">
            <Reveal delay={200}>
              <h2 className="text-4xl font-bold mb-8">Vamos conversar?</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input type="text" name="name" required placeholder="Nome" className="w-full bg-brand-700 border-none rounded-lg p-4 text-white placeholder-gray-300" />
                <input type="email" name="email" required placeholder="Email" className="w-full bg-brand-700 border-none rounded-lg p-4 text-white placeholder-gray-300" />
                <textarea name="message" required rows={4} placeholder="Mensagem" className="w-full bg-brand-700 border-none rounded-lg p-4 text-white placeholder-gray-300"></textarea>
                
                <button type="submit" disabled={state.submitting} className="bg-brand-500 py-4 rounded-full font-bold hover:bg-brand-300 transition-colors">
                  {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </Reveal>
          </div>

          <div className="md:w-1/2 w-full flex flex-col gap-6 pt-12">
            <Reveal delay={400}>
              <p className="text-xl text-gray-300">Aberto para novas oportunidades e desafios que exigem soluções técnicas e elegantes.</p>
              <a href={whatsappUrl} className="inline-block mt-8 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition-colors">
                Chamar no WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}