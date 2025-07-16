import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '../utils/scrollUtils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Order Now', path: '/order' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={scrollToTop}
            className="flex items-center space-x-3 group focus-ring"
          >
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center group-hover:bg-focus-silver transition-colors duration-300">
              <span className="text-black font-display text-lg font-bold">FO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-condensed text-xl font-bold tracking-wider group-hover:text-focus-silver transition-colors duration-300">
                FOCUS OFFICIAL
              </span>
              <span className="text-white/60 font-condensed text-xs tracking-widest uppercase">
                T-SHIRT SPECIALIST
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={scrollToTop}
                className={`px-4 py-2 font-condensed font-semibold text-sm tracking-wider uppercase transition-all duration-300 focus-ring ${
                  location.pathname === item.path
                    ? 'text-black bg-white'
                    : 'text-white hover:text-black hover:bg-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-focus-silver transition-colors focus-ring p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className={`block px-3 py-2 font-condensed font-semibold text-base tracking-wider uppercase transition-all duration-300 focus-ring ${
                    location.pathname === item.path
                      ? 'text-black bg-white'
                      : 'text-white hover:text-black hover:bg-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;