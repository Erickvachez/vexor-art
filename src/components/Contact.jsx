import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-100 via-cyan-200 to-green-200 text-blue-900 py-16 px-6 md:px-12 rounded-t-lg fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Connect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <div className="text-left md:text-right space-y-4">
            <p className="text-xl font-semibold mb-4">Contacts & Socials:</p>
            <p>
              <i className="fab fa-whatsapp mr-3 text-green-400"></i> 
              WhatsApp: <a href="https://wa.me/254794076414" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">0794076414</a>
            </p>
            <p>
              <i className="fab fa-tiktok mr-3 text-cyan-400"></i> 
              TikTok: <a href="https://www.tiktok.com/@vexor.tm" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">@vexor.tm</a>
            </p>
            <p>
              <i className="fab fa-instagram mr-3 text-pink-400"></i> 
              Instagram: <a href="https://www.instagram.com/vexor.tm" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">@vexor.tm</a>
            </p>
            <p>
              <i className="fas fa-envelope mr-3 text-blue-400"></i> 
              Email: <a href="mailto:vachezricky@gmail.com" className="text-green-700 hover:underline">vachezricky@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-3 text-green-400"></i> 
              Location: Ongata Rongai, Kajiado, Kenya
              <a 
                href="https://www.google.com/maps?q=Ongata+Rongai,Kajiado,Kenya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2 text-green-700 hover:underline text-sm"
              >
                <i className="fas fa-external-link-alt mr-1"></i>
                Open in Maps
              </a>
            </p>
          </div>

          {/* Google Map Placeholder */}
          <div className="flex justify-center md:justify-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.57597526713!2d36.77258937502758!3d-1.4027178988770283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f42a51f0c2423%3A0x6b4a3a6b4a3a6b4a!2sOngata+Rongai%2C+Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-lg"
              title="Ongata Rongai Map"
            ></iframe>
          </div>
        </div>
        <p className="mt-12 text-blue-700 text-sm">vexor art Copyright &copy; 2025</p>
      </div>
    </section>
  )
}

export default Contact

