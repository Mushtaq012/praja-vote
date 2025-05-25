import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Praja Vote</h3>
            <p className="mb-4">
              A secure voting system based on Zero-Knowledge Proofs, designed to ensure
              transparency and privacy in the democratic process.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="praja-vote/" className="hover:text-orange-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="praja-vote/documents" className="hover:text-orange-300 transition-colors duration-300">
                  Documents
                </Link>
              </li>
              <li>
                <a
                  href={`${BASE_URL}#contact`}
                  className="hover:text-orange-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
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

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-blue-500 text-center">
          <p>© {currentYear} Praja Vote Research Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
