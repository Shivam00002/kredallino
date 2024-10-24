import React from "react";
import { useTheme } from "../context/ThemeContext";
import { plans } from "../data/data";
import { CheckIcon } from "../svgs/svg";

const PricingPlans = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full shadow-lg max-w-7xl mx-auto md:py-12 px-4 sm:px-6 lg:px-1 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className={`text-center text-xl md:text-2xl lg:text-3xl mb-5 md:mb-12 font-semibold ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Choose Your Plan
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Select the perfect plan for your trading needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl cursor-pointer flex flex-col h-full ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg transform transition-all duration-200 hover:scale-110`}
            >
              <div className="p-6 border-b border-opacity-10 border-gray-500">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-semibold">₹</span>
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-gray-400">/month</span>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon />
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 mt-auto">
                <button
                  className={`w-full rounded-lg py-3 px-4 text-sm font-semibold transition-colors duration-200 
                    ${
                      plan.isPopular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            All plans include 24/7 support and a 7-day free trial
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
