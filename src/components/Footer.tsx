import { Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-white">SecureGuard</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional security services you can trust. Protecting what matters most since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Security Guards</li>
              <li className="text-gray-400">CCTV Installation</li>
              <li className="text-gray-400">Access Control</li>
              <li className="text-gray-400">24/7 Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>123 Security Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@secureguard.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 SecureGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
