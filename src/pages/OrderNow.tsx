import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, FileText, Upload, MapPin, CreditCard } from 'lucide-react';
import Footer from '../components/Footer';

const OrderNow = () => {
  const formSteps = [
    { icon: FileText, title: 'Name', description: 'Your full name' },
    { icon: ShoppingBag, title: 'Jersey Size', description: 'Select your preferred size' },
    { icon: Upload, title: 'Design Upload', description: 'Upload your jersey design' },
    { icon: MapPin, title: 'Address', description: 'Delivery address' },
    { icon: CreditCard, title: 'Payment Proof', description: 'Upload payment confirmation' },
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
            Place Your Order
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Ready to create your custom jersey? Click the button below to fill out the form with your details and design requirements.
          </motion.p>

          {/* Form Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {formSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-3 mx-auto">
                  <step.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-gray-400 text-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Button */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Order Form</h2>
            <p className="text-gray-400 mb-6">
              Click the button below to place your order.
            </p>

            <a
              href="https://forms.gle/PdApro9EuG4gXB2W7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Open Order Form
            </a>

            {/* Order Info + Help */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Order Information</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Processing time: 7-14 business days</li>
                  <li>• High-quality materials guaranteed</li>
                  <li>• Free design consultation included</li>
                  <li>• Satisfaction guarantee</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Need Help?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Have questions about your order? Contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-400">WhatsApp: +1 (555) 123-4567</p>
                  <p className="text-purple-400">Email: orders@fcsclothing.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderNow;
