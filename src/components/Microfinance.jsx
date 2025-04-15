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
<div className="relative bg-[#f0f1f7] flex items-center justify-center">
  <h1
    className="text-[14vw] font-bold text-transparent tracking-tighter"
    style={{
      WebkitTextStroke: "1px #e9b3e9",
      textStroke: "1px #e9b3e9",
    }}
  >
    MICROFINANCE
  </h1>

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
