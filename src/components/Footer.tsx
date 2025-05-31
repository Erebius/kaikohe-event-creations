
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KH</span>
              </div>
              <span className="font-serif font-bold text-xl">Kaikohe Hire</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Quality marquees, tables, and chairs for every occasion in the Far North. 
              Your trusted partner for unforgettable events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/booking" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Book Now
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <Link to="/services/marquee-hire" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Marquee Hire
              </Link>
              <Link to="/services/tables-chairs" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Tables & Chairs
              </Link>
              <Link to="/services/additional-equipment" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Additional Equipment
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                <strong className="text-white">Phone:</strong><br />
                <a href="tel:09-401-1044" className="hover:text-primary transition-colors">09 401 1044</a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:info@kaikohehire.co.nz" className="hover:text-primary transition-colors">
                  info@kaikohehire.co.nz
                </a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Address:</strong><br />
                123 Main Road<br />
                Kaikohe, New Zealand
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors flex items-center space-x-1"
              >
                <span>Facebook</span>
              </a>
              <a 
                href="https://maps.google.com/?q=123+Main+Road+Kaikohe+New+Zealand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors flex items-center space-x-1"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Us</span>
              </a>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Kaikohe Hire. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
