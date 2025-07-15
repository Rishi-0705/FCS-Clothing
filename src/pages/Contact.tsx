import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      href: 'https://wa.me/15551234567',
      description: 'Quick responses, instant communication',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@fcsclothing',
      href: 'https://instagram.com/fcsclothing',
      description: 'Follow us for latest designs and updates',
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@fcsclothing.com',
      href: 'mailto:hello@fcsclothing.com',
      description: 'For detailed inquiries and support',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
    },
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      subtitle: 'Weekend: 10AM - 4PM',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      subtitle: 'Serving customers worldwide',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      value: '+1 (555) 123-4567',
      subtitle: 'Available during business hours',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
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
                className={`block p-8 rounded-2xl border ${method.bgColor} ${method.borderColor} hover:border-opacity-50 transition-all duration-300 group`}
              >
                <div className={`flex items-center justify-center w-16 h-16 ${method.bgColor} rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`h-8 w-8 ${method.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {method.title}
                </h3>
                <p className={`text-lg font-medium ${method.color} mb-3 text-center`}>
                  {method.value}
                </p>
                <p className="text-gray-400 text-sm text-center">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Information
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-xl mb-6 mx-auto">
                  <info.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-purple-400 font-medium mb-1">
                  {info.value}
                </p>
                <p className="text-gray-400 text-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
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
                answer: 'We accept PNG, JPG, PDF, and AI files. For best results, we recommend high-resolution images (300 DPI or higher).',
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
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