import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Residential Security',
      description: 'Comprehensive home security solutions including alarm systems, CCTV monitoring, and professional guards.',
      bgColor: 'bg-slate-600'
    },
    {
      title: 'Commercial Security',
      description: 'Advanced security systems designed for businesses, offices, and commercial properties with 24/7 monitoring.',
      bgColor: 'bg-blue-900'
    },
    {
      title: 'Event Security',
      description: 'Professional security staff and crowd management for events, conferences, and special occasions.',
      bgColor: 'bg-slate-500'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">
            We Provide The Best Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive range of security services ensures complete protection for your home, 
            business, and special events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`${service.bgColor} text-white p-8 rounded-xl`}
            >
              <h3 className="text-white mb-4">{service.title}</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-white hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
