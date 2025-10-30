import { motion } from 'motion/react';
import { Shield, Camera, Lock, Headphones } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: Shield,
      title: 'Security Guard',
      description: 'Professional security personnel trained to protect your property and assets.',
      bgColor: 'bg-slate-500'
    },
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Advanced surveillance systems for comprehensive monitoring and recording.',
      bgColor: 'bg-slate-600'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Modern access management systems to control entry and maintain security.',
      bgColor: 'bg-blue-900'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance and emergency response for peace of mind.',
      bgColor: 'bg-slate-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${feature.bgColor} text-white p-8 rounded-xl cursor-pointer`}
            >
              <feature.icon className="w-12 h-12 mb-4" />
              <h3 className="text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
