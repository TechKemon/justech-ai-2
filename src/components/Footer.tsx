
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-pulse-500/5 to-pulse-600/5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pulse-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-pulse-600/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/logo1.png"
                alt="Justech AI Logo"
                className="h-10 sm:h-12 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Empowering companies and government institutions with cutting-edge AI technology to amplify impact in education, healthcare, and governance.
            </p>
            <div className="flex space-x-4">
              {/* Social links placeholder - can be added later */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { href: "#approach", label: "Our Approach" },
                { href: "#solutions", label: "Solutions" },
                { href: "#impact", label: "Impact" },
                { href: "#contact", label: "Contact Us" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-pulse-400 transition-colors duration-300 text-base font-medium hover:translate-x-1 transform transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact & Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact.justech.ai@gmail.com"
                className="block text-gray-300 hover:text-pulse-400 transition-colors duration-300 text-base font-medium hover:translate-x-1 transform transition-transform"
              >
                contact.justech.ai@gmail.com
              </a>
              <Link
                to="/privacy"
                className="block text-gray-300 hover:text-pulse-400 transition-colors duration-300 text-base font-medium hover:translate-x-1 transform transition-transform"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Justech AI. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with ❤️ for non-profit organizations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
