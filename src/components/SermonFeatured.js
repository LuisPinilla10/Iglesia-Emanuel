import React from 'react';

const SermonFeatured = ({ sermon }) => {
  return (
    <div className="bg-amber-50 rounded-xl overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:w-2/3">
          <div className="relative pb-[56.25%]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src={sermon.videoUrl}
              title={sermon.title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="p-6 md:w-1/3">
          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded mb-4 inline-block">
            {sermon.category}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{sermon.title}</h2>
          <p className="text-gray-600 mb-4">{sermon.preacher}</p>
          <p className="text-gray-700 mb-4">{sermon.description}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {sermon.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonFeatured;