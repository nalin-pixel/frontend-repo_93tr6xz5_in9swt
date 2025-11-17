export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-[#522AB8] via-[#6C66DF] to-[#4379DB]" />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171878] mb-4">About Lumen Partners</h2>
          <p className="text-gray-700 leading-relaxed">
            Lumen Partners exists to bridge the gap between energy knowledge and advanced ML, data and software hiring. We are led by a founder who has worked inside a global energy research and analytics company, so we understand power markets, grid constraints and storage economics, not just job titles.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We apply this domain understanding to every search, which results in stronger role definitions and better matched shortlists.
          </p>
          <div className="mt-5">
            <div className="text-sm font-semibold text-[#171878]">What clients can expect</div>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#6C66DF]" />Clear views on whether your role is realistic in the current market.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#4379DB]" />Shortlists built around impact on grid, storage or building outcomes, not just tech buzzwords.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#A726CD]" />Direct and honest communication throughout. No ghosting.</li>
            </ul>
        </div>
      </div>
    </section>
  )
}
