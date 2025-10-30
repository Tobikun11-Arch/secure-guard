import React from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-16 bg-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-white mb-4">
            Our Newsletters
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest security tips, product updates, 
            and exclusive offers directly to your inbox.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 text-white py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
