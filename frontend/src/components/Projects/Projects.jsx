import { useEffect, useState } from "react";
import SectionWrapper from "../common/SectionWrapper";

function Projects() {
const [projects, setProjects] = useState([]);

useEffect(() => {
fetch("http://127.0.0.1:8000/projects")
.then((res) => res.json())
.then((data) => setProjects(data))
.catch((err) => console.error(err));
}, []);

return ( <SectionWrapper> <section
     id="projects"
     className="py-24 bg-white"
   > <div className="max-w-7xl mx-auto px-6">

      {/* Header */}

      <div className="mb-16">

        <p className="text-blue-600 font-medium mb-3">
          Engineering Work
        </p>

        <h2 className="text-5xl font-bold text-slate-900 mb-4">
          Featured Projects
        </h2>

        <p className="text-slate-600 text-lg max-w-3xl">
          A collection of backend-focused applications,
          scalable systems and full-stack engineering projects
          built using modern software development practices.
        </p>

      </div>

      {/* Projects Grid */}

      <div className="grid lg:grid-cols-2 gap-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                bg-blue-50
                text-blue-700
                text-sm
                font-medium
                mb-5
              "
            >
              Engineering Project
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {project.title}
            </h3>

            {/* Description */}

            <p className="text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-2 mb-8">

              {[
                "React",
                "FastAPI",
                "REST API",
                "Python"
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-slate-100
                    text-slate-700
                    text-xs
                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Actions */}

            <div className="flex gap-4">

              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-3
                  bg-black
                  text-white
                  rounded-xl
                  hover:bg-slate-800
                  transition
                "
              >
                View GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  </section>
</SectionWrapper>


);
}

export default Projects;
