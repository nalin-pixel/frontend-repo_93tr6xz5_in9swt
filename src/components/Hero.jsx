import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 sm:pb-24">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171878] leading-tight">
              Senior ML, data and software hires for US energy and climate.
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              We are a specialist search firm that helps US energy and climate companies building grid, storage and buildings products to hire engineers who understand both energy systems and modern data and ML, so shipping does not stall because of missing people.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[#A726CD] text-white text-sm sm:text-base font-semibold px-5 py-3 shadow-sm hover:bg-[#b83dd7] active:scale-[0.99] transition">
                Book a call
              </a>
              <a href="#candidates" className="inline-flex items-center justify-center rounded-md border border-[#6C66DF] text-[#171878] text-sm sm:text-base font-semibold px-5 py-3 bg-white/60 hover:bg-white transition">
                I am a candidate
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Search for the teams building data and AI products around the grid, storage and buildings.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-white/60 bg-white/70 backdrop-blur shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <Metric label="Shortlist" value="~2 days" />
                <Metric label="Seniority" value="Senior only" />
                <Metric label="Market" value="US energy" />
                <Metric label="Focus" value="ML • Data • Software" />
              </div>
              <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-[#171878] via-[#6C66DF] to-[#4379DB]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-lg font-bold text-[#171878]">{value}</div>
    </div>
  )
}
