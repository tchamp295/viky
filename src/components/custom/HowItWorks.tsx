"use client"
import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Layers, 
  Paintbrush, 
  Rocket, 
  Check, 
  ArrowRight 
} from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Download,
      title: "Select Your Template",
      description: "Browse our curated collection of high-performance templates and choose the perfect match for your project.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Layers,
      title: "Customize Extensively",
      description: "Leverage our flexible design system to personalize every aspect of your template. No coding required for basic customizations.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Paintbrush,
      title: "Design & Personalize",
      description: "Use our intuitive interface to modify colors, layouts, and content. Make the template truly your own with just a few clicks.",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Rocket,
      title: "Deploy & Launch",
      description: "Seamlessly deploy your fully customized template. Get instant hosting, performance optimization, and quick setup guides.",
      color: "text-green-500",
      bgColor: "bg-green-50"
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
            Simple & Straightforward Process
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-Neue">
            Transform your digital vision into reality with our user-friendly template ecosystem.
          </p>
        </div>

        <div className="relative">
          {/* Background Connector Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[90%] h-1 bg-gray-200 dark:bg-gray-700 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-[#f6416c] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`mb-4 ${step.color} ${step.bgColor} bg-opacity-20 p-4 rounded-full inline-block group-hover:rotate-12 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-Neue mb-4">
                  {step.description}
                </p>

                {/* Hover Action */}
                <div className="flex justify-between items-center mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-[#f6416c] hover:text-opacity-80 transition-colors font-semibold"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                  <Check className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f6416c] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl shadow-[#f6416c]/30 hover:bg-opacity-90 transition-all"
          >
            Get Started Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;