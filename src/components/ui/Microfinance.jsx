import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function Microfinance() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
<div className="relative bg-[#f0f1f7] flex items-center bg-gradient-to-r from-[#d8cafa]/70 to-[#f8d6e9]/70 justify-center">
<div className="flex flex-col items-center space-y-4">
  {/* Icons + Text Section */}
  <div className="flex flex-col items-center space-y-2">
    {/* Icons in a row */}
    {/* Text below icons */}
    <p className="text-purple-500 font-medium">
      Follow us on
    </p>
    <div className="flex space-x-6">
      {/* Facebook */}
      <a
        href="#"
        className="p-3 rounded-full border border-purple-500 hover:bg-purple-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="#"
        className="p-3 rounded-full border border-purple-500 hover:bg-purple-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        className="p-3 rounded-full border border-purple-500 hover:bg-purple-100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
    </div>

    
  </div>

  {/* Heading */}
  <h1
    className="md:text-[13vw] text-[14vw] md:font-extrabold font-bold text-transparent tracking-tighter"
    style={{
      WebkitTextStroke: "1.5px #e9b3e9",
      textStroke: "1.5px #e9b3e9",
    }}
  >
    MICROFINANCE
  </h1>
</div>




  {showScrollButton && (
  <div className="fixed bottom-6 right-6 w-[85px] h-[85px]">
    {/* Wrapper with relative positioning */}
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Dashed Outer Border */}
      <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#e94baf] opacity-60 pointer-events-none"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-[70px] h-[70px] bg-[#e94baf] text-white rounded-full flex flex-col items-center justify-center text-xs font-medium transition-opacity duration-300"
      >
        <ChevronUp className="w-4 h-4 mb-1" />
        <span>SCROLL</span>
        <span>TO TOP</span>
      </button>
    </div>
  </div>
)}





``


</div>

  )
}
