import React from 'react'
import ProductSlideshow from './ProductSlideshow'

const ButterflyKeychains = () => {
  const galleryImages = [
    '/assets/gallery/letter-keychains/slideshow/1.jpg',
    '/assets/gallery/letter-keychains/slideshow/2.jpg',
    '/assets/gallery/letter-keychains/slideshow/3.jpg',
    '/assets/gallery/letter-keychains/slideshow/4.jpg'
  ]

  const stockItems = [
    {
      id: 1,
      name: 'Glitter Initial Keychain',
      description: 'Dark resin letter keychain packed with colorful glitter and a gold keyring, shown here as a sparkling "S".',
      image: '/assets/gallery/letter-keychains/catalog/1.jpg'
    },
    {
      id: 2,
      name: 'Crescent Moon Keychain',
      description: 'Purple and blue crescent moon resin keychain with embedded flower and star details on a gold ring.',
      image: '/assets/gallery/letter-keychains/catalog/2.jpg'
    },
    {
      id: 3,
      name: 'Holographic Letter Keychain',
      description: 'Clear resin "K" letter keychain filled with holographic glitter that shimmers in the light, on a gold chain and ring.',
      image: '/assets/gallery/letter-keychains/catalog/3.jpg'
    }
  ]

  return (
    <main className="container mx-auto py-16 px-6 md:px-12 space-y-16">
      {/* Hero gallery / slideshow */}
      <ProductSlideshow images={galleryImages} alt="Letter resin keychain detail" />

      {/* Product story / about section */}
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Letter Keychains
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          Small pieces with big personality. These letter keychains by{' '}
          <span className="font-semibold text-blue-900">vexor art</span> are hand-poured in small
          batches, making each wing pattern unique.
        </p>
        <p className="text-lg text-blue-800">
          Perfect as gifts, event favors or a personal daily pop of color. Choose initials, full names
          or short words in soft pastels, bold neons or custom color requests.
        </p>
      </section>

      {/* Ready-made stock grid */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Available keychain sets
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            Mix-and-match or request a color theme for your order.
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
                  Message us with the name of the set to check stock and pricing.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ButterflyKeychains

