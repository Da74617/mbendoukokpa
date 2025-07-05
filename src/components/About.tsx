import React from 'react';
import { Code, Cpu, Globe, Heart, Zap, Settings } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Création d\'applications web modernes et responsives'
    },
    {
      icon: Cpu,
      title: 'Informatique Industrielle',
      description: 'Étudiant en automatisme et systèmes industriels'
    },
    {
      icon: Zap,
      title: 'Automatisme',
      description: 'Conception de systèmes automatisés : lave-main, portails automatiques'
    },
    {
      icon: Settings,
      title: 'Systèmes Embarqués',
      description: 'Programmation de microcontrôleurs et interfaces utilisateur'
    },
    {
      icon: Globe,
      title: 'Projets Diversifiés',
      description: 'Portfolio web, sites événementiels, systèmes de réservation'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Passionné par l\'innovation technologique et l\'automatisation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            À Propos de Moi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mon parcours entre développement web et automatisme industriel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Mon Parcours
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Je suis étudiant en <strong>Informatique Industrielle et Automatisme</strong>, 
                passionné par l'innovation technologique et la création de solutions automatisées.
              </p>
              <p>
                Mon expertise combine deux domaines complémentaires : le <strong>développement front-end</strong> 
                pour créer des interfaces web modernes, et l'<strong>automatisme industriel</strong> pour 
                concevoir des systèmes intelligents comme des lave-mains automatiques et portails 
                commandés par keypad.
              </p>
              <p>
                Cette double compétence me permet de créer des solutions complètes, alliant 
                interfaces utilisateur intuitives et systèmes automatisés performants.
              </p>
              <p>
                Mes projets web incluent des portfolios personnels, un site de mariage dynamique, 
                et un système de réservation pour salon de coiffure, démontrant ma polyvalence 
                technologique.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;