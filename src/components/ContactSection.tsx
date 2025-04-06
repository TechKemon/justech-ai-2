import React from 'react';

const ContactSection = () => {

  // Basic form handler (needs Supabase integration)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data submitted (needs Supabase wiring):", data);
    // TODO: Add Supabase curl request/logic here
    alert('Thank you for your message! We will get back to you soon.'); // Simple feedback
    event.currentTarget.reset(); // Reset form
  };

  return (
    <section id="contact" className="container py-16 md:py-24 bg-gray-100 animate-on-scroll">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Let's Connect
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          Ready to explore how AI can amplify your non-profit's mission? Reach out to us!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pulse-500 focus:border-pulse-500" />
          </div>
          <div>
            <label htmlFor="nonProfitName" className="block text-sm font-medium text-gray-700 mb-1">Non-Profit Name</label>
            <input type="text" name="nonProfitName" id="nonProfitName" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pulse-500 focus:border-pulse-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pulse-500 focus:border-pulse-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="message" id="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pulse-500 focus:border-pulse-500"></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pulse-500 hover:bg-pulse-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pulse-500"
              style={{ backgroundColor: '#FE5C02' }} // Using Hero button color for consistency
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Alternative Contact */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Or email us directly at:{' '}
            <a href="mailto:contact.justech.ai@gmail.com" className="font-medium text-pulse-500 hover:underline">
              contact.justech.ai@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 