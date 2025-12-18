import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Personal Portfolio",
    description: "A modern responsive portfolio built with React, Tailwind CSS, and Vite.",
    tech: ["React", "Tailwind", "Vite"],
    live: "https://your-live-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
    status: "Live"
  },
  {
    name: "E-Commerce Web App",
    description: "Full-stack eCommerce application using MERN stack with product and cart features.",
    tech: ["React", "Node", "MongoDB", "Express"],
    status: "In Progress"
  },
  {
    name: "Blog CMS",
    description: "A content management system for blogs with admin panel and markdown editor.",
    tech: ["Node", "Express", "MongoDB", "EJS"],
    status: "Coming Soon"
  },
  {
    name: "Landing Page UI",
    description: "Responsive landing page design using HTML, CSS, and Tailwind.",
    tech: ["HTML", "CSS", "Tailwind"],
    status: "Coming Soon"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#38BDF8]">My</span> 
          <span className="text-[#34D399]"> Portfolio</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of my work — from live projects to upcoming ideas in development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1E293B]/40 rounded-xl p-6 text-left shadow-lg backdrop-blur-md 
                         hover:scale-105 hover:bg-[#1E293B]/70 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#38BDF8] mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-[#34D399]/20 text-[#34D399] px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 italic">{project.status}</p>

                <div className="flex gap-3 text-xl">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8]">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-[#34D399]">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
