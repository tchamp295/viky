"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Rocket, Layout, Zap, Eye, ShoppingCart } from "lucide-react";

type TemplateCategory = "SaaS" | "Portfolio" | "E-commerce" | "Agency";
type CategoryFilter = TemplateCategory | "All";

interface Template {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  category: TemplateCategory;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

const templateData: Template[] = [
  {
    id: 1,
    title: "Velocity Launch",
    description: "Hyper-optimized SaaS landing page",
    price: 49,
    image: "/1.png",
    category: "SaaS",
    difficulty: "Intermediate",
    features: ["Responsive", "Dark Mode", "Conversion Optimized"],
  },
  {
    id: 2,
    title: "Orbit Portfolio",
    description: "Elegant creative professional showcase",
    price: 39,
    image: "/4.png",
    category: "Portfolio",
    difficulty: "Beginner",
    features: ["Minimal Design", "Animation Effects", "Easy Customization"],
  },
  {
    id: 3,
    title: "Commerce Wave",
    description: "High-converting e-commerce experience",
    price: 59,
    image: "/3.png",
    category: "E-commerce",
    difficulty: "Advanced",
    features: ["Product Showcase", "Cart Integration", "Payment Ready"],
  },
  {
    id: 4,
    title: "Nexus Agency",
    description: "Modern marketing agency presentation",
    price: 45,
    image: "/1.png",
    category: "Agency",
    difficulty: "Intermediate",
    features: ["Animated Sections", "Testimonial Slider", "Service Highlights"],
  },
];

const categoryIcons: Record<TemplateCategory, React.ComponentType> = {
  SaaS: Rocket,
  Portfolio: Sparkles,
  "E-commerce": Layout,
  Agency: Zap,
};

const TemplatesSection: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredTemplates =
    activeCategory === "All"
      ? templateData
      : templateData.filter((template) => template.category === activeCategory);

  const categories: CategoryFilter[] = [
    "All",
    ...templateData.map((t) => t.category),
  ];

  return (
    <section className="bg-gray-50 dark:bg-[#121212] py-8 sm:py-12 md:py-16 px-4 font-Granville">
      <div className="max-w-6xl mx-auto">
        {/* Header with more responsive typography */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Launch Faster with Proven Templates
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0 font-Neue">
            Professional, conversion-optimized landing page templates designed
            to elevate your online presence.
          </p>
        </div>

        {/* Category Filters with Scrollable/Responsive Layout */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 gap-4 mb-6 sm:mb-8 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category === "All" ? Rocket : categoryIcons[category];

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                    flex items-center space-x-2 px-3 sm:px-4 py-1.5  sm:py-2 rounded-full transition-all text-sm sm:text-base
                    ${
                      activeCategory === category
                        ? "bg-[#f6416c] text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }
                  `}
              >
                {category !== "All" && (
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                )}
                <span>{category === "All" ? "All Templates" : category}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid with Tighter Mobile Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <AnimatePresence>
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span
                      className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${
                        template.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : template.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }
                    `}
                    >
                      {template.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {template.title}
                    </h3>
                    <span className="text-lg font-semibold text-[#f6416c]">
                      ${template.price}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 font-Neue">
                    {template.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {template.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                       
                        className="text-gray-600 dark:text-gray-300 hover:text-[#f6416c] transition-colors"
                      >
                        <Eye />
                      </button>
                      <button className="text-[#f6416c] hover:text-opacity-80 transition-colors">
                        <ShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
