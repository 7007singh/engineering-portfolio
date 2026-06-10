function Footer() {
return ( <footer className="border-t border-slate-200 py-10 bg-white"> <div className="max-w-7xl mx-auto px-6">


    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

      <div>

        <h3 className="font-semibold text-slate-900">
          Shweta Singh
        </h3>

        <p className="text-slate-500 text-sm mt-1">
          Backend Engineer • FastAPI • Distributed Systems
        </p>

      </div>

      <div className="text-sm text-slate-500">
        Built with React, FastAPI, REST APIs, PostgreSQL & Docker
      </div>

    </div>

  </div>
</footer>


);
}

export default Footer;
