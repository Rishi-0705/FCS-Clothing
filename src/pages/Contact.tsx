import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { BsWhatsapp, BsTelegram } from 'react-icons/bs';
import Footer from '../components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: BsWhatsapp,
      title: 'WHATSAPP',
      value: '+60 10-442 1026',
      href: 'https://api.whatsapp.com/send?phone=60104421026&text=Saya%20nak%20order%20jersey',
      description: 'Quick responses, instant communication',
    },
    {
      icon: Instagram,
      title: 'INSTAGRAM',
      value: '@fcsclothing',
      href: 'https://www.instagram.com/fcs.clothing__/',
      description: 'Follow us for latest designs and updates',
    },
    {
      icon: BsTelegram,
      title: 'TELEGRAM',
      value: 'Design Focus Official',
      href: 'https://t.me/designfocus12',
      description: 'Join our community to discover more designs',
    },
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: 'BUSINESS HOURS',
      value: 'Mon - Sat: 9AM - 6PM',
      subtitle: 'Weekend: 10AM - 4PM',
    },
    {
      icon: MapPin,
      title: 'LOCATION',
      value: '37, Jalan Meru Bistari A9, Medan Meru Bestari, 31200 Ipoh, Perak',
      subtitle: 'Serving customers nationwide',
    },
    {
      icon: Phone,
      title: 'PHONE SUPPORT',
      value: '+60 10-442 1026',
      subtitle: 'Available during business hours',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-wider"
          >
            GET IN TOUCH
          </motion.h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 font-body max-w-3xl mx-auto"
          >
            Have questions about our custom jerseys? Need help with your order? We're here to help you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block p-8 bg-focus-gray border border-white/10 hover:border-white/30 transition-all duration-300 group focus-ring"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white text-black mb-6 mx-auto group-hover:bg-focus-silver transition-colors duration-300">
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-condensed font-bold text-white mb-2 text-center tracking-wider">
                  {method.title}
                </h3>
                <p className="text-lg font-body font-medium text-white mb-3 text-center">
                  {method.value}
                </p>
                <p className="text-white/70 font-body text-sm text-center">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-focus-gray">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-wider">
              BUSINESS INFORMATION
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Everything you need to know about reaching us and our operating hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black border border-white/10 p-8 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white text-black mb-6 mx-auto">
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-condensed font-bold text-white mb-2 tracking-wider">
                  {info.title}
                </h3>
                <p className="text-white font-body font-medium mb-1">
                  {info.value}
                </p>
                <p className="text-white/70 font-body text-sm">
                  {info.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-white/70 font-body text-lg">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does it take to create a custom jersey?',
                answer: 'Our typical turnaround time is 7-14 business days, depending on the complexity of the design and current order volume.',
              },
              {
                question: 'What file formats do you accept for designs?',
                answer: 'We accept PNG, JPG, and PDF files.',
              },
              {
                question: 'Do you offer bulk discounts?',
                answer: 'Yes! We offer competitive pricing for team orders and bulk purchases. Contact us for a custom quote.',
              },
              {
                question: 'Can I see a preview before production?',
                answer: 'Absolutely! We provide digital mockups for approval before starting production on your custom jersey.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-focus-gray border border-white/10 p-6"
              >
                <h3 className="text-lg font-condensed font-bold text-white mb-3 tracking-wider">
                  {faq.question}
                </h3>
                <p className="text-white/70 font-body">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;