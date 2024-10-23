import React from "react";
import { useTheme } from "../context/ThemeContext";
import { companies } from "../data/data";

const CompanyShowcase = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`w-full mx-auto max-w-7xl transition-colors shadow-lg duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h2
          className={`text-center text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 font-semibold ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Trusted by the best companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-full max-w-[100px] md:max-w-[120px] lg:max-w-[150px] transition-all duration-300 opacity-75 hover:opacity-100"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-8 md:h-10 lg:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;
