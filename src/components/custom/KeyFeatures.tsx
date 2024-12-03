"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  PaletteIcon, 
  CodeIcon, 
  Globe, 
  Layers 
} from "lucide-react";

const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for maximum speed and performance, ensuring quick load times and smooth user experiences.",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Built with industry-standard security practices to protect your data and provide peace of mind.",
      color: "text-green-500"
    },
    {
      icon: PaletteIcon,
      title: "Fully Customizable",
      description: "Flexible design system that allows complete customization to match your unique brand identity.",
      color: "text-purple-500"
    },
    {
      icon: CodeIcon,
      title: "Clean & Modern Code",
      description: "Meticulously written, well-documented code following best practices and latest web standards.",
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Seamless experience across all devices, from mobile phones to large desktop monitors.",
      color: "text-teal-500"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Modular and scalable architecture that grows with your project's complexity and requirements.",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#121212] dark:to-[#1e1e1e] py-16 px-4 font-Granville">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f6416c] to-[#ff9a9a] mb-4"
          >
            Powerful Features, Endless Possibilities
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Neue">
            Discover the advanced capabilities that set our templates apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className={`${feature.color} bg-opacity-10 p-3 rounded-full group-hover:rotate-12 transition-transform`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-Neue">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;