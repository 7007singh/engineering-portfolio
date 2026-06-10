import { useEffect, useState } from "react";

function Navbar() {
const [open, setOpen] = useState(true);
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
const sections = [
"home",
"skills",
"experience",
"projects",
"contact",
];


const handleScroll = () => {
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const element = document.getElementById(section);

    if (!element) return;

    if (
      scrollPosition >= element.offsetTop &&
      scrollPosition < element.offsetTop + element.offsetHeight
    ) {
      setActiveSection(section);
    }
  });
};

window.addEventListener("scroll", handleScroll);

return () =>
  window.removeEventListener("scroll", handleScroll);

}, []);

const navItems = [
{ id: "home", label: "Home" },
{ id: "skills", label: "Skills" },
{ id: "experience", label: "Experience" },
{ id: "projects", label: "Projects" },
{ id: "contact", label: "Contact" },
];

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
  bg-white
  border
  border-slate-200
  shadow-sm
  text-slate-700
  px-3
  py-2
  rounded-xl
  hover:bg-slate-100
  transition
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
      border-slate-200
      shadow-lg
      z-40
      transition-all
      duration-300
      ${open ? "w-60" : "w-0 overflow-hidden"}
    `}
  >
    <div className="pt-20 px-4">

      <div className="mb-8">

  <h2 className="font-bold text-lg text-slate-900">
    Shweta Singh
  </h2>

  <p className="text-sm text-slate-500 mt-1">
    Backend Engineer
  </p>

</div>

      <div className="flex flex-col gap-2">

        {navItems.map((item) => (

          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-xl
              transition-all
              duration-300

              ${
                activeSection === item.id
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
              }
            `}
          >

            <span>
              {activeSection === item.id ? "●" : "○"}
            </span>

            <span>{item.label}</span>

          </a>

        ))}

        <a
          href="/resume.pdf"
          download
          className="
            mt-6
            bg-black
            text-white
            px-4
            py-3
            rounded-xl
            text-center
            hover:bg-slate-800
            transition
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
