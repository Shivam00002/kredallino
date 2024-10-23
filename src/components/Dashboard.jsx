import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { contentData } from "../data/data";

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState("power");
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useTheme();

  const handleImageChange = (key) => {
    setIsLoading(true);
    setSelectedView(key);
    setTimeout(() => setIsLoading(false), 200);
  };

  return (
    <div
      className={`w-full mx-auto max-w-7xl shadow-lg mt-10 pt-4 md:pt-16 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="block lg:hidden mb-6">
          <div className="flex  gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {Object.entries(contentData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => handleImageChange(key)}
                className={`px-4  mt-3 py-2 rounded-lg text-sm whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } ${
                  selectedView === key ? "ring-2 ring-blue-500 font-medium" : ""
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-2/3 order-1">
            <div
              className={`rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={contentData[selectedView].imgurl}
                  alt={contentData[selectedView].title}
                  className={`object-contain w-full h-full transition-opacity duration-200 ${
                    isLoading ? "opacity-50" : "opacity-100"
                  }`}
                  loading="eager"
                />
              </div>
            </div>

            <div className="mt-6  lg:hidden px-2">
              <h2 className="text-xl font-bold">
                {contentData[selectedView].title}
              </h2>
              <p
                className={`mt-3 text-base ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {contentData[selectedView].description}
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/3 space-y-6 order-2">
            {Object.entries(contentData).map(([key, data]) => (
              <div
                key={key}
                className={`p-6  mt-7 rounded-xl shadow-md cursor-pointer transition-all duration-200 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } ${
                  selectedView === key ? "ring-2 ring-blue-500 shadow-lg" : ""
                }`}
                onClick={() => handleImageChange(key)}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{data.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
