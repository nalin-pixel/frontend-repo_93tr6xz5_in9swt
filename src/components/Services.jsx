import { Cpu, Database, ServerCog, Workflow } from 'lucide-react'

const cards = [
  {
    icon: Cpu,
    title: 'Senior data and ML hires',
    desc: 'Senior data scientists and ML leads for forecasting, flexibility, optimisation and decision systems around the grid, storage and buildings.',
    color: 'from-[#522AB8] to-[#6C66DF]'
  },
  {
    icon: Database,
    title: 'Energy data engineering',
    desc: 'Senior data engineers who manage grid, market, DER and building data pipelines that feed real products, not just internal reports.',
    color: 'from-[#171878] to-[#4379DB]'
  },
  {
    icon: ServerCog,
    title: 'Backend and platform engineering',
    desc: 'Senior backend and platform engineers who build optimisation engines, scheduling systems and other software that must run reliably.',
    color: 'from-[#6C66DF] to-[#4379DB]'
  },
  {
    icon: Workflow,
    title: 'ML and MLOps roles',
    desc: 'ML and MLOps engineers for teams that expect experiments to reach production systems that control or inform real energy assets.',
    color: 'from-[#A726CD] to-[#8500BD]'
  }
]

export default function Services() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#171878] mb-8">What we help with</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className={`h-1.5 w-full bg-gradient-to-r ${c.color}`} />
              <div className="p-5 flex-1 flex flex-col">
                <c.icon className="text-[#522AB8]" />
                <h3 className="mt-3 font-semibold text-[#171878]">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
