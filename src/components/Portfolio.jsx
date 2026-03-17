import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Resin Chessboards",
      description: "Hand-poured resin chessboards, each a unique blend of color and design, making every game a work of art. Customizable in various hues and finishes.",
      image: "/assets/gallery/chessboards/slideshow/1.jpg",
      alt: "Resin Chessboard",
      route: "/portfolio/chessboards"
    },
    {
      id: 2,
      title: "Letter Keychains",
      description: "Personalized letter keychains crafted in resin, perfect for names, initials, and custom gifts that stand out.",
      image: "/assets/gallery/letter-keychains/slideshow/1.jpg",
      alt: "Letter Keychains",
      route: "/portfolio/butterfly-keychains"
    },
    {
      id: 3,
      title: "Herb Grinders",
      description: "Custom resin herb grinders with bold color combinations and a smooth, durable finish for everyday use.",
      image: "/assets/gallery/herb-grinders/slideshow/1.jpg",
      alt: "Herb Grinders",
      route: "/portfolio/coffee-tables"
    },
    {
      id: 4,
      title: "Resin Custom Wall Arts",
      description: "Bespoke resin wall art tailored to your vision. From abstract liquid art to intricate geode designs, we create personalized masterpieces for your space.",
      image: "/assets/gallery/custom-wall-art/slideshow/1.jpg",
      alt: "Resin Custom Wall Art",
      route: "/portfolio/custom-wall-art"
    },
    {
      id: 5,
      title: "Broken Bottle Wall Art",
      description: "Transforming discarded glass into captivating wall art. Our 'Broken Bottle' series redefines waste into stunning, textured pieces with vibrant resin accents.",
      image: "/assets/gallery/broken-bottle-wall-art/slideshow/1.jpg",
      alt: "Broken Bottle Wall Art",
      route: "/portfolio/broken-bottle-wall-art"
    },
    {
      id: 6,
      title: "Resin Trays",
      description: "Elegant resin trays designed for both function and beauty. Ideal for serving, organizing, or displaying, these trays feature swirling oceanic colors and a glossy finish.",
      image: "/assets/gallery/trays/slideshow/1.jpg",
      alt: "Resin Trays",
      route: "/portfolio/trays"
    }
  ]

  return (
    <section id="portfolio" className="container mx-auto py-16 px-6 md:px-12 fade-in">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden portfolio-item border-2 border-blue-100 hover:transform hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-2xl font-semibold text-blue-900">{item.title}</h3>
              <p className="text-blue-800 flex-1">{item.description}</p>
              {item.route && (
                <div className="pt-2">
                  <Link
                    to={item.route}
                    className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-blue-800 border border-white/50 bg-white/20 backdrop-blur-md shadow-sm transition-all duration-200
                               hover:-translate-y-0.5 hover:scale-[1.02] hover:text-blue-900 hover:border-cyan-200 hover:bg-white/30 hover:shadow-lg
                               active:translate-y-0 active:scale-[0.98]
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white/40"
                    style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.35), 0 10px 26px rgba(34,211,238,0.28)' }}
                  >
                    <span
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(60% 120% at 50% 50%, rgba(34,211,238,0.38) 0%, rgba(34,211,238,0.18) 35%, rgba(255,255,255,0) 70%)'
                      }}
                    />
                    <span className="relative">View collection</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
