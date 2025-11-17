import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#171878] text-white py-10">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#522AB8] via-[#6C66DF] to-[#4379DB]" />
            <div>
              <div className="font-bold">Lumen Partners</div>
              <p className="text-sm text-white/80">Lumen Partners is a specialist search firm for senior ML, data and software engineers in US energy and climate.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#clients" className="hover:underline">For clients</a>
            <a href="#candidates" className="hover:underline">For candidates</a>
            <a href="#roles" className="hover:underline">Open roles</a>
            <a href="#about" className="hover:underline">About Lumen</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#contact" className="inline-flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/70">
          Company number and registered office: Placeholder
        </div>
      </div>
    </footer>
  )
}
