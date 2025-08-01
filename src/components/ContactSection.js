import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información</h3>
              <p className="mb-6">Estamos aquí para servirte y responder tus preguntas.</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <p>Calle 50, Bella Vista, Ciudad de Panamá</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <p>+507 1234-5678</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <p>info@iglesiapanamavida.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Envía un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full px-4 py-2 bg-amber-800 border border-amber-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-amber-300 text-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full px-4 py-2 bg-amber-800 border border-amber-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-amber-300 text-white"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mensaje" 
                    rows="4" 
                    className="w-full px-4 py-2 bg-amber-800 border border-amber-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-amber-300 text-white"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-lg font-medium transition w-full"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;