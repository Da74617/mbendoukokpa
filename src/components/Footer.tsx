import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">MBENDOU KOKPA</h3>
            <p className="text-gray-300 mb-4">
              Développeur Front-End passionné par la création d'expériences web exceptionnelles.
            </p>
            <p className="text-gray-400 text-sm">
              Étudiant en Informatique Industrielle et Automatisme
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>darelkokpa@email.com</p>
              <p>+237 6 79 87 16 47</p>
              <p>Cameroun</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Fait avec</span>
            <Heart size={16} className="text-red-500" />
            <span>et</span>
            <Code size={16} className="text-blue-500" />
            <span>par MBENDOU KOKPA GRUMBERT DAREL</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;