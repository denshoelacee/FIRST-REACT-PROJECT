import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { experiences } from "../js/experience";

function Experiences() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 relative" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-12 text-center text-white"
          data-aos="zoom-in"
        >
          WORK EXPERIENCE
        </h2>

        <div className="relative">
          {/*  Vertical Animated Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-emerald-400 via-emerald-300 to-emerald-600 shadow-lg"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "100% 200%",
              height: "100%",
            }}
          />

          {/* Timeline Items */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            const isHovered = hoveredIndex === index;
            const isOtherHovered =
              hoveredIndex !== null && hoveredIndex !== index;

            return (
              <div key={index} className="relative">
                <motion.div
                  className={`mb-12 flex w-full items-center justify-between relative
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                    flex-row-reverse md:justify-between
                    transition-all duration-500
                    ${isOtherHovered ? "blur-sm opacity-50" : "opacity-100"}
                  `}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.3 }}
                >
                  {/* Card */}
                  <motion.div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                      },
                    }}
                    className={`w-10/12 md:w-5/12 bg-white/10 p-6 rounded-2xl shadow-md
                      transition-all duration-300 relative z-10
                      ${
                        isHovered
                          ? "scale-105 bg-white/20 shadow-emerald-500/40 shadow-xl"
                          : ""
                      }
                    `}
                  >
                    {/* Connector line */}
                    <motion.div
                      variants={{
                        hidden: { scaleX: 0 },
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.3,
                          },
                        },
                      }}
                      className={`
                        absolute top-1/2 h-0.5 bg-emerald-400 shadow-[0_0_10px_#34d399]
                        left-[-5rem]
                        ${
                          isLeft
                            ? "md:-right-[5rem] md:left-auto md:origin-right"
                            : "md:-left-[5rem] md:origin-left"
                        }
                      `}
                      style={{ width: "5rem" }}
                    />

                    <h3 className="text-xl font-semibold text-emerald-400">
                      {exp.jobTitle}
                    </h3>
                    <p className="text-sm text-white mb-3">{exp.date}</p>
                    <p className="text-white mb-4">{exp.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <FaTools className="text-emerald-500" />
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Dot */}
                  <motion.div
                    className="z-10 flex items-center justify-center w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-md
                      absolute left-1 md:left-1/2 md:-translate-x-1/2"
                    variants={{
                      hidden: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: { duration: 0.4, delay: 0.6 },
                      },
                    }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 15px #34d399",
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Spacer for layout (desktop only) */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
