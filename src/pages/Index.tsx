
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Import placeholders for new sections (will be created)
import ApproachSection from "@/components/ApproachSection";
import SolutionsSection from "@/components/SolutionsSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        // Handle edge case where href is just "#"
        if (!targetId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        };
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav height and fixed header
        const offset = window.innerWidth < 768 ? 100 : 80; // Adjust as needed
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          <ApproachSection />
          <SolutionsSection />
          <ImpactSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
