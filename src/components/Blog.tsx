import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import {ImageWithFallback} from './fallback/ImageWithFallback';

export function Blog() {
  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1665848383782-1ea74efde68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NjE3MzAxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Best CCTV Installation Tips',
      date: 'Oct 25, 2025',
      description: 'Learn the essential tips for installing CCTV cameras to maximize security coverage.'
    },
    {
      image: 'https://images.unsplash.com/photo-1761064392859-2bfa734e9f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTcxMDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Modern Security Solutions',
      date: 'Oct 20, 2025',
      description: 'Discover the latest advances in security technology and how they protect you.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzYxNzkxOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Home Security Checklist',
      date: 'Oct 15, 2025',
      description: 'A comprehensive guide to securing your home and protecting your family.'
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">
            Blog & Article
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest security tips, industry news, and expert advice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
