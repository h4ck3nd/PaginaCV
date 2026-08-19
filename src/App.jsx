import NetworkBackground from './components/NetworkBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import CVESpotlight from './components/CVESpotlight'
import BugBounty from './components/BugBounty'
import HTBBanner from './components/HTBBanner'
import Homelab from './components/Homelab'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NetworkBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CVESpotlight />
        <BugBounty />
        <HTBBanner />
        <Homelab />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
