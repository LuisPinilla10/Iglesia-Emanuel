import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
           
            <img 
              src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
              alt="Nuestra iglesia" 
              className="rounded-xl shadow-2xl"
            />
          
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Nuestra historia</h2>
            <p className="text-gray-700 mb-4">
              La Iglesia Emanuel de Panamá comenzó su andadura en 2011, con humildes encuentros de adoración y comunidad en la casa del Pastor Park.
              Desde esos inicios, nos hemos convertido en un vibrante hogar donde personas de diversos grupos étnicos de Panamá se congregan para adorar a Dios.
            </p>
            <p className="text-gray-700 mb-6">
              En la Iglesia Emanuel, nos aferramos firmemente a los principios de Solo Cristo, Solo el Reino de Dios y Solo la llenura del Espíritu Santo. Nos dedicamos a ser testigos del cumplimiento de la Palabra del Señor, participando activamente en la evangelización mundial
            </p>
            <button className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition">
              Conoce nuestro equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;