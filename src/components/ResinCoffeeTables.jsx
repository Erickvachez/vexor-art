import React from 'react'
import ProductSlideshow from './ProductSlideshow'

const ResinCoffeeTables = () => {
  const galleryImages = [
    '/assets/gallery/herb-grinders/slideshow/1.jpg',
    '/assets/gallery/herb-grinders/slideshow/2.jpg',
    '/assets/gallery/herb-grinders/slideshow/3.jpg',
    '/assets/gallery/herb-grinders/slideshow/4.jpg'
  ]

  const stockItems = [
    {
      id: 1,
      name: 'Blue Duo Herb Grinder',
      description: 'A pair of translucent and solid blue resin grinders with colorful embedded flecks, smooth finish and sharp teeth.',
      image: '/assets/gallery/herb-grinders/catalog/1.jpg'
    },
    {
      id: 2,
      name: 'Custom Portrait Grinder',
      description: 'Turquoise resin grinder with an embedded custom portrait sticker, a one-of-a-kind personalized piece.',
      image: '/assets/gallery/herb-grinders/catalog/2.jpg'
    },
    {
      id: 3,
      name: 'Gold Glitter Custom Grinder',
      description: 'Gold glitter resin grinder with embedded custom graphics and QR code, a bold statement piece that shines.',
      image: '/assets/gallery/herb-grinders/catalog/3.jpg'
    }
  ]

  return (
    <main className="container mx-auto py-16 px-6 md:px-12 space-y-16">
      {/* Hero gallery / slideshow */}
      <ProductSlideshow images={galleryImages} alt="Resin herb grinder detail" />

      {/* Product story / about section */}
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Herb Grinders
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          Our resin herb grinders are built for daily use, combining bold, liquid color patterns with
          a smooth, comfortable grip. Every pour is unique, turning a simple tool into a mini artwork.
        </p>
        <p className="text-lg text-blue-800">
          Choose from calm ocean tones, fiery sunset blends or clean monochromes. Message{' '}
          <span className="font-semibold text-blue-900">vexor art</span> for custom color palettes or
          themed sets.
        </p>
      </section>

      {/* Ready-made stock grid */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Ready-made herb grinders
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            Browse finished grinders that are ready to deliver or collect.
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
                  To purchase or customize a similar piece, reach out via WhatsApp or Instagram.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ResinCoffeeTables

