import { useEffect, useState } from 'react'
import { Menu, X, Linkedin } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'For clients', href: '#clients' },
  { label: 'For candidates', href: '#candidates' },
  { label: 'Open roles', href: '#roles' },
  { label: 'About Lumen', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const baseClasses = 'fixed top-0 inset-x-0 z-50 transition-colors'
  const bgClasses = scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <header className={`${baseClasses} ${bgClasses}`}>
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#522AB8] via-[#6C66DF] to-[#4379DB]" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#171878]">Lumen Partners</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-700 hover:text-[#171878] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 inline-flex items-center justify-center rounded-md bg-[#A726CD] text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-[#b83dd7] active:scale-[0.99] transition"
            >
              Book a call
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 text-[#171878]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center rounded-md bg-[#A726CD] text-white text-sm font-semibold px-4 py-2 shadow-sm hover:bg-[#b83dd7] active:scale-[0.99] transition"
              >
                Book a call
              </a>
            </div>
            <div className="px-3">
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#171878]">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
