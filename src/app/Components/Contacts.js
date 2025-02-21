"use client";
import React from "react";

const Contacts = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center">
      <p className="font-bold text-4xl md:text-5xl text-amber-600 mb-10 mt-10">
          Contact Me
        </p>
        <p className="text-lg text-gray-300">
          Lets connect! Feel free to reach out for collaborations, questions, or
          just to say hi.
        </p>
      </div>

      {/* Contact Form and Details */}
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-600/30 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-amber-500 mb-6">
            Send a Message
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-500 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-500 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-orange-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-500 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-orange-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition duration-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-600/30 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-amber-500 mb-6">
            Contact Details
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-amber-700">Email</h3>
              <p className="text-gray-100">praneshsenthilkumar18@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700">Phone</h3>
              <p className="text-gray-100">+91 9345726432</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700">Location</h3>
              <p className="text-gray-100">Coimbatore,Tamil Nadu</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700">
                Social Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-900"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Embedded Map */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617539259263!2d-74.00594168459413!3d40.7127759793276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd90e5d5e5a3c5a6a!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1633039296787!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
