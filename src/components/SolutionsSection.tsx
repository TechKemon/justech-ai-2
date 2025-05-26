
import React from 'react';
import { Bot, Users, Database, Megaphone, Palette } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description: "Provide instant support, answer FAQs, guide users to resources, and manage volunteer inquiries 24/7.",
      benefits: [
        "Increase Engagement: Instantly connect with your community and provide timely information.",
        "Scale Support: Handle a higher volume of inquiries without increasing staff workload.",
        "Improve Accessibility: Offer support outside of business hours and across different platforms.",
        "Free Up Staff Time: Automate repetitive questions, allowing your team to focus on complex issues."
      ]
    },
    {
      icon: Users,
      title: "User Management System",
      description: "Comprehensive user management platform for volunteers, donors, and beneficiaries with automated workflows.",
      benefits: [
        "Streamlined Onboarding: Automated registration and orientation processes for new volunteers.",
        "Role-Based Access: Secure permission systems tailored to different user types and responsibilities.",
        "Activity Tracking: Monitor volunteer hours, donor engagement, and beneficiary progress.",
        "Automated Communications: Send personalized updates and reminders based on user activity."
      ]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Intelligent data organization and analytics to help you understand your impact and optimize operations.",
      benefits: [
        "Data Integration: Consolidate information from multiple sources into a unified system.",
        "Smart Analytics: AI-powered insights to identify trends and opportunities for growth.",
        "Automated Reporting: Generate impact reports and compliance documents automatically.",
        "Data Security: Enterprise-grade security to protect sensitive donor and beneficiary information."
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing Automation",
      description: "AI-driven marketing tools to amplify your message and reach the right audience at the right time.",
      benefits: [
        "Targeted Campaigns: AI-powered audience segmentation for more effective outreach.",
        "Content Optimization: Automatically test and optimize messaging for maximum engagement.",
        "Multi-Channel Reach: Coordinate campaigns across email, social media, and web platforms.",
        "Performance Tracking: Real-time analytics to measure campaign effectiveness and ROI."
      ]
    },
    {
      icon: Palette,
      title: "Brand Management",
      description: "Maintain consistent, professional branding across all your digital touchpoints and communications.",
      benefits: [
        "Brand Consistency: Ensure uniform messaging and visual identity across all platforms.",
        "Asset Management: Centralized library for logos, templates, and brand guidelines.",
        "Automated Design: AI-assisted creation of marketing materials and social media content.",
        "Brand Monitoring: Track brand mentions and sentiment across digital channels."
      ]
    }
  ];

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

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto space-y-16">
        {solutions.map((solution, index) => {
          const IconComponent = solution.icon;
          return (
            <div 
              key={index} 
              className={`bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200 flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="lg:w-1/3 text-center lg:text-left">
                <IconComponent className="w-16 h-16 text-pulse-500 mx-auto lg:mx-0 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-lg">{solution.description}</p>
              </div>
              <div className="lg:w-2/3">
                <h4 className="font-bold text-xl mb-4 text-center lg:text-left">Benefits for Your Non-Profit:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {solution.benefits.map((benefit, benefitIndex) => {
                    const [title, description] = benefit.split(': ');
                    return (
                      <div key={benefitIndex} className="bg-gray-50 p-4 rounded-lg">
                        <span className="font-semibold text-pulse-600">{title}:</span>
                        <span className="text-gray-700 ml-1">{description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint at Custom Solutions */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-pulse-50 to-blue-50 p-8 rounded-2xl border border-pulse-100">
          <h3 className="text-2xl font-bold mb-4 text-pulse-700">Need Something Specific?</h3>
          <p className="text-gray-700 text-lg">
            We also develop custom AI solutions tailored to your unique operational needs. 
            From specialized data analysis to custom automation workflows, we'll build exactly what your organization requires.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
