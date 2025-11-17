export default function OpenRoles() {
  const roles = [
    {
      title: 'Senior ML Engineer, Load Forecasting',
      location: 'Remote, US time zones',
      summary: 'Own demand and DR forecasting models for market and operations decisions.'
    },
    {
      title: 'Senior Data Engineer, Battery Portfolio',
      location: 'Austin, TX or Remote, US',
      summary: 'Build and operate market and asset data pipelines for a large storage portfolio.'
    },
    {
      title: 'Senior Backend Engineer, Flexibility Platform',
      location: 'Remote, US time zones',
      summary: 'Develop high-reliability services for scheduling, control and optimisation.'
    }
  ]

  return (
    <section id="roles" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#171878] mb-2">Open roles</h2>
        <p className="text-gray-700">Live roles for senior ML, data and software engineers in US energy and climate.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col">
              <h3 className="font-semibold text-[#171878]">{r.title}</h3>
              <div className="text-sm text-gray-600 mt-1">{r.location}</div>
              <p className="text-sm text-gray-700 mt-3 flex-1">{r.summary}</p>
              <div className="mt-4 flex items-center gap-3">
                <button className="inline-flex items-center justify-center rounded-md bg-[#A726CD] text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-[#b83dd7] active:scale-[0.99] transition">View details</button>
                <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-[#6C66DF] text-[#171878] text-sm font-semibold px-4 py-2 bg-white hover:bg-gray-50">Register your interest</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
