import React from 'react'
import ProductSlideshow from './ProductSlideshow'

const ResinCustomWallArt = () => {
  const galleryImages = [
    '/assets/gallery/custom-wall-art/slideshow/1.jpg',
    '/assets/gallery/custom-wall-art/slideshow/2.jpg',
    '/assets/gallery/custom-wall-art/slideshow/3.jpg',
    '/assets/gallery/custom-wall-art/slideshow/4.jpg'
  ]

  const stockItems = [
    {
      id: 1,
      name: 'Ocean Geode',
      description: 'Layered blues, whites and metallic lines to mimic geode crystal structures.',
      image: '/assets/gallery/custom-wall-art/catalog/1.jpg'
    },
    {
      id: 2,
      name: 'Solar Flare',
      description: 'Warm yellows, orange and deep reds with high-gloss and texture details.',
      image: '/assets/gallery/custom-wall-art/catalog/2.jpg'
    },
    {
      id: 3,
      name: 'Monochrome Flow',
      description: 'Black, white and grey resin swirls for minimal, modern spaces.',
      image: '/assets/gallery/custom-wall-art/catalog/3.jpg'
    }
  ]

  return (
    <main className="container mx-auto py-16 px-6 md:px-12 space-y-16">
      {/* Hero gallery / slideshow */}
      <ProductSlideshow images={galleryImages} alt="Resin custom wall art detail" />

      {/* Product story / about section */}
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Resin Custom Wall Arts
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          Custom resin wall art from <span className="font-semibold text-blue-900">vexor art</span>{' '}
          lets you bring your own story, colors and mood onto the wall. We sketch concepts with you
          first, then pour layers of resin to build depth and movement.
        </p>
        <p className="text-lg text-blue-800">
          From soft neutral palettes to loud statement pieces, every artwork is built to match your
          space and personality. Use the ready-made gallery below for inspiration or claim one of
          the pieces directly.
        </p>
      </section>

      {/* Ready-made stock grid */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Ready-made wall artworks
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            Pieces that can be collected now, or used as reference for your own commission.
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
                  Save this piece and send us a screenshot when you DM for a similar custom artwork.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ResinCustomWallArt

