import React from 'react';

const ApproachSection = () => {
  return (
    <section id="approach" className="container py-16 md:py-24 animate-on-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Approach: AI Tailored for Your Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          We believe powerful technology should be accessible and drive real impact. Justech AI partners closely with non-profits to understand your unique challenges and goals. We focus on building:
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
        {/* Feature 1: Understanding Needs */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-pulse-500">Deep Understanding</h3>
          <p className="text-gray-600">
            We start by listening. Our collaborative process ensures the solutions we build directly address your organization's specific needs and operational context.
          </p>
        </div>
        {/* Feature 2: Accessibility & User-Friendliness */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-pulse-500">Accessible & Easy-to-Use</h3>
          <p className="text-gray-600">
            Technology shouldn't be a barrier. We prioritize intuitive interfaces and straightforward implementation, empowering your team without steep learning curves.
          </p>
        </div>
        {/* Feature 3: Partnership Model */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-pulse-500">True Partnership</h3>
          <p className="text-gray-600">
            We're more than just vendors; we're partners in your mission. We provide ongoing support and adapt solutions as your needs evolve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 