export default function Proof() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171878] mb-4">Why teams choose Lumen Partners</h2>
          <p className="text-gray-700 leading-relaxed">
            We run as a low volume, high depth search firm. We take on fewer mandates, go deeper on each, and are honest about what is and is not possible.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <MetricBlock label="Senior hires" value="X" sub="into US energy and climate" />
            <MetricBlock label="Still in role" value="Y%" sub="after 12 months" />
            <MetricBlock label="Shortlist time" value="~2 days" sub="from clear brief" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#171878]/20 via-[#6C66DF]/10 to-[#A726CD]/20 rounded-2xl" />
          <div className="relative grid gap-4 p-4">
            <Quote
              text="Lumen helped us hire a senior ML lead who unblocked our load forecasting roadmap. Shipping accelerated because interviews focused on real market and model outcomes."
              author="VP of Data, US retailer"
            />
            <Quote
              text="We needed an engineer who could own a storage optimisation engine end-to-end. The shortlist was tight and relevant, and we shipped our trading layer weeks earlier."
              author="CTO, battery platform"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricBlock({ label, value, sub }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="text-2xl font-extrabold text-[#171878] mt-1">{value}</div>
      <div className="text-xs text-gray-600 mt-1">{sub}</div>
    </div>
  )
}

function Quote({ text, author }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <p className="text-gray-800">“{text}”</p>
      <div className="mt-3 text-sm font-medium text-[#171878]">{author}</div>
    </div>
  )
}
