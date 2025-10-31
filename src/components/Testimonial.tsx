import React from 'react';
import {Quote, Star} from 'lucide-react';
import {ImageWithFallback} from './fallback/ImageWithFallback';

export function Testimonial() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1754494977436-a5c202306fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzZWN1cml0eXxlbnwxfHx8fDE3NjE3OTE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern Office Security"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-blue-900 text-white p-12 rounded-2xl relative">
            <div className="absolute top-8 right-8">
              <Quote className="w-16 h-16 text-blue-700 opacity-50" />
            </div>

            <div className="mb-6">
              <h3 className="text-white mb-4">
                Nothing Secures you Better Than Us
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                "The team at SecureGuard has been exceptional. Their
                professional approach and cutting-edge technology have given us
                complete peace of mind. The 24/7 monitoring service is worth
                every penny. Highly recommended!"
              </p>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-xl">
                JD
              </div>
              <div>
                <div className="text-white">John Davidson</div>
                <div className="text-blue-300 text-sm">Business Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
