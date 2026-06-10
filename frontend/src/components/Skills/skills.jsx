import { useEffect, useState } from "react";
import SectionWrapper from "../common/SectionWrapper";

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
title: "Backend Engineering",
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
{
title: "Computer Science",
description:
"Strong engineering fundamentals used in scalable software development.",
skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
},
{
title: "System Design",
description:
"Designing reliable, scalable and high-performance systems.",
skills: [
"Caching",
"Load Balancing",
"Rate Limiting",
"Message Queues",
"Scalability",
],
},
];

return (
  <SectionWrapper>
    <section id="skills"
  className="py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-6">


    {/* Header */}

    <div className="mb-20">

      <p className="text-blue-600 font-medium mb-3">
        Expertise
      </p>

      <h2 className="text-5xl font-bold text-slate-900 mb-4">
        Engineering Knowledge Map
      </h2>

      <p className="text-slate-600 text-lg max-w-3xl">
        Building scalable backend systems, distributed architectures,
        cloud-native applications, and production-grade software
        using modern engineering principles.
      </p>

    </div>

    {/* Skills Grid */}

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {sections.map((section) => (
        <div
          key={section.title}
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-8
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >

          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {section.title}
          </h3>

          <p className="text-slate-500 mb-6 min-h-[72px]">
            {section.description}
          </p>

          <div className="flex flex-wrap gap-3">

            {section.skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-50
                  text-blue-700
                  text-sm
                  font-medium
                  hover:bg-blue-100
                  transition-all
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
</SectionWrapper>


);
}

export default Skills;
