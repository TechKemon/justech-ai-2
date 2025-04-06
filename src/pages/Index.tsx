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
    <div className="min-h-screen">
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Adjust spacing as needed */}
        <Hero />
        {/* Placeholder for Approach Section */}
        <ApproachSection />
        {/* Removed placeholder section tag
        <section id="approach" className="container py-12 md:py-20 animate-on-scroll">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Approach / Why Justech AI? (Placeholder)</h2>
           <p className="text-center text-lg text-gray-700">Content explaining why Justech AI is the right partner (understanding needs, accessibility, user-friendliness, partnership model).</p>
        </section>
        */}

        {/* Placeholder for Solutions Section */}
        <SolutionsSection />
        {/* Removed placeholder section tag
         <section id="solutions" className="container py-12 md:py-20 bg-gray-50 animate-on-scroll">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Solutions / How We Help (Placeholder)</h2>
           <p className="text-center text-lg text-gray-700">Showcase key solutions (e.g., AI Chatbots) focusing on non-profit benefits. Use simple terms. Hint at custom solutions.</p>
        </section>
        */}

        {/* Placeholder for Impact Section */}
        <ImpactSection />
        {/* Removed placeholder section tag
        <section id="impact" className="container py-12 md:py-20 animate-on-scroll">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Experience & Impact (Placeholder)</h2>
           <p className="text-center text-lg text-gray-700">Mention proven track record. Showcase VOPA Context. Highlight Impact. Mention Tech Stack.</p>
        </section>
        */}

        {/* Placeholder for Contact Section */}
        <ContactSection />
        {/* Removed placeholder section tag
         <section id="contact" className="container py-12 md:py-20 bg-gray-100 animate-on-scroll">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Contact Us (Placeholder)</h2>
           <p className="text-center text-lg text-gray-700">Simple form (Name, Non-Profit Name, Email, Message). Alternative Contact. CTA Button. Backend Reminder: Supabase.</p>
        </section>
        */}

        {/* Removed original sections */}
        {/* <HumanoidSection /> */}
        {/* <SpecsSection /> */}
        {/* <DetailsSection /> */}
        {/* <ImageShowcaseSection /> */}
        {/* <Features /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
        {/* <MadeByHumans /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
