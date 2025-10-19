import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronCircleRight, FaChevronCircleLeft, FaCode } from "react-icons/fa";
import PrimaryButton from "../components/buttons/primarybutton";
import { projects } from "../js/project"; 
function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const handleNext = () => {
    setDirection(1);
    nextProject();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevProject();
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentProject = projects[currentIndex];

  return (
    <div id="projects" className="text-white px-6 overflow-hidden h-full">
      <div className="relative flex flex-col justify-center items-center">
        {/*  Title always on top */}
        <h2
          data-aos="zoom-in"
          className="text-3xl md:text-4xl font-bold my-10 relative z-20"
        >
          PROJECTS
        </h2>

        {/*  Carousel Container */}
        <div
          data-aos="zoom-in"
          className="relative w-full max-w-5xl h-[30rem] max-h-[35rem] flex items-center justify-center my-40 lg:my-3"
        >
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
              }}
              className="absolute z-10 flex-wrap lg:flex-nowrap w-full flex p-6 gap-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg"
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="bg-blue-500 rounded-md w-full h-full md:max-w-[45rem] md:max-h-[20rem] lg:max-w-[30rem] lg:max-h-[25rem] object-cover"
              />

              <div className="flex flex-col justify-between">
                <div className="py-5">
                  <h3 className="text-2xl font-semibold mb-2">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {currentProject.description}
                  </p>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-1">
                    Role:
                  </h4>
                  <p className="text-sm text-gray-300 flex place-items-center gap-2">
                    <FaCode /> {currentProject.role}
                  </p>

                  {/*  Display Tech Stack */}
                  {currentProject.techstack && (
                    <div className="mt-3 space-y-2">
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-1">
                          Frontend:
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                          {currentProject.techstack.frontend.map((tech, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-5 h-5"
                              />
                              <span className="text-sm">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-1">
                          Backend:
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                          {currentProject.techstack.backend.map((tech, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-5 h-5"
                              />
                              <span className="text-sm">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <PrimaryButton className="cursor-pointer" href={currentProject.link}>
                  View Project
                </PrimaryButton>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 bg-black/40 p-3 rounded-full hover:bg-black/70 transition z-20"
          >
            <FaChevronCircleLeft className="w-6 h-6 text-white cursor-pointer" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 bg-black/40 p-3 rounded-full hover:bg-black/70 transition z-20"
          >
            <FaChevronCircleRight className="w-6 h-6 text-white cursor-pointer" />
          </button>
        </div>

        {/*  Dots Indicator Always on Top */}
        <div className="flex gap-2 py-14 relative z-20">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-emerald-500" : "bg-gray-500/50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
