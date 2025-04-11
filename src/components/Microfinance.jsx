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
<div className="relative bg-[#f0f1f7] flex items-center justify-center mb-0">
  <h1
    className="text-[14vw] font-bold text-transparent leading-none tracking-tighter"
    style={{
      WebkitTextStroke: "1px #e9b3e9",
      textStroke: "1px #e9b3e9",
    }}
  >
    MICROFINANCE
  </h1>

  <button
    onClick={scrollToTop}
    className={`fixed bottom-6 right-6 bg-[#e94baf] text-white rounded-full p-4 flex flex-col items-center justify-center text-xs font-medium transition-opacity duration-300 ${
      showScrollButton ? "opacity-100" : "opacity-0"
    }`}
    style={{ width: "70px", height: "70px" }}
  >
    <ChevronUp className="w-4 h-4 mb-1" />
    <span>SCROLL</span>
    <span>TO TOP</span>
  </button>
</div>

  )
}
