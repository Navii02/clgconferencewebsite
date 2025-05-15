import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us via the form below or through our contact details.
          </p>
          <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Get in Touch</h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base">
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:info@ncicis2025.org" className="text-blue-600 hover:underline">info@ncicis2025.org</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <p className="font-medium">Phone:</p>
                  <p>+91 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <div>
                  <p className="font-medium">Address:</p>
                  <p>College of Engineering Poonjar, Kottayam, Kerala, India - 686582</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 sm:p-3"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 sm:p-3"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 sm:p-3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-2.5 px-5 sm:px-6 rounded-lg transition-all duration-300 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;