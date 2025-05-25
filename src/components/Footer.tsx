import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Praja Vote</h3>
            <p className="mb-4">
              A secure voting system based on Zero-Knowledge Proofs, designed to ensure
              transparency and privacy in the democratic process.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-300 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/documents" className="hover:text-orange-300 transition-colors duration-300">
                  Documents
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-300 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Cyber Security Lab, Sri Lanka Institute of Information Technology</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+94 77 555 7937</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>prejavote@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-500 text-center">
          <p>© {currentYear} Praja Vote Research Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;