import React from 'react';
import { ExternalLink, Github, Calendar, Users, Scissors, Zap, Shield, Droplets, Code } from 'lucide-react';

const Projects = () => {
  const webProjects = [
    {
      title: 'Portfolio Personnel',
      description: 'Création de portfolios personnels modernes et responsives pour présenter les compétences et projets de développeurs.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: Users,
      category: 'Web',
      features: [
        'Design responsive et moderne',
        'Animations fluides',
        'Optimisation SEO',
        'Interface utilisateur intuitive'
      ]
    },
    {
      title: 'Site de Mariage Dynamique',
      description: 'Développement d\'un site web interactif pour célébrer un mariage avec galerie photos, RSVP et informations événementielles.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      icon: Calendar,
      category: 'Web',
      features: [
        'Galerie photos interactive',
        'Système de RSVP',
        'Timeline du mariage',
        'Intégration Google Maps'
      ]
    },
    {
      title: 'Système de Réservation - Salon',
      description: 'Application web complète pour la gestion des réservations d\'un salon de coiffure avec calendrier interactif.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: Scissors,
      category: 'Web',
      features: [
        'Calendrier de réservation',
        'Gestion des clients',
        'Notifications automatiques',
        'Interface d\'administration'
      ]
    }
  ];

  const automationProjects = [
    {
      title: 'Lave-Main Automatique',
      description: 'Système automatisé de lave-main avec détection de présence, distribution automatique de savon et d\'eau, séchage intégré.',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'Capteurs IR', 'Pompes', 'Relais'],
      icon: Droplets,
      category: 'Automatisme',
      features: [
        'Détection automatique des mains',
        'Distribution contrôlée de savon',
        'Système de séchage intégré',
        'Économie d\'eau et d\'énergie'
      ]
    },
    {
      title: 'Portail Automatique à Keypad',
      description: 'Système de contrôle d\'accès automatisé avec clavier numérique, gestion des codes d\'accès et ouverture/fermeture motorisée.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Microcontrôleur', 'Keypad', 'Moteur', 'EEPROM'],
      icon: Shield,
      category: 'Automatisme',
      features: [
        'Authentification par code PIN',
        'Mémorisation des codes d\'accès',
        'Contrôle moteur bidirectionnel',
        'Sécurité anti-intrusion'
      ]
    }
  ];

  const allProjects = [...webProjects, ...automationProjects];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web et automatisme industriel
          </p>
        </div>

        {/* Web Projects Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
              <Code size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Projets Web</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={`web-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Automation Projects Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Projets d'Automatisme</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationProjects.map((project, index) => (
              <ProjectCard key={`auto-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Intéressé par une collaboration en développement web ou automatisme ? N'hésitez pas à me contacter !
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Me Contacter
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
    {/* Project Image */}
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.category === 'Web' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {project.category}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <ExternalLink size={18} />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
            <Github size={18} />
          </button>
        </div>
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6">
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
          project.category === 'Web'
            ? 'bg-gradient-to-br from-blue-500 to-purple-500'
            : 'bg-gradient-to-br from-green-500 to-blue-500'
        }`}>
          <project.icon size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Features */}
      <ul className="space-y-1 mb-4">
        {project.features.map((feature: string, idx: number) => (
          <li key={idx} className="text-sm text-gray-600 flex items-center">
            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
              project.category === 'Web' ? 'bg-blue-500' : 'bg-green-500'
            }`}></span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string, idx: number) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.category === 'Web'
                ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700'
                : 'bg-gradient-to-r from-green-50 to-blue-50 text-green-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;