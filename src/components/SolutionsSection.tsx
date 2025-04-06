import React from 'react';
import { Bot } from 'lucide-react'; // Example icon

const SolutionsSection = () => {
  return (
    <section id="solutions" className="container py-16 md:py-24 bg-gray-50 animate-on-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How We Help: AI Solutions for Impact
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
          We build practical AI tools designed to amplify your non-profit's reach and efficiency, freeing your team to focus on mission-critical work.
        </p>
      </div>

      {/* Example Solution: AI Chatbots */}
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 text-center md:text-left">
          <Bot className="w-16 h-16 text-pulse-500 mx-auto md:mx-0 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Intelligent Chatbots</h3>
          <p className="text-gray-600">
            Provide instant support, answer FAQs, guide users to resources, and manage volunteer inquiries 24/7.
          </p>
        </div>
        <div className="md:w-2/3">
          <h4 className="font-semibold text-lg mb-3">Benefits for Your Non-Profit:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Increase Engagement:</span> Instantly connect with your community and provide timely information.
            </li>
            <li>
              <span className="font-medium">Scale Support:</span> Handle a higher volume of inquiries without increasing staff workload.
            </li>
            <li>
              <span className="font-medium">Improve Accessibility:</span> Offer support outside of business hours and across different platforms.
            </li>
             <li>
              <span className="font-medium">Free Up Staff Time:</span> Automate repetitive questions, allowing your team to focus on complex issues.
            </li>
          </ul>
        </div>
      </div>

      {/* Hint at Custom Solutions */}
      <div className="text-center mt-12">
         <p className="text-gray-600 italic">
           Need something specific? We also develop custom AI solutions tailored to your unique operational needs.
         </p>
      </div>

    </section>
  );
};

export default SolutionsSection; 