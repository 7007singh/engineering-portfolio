import { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";

function Contact() {
const [copied, setCopied] = useState(false);

const copyEmail = () => {
navigator.clipboard.writeText(
"[shw12021982@gmail.com](mailto:shw12021982@gmail.com)"
);


setCopied(true);

setTimeout(() => {
  setCopied(false);
}, 2000);


};

return ( <SectionWrapper> <section
     id="contact"
     className="py-24 bg-white"
   > <div className="max-w-5xl mx-auto px-6">


      <div
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-12
          shadow-sm
          text-center
        "
      >

        <p className="text-blue-600 font-medium mb-4">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Let's Build Something Great
        </h2>

        <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-10">
          I'm currently open to Backend Engineering,
          Python Development, FastAPI projects,
          Distributed Systems work, and exciting
          software engineering opportunities.
        </p>

        {/* Availability */}

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">

          <div className="flex items-center gap-3 text-slate-700">
            <span className="text-blue-600 font-bold">✓</span>
            Backend Engineering Roles
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <span className="text-blue-600 font-bold">✓</span>
            Python Development
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <span className="text-blue-600 font-bold">✓</span>
            FastAPI Projects
          </div>

          <div className="flex items-center gap-3 text-slate-700">
            <span className="text-blue-600 font-bold">✓</span>
            Distributed Systems
          </div>

        </div>

        {/* Email Copy */}

        <div className="flex justify-center mb-10">

          <div className="relative group">

            <button
              onClick={copyEmail}
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-slate-100
                text-slate-700
                hover:bg-slate-200
                transition
              "
            >
              <span>📧</span>

              <span className="font-medium">
                shw12021982@gmail.com
              </span>
            </button>

            <div
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                px-3
                py-1
                rounded-lg
                bg-slate-900
                text-white
                text-xs
                opacity-0
                group-hover:opacity-100
                transition
                pointer-events-none
                whitespace-nowrap
              "
            >
              {copied ? "Copied!" : "Copy"}
            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-center flex-wrap gap-4">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shw12021982@gmail.com&su=Backend%20Engineering%20Opportunity"
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
            Email Me
          </a>

          <a
            href="https://github.com/7007singh"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              border
              border-slate-300
              rounded-xl
              hover:bg-slate-100
              transition
            "
          >
            GitHub
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3
              border
              border-slate-300
              rounded-xl
              hover:bg-slate-100
              transition
            "
          >
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  </section>
</SectionWrapper>


);
}

export default Contact;
