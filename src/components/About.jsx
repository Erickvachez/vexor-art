import React from 'react'

const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-6 md:px-12 bg-white bg-opacity-80 rounded-xl shadow-md fade-in">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Artist Photo */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <img
            src="/assets/artist-photo.jpg"
            alt="Artist Photo"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-blue-200 bg-cyan-100"
          />
        </div>
        {/* About Text */}
        <div className="md:w-2/3 text-lg text-blue-800">
          <p className="mb-4">
            <strong className="text-blue-900">vexor art</strong> is a Kenyan-based resin art company dedicated to transforming spaces with unique, handcrafted resin masterpieces. We specialize in custom designs that blend functionality with artistic expression, creating truly one-of-a-kind pieces for your home or office.
          </p>
          <p>
            Behind Ig:vexor.tm is <strong className="text-blue-900">Munyaka Gakonyo</strong>, a passionate resin artist whose journey began with a fascination for fluid art and vibrant colors. He pours creativity into every piece, ensuring each creation tells its own story and adds a touch of modern elegance to your world. We believe art should be both beautiful and functional, and our resin creations embody this philosophy.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
