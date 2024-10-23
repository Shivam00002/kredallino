import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    helpType: "Choose one",
    message: "",
    joinMailingList: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`w-full shadow-lg max-w-7xl mx-auto py-6  md:py-16  px-4 lg:px-2 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="md:max-w-full md:px-2 mx-auto">
        <div className="text-center mb-8">
          <h1
            className={`text-center text-xl md:text-2xl lg:text-3xl mb-5 md:mb-12 font-semibold ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Contact Us
          </h1>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Please take a moment to get in touch, we will get back to you
            shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label
                  htmlFor="helpType"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  How can we help you?
                </label>
                <select
                  id="helpType"
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option>Choose one</option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Partnership Opportunity</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="11"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700 text-white"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="joinMailingList"
                checked={formData.joinMailingList}
                onChange={handleChange}
                className="rounded text-blue-500 focus:ring-blue-500"
              />
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Join our mailing list?
              </span>
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 rounded-md text-white hover:bg-blue-600 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
