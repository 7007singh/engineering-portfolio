function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-600 mb-10">
          I'm interested in backend engineering,
          distributed systems, cloud infrastructure,
          and scalable platform development.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="mailto:your-email@gmail.com"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/7007singh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;