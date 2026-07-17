import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App