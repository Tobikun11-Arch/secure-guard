import React from 'react'
import { Shield, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-gray-900">SecureGuard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#blog" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
