import React from 'react'

const Services = () => {

  return (
    <div className="min-h-screen flex flex-col">
 
      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-r from-pink-50 to-blue-50">
        {/* Get a Quote Button (Side)

        {/* Contact Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="bg-[#f0f4fa] rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Left Column - Logo and CTA */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="w-36 h-36 mb-6">
                    <h1 className='text-semibold text-3xl text-purple-500'>Microfinance</h1>
                  </div>
                  <p className="text-sm leading-relaxed mb-6">
                    Are you ready to take your brand to the next level and achieve growth that's simply unparalleled
                    with professional digital media services? Let's make something extraordinary together. Call Brand
                    Space® today and let's turn your vision into reality.
                  </p>
                  <p className="font-medium mb-6">Take the Next Step with Brand Space</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors w-fit"
                >
                  Get a Free Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Middle Column - Contact Details */}
              <div className="p-8 border-x border-gray-200">
                <div className="mb-8">
                  <h2 className="text-lg font-medium">
                    Contact <span className="text-purple-500">Details</span>
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a href="tel:+12722428131" className="text-sm hover:text-purple-500 transition-colors">
                        03112998095
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href="mailto:info@getbrandspace.com"
                        className="text-sm hover:text-purple-500 transition-colors"
                      >
                       mohammadasadiam@gmail.com
                      </a>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700 mr-3 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-sm">Saylani Welfare Trust, Gulshan Branch</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium">
                    Follow <span className="text-purple-500">Us</span>
                  </h2>
                  <div className="mt-6 space-y-4">
                    <a href="#" className="flex items-center hover:text-purple-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center hover:text-purple-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center hover:text-purple-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Google Map */}
              <div className="h-full">
  <div className="h-full flex flex-col">
    <div className="p-8 pb-4">
      <h2 className="text-lg font-medium">
        Google Map <span className="text-purple-500">Location</span>
      </h2>
    </div>
    
    <div className="flex-1 relative">
  <div className="w-full h-full relative">
    {/* Iframe for embedded map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57877.13100067769!2d67.02747407647448!3d24.955201653497202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b5cdbbc095%3A0x3bd5f577d2e87a59!2sSaylani%20Welfare%20Trust%2C%20Gulshan%20Branch!5e0!3m2!1sen!2s!4v1744267183432!5m2!1sen!2s"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
    ></iframe>

    {/* Clickable transparent link on top of iframe */}
    <a
      href="https://maps.app.goo.gl/1casxLDDzpNDKkW98"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 z-10"
      title="Open in Google Maps"
    ></a>
  </div>
</div>

  </div>
</div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}

    </div>
  )
}

export default Services