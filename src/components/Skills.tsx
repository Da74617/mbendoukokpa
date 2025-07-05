import React from 'react';

const Skills = () => {
  const webSkills = [
    { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' }
  ];

  const automationSkills = [
    { name: 'Arduino/Microcontrôleurs', level: 80, color: 'bg-teal-500' },
    { name: 'Programmation C/C++', level: 75, color: 'bg-indigo-500' },
    { name: 'Capteurs et Actionneurs', level: 85, color: 'bg-purple-500' },
    { name: 'Systèmes Embarqués', level: 70, color: 'bg-pink-500' },
    { name: 'Automatisme Industriel', level: 80, color: 'bg-red-500' },
    { name: 'Contrôle Moteur', level: 75, color: 'bg-gray-600' }
  ];

  const tools = [
    'Visual Studio Code',
    'Arduino IDE',
    'Figma',
    'Photoshop',
    'Chrome DevTools',
    'Postman',
    'Vite',
    'Git/GitHub',
    'Proteus (Simulation)',
    'KiCad (PCB Design)',
    'Multimètre',
    'Oscilloscope'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies web et compétences en automatisme industriel pour créer des solutions complètes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Web Development Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              Développement Web
            </h3>
            <div className="space-y-6">
              {webSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              Automatisme & Électronique
            </h3>
            <div className="space-y-6">
              {automationSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Outils & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="text-gray-800 font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Formation Continue Web
            </h4>
            <p className="text-gray-700">
              Toujours en apprentissage des dernières technologies web, 
              frameworks modernes et meilleures pratiques du développement front-end.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Expertise Automatisme
            </h4>
            <p className="text-gray-700">
              Spécialisé dans la conception de systèmes automatisés, 
              programmation de microcontrôleurs et intégration de capteurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;