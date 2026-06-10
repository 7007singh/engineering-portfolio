import { useEffect, useState } from "react";
import SectionWrapper from "../common/SectionWrapper";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/experience")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <SectionWrapper>
      <section
        id="experience"
        className="py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}

          <div className="mb-16">
            <p className="text-blue-600 font-medium mb-3">
              Career Journey
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Experience
            </h2>

            <p className="text-slate-600 text-lg max-w-3xl">
              Building scalable backend systems, REST APIs,
              distributed services and production-grade
              applications across fast-paced engineering teams.
            </p>
          </div>

          {/* Cards */}

          <div className="space-y-8">

            {experiences.map((exp, index) => (
              <div
                key={index}
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
                  Experience {index + 1}
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {exp.role}
                    </h3>

                    <a
                      href={
                        exp.company?.includes("Locobuzz")
                          ? "https://www.linkedin.com/company/locobuzz/"
                          : "https://www.linkedin.com/company/bridgelabz/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-blue-600
                        font-medium
                        hover:underline
                      "
                    >
                      {exp.company}
                    </a>
                  </div>

                  <div
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-slate-100
                      text-slate-600
                      text-sm
                      font-medium
                      mt-4
                      md:mt-0
                    "
                  >
                    {exp.start_date} - {exp.end_date}
                  </div>

                </div>

                <ul className="space-y-4">

                  {exp.description?.map((item, idx) => (
                    <li
                      key={idx}
                      className="
                        flex
                        items-start
                        text-slate-600
                        leading-relaxed
                      "
                    >
                      <span className="text-blue-600 mr-3 font-bold">
                        ✓
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Experience;