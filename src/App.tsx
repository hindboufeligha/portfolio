import Header from './components/layout/Header'
import SiteLayout from './components/layout/SiteLayout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Publications from './components/sections/Publications'
import Footer from './components/layout/Footer'
import Contact from './components/sections/Contact'

function App() {
  return (
    <SiteLayout>
      <div id="top">
        <Header />

        <main>
          <Hero />

          <About />

          <Projects />

          <Publications />

          <Contact />
        </main>

        <Footer />
      </div>
    </SiteLayout>
  )
}

export default App
