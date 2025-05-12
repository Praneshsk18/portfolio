"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { motion } from "framer-motion";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setShowMap(true);
  }, []);

  const additem = (e) => {
    e.preventDefault();
    const message = { name, email, msg };
    axios
      .post(
        "https://portfolio-backend-rjwi.onrender.com/api/newmessage",
        message
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert(`Error: ${err.message}. Please try again.`);
      });
  };
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="text-center"
      >
        <p className="font-bold text-4xl md:text-5xl text-yellow-600 mb-10 mt-10">
          Contact Me
        </p>
        <p className="text-lg text-gray-300">
          Lets connect! Feel free to reach out for collaborations, questions, or
          just to say hi.
        </p>
      </motion.div>
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-600/30 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-amber-500 mb-6">
            Send a Message
          </h2>
          <form onSubmit={additem}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-500 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 text-black py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-orange-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-500 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-orange-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-500 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full text-black px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-orange-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition duration-800"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-600/30 p-6 rounded-lg shadow-lg"
        >
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
              <p className="text-gray-100">Coimbatore, Tamil Nadu</p>
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
        </motion.div>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {showMap && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617539259263!2d-74.00594168459413!3d40.7127759793276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd90e5d5e5a3c5a6a!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1633039296787!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="border-none"
              allowFullScreen
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(Contacts), { ssr: false });