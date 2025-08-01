import React, { useState } from 'react';

const LayoutHeader = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black sticky top-0 z-50" style={{display: 'block'}}>
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
              src="assets/logo.png" alt="Logo de Iglesia Emanuel de Panamá" className="w-14 h-14 rounded-full" // Aplicamos las clases de tamaño y forma aquí
          />
          <h1 className="text-xl font-bold">Iglesia Emanuel de Panamá</h1>
        </div>

        {/* Responsive para dispositivos moviles */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-amber-500 transition">Inicio</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-amber-500 transition">Quiénes Somos</button></li>
            <li><button onClick={() => setCurrentPage('events')} className="hover:text-amber-500 transition">Eventos</button></li>
            <li><button onClick={() => setCurrentPage('sermons')} className="hover:text-amber-500 transition">Mensajes</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-amber-500 transition">Contacto</button></li>
          {
            /* 
            <li><button onClick={() => setCurrentPage('versiculo')} className="hover:text-amber-200 transition">Versiculo</button></li>
            */
          }  
          
          </ul>
        </nav>

        <button className="hidden md:block bg-white hover:bg-amber-600 px-4 py-2 rounded-lg font-medium transition ">
          Ofrenda
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-amber-800">
          <button 
            onClick={() => {
              setCurrentPage('home');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
          >
            Inicio
          </button>
          <button 
            onClick={() => {
              setCurrentPage('about');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
          >
            Quiénes Somos
          </button>
          <button 
            onClick={() => {
              setCurrentPage('events');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
          >
            Eventos
          </button>
          <button 
            onClick={() => {
              setCurrentPage('sermons');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
          >
            Mensajes
          </button>
          <button 
            onClick={() => {
              setCurrentPage('contact');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-amber-700"
          >
            Contacto
          </button>
          <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-amber-600 hover:bg-amber-500">
            Donar
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;

// DONE