import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'
import ResinChessboard from './components/ResinChessboard'
import ResinCoffeeTables from './components/ResinCoffeeTables'
import BrokenBottleWallArt from './components/BrokenBottleWallArt'
import ResinCustomWallArt from './components/ResinCustomWallArt'
import ButterflyKeychains from './components/ButterflyKeychains'
import ResinTrays from './components/ResinTrays'

function App() {
  return (
    <div className="antialiased bg-gradient-to-br from-blue-100 via-cyan-200 to-green-200 min-h-screen">
      <WhatsAppFloat />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio/chessboards"
          element={
            <>
              <ResinChessboard />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio/coffee-tables"
          element={
            <>
              <ResinCoffeeTables />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio/broken-bottle-wall-art"
          element={
            <>
              <BrokenBottleWallArt />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio/custom-wall-art"
          element={
            <>
              <ResinCustomWallArt />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio/butterfly-keychains"
          element={
            <>
              <ButterflyKeychains />
              <Contact />
            </>
          }
        />
        <Route
          path="/portfolio/trays"
          element={
            <>
              <ResinTrays />
              <Contact />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App

