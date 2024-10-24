import React from "react";
import { useTheme } from "../context/ThemeContext";
import { companies } from "../data/data";

const CompanyShowcase = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`w-full mx-auto max-w-7xl overflow-hidden transition-colors shadow-lg duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container w-full mx-auto py-8 md:py-16">
        <h2
          className={`text-center text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 font-semibold ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Trusted by the best companies
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-fast">
            <div className="flex shrink-0 gap-8 items-center">
              {companies.map((company) => (
                <div
                  key={`first-${company.id}`}
                  className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] transition-all duration-300 opacity-75 hover:opacity-100"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-8 md:h-10 lg:h-12 object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex shrink-0 gap-8 items-center">
              {companies.map((company) => (
                <div
                  key={`second-${company.id}`}
                  className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] transition-all duration-300 opacity-75 hover:opacity-100"
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
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;
