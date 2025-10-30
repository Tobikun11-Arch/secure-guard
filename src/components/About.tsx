import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './fallback/ImageWithFallback';

export function About() {
  const features = [
    '24 Hours Servillance',
    'Well Trained Security',
    'Strategic Support'
  ];

  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="bg-slate-600 text-white inline-block px-4 py-2 rounded-lg mb-4 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.div>
            <h2 className="text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the security industry, we provide comprehensive 
              security solutions tailored to your specific needs. Our team of professionals is 
              dedicated to ensuring the safety and protection of your property, assets, and people.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzYxNzkxOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Security System"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
