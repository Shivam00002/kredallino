import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { footerLinks } from "../data/data";

const SdFooter = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer
      className={`w-full shadow-lg max-w-7xl mx-auto  md:py-4  md:px-4 sm:px-2 lg:px-1  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6  gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-8">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                KredKonnect
              </span>
            </div>

            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Join the newsletter
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe for weekly updates. No spams ever!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-gray-500 text-sm">
                  Email
                </label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 bg-transparent border border-gray-800 rounded-lg text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-700"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-2 sm:w-auto md:px-6 rounded-md text-white hover:bg-blue-600 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 ">
            <div className="grid grid-cols-2  justify-center sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="flex w-fit md:mx-auto flex-col">
                  <h3
                    className={`text-base font-semibold mb-4 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {category}
                  </h3>
                  <ul className="space-y-3 ">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SdFooter;
