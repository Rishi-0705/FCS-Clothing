import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Truck, Palette, ArrowRight } from 'lucide-react';
import SparkleBackground from '../components/SparkleBackground';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Design Free',
      description: 'Premium materials and expert craftsmanship',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Bring your unique vision to life',
    },
  ];

  const sampleJerseys = [
    {
      id: 1,
      image: 'https://i.postimg.cc/3wz2kr0N/fcs1.jpg',
      title: '',
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/KvVcS161/fcs2.jpg',
      title: '',
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/MGsq5XmZ/fcs3.jpg',
      title: '',
    },
    {
      id: 4,
      image: 'https://i.postimg.cc/y8jH6W5h/fcs4.jpg',
      title: '',
    },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-black">
  <ParticleBackground />
  <SparkleBackground className="!scale-150" />

  {/* === DECORATIVE LAYERS START === */}
  {/* Blurry blobs */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 opacity-15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-400 opacity-10 rounded-full filter blur-2xl animate-blob"></div>
  </div>

  {/* Sparkles */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="sparkle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
        
        {/* Decorative Top Ornament */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-white to-purple-500 rounded-full shadow-lg"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
          >
            FCS Clothing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-200 mb-10 leading-relaxed"
          >
            Premium Custom Jerseys On Demand. Crafted for performance and pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/order"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/collection"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              View Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative Bottom Shapes */}
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse hidden sm:block" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/30 rounded-full blur-2xl animate-pulse hidden sm:block" />
      </section>


      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose FCS Clothing?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-lg mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Latest Creations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore some of our recent custom jersey designs that showcase our attention to detail and quality.
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
                <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <img
                    src={jersey.image}
                    alt={jersey.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200">
                    <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              View Full Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Johnson",
                role: "",
                content: "The quality exceeded our expectations! Our team jerseys look professional and feel amazing to wear.",
                rating: 5
              },
              {
                name: "Sarah Williams",
                role: "",
                content: "Fast delivery and excellent customer service. The custom design came out exactly as we envisioned.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "",
                content: "FCS Clothing delivered premium quality jerseys that our players love. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
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