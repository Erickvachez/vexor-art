import React from 'react'
import ProductSlideshow from './ProductSlideshow'

const ResinTrays = () => {
  const galleryImages = [
    '/assets/gallery/trays/slideshow/1.jpg',
    '/assets/gallery/trays/slideshow/2.jpg',
    '/assets/gallery/trays/slideshow/3.jpg',
    '/assets/gallery/trays/slideshow/4.jpg'
  ]

  const stockItems = [
    {
      id: 1,
      name: 'Ocean Serve Tray',
      description: 'Sea-blue resin waves with white foam details, perfect for serving drinks.',
      image: '/assets/gallery/trays/catalog/1.jpg'
    },
    {
      id: 2,
      name: 'Gold Vein Vanity Tray',
      description: 'Neutral base with gold veining, ideal for perfumes, candles or accessories.',
      image: '/assets/gallery/trays/catalog/2.jpg'
    },
    {
      id: 3,
      name: 'Midnight Marble Tray',
      description: 'Dark marbled resin with a high-gloss finish for bold tabletops.',
      image: '/assets/gallery/trays/catalog/3.jpg'
    }
  ]

  return (
    <main className="container mx-auto py-16 px-6 md:px-12 space-y-16">
      {/* Hero gallery / slideshow */}
      <ProductSlideshow images={galleryImages} alt="Resin tray detail" />

      {/* Product story / about section */}
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Resin Trays
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          Resin trays by <span className="font-semibold text-blue-900">vexor art</span> bring a
          little luxury to everyday routines. Use them for serving, styling your coffee table, or
          organizing vanity items with a unique art piece.
        </p>
        <p className="text-lg text-blue-800">
          We experiment with ocean themes, marble looks and bold color-blocking. Trays can be
          customized in size, shape and handle style to suit your space.
        </p>
      </section>

      {/* Ready-made stock grid */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Ready-made trays
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            Ideal for gifting or styling—contact us for available colors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockItems.map((item) => (
            <article
              key={item.id}
              className="bg-white bg-opacity-95 rounded-2xl shadow-lg overflow-hidden border-2 border-blue-100 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-semibold text-blue-900">{item.name}</h3>
                <p className="text-blue-800 flex-1">{item.description}</p>
                <p className="text-sm text-blue-700">
                  Send us a message with the tray name to confirm stock or order a similar design.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ResinTrays

