export default function Process() {
  const steps = [
    {
      title: 'Define the role and reality',
      desc: 'We define the real work, outcomes and non‑negotiables, including tech stack, data, markets and product milestones.'
    },
    {
      title: 'Map the market and reach out',
      desc: 'We map the target market and run focused outreach into energy ML, data and software talent, then feedback how the role and package compare.'
    },
    {
      title: 'Shortlist and interviews',
      desc: 'For clear roles, you receive a small shortlist in about two working days. Each profile ties to evidence of impact. We provide simple interview scorecards.'
    },
    {
      title: 'Offer and aftercare',
      desc: 'We help manage offers, counter offers, visas or relocation and stay close through the first months so hires stick and delivery is not derailed.'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#171878] mb-10">How our search process works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="flex md:block items-start gap-4">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#522AB8] to-[#4379DB] text-white grid place-items-center font-bold">{i + 1}</div>
              </div>
              <div>
                <h3 className="mt-2 md:mt-4 font-semibold text-[#171878]">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
