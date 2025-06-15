
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%',
        backgroundSize: 'cover',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }}
    >
      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-3/4 bg-gradient-to-bl from-pulse-500/10 to-transparent blur-3xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content Column */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight opacity-0 animate-fade-in text-gray-900" 
                style={{ animationDelay: "0.3s" }}
              >
                Amplify Your 
                <span className="block text-pulse-500 bg-gradient-to-r from-pulse-500 to-pulse-600 bg-clip-text text-transparent">
                  Non-Profit's Impact
                </span>
                <span className="block text-gray-800">
                  with AI
                </span>
              </h1>
              
              <p 
                style={{ animationDelay: "0.5s" }} 
                className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-0 animate-fade-in text-gray-700 max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                Justech AI partners with non-profits and social enterprises to build scalable, 
                easy-to-use AI tools that extend reach, automate tasks, and empower your team 
                to focus on your core mission.
              </p>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fade-in justify-center lg:justify-start" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-pulse-500/25 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="#approach" 
                className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-gray-700 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg hover:border-pulse-200 transform hover:scale-105 hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative group">
              {/* Modern card container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl sm:rounded-[2rem] md:rounded-[3rem] p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl">
                  <img 
                    ref={imageRef} 
                    src="https://i.ibb.co/fzmrdVnM/background-image.png" 
                    alt="AI helping non-profits illustration" 
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    style={{ transformStyle: 'preserve-3d' }} 
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pulse-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pulse-300 rounded-full blur-sm opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pulse-500/20 to-pulse-600/20 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3.5rem] blur-xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      
      {/* Parallax decorative elements */}
      <div className="hidden lg:block absolute bottom-20 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-48 h-48 bg-pulse-200/20 rounded-full blur-2xl -z-10 parallax" data-speed="0.03"></div>
    </section>
  );
};

export default Hero;
