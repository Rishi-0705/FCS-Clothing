import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Truck, Palette, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'DESIGN FREE',
      description: 'Premium materials and expert craftsmanship',
    },
    {
      icon: Truck,
      title: 'FAST DELIVERY',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Palette,
      title: 'FULLY CUSTOMIZABLE',
      description: 'Bring your unique vision to life',
    },
  ];

  const sampleJerseys = [
    {
      id: 1,
      image: 'https://i.postimg.cc/3wz2kr0N/fcs1.jpg',
      title: 'PERFORMANCE SERIES',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/KvVcS161/fcs2.jpg',
      title: 'ELITE COLLECTION',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/MGsq5XmZ/fcs3.jpg',
      title: 'PRO EDITION',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/y8jH6W5h/fcs4.jpg',
      title: 'CHAMPIONSHIP',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Geometric shapes */}
          <div className="geometric-shape"></div>
          <div className="geometric-shape"></div>
          <div className="geometric-shape"></div>
          
          {/* Sporty lines */}
          <div className="sporty-line"></div>
          <div className="sporty-line"></div>
          <div className="sporty-line"></div>
          
          {/* Pulsing rings */}
          <div className="pulsing-ring"></div>
          <div className="pulsing-ring"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-white mx-auto mb-6 flex items-center justify-center">
              <span className="text-black font-display text-3xl font-bold">FO</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-4 tracking-wider"
          >
            FOCUS OFFICIAL
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl font-condensed font-semibold text-white/80 mb-2 tracking-widest">
              T-SHIRT SPECIALIST
            </p>
            <div className="w-32 h-0.5 bg-white mx-auto"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl font-body text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Premium Custom Jerseys On Demand. Engineered for performance, crafted for champions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/order"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-condensed font-bold text-lg tracking-wider uppercase hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus-ring shadow-lg"
            >
              ORDER NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/collection"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-condensed font-bold text-lg tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus-ring"
            >
              VIEW COLLECTION
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-focus-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-wider">
              WHY CHOOSE US?
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship to deliver jerseys that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-black border border-white/10 p-8 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white text-black mb-6 mx-auto group-hover:bg-focus-silver transition-colors duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-condensed font-bold text-white mb-4 text-center tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-body text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-wider">
              LATEST CREATIONS
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Explore our recent custom jersey designs that showcase our attention to detail and quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleJerseys.map((jersey, index) => (
              <motion.div
                key={jersey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-white border border-white/10 hover:border-white/30 transition-all duration-300">
                  <img
                    src={jersey.image}
                    alt={jersey.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200">
                    <h3 className="text-white font-condensed font-bold text-lg tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {jersey.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/collection"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-condensed font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus-ring"
            >
              VIEW FULL COLLECTION
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-focus-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-wider">
              WHAT ATHLETES SAY
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "MARCUS JOHNSON",
                role: "TEAM CAPTAIN",
                content: "The quality exceeded our expectations! Our team jerseys look professional and feel amazing to wear.",
                rating: 5
              },
              {
                name: "SARAH WILLIAMS",
                role: "COACH",
                content: "Fast delivery and excellent customer service. The custom design came out exactly as we envisioned.",
                rating: 5
              },
              {
                name: "DAVID CHEN",
                role: "ATHLETIC DIRECTOR",
                content: "Focus Official delivered premium quality jerseys that our players love. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black border border-white/10 p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-white text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/80 font-body mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-condensed font-bold tracking-wider">{testimonial.name}</p>
                  <p className="text-white/60 font-condensed text-sm tracking-wider">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;