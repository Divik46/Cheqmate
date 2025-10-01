"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 text-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="/images/Frame 4.png" 
            alt="Logo" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-14 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-lg">
          <a href="#features" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          {/* <a href="#" className="text-white hover:text-gray-300 transition-colors">Company</a> */}
          <a href="#blog" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">Login</a>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
            Start free trial
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
          <nav className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="block text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            {/* <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">Company</a> */}
            <a href="#blog" className="block text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
            <a href="#contact" className="block text-white hover:text-gray-300 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">Login</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                Start free trial
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
