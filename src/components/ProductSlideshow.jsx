import React, { useEffect, useRef, useState } from 'react'

const AUTO_ADVANCE_MS = 5000
const FADE_MS = 500

const ProductSlideshow = ({ images, alt }) => {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : []
  const [index, setIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const intervalRef = useRef(null)
  const fadeTimeoutRef = useRef(null)

  const total = safeImages.length
  const currentSrc = total > 0 ? safeImages[index % total] : ''

  const goTo = (nextIndex) => {
    if (total <= 1) return
    setIsFading(true)
    window.clearTimeout(fadeTimeoutRef.current)
    fadeTimeoutRef.current = window.setTimeout(() => {
      setIndex(nextIndex)
      setIsFading(false)
    }, FADE_MS)
  }

  const goToPrev = () => {
    const next = index === 0 ? total - 1 : index - 1
    goTo(next)
  }

  const goToNext = () => {
    const next = (index + 1) % total
    goTo(next)
  }

  useEffect(() => {
    window.clearInterval(intervalRef.current)
    if (total > 1) {
      intervalRef.current = window.setInterval(() => {
        // Use functional update to avoid stale index closure
        setIsFading(true)
        window.clearTimeout(fadeTimeoutRef.current)
        fadeTimeoutRef.current = window.setTimeout(() => {
          setIndex((prev) => (prev + 1) % total)
          setIsFading(false)
        }, FADE_MS)
      }, AUTO_ADVANCE_MS)
    }

    return () => {
      window.clearInterval(intervalRef.current)
      window.clearTimeout(fadeTimeoutRef.current)
    }
  }, [total])

  return (
    <section className="bg-white bg-opacity-90 rounded-3xl shadow-xl overflow-hidden">
      <div className="relative bg-gradient-to-br from-blue-50/60 via-white/30 to-cyan-50/60">
        {currentSrc ? (
          <>
            {/* Soft full-bleed background image */}
            <div
              className={`absolute inset-0 transition-opacity ${isFading ? 'opacity-0' : 'opacity-100'}`}
              style={{ transitionDuration: `${FADE_MS}ms` }}
              aria-hidden="true"
            >
              <img
                src={currentSrc}
                alt=""
                className="w-full h-full object-cover scale-110 blur-md opacity-50"
              />
              <div className="absolute inset-0 bg-white/25" />
            </div>

            {/* Foreground crisp image */}
            <img
              src={currentSrc}
              alt={alt}
              className={`relative w-full h-[320px] md:h-[520px] object-cover md:object-contain rounded-3xl transition-opacity ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ transitionDuration: `${FADE_MS}ms` }}
            />
          </>
        ) : (
          <div className="w-full h-[320px] md:h-[520px] bg-white/70 flex items-center justify-center rounded-3xl">
            <p className="text-blue-800 font-medium">Add images to this gallery to start the slideshow.</p>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
              {safeImages.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => goTo(dotIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    dotIndex === index ? 'w-8 bg-white' : 'w-3 bg-white/60'
                  }`}
                  aria-label={`Go to image ${dotIndex + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ProductSlideshow

