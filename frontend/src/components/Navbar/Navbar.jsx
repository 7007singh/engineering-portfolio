import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Toggle Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          top-5
          left-5
          z-50
          bg-black
          text-white
          px-3
          py-2
          rounded-lg
        "
      >
        ☰
      </button>

      {/* Sidebar */}

      <div
        className={`
          fixed
          top-0
          left-0
          h-screen
          bg-white
          border-r
          shadow-lg
          z-40
          transition-all
          duration-300
          ${open ? "w-64" : "w-0 overflow-hidden"}
        `}
      >
        <div className="pt-20 px-6">

          <h2 className="font-bold text-xl mb-8">
            Shweta Singh
          </h2>

          <div className="flex flex-col gap-5">

            <a href="#home" className="hover:text-blue-600">
              Home
            </a>

            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>

            <a href="#experience" className="hover:text-blue-600">
              Experience
            </a>

            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>

            <a
              href="/resume.pdf"
              download
              className="
                mt-4
                bg-black
                text-white
                px-4
                py-2
                rounded-lg
                text-center
              "
            >
              Resume
            </a>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;