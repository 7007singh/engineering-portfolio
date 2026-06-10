import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="
                bg-white
                border
                border-gray-200
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  px-5
                  py-2
                  bg-black
                  text-white
                  rounded-lg
                  hover:bg-gray-800
                  transition
                "
              >
                View GitHub
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;