import React from "react";

const projects = [
  {
    id: 1,
    title: "SEO Landing Page",
    description:
      "A modern SEO-optimized landing page built with React & Tailwind.",
    img: "/seo.jpg", // ❌ /public likhne ki zarurat nahi
    live: "https://",
    github: "",
  },
  {
    id: 2,
    title: "Prime Partner Studio",
    description:
      "A modern project showcasing web development and SEO skills.",
    img: "/e.jpg",
    live: "https://primepartnerstudio.site/",
    github: "",
  },
  {
    id: 3,
    title: "Client Project",
    description:
      "Custom website developed for a client using React and responsive UI.",
    img: "/bu.jpg",
    live: "https://danaalkuwait.omline",
    github: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-[#38BDF8]">My</span>{" "}
        <span className="text-[#34D399]">Projects</span>
      </h2>

      {/* ✅ Responsive grid layout */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1E293B]/60 w-full max-w-sm rounded-2xl shadow-lg overflow-hidden
                       hover:scale-105 hover:bg-[#1E293B]/80 transition-all duration-300 flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-sky-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sky-400 hover:text-sky-300"
                  >
                    🔗 Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-green-400 hover:text-green-300"
                  >
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
