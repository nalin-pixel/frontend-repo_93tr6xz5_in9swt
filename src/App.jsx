import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SplitForClientsCandidates from './components/SplitForClientsCandidates'
import Services from './components/Services'
import Process from './components/Process'
import Proof from './components/Proof'
import About from './components/About'
import OpenRoles from './components/OpenRoles'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SplitForClientsCandidates />
        <Services />
        <Process />
        <Proof />
        <About />
        <OpenRoles />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
