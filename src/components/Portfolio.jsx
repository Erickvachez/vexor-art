import React from 'react'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Resin Chessboards",
      description: "Hand-poured resin chessboards, each a unique blend of color and design, making every game a work of art. Customizable in various hues and finishes.",
      image: "/assets/portfolio/chessboard.jpg",
      alt: "Resin Chessboard"
    },
    {
      id: 2,
      title: "Resin Coffee Tables",
      description: "Exquisite resin-top coffee tables, designed to be the centerpiece of any living space. Featuring organic patterns and a durable, high-gloss finish.",
      image: "/assets/portfolio/coffee-table.jpg",
      alt: "Resin Coffee Table"
    },
    {
      id: 3,
      title: "Broken Bottle Wall Art",
      description: "Transforming discarded glass into captivating wall art. Our 'Broken Bottle' series redefines waste into stunning, textured pieces with vibrant resin accents.",
      image: "/assets/portfolio/broken-bottle.jpg",
      alt: "Broken Bottle Wall Art"
    },
    {
      id: 4,
      title: "Resin Custom Wall Arts",
      description: "Bespoke resin wall art tailored to your vision. From abstract liquid art to intricate geode designs, we create personalized masterpieces for your space.",
      image: "/assets/portfolio/resin-wallart.jpg",
      alt: "Resin Custom Wall Art"
    },
    {
      id: 5,
      title: "Butterfly Resin Keychains",
      description: "Delicate butterfly keychains crafted from vibrant resin, perfect for adding a touch of color and charm to your everyday essentials. Each piece is unique and hand-poured.",
      image: "/assets/portfolio/butterfly.jpg",
      alt: "Butterfly Resin Keychains"
    },
    {
      id: 6,
      title: "Resin Trays",
      description: "Elegant resin trays designed for both function and beauty. Ideal for serving, organizing, or displaying, these trays feature swirling oceanic colors and a glossy finish.",
      image: "/assets/portfolio/trays.jpg",
      alt: "Resin Trays"
    }
  ]

  return (
    <section id="portfolio" className="container mx-auto py-16 px-6 md:px-12 fade-in">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden portfolio-item border-2 border-blue-100 hover:transform hover:scale-105 transition-transform duration-300">
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">{item.title}</h3>
              <p className="text-blue-800">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
