export default function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-[#171878] via-[#522AB8] to-[#A726CD]" />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171878]">Hiring for grid, storage or building data and AI teams?</h2>
            <p className="mt-3 text-gray-700">Share what you are working on and we will tell you honestly if we can help.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[#A726CD] text-white text-sm sm:text-base font-semibold px-5 py-3 shadow-sm hover:bg-[#b83dd7] active:scale-[0.99] transition">Book a call</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-[#6C66DF] text-[#171878] text-sm sm:text-base font-semibold px-5 py-3 bg-white hover:bg-gray-50">Send a message</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
