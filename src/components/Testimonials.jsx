import React from "react";
import { useTheme } from "../context/ThemeContext";
import { testimonials } from "../data/data";

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg border shadow-sm ${className}`}>{children}</div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const Testimonials = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full max-w-7xl shadow-lg mx-auto px-4 py-6 md:py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-center text-xl md:text-2xl lg:text-3xl mb-5 md:mb-12 font-semibold ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Testimonials
        </h2>
        <p
          className={`max-w-2xl text-center mx-auto ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={`${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            } transition-colors duration-200`}
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {testimonial.text}
                </p>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/40/40";
                      }}
                    />
                  </div>
                  <div>
                    <div
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.author}
                    </div>
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
