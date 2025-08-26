import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [gradientDirection, setGradientDirection] = useState('to-r')
  const [gradientColors, setGradientColors] = useState(['from-blue-300', 'via-cyan-200', 'to-green-200'])
  const [animationSpeed, setAnimationSpeed] = useState(5000)
  const [currentGradient, setCurrentGradient] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const gradientStyles = [
    {
      background: 'linear-gradient(90deg, #93c5fd, #67e8f9, #86efac)',
      direction: '90deg'
    },
    {
      background: 'linear-gradient(270deg, #4ade80, #5eead4, #60a5fa)',
      direction: '270deg'
    },
    {
      background: 'linear-gradient(45deg, #facc15, #fdba74, #f87171)',
      direction: '45deg'
    },
    {
      background: 'linear-gradient(135deg, #34d399, #67e8f9, #3b82f6)',
      direction: '135deg'
    },
    {
      background: 'linear-gradient(180deg, #93c5fd, #67e8f9, #86efac)',
      direction: '180deg'
    },
    {
      background: 'linear-gradient(315deg, #4ade80, #5eead4, #60a5fa)',
      direction: '315deg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true)
        const nextGradient = (currentGradient + 1) % gradientStyles.length
        setCurrentGradient(nextGradient)
        
        // Use setTimeout to create a smooth transition
        setTimeout(() => {
          setGradientColors([gradientStyles[nextGradient].background])
          setGradientDirection(gradientStyles[nextGradient].direction)
          setIsTransitioning(false)
        }, 100) // 100ms transition duration for faster, more subtle transitions
      }
    }, animationSpeed)

    return () => clearInterval(interval)
  }, [animationSpeed, currentGradient, isTransitioning])

  const handleHeaderClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      const randomStyle = gradientStyles[Math.floor(Math.random() * gradientStyles.length)]
      
      // Smooth transition on click
      setTimeout(() => {
        setGradientColors([randomStyle.background])
        setGradientDirection(randomStyle.direction)
        setIsTransitioning(false)
      }, 100) // 100ms transition duration for faster, more subtle transitions
      
      setAnimationSpeed(prev => prev === 5000 ? 3000 : 5000) // Toggle between fast and slow
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header 
      className="shadow-sm py-4 px-6 md:px-12 sticky top-0 z-40 rounded-b-lg transition-all duration-100 ease-in-out cursor-pointer animated-gradient"
      onClick={handleHeaderClick}
      style={{
        background: gradientColors[0],
        backgroundSize: '300% 300%',
        opacity: isTransitioning ? 0.95 : 1,
        transition: 'opacity 0.1s ease-in-out, background 0.1s ease-in-out'
      }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-4 text-2xl font-bold text-blue-900 hover:text-green-700 transition duration-300"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img
            src="/assets/logo.png"
            alt="vexor art logo"
            className="h-24 w-24 rounded-full object-contain shadow-md border-4 border-blue-200 bg-cyan-100"
            style={{ maxWidth: '96px', maxHeight: '96px' }}
          />
          <span>vexor art</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-blue-700 hover:text-green-700 font-medium transition duration-300 text-lg lg:text-xl px-2 py-1"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-blue-700 hover:text-green-700 font-medium transition duration-300 text-lg lg:text-xl px-2 py-1"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-blue-700 hover:text-green-700 font-medium transition duration-300 text-lg lg:text-xl px-2 py-1"
          >
            Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-700 hover:text-green-700 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white bg-opacity-95 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-blue-700 hover:text-green-700 font-medium transition duration-300 text-lg px-4 py-2 text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-blue-700 hover:text-green-700 font-medium transition duration-300 text-lg px-4 py-2 text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-blue-700 hover:text-green-700 font-medium transition duration-300 text-lg px-4 py-2 text-left"
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
