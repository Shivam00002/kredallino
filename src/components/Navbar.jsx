import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "../svgs/svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Login", href: "#" },
    { label: "Plans", href: "#" },
    { label: "Become Partner", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        } shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                KredKonnect
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`hover:text-blue-500 transition-colors duration-200 font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full mr-2 transition-colors duration-200 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
              }`}
            ></button>
          </div>
          <div className="flex-1 px-4 space-y-4 py-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 ${
                  isDarkMode
                    ? "hover:bg-gray-800 text-gray-200"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
