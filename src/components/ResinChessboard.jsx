import React from 'react'
import ProductSlideshow from './ProductSlideshow'

const ResinChessboard = () => {
  const galleryImages = [
    '/assets/gallery/chessboards/slideshow/1.jpg',
    '/assets/gallery/chessboards/slideshow/2.jpg',
    '/assets/gallery/chessboards/slideshow/3.jpg',
    '/assets/gallery/chessboards/slideshow/4.jpg'
  ]

  const stockItems = [
    {
      id: 1,
      name: 'Midnight Marble Chessboard',
      description: 'Deep black and pearl white swirls with a high-gloss finish, ideal for a modern living room centerpiece.',
      image: '/assets/gallery/chessboards/catalog/1.jpg'
    },
    {
      id: 2,
      name: 'Ocean Drift Chessboard',
      description: 'Ocean-inspired blues and foamy whites with subtle metallic accents for a coastal aesthetic.',
      image: '/assets/gallery/chessboards/catalog/2.jpg'
    },
    {
      id: 3,
      name: 'Emerald Eclipse Chessboard',
      description: 'Rich emerald tones blended with charcoal and gold flakes, perfect for bold interiors.',
      image: '/assets/gallery/chessboards/catalog/3.jpg'
    }
  ]

  return (
    <main className="container mx-auto py-16 px-6 md:px-12 space-y-16">
      {/* Hero gallery / slideshow */}
      <ProductSlideshow images={galleryImages} alt="Resin chessboard detail" />

      {/* Product story / about section */}
      <section className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          Resin Chessboards
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          Each resin chessboard by <span className="font-semibold text-blue-900">vexor art</span> is
          hand-poured, sanded and finished to create a functional artwork that feels as good as it
          looks. We carefully balance color, depth and gloss so your board becomes a centerpiece
          even when no game is being played.
        </p>
        <p className="text-lg text-blue-800">
          Boards can be customized in size, color palette and finish to match your interior style,
          from minimal monochrome to bold, high-contrast swirls. Reach out via WhatsApp or
          Instagram for custom requests or to reserve any of the ready-made boards below.
        </p>
      </section>

      {/* Ready-made stock grid, matching portfolio feel */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Ready-made chessboards
          </h2>
          <p className="text-sm md:text-base text-blue-700">
            Updated as new pieces are poured and finished.
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
                  To inquire or reserve, send a message on WhatsApp or Instagram.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ResinChessboard

