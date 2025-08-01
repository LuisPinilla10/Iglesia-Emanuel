import React from 'react';

const SermonCard = ({ sermon }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative pb-[56.25%]">
        <img 
          src={sermon.thumbnail} 
          alt={sermon.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {sermon.category}
          </span>
          <span className="text-gray-500 text-sm">{sermon.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{sermon.title}</h3>
        <p className="text-gray-600 mb-4">{sermon.preacher}</p>
        <p className="text-gray-700 mb-4">{sermon.description}</p>
        <button className="text-amber-700 hover:text-amber-600 font-medium transition flex items-center">
          Ver mensaje
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SermonCard;