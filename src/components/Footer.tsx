import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToTop } from '../utils/scrollUtils';
import { BsWhatsapp, BsTelegram } from 'react-icons/bs';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/fcs.clothing__/',
      label: 'Instagram',
    },
    {
      icon: BsWhatsapp,
      href: 'https://api.whatsapp.com/send?phone=60104421026&text=Saya%20nak%20order%20jersey',
      label: 'WhatsApp',
    },
    {
      icon: BsTelegram,
      href: 'https://t.me/designfocus12',
      label: 'Telegram',
    },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Order Now', path: '/order' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">FCS Clothing</span>
            </div>
            <p className="text-gray-400 text-sm">
              Aesthetic custom jerseys crafted with precision & style. Your
              vision, our expertise.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-purple-400/10 rounded-lg text-purple-400 hover:bg-purple-400/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 FCS Clothing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
