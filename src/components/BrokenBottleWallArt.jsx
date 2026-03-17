import React from 'react'
import ProductSlideshow from './ProductSlideshow'

const BrokenBottleWallArt = () => {
  const galleryImages = [
    '/assets/gallery/broken-bottle-wall-art/slideshow/1.jpg',
    '/assets/gallery/broken-bottle-wall-art/slideshow/2.jpg',
    '/assets/gallery/broken-bottle-wall-art/slideshow/3.jpg',
    '/assets/gallery/broken-bottle-wall-art/slideshow/4.jpg'
  ]

  const stockItems = [
    {
      id: 1,
      name: 'Emerald Shards',
      description: 'We use recycled glass bottles to create these artworks.',
      image: '/assets/gallery/broken-bottle-wall-art/catalog/1.jpg'
    },
    {
      id: 2,
      name: 'Amber Echo',
      description: 'using Epoxy resin, we highlight the beauty of the drink, forever cherishing the memories.',
      image: '/assets/gallery/broken-bottle-wall-art/catalog/2.jpg'
    },
    {
      id: 3,
      name: 'City Lights',
      description: 'though currently limited to order only, we open to customs designs for as low as 2k.',
      image: '/assets/gallery/broken-bottle-wall-art/catalog/3.jpg'
    }
  ]

  return (
    <main className="container mx-auto py-16 px-6 md:px-12 space-y-16">
      {/* Hero gallery / slideshow */}
      <ProductSlideshow images={galleryImages} alt="Broken bottle resin wall art detail" />

      {/* Product story / about section */}
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Broken Bottle Wall Art
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          The Broken Bottle series by <span className="font-semibold text-blue-900">vexor art</span>{' '}
          transforms discarded glass into detailed, high-texture wall art. Each piece captures light
          differently throughout the day, making your wall feel alive.
        </p>
        <p className="text-lg text-blue-800">
          We play with color combinations, glass shapes and resin depth to create artworks that feel
          both raw and refined. Ideal for living rooms, hallways and statement walls in cafes or
          studios.
        </p>
      </section>

      {/* Ready-made stock grid */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Ready-made wall pieces
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            One-of-one artworks, updated as new bottles are reborn.
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
                  DM us to check availability or commission a piece using your own bottles.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default BrokenBottleWallArt

