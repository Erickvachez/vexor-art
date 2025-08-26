import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="antialiased bg-gradient-to-br from-blue-100 via-cyan-200 to-green-200 min-h-screen">
      <WhatsAppFloat />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App

