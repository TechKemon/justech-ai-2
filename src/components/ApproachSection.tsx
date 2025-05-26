
import React, { useState, useEffect, useRef } from 'react';

const ApproachSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Deep Understanding",
      description: "We start by listening. Our collaborative process ensures the solutions we build directly address your organization's specific needs and operational context."
    },
    {
      title: "Accessible & Easy-to-Use",
      description: "Technology shouldn't be a barrier. We prioritize intuitive interfaces and straightforward implementation, empowering your team without steep learning curves."
    },
    {
      title: "True Partnership",
      description: "We're more than just vendors; we're partners in your mission. We provide ongoing support and adapt solutions as your needs evolve."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start the card shuffle animation
            const interval = setInterval(() => {
              setCurrentCard((prev) => (prev + 1) % cards.length);
            }, 3000);
            
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="approach" className="container py-16 md:py-24 animate-on-scroll" ref={sectionRef}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Approach: AI Tailored for Your Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          We believe powerful technology should be accessible and drive real impact. Justech AI partners closely with non-profits to understand your unique challenges and goals. We focus on building:
        </p>
      </div>
      
      {/* Shuffled Cards Container */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="relative h-96 perspective-1000">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full transition-all duration-700 ease-in-out transform ${
                index === currentCard
                  ? 'translate-x-0 rotate-0 z-30 opacity-100 scale-100'
                  : index === (currentCard + 1) % cards.length
                  ? 'translate-x-8 translate-y-4 rotate-2 z-20 opacity-80 scale-95'
                  : 'translate-x-16 translate-y-8 rotate-3 z-10 opacity-60 scale-90'
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 h-full flex flex-col justify-center items-center text-center hover:shadow-3xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-pulse-500">{card.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Card Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCard
                  ? 'bg-pulse-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
