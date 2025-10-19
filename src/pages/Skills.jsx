import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skill as skillCategories } from "../js/skills";

function skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="py-24 relative text-white  overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-emerald-500 text-transparent bg-clip-text tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          TECH STACKS & SKILLS
        </motion.h2>

        {/* Tabs */}
        <div className="relative flex justify-center space-x-10 mb-10 border-b border-white/10">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer relative pb-3 text-lg font-medium transition-all duration-300 ${
                activeTab === index
                  ? "text-emarald-500"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {category.title.split(" ")[0]}
              {activeTab === index && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-500 rounded-full"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-xl"
            >
              <h3
                className={`text-2xl font-semibold bg-emerald-500 text-transparent bg-clip-text mb-8 text-center`}
              >
                {skillCategories[activeTab].title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillCategories[activeTab].skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 relative z-10 drop-shadow-md"
                      />
                      <div className="absolute inset-0 rounded-full bg-emerald-500 blur-md opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                    </div>
                    <p className="text-sm text-gray-300 text-center font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default skills;
