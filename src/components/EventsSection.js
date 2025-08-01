import React from 'react';

const EventsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Próximos Eventos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a nosotros en estos momentos especiales de adoración, enseñanza y comunión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-amber-50 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80" 
              alt="Retiro espiritual" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Retiro Espiritual</h3>
              <p className="text-gray-600 mb-4">15-17 de Marzo, 2024</p>
              <p className="text-gray-700 mb-4">
                Un fin de semana de renovación y encuentro con Dios en las montañas.
              </p>
              <button className="text-amber-700 hover:text-amber-600 font-medium transition">
                Más información →
              </button>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Concierto de alabanza" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Noche de Alabanza</h3>
              <p className="text-gray-600 mb-4">24 de Marzo, 2024</p>
              <p className="text-gray-700 mb-4">
                Una noche especial de adoración con nuestra banda y coro.
              </p>
              <button className="text-amber-700 hover:text-amber-600 font-medium transition">
                Más información →
              </button>
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Servicio comunitario" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-2">Servicio Comunitario</h3>
              <p className="text-gray-600 mb-4">30 de Marzo, 2024</p>
              <p className="text-gray-700 mb-4">
                Ayudemos a nuestra comunidad con alimentos y ropa.
              </p>
              <button className="text-amber-700 hover:text-amber-600 font-medium transition">
                Más información →
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition">
            Ver todos los eventos
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;