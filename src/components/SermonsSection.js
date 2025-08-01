import React, { useState } from 'react';
import sermons from '../mock/sermons';
import SermonFeatured from './SermonFeatured';
import SermonCard from './SermonCard';

const SermonsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = ['Todos', ...new Set(sermons.map(sermon => sermon.category))];
  const filteredSermons = selectedCategory === 'Todos' 
    ? sermons 
    : sermons.filter(sermon => sermon.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Mensajes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mensajes que transforman vidas y edifican
          </p>
        </div>

                  {/*Inicio de la carga JSON Sermons */}
                  
        <div className="mb-8">
          <SermonFeatured sermon={sermons[0]}  />
          
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === category ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.slice(1).map(sermon => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SermonsSection;