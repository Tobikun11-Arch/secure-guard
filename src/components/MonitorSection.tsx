import React from 'react';
import { ImageWithFallback } from './fallback/ImageWithFallback';

export function MonitorSection() {
  return (
    <section className="py-16 bg-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-white mb-6">
              Monitor the Workplace from your Phone
            </h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Stay connected to your security system anywhere, anytime. Our mobile app gives you 
              real-time access to your CCTV feeds, alerts, and security status right from your smartphone.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Download App
            </button>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBtb25pdG9yfGVufDF8fHx8MTc2MTc5MTkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Security Monitoring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
