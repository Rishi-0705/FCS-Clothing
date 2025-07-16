import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

const Collection = () => {
  const [selectedJersey, setSelectedJersey] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const jerseys = [
    {
      id: 1,
      title: 'SCHOOL JERSEY',
      images: [
        'https://i.postimg.cc/k4cHkNF3/sek1.jpg',
        'https://i.postimg.cc/XNshL8Y9/sek2.jpg',
      ],
      category: 'EDUCATION',
    },
    {
      id: 2,
      title: 'TOWARDS GLORY',
      images: [
        'https://i.postimg.cc/ryNxWngN/tcs10.jpg',
        'https://i.postimg.cc/zfhRf0VW/tcs11.jpg',
      ],
      category: 'COMPETITION',
    },
    {
      id: 3,
      title: 'TOWARDS GLORY',
      images: [
        'https://i.postimg.cc/7LPYF9Sw/tcs12.jpg',
        'https://i.postimg.cc/nV9cfC9j/tcs13.jpg',
      ],
      category: 'COMPETITION',
    },
    {
      id: 4,
      title: 'DANAU RATTLERS',
      images: [
        'https://i.postimg.cc/rFv42Bpc/danau3.jpg',
        'https://i.postimg.cc/85PJbDZd/danau2.jpg',
        'https://i.postimg.cc/4xkYSp8x/danau1.jpg',
      ],
      category: 'TEAM',
    },
    {
      id: 5,
      title: 'SKUSES',
      images: [
        'https://i.postimg.cc/Twpm6fnd/skuses1.jpg',
        'https://i.postimg.cc/SR9MndZH/skuses2.jpg',
        'https://i.postimg.cc/PrmDh6vw/skuses3.jpg',
      ],
      category: 'TEAM',
    },
    {
      id: 6,
      title: 'FOOTBALL JERSEY',
      images: [
        'https://i.postimg.cc/HWbn7rWG/01.jpg',
        'https://i.postimg.cc/rpdFymZP/02.jpg',
        'https://i.postimg.cc/mDCLMns3/03.jpg',
      ],
      category: 'SPORTS',
    },
  ];

  const openModal = (jersey) => {
    setSelectedJersey(jersey);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedJersey(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedJersey) {
      setCurrentImageIndex((prev) => 
        prev === selectedJersey.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedJersey) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedJersey.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-wider"
          >
            OUR COLLECTION
          </motion.h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 font-body max-w-3xl mx-auto"
          >
            Explore our gallery of custom-made jerseys. Click on any jersey to view more details.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jerseys.map((jersey, index) => (
              <motion.div
                key={jersey.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -3 }}
                onClick={() => openModal(jersey)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-white border border-white/10 hover:border-white/30 transition-all duration-300">
                  <img
                    src={jersey.images[0]}
                    alt={jersey.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200">
                    <span className="inline-block px-3 py-1 bg-white text-black font-condensed font-bold text-xs tracking-wider uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {jersey.category}
                    </span>
                    <h3 className="text-white font-condensed font-bold text-lg tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {jersey.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              CUSTOMER REVIEWS
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              See what our customers are saying about their custom jerseys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "HANIF LUKMAN",
                role: "",
                content: "Outstanding quality and attention to detail. Our team looks professional!",
                rating: 5
              },
              {
                name: "NICHOLAS JOHNSON",
                role: "",
                content: "Quick turnaround time and excellent communication throughout the process.",
                rating: 5
              },
              {
                name: "ZUBAIRI",
                role: "",
                content: "The custom designs exceeded our expectations. Highly recommend Focus Official!",
                rating: 5
              },
              {
                name: "EMILY SALVET",
                role: "",
                content: "Perfect fit and amazing quality. The jerseys look exactly like our design.",
                rating: 5
              },
              {
                name: "KUMARAVEL",
                role: "",
                content: "Professional service from start to finish. Will definitely order again!",
                rating: 5
              },
              {
                name: "YOR XIN YI",
                role: "",
                content: "Fantastic experience! The team was helpful and the final product was perfect.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-black border border-white/10 p-6"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-white">★</span>
                  ))}
                </div>
                <p className="text-white/80 font-body mb-4 text-sm italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-condensed font-bold text-sm tracking-wider">{testimonial.name}</p>
                  <p className="text-white/60 font-condensed text-xs tracking-wider">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedJersey && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-focus-gray border border-white/20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black text-white transition-colors focus-ring"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image Container */}
              <div className="relative">
                <img
                  src={selectedJersey.images[currentImageIndex]}
                  alt={selectedJersey.title}
                  className="w-full h-96 md:h-[500px] object-contain bg-white"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/70 hover:bg-black text-white transition-colors focus-ring"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/70 hover:bg-black text-white transition-colors focus-ring"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedJersey.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Jersey Info */}
              <div className="p-4">
                <span className="inline-block px-3 py-1 bg-white text-black font-condensed font-bold text-sm tracking-wider uppercase mb-3">
                  {selectedJersey.category}
                </span>
                <h3 className="text-xl font-condensed font-bold text-white mb-2 tracking-wider">
                  {selectedJersey.title}
                </h3>
                <p className="text-white/70 font-body text-sm">
                  Navigate through images to view this jersey from different angles.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Collection;