import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function AnimatedStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [loanCount, setLoanCount] = useState(0)
  const [yearCount, setYearCount] = useState(0)
  const [customerCount, setCustomerCount] = useState(0)

  const finalLoanCount = 39
  const finalYearCount = 5
  const finalCustomerCount = 35

  useEffect(() => {
    if (isInView) {
      // Animate loan count
      const loanDuration = 2000 // 2 seconds
      const loanStartTime = Date.now()

      const loanInterval = setInterval(() => {
        const now = Date.now()
        const elapsed = now - loanStartTime

        if (elapsed >= loanDuration) {
          setLoanCount(finalLoanCount)
          clearInterval(loanInterval)
        } else {
          const progress = elapsed / loanDuration
          setLoanCount(Math.floor(progress * finalLoanCount))
        }
      }, 16) // ~60fps

      // Animate year count
      const yearDuration = 1500 // 1.5 seconds
      const yearStartTime = Date.now()

      const yearInterval = setInterval(() => {
        const now = Date.now()
        const elapsed = now - yearStartTime

        if (elapsed >= yearDuration) {
          setYearCount(finalYearCount)
          clearInterval(yearInterval)
        } else {
          const progress = elapsed / yearDuration
          setYearCount(Math.floor(progress * finalYearCount))
        }
      }, 16)

      // Animate customer count
      const customerDuration = 2000 // 2 seconds
      const customerStartTime = Date.now()

      const customerInterval = setInterval(() => {
        const now = Date.now()
        const elapsed = now - customerStartTime

        if (elapsed >= customerDuration) {
          setCustomerCount(finalCustomerCount)
          clearInterval(customerInterval)
        } else {
          const progress = elapsed / customerDuration
          setCustomerCount(Math.floor(progress * finalCustomerCount))
        }
      }, 16)

      return () => {
        clearInterval(loanInterval)
        clearInterval(yearInterval)
        clearInterval(customerInterval)
      }
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-12 px-3 bg-white text-center bg-gradient-to-r from-[#f8d6e9]/70 to-[#d8cafa]/70">
      <h3 className="text-4xl font-bold text-[#e36bbb] mb-8">Financial Milestones</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="p-6 bg-gray-50 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-2xl font-semibold text-[#8e68ed]">Loans Disbursed</h4>
          <motion.p
            className="text-4xl font-bold mt-4 text-[#e36bbb]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {loanCount}K+
          </motion.p>
          <p className="text-gray-600 mt-2">Successful loan applications processed</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-50 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h4 className="text-2xl font-semibold text-[#8e68ed]">Years in Service</h4>
          <motion.p
            className="text-4xl font-bold mt-4 text-[#e36bbb]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {yearCount}+
          </motion.p>
          <p className="text-gray-600 mt-2">Years of financial expertise</p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-50 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h4 className="text-2xl font-semibold text-[#8e68ed]">Happy Customers</h4>
          <motion.p
            className="text-4xl font-bold mt-4 text-[#e36bbb]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {customerCount}K+
          </motion.p>
          <p className="text-gray-600 mt-2">Satisfied borrowers nationwide</p>
        </motion.div>
      </div>
    </section>
  )
}











    //   <section className="py-12 bg-white text-center">
    //     <h3 className="text-4xl font-bold text-[#e36bbb] mb-8">
    //       Our Achievements
    //     </h3>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       <motion.div
    //         className="p-6 bg-gray-50 rounded-lg shadow-md"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 1 }}
    //       >
    //         <h4 className="text-2xl font-semibold text-[#8e68ed]">Loans Disbursed</h4>
    //         <motion.p
    //           className="text-4xl font-bold mt-4 text-[#e36bbb]"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ duration: 2 }}
    //           viewport={{ once: true, amount: 0.2 }}  // This triggers the animation when 20% of the element is in view
    //         >
    //           {loanCount}+
    //         </motion.p>
    //         <p className="text-gray-600 mt-2">Loans disbursed to date</p>
    //       </motion.div>

    //       <motion.div
    //         className="p-6 bg-gray-50 rounded-lg shadow-md"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 1 }}
    //       >
    //         <h4 className="text-2xl font-semibold text-[#8e68ed]">Years in Service</h4>
    //         <motion.p
    //           className="text-4xl font-bold mt-4 text-[#e36bbb]"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           whileInView={{ opacity: 1 }}
    //           transition={{ duration: 2 }}
    //           viewport={{ once: true, amount: 0.2 }}  // Trigger when the element is 20% in view
    //         >
    //           {yearsPassed}+
    //         </motion.p>
    //         <p className="text-gray-600 mt-2">Years of empowering individuals</p>
    //       </motion.div>
    //     </div>
    //   </section>