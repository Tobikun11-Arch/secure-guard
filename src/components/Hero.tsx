import React from 'react';
import {motion} from 'motion/react';
import {ImageWithFallback} from './fallback/ImageWithFallback';

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
          >
            <motion.h1
              className="text-gray-900 mb-6"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
            >
              Professional Security Services You Can Trust
            </motion.h1>
            <motion.p
              className="text-gray-600 mb-8"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.3}}
            >
              Protecting what matters most with cutting-edge technology and
              experienced professionals. Your safety is our priority, 24/7.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
            >
              <div>
                <div className="text-blue-600 mb-1">15</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">25</div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </div>
              <div>
                <div className="text-blue-600 mb-1">180+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
            </motion.div>

            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.5}}
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.2}}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761064392859-2bfa734e9f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTcxMDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security Professional"
                className="w-full h-auto"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-xl shadow-lg max-w-[200px]"
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: 1}}
            >
              <div className="text-2xl mb-1">24/7</div>
              <div className="text-sm opacity-90">Monitoring Service</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
