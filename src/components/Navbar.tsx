import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300); // delay to allow home page to render
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600"
          >
            Praja Vote
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/' ? 'text-orange-500' : 'text-blue-600 hover:text-orange-500'
            }`}
          >
            Home
          </Link>
          <Link
            to="/documents"
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/documents'
                ? 'text-orange-500'
                : 'text-blue-600 hover:text-orange-500'
            }`}
          >
            Documents
          </Link>
          <a
            href="#contact"
            className="font-medium text-blue-600 hover:text-orange-500 transition-colors duration-300"
            onClick={handleContactClick}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white w-full shadow-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 font-medium text-blue-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/documents"
              className="py-2 font-medium text-blue-600 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Documents
            </Link>
            <a
              href="#contact"
              className="py-2 font-medium text-blue-600 hover:text-orange-500 transition-colors duration-300"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
