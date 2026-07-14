import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About /> {/* <-- Nova seção adicionada aqui */}
      </main>
    </div>
  )
}

export default App