export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171878] mb-2">Contact</h2>
            <p className="text-gray-700">Tell us about your team and the roles you need to fill. We reply quickly.</p>
            <div className="mt-6 grid gap-3 text-sm text-gray-700">
              <div><span className="font-semibold text-[#171878]">Headquarters:</span> Oxford, UK</div>
              <div><span className="font-semibold text-[#171878]">Market:</span> United States</div>
              <div><span className="font-semibold text-[#171878]">Sector:</span> Energy and climate</div>
              <div><span className="font-semibold text-[#171878]">Niche:</span> Senior ML, data and software engineers</div>
            </div>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-gray-50 rounded-xl border border-gray-200 p-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required className="mt-1 w-full rounded-md border-gray-300 focus:border-[#6C66DF] focus:ring-[#6C66DF]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-[#6C66DF] focus:ring-[#6C66DF]" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input className="mt-1 w-full rounded-md border-gray-300 focus:border-[#6C66DF] focus:ring-[#6C66DF]" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-md border-gray-300 focus:border-[#6C66DF] focus:ring-[#6C66DF]" placeholder="What are you hiring for?" />
              </div>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center justify-center rounded-md bg-[#A726CD] text-white text-sm font-semibold px-5 py-2.5 shadow-sm hover:bg-[#b83dd7] active:scale-[0.99] transition">Send</button>
                <button className="inline-flex items-center justify-center rounded-md border border-[#6C66DF] text-[#171878] text-sm font-semibold px-5 py-2.5 bg-white hover:bg-gray-50">Book a call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
