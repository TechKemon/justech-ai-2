import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact" className="container py-16 md:py-24 animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proven Experience, Measurable Impact
        </h2>

        {/* VOPA Context & Track Record */}
        <div className="text-center mb-10">
          <p className="text-lg text-gray-800 font-semibold">
            We have a proven track record of developing impactful technology products.
          </p>
          {/* Optional: Add specifics like years or project numbers if available
          <p className="text-md text-gray-600 mt-1">
            (e.g., 5+ years experience, 20+ successful projects)
          </p>
          */}
        </div>

        {/* Highlight Impact - Use Cards for Visual Appeal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stat 1 */}
          <div className="bg-pulse-50 p-6 rounded-lg text-center border border-pulse-100">
            <p className="text-3xl font-bold text-pulse-600">40%+</p>
            <p className="text-gray-700 mt-1">Increase in User Engagement</p>
          </div>
          {/* Stat 2 */}
          <div className="bg-green-50 p-6 rounded-lg text-center border border-green-100">
            <p className="text-3xl font-bold text-green-600">Faster</p>
            <p className="text-gray-700 mt-1">Response Times for Inquiries</p>
          </div>
          {/* Stat 3 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100">
            <p className="text-3xl font-bold text-blue-600">Wider</p>
            <p className="text-gray-700 mt-1">Reach to Underserved Populations</p>
          </div>
          {/* Stat 4 */}
          <div className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-100">
            <p className="text-3xl font-bold text-yellow-600">30+ hrs/wk</p>
            <p className="text-gray-700 mt-1">Staff Time Freed Up</p>
          </div>
        </div>

        {/* Tech Stack Mention */}
        <div className="text-center bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Built on Reliable Technology</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our solutions are built using robust and scalable technologies like <span className="font-medium">Python</span>, <span className="font-medium">FastAPI</span>, and <span className="font-medium">Pytorch</span> to ensure security, reliability, and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection; 