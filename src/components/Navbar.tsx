
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const navItems = [
    { href: "/", label: "Home", isLink: true },
    { href: "/portfolio", label: "Portfolio", isLink: true },
    { href: "#approach", label: "Our Approach" },
    { href: "#solutions", label: "Solutions" },
    { href: "#impact", label: "Impact" },
    { href: "#contact", label: "Contact Us" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            aria-label="Justech AI Home"
          >
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Justech AI Logo"
                className="h-8 sm:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pulse-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.isLink ? (
                <Link
                  key={index}
                  to={item.href}
                  className="relative px-4 py-2 text-base font-semibold text-gray-700 hover:text-pulse-600 transition-all duration-300 rounded-lg hover:bg-pulse-50 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pulse-500/10 to-pulse-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="relative px-4 py-2 text-base font-semibold text-gray-700 hover:text-pulse-600 transition-all duration-300 rounded-lg hover:bg-pulse-50 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pulse-500/10 to-pulse-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              )
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-pulse-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden relative p-2 text-gray-700 hover:text-pulse-600 transition-colors duration-300" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 relative">
              <Menu 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )} 
                size={24} 
              />
              <X 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )} 
                size={24} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out",
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={toggleMenu}
        ></div>
        
        {/* Menu Panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-500 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img src="/logo.svg" alt="Justech AI" className="h-8" />
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  item.isLink ? (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={toggleMenu}
                      className="block px-4 py-4 text-lg font-semibold text-gray-700 hover:text-pulse-600 hover:bg-pulse-50 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={item.href}
                      onClick={toggleMenu}
                      className="block px-4 py-4 text-lg font-semibold text-gray-700 hover:text-pulse-600 hover:bg-pulse-50 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </nav>
            
            {/* CTA */}
            <div className="p-6 border-t border-gray-100">
              <a
                href="#contact"
                onClick={toggleMenu}
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
