import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, FileText, Upload, MapPin, CreditCard } from 'lucide-react';
import Footer from '../components/Footer';

const OrderNow = () => {
  const formSteps = [
    { icon: FileText, title: 'NAME', description: 'Your full name' },
    { icon: ShoppingBag, title: 'JERSEY SIZE', description: 'Select your preferred size' },
    { icon: Upload, title: 'DESIGN UPLOAD', description: 'Upload your jersey design' },
    { icon: MapPin, title: 'ADDRESS', description: 'Delivery address' },
    { icon: CreditCard, title: 'PAYMENT PROOF', description: 'Upload payment confirmation' },
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
            PLACE YOUR ORDER
          </motion.h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 font-body max-w-3xl mx-auto mb-12"
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
                className="bg-focus-gray border border-white/10 p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white text-black mb-3 mx-auto">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-condensed font-bold text-sm mb-1 tracking-wider">{step.title}</h3>
                <p className="text-white/70 font-body text-xs">{step.description}</p>
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
            className="bg-focus-gray border border-white/10 p-8 text-center"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4 tracking-wider">ORDER FORM</h2>
            <p className="text-white/70 font-body mb-6">
              Click the button below to place your order.
            </p>

            <a
              href="https://forms.gle/PdApro9EuG4gXB2W7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-condensed font-bold tracking-wider uppercase hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus-ring shadow-lg"
            >
              OPEN ORDER FORM
            </a>

            {/* Order Info + Help */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-black border border-white/10 p-6">
                <h3 className="text-white font-condensed font-bold mb-4 tracking-wider">ORDER INFORMATION</h3>
                <ul className="space-y-2 text-white/70 font-body text-sm">
                  <li>• Processing time: 7-14 business days</li>
                  <li>• High-quality materials guaranteed</li>
                  <li>• Free design consultation included</li>
                  <li>• Satisfaction guarantee</li>
                </ul>
              </div>
              <div className="bg-black border border-white/10 p-6">
                <h3 className="text-white font-condensed font-bold mb-4 tracking-wider">NEED HELP?</h3>
                <p className="text-white/70 font-body text-sm mb-4">
                  Have questions about your order? Contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-white font-body">WhatsApp: +60 10-442 1026</p>
                  <p className="text-white font-body">Email: orders@focusofficial.com</p>
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