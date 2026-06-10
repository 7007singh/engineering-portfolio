import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";

function Hero() {
const [profile, setProfile] = useState(null);

useEffect(() => {
getProfile().then(setProfile);
}, []);

if (!profile) {
return ( <div className="h-screen flex items-center justify-center">
Loading... </div>
);
}

return ( <section
   id="home"
   className="min-h-screen flex items-center bg-white"
 > <div className="max-w-7xl mx-auto px-8 py-20 w-full">


    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}

      <div>

        <p className="text-blue-600 text-lg font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          {profile.name}
        </h1>

        <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 mt-4">
          Backend Engineer
        </h2>

        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mt-4 mb-6">
          Building Scalable Backend Systems
        </div>

        <p className="text-xl leading-9 text-slate-600 max-w-2xl">
          Designing and building scalable backend systems,
            REST APIs, distributed services, and cloud-native
            applications using Python, FastAPI, PostgreSQL,
            Redis, Kafka, Docker, and modern software
            engineering practices.
        </p>

        {/* Metrics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              2+
            </h3>
            <p className="text-slate-500 text-sm">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              10+
            </h3>
            <p className="text-slate-500 text-sm">
              APIs Built
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              300+
            </h3>
            <p className="text-slate-500 text-sm">
              DSA Problems
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              5+
            </h3>
            <p className="text-slate-500 text-sm">
              Projects
            </p>
          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="/resume.pdf"
            download
            className="
              px-6
              py-3
              bg-black
              text-white
              rounded-xl
              hover:bg-slate-800
              transition
            "
          >
            Resume
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              border
              border-gray-300
              rounded-xl
              hover:bg-gray-100
              transition
            "
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              border
              border-gray-300
              rounded-xl
              hover:bg-gray-100
              transition
            "
          >
            LinkedIn
          </a>

        </div>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-10">

          {[
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Kafka",
            "Docker",
            "AWS",
            "Elasticsearch",
            "System Design",
            "DSA"
          ].map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-blue-50
                text-blue-700
                text-sm
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex justify-center">

        <div
          className="
            w-full
            max-w-lg
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-10
            shadow-sm
          "
        >

          <div
  className="
    text-center
    text-sm
    text-slate-500
    mb-8
  "
>
  <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">
  System Architecture
</h3>

<p className="text-center text-sm text-slate-500 mb-8">
  Client Request Flow
</p>
</div>

          <div className="flex flex-col items-center">
            <div className="w-56 bg-slate-50 rounded-xl p-4 text-center mb-4">
  <div className="font-semibold text-slate-700">
    Client
  </div>
  <div className="text-xs text-slate-500 mt-1">
    Browser Request
  </div>
</div>

<div className="text-slate-400 text-xl mb-4">
  ↓
</div>
            <div className="w-56 bg-blue-50 rounded-xl p-4 text-center">
              <div className="font-semibold text-blue-700">
                React
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Frontend UI
              </div>
            </div>

            <div className="flex flex-col items-center my-4">

  <div
    className="
      w-2
      h-2
      rounded-full
      bg-blue-500
      animate-pulse
      mb-1
    "
  />

  <div className="text-slate-400 text-xl">
    ↓
  </div>

</div>

            <div className="w-56 bg-green-50 rounded-xl p-4 text-center">
              <div className="font-semibold text-green-700">
                FastAPI
              </div>
              <div className="text-xs text-slate-500 mt-1">
                REST API Layer
              </div>
            </div>

            <div className="flex flex-col items-center my-4">

  <div
    className="
      w-2
      h-2
      rounded-full
      bg-blue-500
      animate-pulse
      mb-1
    "
  />

  <div className="text-slate-400 text-xl">
    ↓
  </div>

</div>

<div className="flex justify-center gap-8 mt-4 w-full">

              <div className="w-40 bg-orange-50 rounded-xl p-4 text-center">
                <div className="font-semibold text-orange-700">
                  Redis
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Cache
                </div>
              </div>

              <div className="w-40 bg-purple-50 rounded-xl p-4 text-center">
                <div className="font-semibold text-purple-700">
                  PostgreSQL
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Database
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


);
}

export default Hero;
