import { useEffect, useState } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/experience")
      .then((res) => res.json())
      .then(setExperiences);
  }, []);

  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}

        <div className="mb-16">

          <p className="text-blue-600 font-medium mb-2">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Experience
          </h2>

        </div>

        {/* Experience Cards */}

        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <div
              key={index}
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

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {exp.role}
                  </h3>

                  <a
                    href={
                      exp.company.includes("Locobuzz")
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

                <p className="text-slate-500 mt-3 md:mt-0">
                  {exp.start_date} - {exp.end_date}
                </p>

              </div>

              <ul className="space-y-3">

                {exp.description.map((item, idx) => (

                  <li
                    key={idx}
                    className="
                      text-slate-600
                      leading-relaxed
                      flex
                      items-start
                    "
                  >
                    <span className="text-blue-600 mr-3">
                      •
                    </span>

                    <span>
                      {item}
                    </span>
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;