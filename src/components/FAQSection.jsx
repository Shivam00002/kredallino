import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { faqData } from "../data/data";

const FAQSection = () => {
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full shadow-lg max-w-7xl mx-auto  py-8  px-4 sm:px-2 lg:px-1 flex justify-center items-center ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-full max-w-full ">
        <h1
          className={`text-center text-xl md:text-2xl lg:text-3xl mb-10 md:mb-12 font-semibold ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Frequently asked questions
        </h1>

        <div className="rounded-lg border border-gray-800 overflow-hidden">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-800 last:border-b-0 ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            >
              <button
                className="w-full text-left md:p-6 px-2 py-2 focus:outline-none flex justify-between items-center hover:bg-opacity-50"
                onClick={() => handleQuestionClick(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="md:p-6 px-2 py-2 pt-0">
                  <p
                    className={`text-sm md:text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
