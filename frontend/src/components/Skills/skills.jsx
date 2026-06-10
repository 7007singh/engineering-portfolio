import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/skills")
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  if (!skills) {
    return null;
  }

  const sections = [
    {
      title: "Backend",
      description:
        "Building scalable APIs, microservices and backend platforms.",
      skills: skills.backend,
    },
    {
      title: "Distributed Systems",
      description:
        "Real-time event processing, messaging and asynchronous systems.",
      skills: skills.distributed_systems,
    },
    {
      title: "Databases",
      description:
        "Designing high-performance data storage and retrieval systems.",
      skills: skills.databases,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying, monitoring and scaling cloud-native applications.",
      skills: skills.cloud,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="mb-20">

          <p className="text-blue-600 font-medium mb-3">
            Expertise
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl">
            Building scalable backend systems, distributed architectures,
            cloud-native applications, and real-time event-driven platforms.
          </p>

        </div>

        {/* Skills Sections */}

        <div className="space-y-12">

          {sections.map((section) => (
            <div
              key={section.title}
              className="
                border-b
                border-gray-200
                pb-10
              "
            >

              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                {section.title}
              </h3>

              <p className="text-slate-500 mb-6">
                {section.description}
              </p>

              <div className="flex flex-wrap gap-3">

                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-slate-100
                      text-slate-700
                      text-sm
                      font-medium
                      hover:bg-blue-100
                      hover:text-blue-700
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;