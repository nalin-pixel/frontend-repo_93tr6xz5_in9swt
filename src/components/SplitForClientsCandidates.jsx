export default function SplitForClientsCandidates() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171878]">For hiring teams</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Many of our clients run lean product and data teams in energy and climate. Long vacancies or poor hires put real grid, storage and building milestones at risk. We understand the energy context and the engineering reality.
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#6C66DF]" />Shortlists of senior ML, data and software engineers who already work with energy systems.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4379DB]" />Evidence based checks linked to real projects, not just CV keywords.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#A726CD]" />Straight talk on salary, location and market reality before time is wasted.</li>
            </ul>
          </div>

          <div id="candidates">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171878]">For candidates</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We work with senior engineers who want their work to matter in real grids, storage and buildings — not just in ad tech or generic software.
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#6C66DF]" />Roles where your skills move real energy systems, not just dashboards.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4379DB]" />Clear detail on codebase, data, infra and team before you commit.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#A726CD]" />Support from first conversation to the first months in the role.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
