import { useEffect, useState } from "react";
import { getProfile } from "../../services/profileService";

function Hero() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Architecture */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          opacity-10
          select-none
        "
      >
        <div className="text-center text-6xl font-bold text-gray-400 leading-relaxed">

          <div>React</div>

          <div>↓</div>

          <div>FastAPI</div>

          <div>↓</div>

          <div>PostgreSQL</div>

          <div className="mt-10">
            Kafka → Redis
          </div>

        </div>
      </div>

      {/* Hero Content */}

      <div className="relative max-w-5xl mx-auto px-8">

        <p className="text-blue-600 text-lg mb-4">
          Hello, I'm
        </p>

        <h1
          className="
            text-7xl
            md:text-8xl
            font-extrabold
            text-slate-900
            mb-6
          "
        >
          {profile.name}
        </h1>

        <h2
          className="
            text-3xl
            md:text-4xl
            font-medium
            text-slate-700
            mb-8
          "
        >
          {profile.title}
        </h2>

        <p
          className="
            text-xl
            leading-10
            text-slate-600
            max-w-4xl
            mb-10
          "
        >
          {profile.summary}
        </p>

        {/* Tech Stack Line */}

        <div
          className="
            text-slate-500
            text-lg
            mb-10
          "
        >
          FastAPI • Kafka • Redis • PostgreSQL •
          ClickHouse • AWS
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
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

          <a
            href="/resume.pdf"
            download
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
            Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;