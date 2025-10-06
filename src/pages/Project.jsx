import React from "react";

function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React, Tailwind CSS, and AOS animations.",
      link: "#"
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with product management, cart, and checkout system.",
      link: "#"
    },
    {
      title: "Attendance System",
      description: "Web-based attendance tracker built with React (frontend) and Java (backend).",
      link: "#"
    }
  ];

  return (
    <div id="projects" className="flex flex-col justify-center items-center text-white px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">PROJECTS</h2>
      <div className="grid gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
