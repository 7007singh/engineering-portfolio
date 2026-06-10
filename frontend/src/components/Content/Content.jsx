function Contact() {
return ( <section
   id="contact"
   className="py-24 bg-white"
 > <div className="max-w-5xl mx-auto px-6">

    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-10
        shadow-sm
        text-center
      "
    >

      <p className="text-blue-600 font-medium mb-3">
        Get In Touch
      </p>

      <h2 className="text-5xl font-bold text-slate-900 mb-4">
        Let's Build Something Great
      </h2>

      <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-10">
        I'm passionate about backend engineering,
        distributed systems, scalable APIs,
        cloud-native architecture, and solving
        complex engineering challenges.
        I'm always open to discussing exciting
        opportunities and innovative projects.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div
          className="
            border
            border-slate-200
            rounded-2xl
            p-6
          "
        >
          <h3 className="font-semibold text-slate-900 mb-2">
            Email
          </h3>

          <p className="text-slate-600 text-sm">
            Professional inquiries and opportunities.
          </p>
        </div>

        <div
          className="
            border
            border-slate-200
            rounded-2xl
            p-6
          "
        >
          <h3 className="font-semibold text-slate-900 mb-2">
            GitHub
          </h3>

          <p className="text-slate-600 text-sm">
            Explore projects and engineering work.
          </p>
        </div>

        <div
          className="
            border
            border-slate-200
            rounded-2xl
            p-6
          "
        >
          <h3 className="font-semibold text-slate-900 mb-2">
            LinkedIn
          </h3>

          <p className="text-slate-600 text-sm">
            Connect professionally and stay in touch.
          </p>
        </div>

      </div>

      <div className="flex justify-center flex-wrap gap-4">

        <a
          href="mailto:shw12021982@gmail.com"
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
          Contact Me
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


);
}

export default Contact;
