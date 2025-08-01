import React from 'react';

const ScheduleSection = () => {
  const schedules = [
    {
      day: 'Domingos',
      time: '11:00 AM - 1:00 PM',
      title: 'Culto Dominical',
      description: 'Nuestro servicio dominical con alabanza, mensaje y forum.',
      icon: '✝️'
    },
    {
      day: 'Lunes',
      time: '10:00 AM - 11:00 AM',
      title: 'Culto de ',
      description: 'Descripcion...',
      icon: '📖'
    },
    {
      day: 'Miercoles',
      time: '10:00 AM - 11:00 AM',
      title: 'Culto de ',
      description: 'Descripcion...',
      icon: '🙏'
    },
    {
      day: 'Viernes',
      time: '10:00 AM - 11:00 AM',
      title: 'Especialistas y Universitarios',
      description: 'Descripcion...',
      icon: '🧑‍🤝‍🧑'
    },
    {
      day: 'Sábados',
      time: '10:00 AM - 11:00 AM',
      title: 'Culto nucleo',
      description: 'Descripcion...',
      icon: '🧑‍🤝‍🧑'
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Nuestros Horarios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a nosotros en estos momentos especiales de adoración y comunión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schedules.map((schedule, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-4">
                {schedule.icon}
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">{schedule.day}</h3>
              <p className="text-xl font-semibold text-gray-700 mb-2">{schedule.time}</p>
              <h4 className="text-lg font-medium text-gray-800 mb-2">{schedule.title}</h4>
              <p className="text-gray-600">{schedule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;