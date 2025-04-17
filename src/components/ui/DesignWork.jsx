import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DesignWork = () => {
  const [activeService, setActiveService] = useState("Microloans")

  const services = [
    { name: "Microloans" },
    { name: "Savings Accounts" },
    { name: "Financial Education" },
    { name: "Mobile Banking" },
    { name: "Insurance Services" },
    { name: "Group Lending" },
    { name: "Business Development" },
    { name: "Digital Payments" },
  ]

  const serviceContent = {
    Microloans: {
      title: "Microloans",
      paragraphs: [
        "Access small, affordable loans designed specifically for entrepreneurs and small business owners with limited resources.",
        "Our microloans provide the essential capital needed to start or expand your business, with flexible repayment terms and competitive interest rates. Whether you need funds for inventory, equipment, or working capital, our microfinance solutions are tailored to meet your specific needs.",
        "We believe in financial inclusion for all, which is why our application process is straightforward and accessible even to those without traditional banking history. Our loan officers work closely with you to understand your business and create a personalized lending plan.",
        "Take the first step toward financial independence with our microloan services. Apply today and join thousands of successful entrepreneurs who have grown their businesses with our support.",
      ],
      image: "microloans",
    },
    "Savings Accounts": {
      title: "Savings Accounts",
      paragraphs: [
        "Build a secure financial future with our specialized savings accounts designed for underserved communities.",
        "Our savings products offer competitive interest rates and minimal fees, making it easier for you to grow your money over time. We provide various savings options, from basic accounts to goal-oriented savings plans that help you save for specific life events.",
        "With features like mobile access, automatic deposits, and financial alerts, managing your savings has never been easier. Our accounts require minimal opening balances, making them accessible to everyone regardless of income level.",
        "Start your savings journey today and experience the peace of mind that comes with financial security. Our team is ready to help you choose the right savings product for your unique situation.",
      ],
      image: "savings",
    },
    "Financial Education": {
      title: "Financial Education",
      paragraphs: [
        "Empower yourself with the knowledge and skills needed to make informed financial decisions.",
        "Our comprehensive financial education programs cover essential topics such as budgeting, saving, credit management, and investment basics. Through workshops, one-on-one coaching, and digital resources, we provide practical guidance tailored to your specific needs and goals.",
        "Financial literacy is the foundation of economic empowerment. Our experienced educators use real-world examples and interactive methods to make complex financial concepts accessible and applicable to your daily life.",
        "Invest in your financial future by participating in our education programs. Whether you're looking to establish good financial habits, prepare for major life expenses, or plan for retirement, our resources will help you navigate your financial journey with confidence.",
      ],
      image: "education",
    },
    "Mobile Banking": {
      title: "Mobile Banking",
      paragraphs: [
        "Access your finances anytime, anywhere with our user-friendly mobile banking platform.",
        "Our mobile banking app brings financial services directly to your smartphone, eliminating the need to visit physical branches. Check balances, transfer funds, pay bills, and even apply for loans—all from the palm of your hand. With secure technology and intuitive design, managing your money has never been more convenient.",
        "We've designed our mobile banking solution specifically for users with limited banking experience, with simple navigation and clear instructions. The app works even in areas with limited connectivity, ensuring you always have access to your financial information.",
        "Join the digital banking revolution and experience the freedom of managing your finances on your own schedule. Download our mobile banking app today and take control of your financial future.",
      ],
      image: "mobile",
    },
    "Insurance Services": {
      title: "Insurance Services",
      paragraphs: [
        "Protect yourself and your loved ones against unexpected events with our affordable microinsurance products.",
        "Our insurance services are specifically designed for individuals and small businesses with limited resources. We offer a range of coverage options, including health, life, crop, and business insurance, all with simplified terms and affordable premiums paid in flexible installments.",
        "Traditional insurance often excludes those who need protection the most. Our microinsurance bridges this gap by providing essential coverage that safeguards your family, business, and assets against unforeseen circumstances without straining your finances.",
        "Don't leave your future to chance. Our insurance specialists will help you understand your risks and select the right coverage to provide peace of mind. Contact us today to learn how our microinsurance can protect what matters most to you.",
      ],
      image: "insurance",
    },
    "Group Lending": {
      title: "Group Lending",
      paragraphs: [
        "Access credit through the power of community with our innovative group lending programs.",
        "Our group lending model allows members to collectively apply for loans, with each person guaranteeing the others' portions. This approach builds on social connections and mutual accountability, enabling access to credit for those without traditional collateral or credit history.",
        "Beyond just providing loans, our group lending programs foster community development and social support. Regular group meetings provide opportunities for networking, knowledge sharing, and collective problem-solving, creating benefits that extend beyond financial services.",
        "Join a lending group in your community or form your own with people you trust. Experience the transformative power of collective borrowing and mutual support while building your business and improving your financial situation.",
      ],
      image: "group",
    },
    "Business Development": {
      title: "Business Development",
      paragraphs: [
        "Transform your entrepreneurial vision into a thriving business with our comprehensive development services.",
        "Our business development program combines access to capital with essential training and mentorship. We provide guidance on business planning, market analysis, financial management, and marketing strategies tailored to small-scale entrepreneurs operating in challenging environments.",
        "We take a holistic approach to business growth, addressing both financial and operational aspects of your enterprise. Our experienced business advisors work closely with you to identify opportunities, overcome challenges, and implement sustainable growth strategies.",
        "Whether you're starting a new venture or expanding an existing business, our development services provide the support you need to succeed. Join our community of entrepreneurs and gain access to the resources, networks, and expertise that will help your business flourish.",
      ],
      image: "business",
    },
    "Digital Payments": {
      title: "Digital Payments",
      paragraphs: [
        "Simplify your financial transactions with our secure and convenient digital payment solutions.",
        "Our digital payment platform allows you to send and receive money instantly, pay bills, make purchases, and manage your finances—all without the need for cash or traditional banking services. With just a mobile phone, you can participate in the digital economy and conduct transactions safely from anywhere.",
        "We've designed our payment system to be inclusive and accessible, with simple user interfaces and minimal technical requirements. The platform works across different devices and network conditions, ensuring reliable service even in areas with limited infrastructure.",
        "Join millions of users who have embraced the convenience and security of digital payments. Sign up today and experience a faster, safer way to manage your money in an increasingly digital world.",
      ],
      image: "payments",
    },
  }

  const currentContent = serviceContent[activeService]

  return (
    <section>
      <div className="w-full bg-[#f9f4ff] min-h-screen flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-12 overflow-hidden">
        {/* Left side with curved line and services */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
          {/* Curved line */}
          <div className="absolute left-0 top-0 h-full w-1/3">
            <div className="h-full w-full border-l-[12px] border-t-[12px] border-b-[12px] border-[#8e68ed] rounded-l-full"></div>
          </div>

          {/* Services list */}
          <div className="relative z-10 ml-12 md:ml-16">
            {/* Device illustrations - changes based on active service */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContent.image}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {currentContent.image === "microloans" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full bg-[#f9f4ff] rounded-lg flex flex-col items-center justify-center">
                          <div className="w-24 h-24 bg-[#8e68ed] rounded-full mb-4 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                              <div className="w-12 h-12 bg-[#8e68ed] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                $
                              </div>
                            </div>
                          </div>
                          <div className="w-32 h-3 bg-[#e36bbb] rounded-full mb-2"></div>
                          <div className="w-24 h-2 bg-[#f3a6d7] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="w-16 h-16 bg-[#e36bbb] rounded-full mb-2 flex items-center justify-center text-white font-bold">
                            <span className="text-lg">+</span>
                          </div>
                          <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-full p-4">
                          <div className="w-full h-4 bg-[#e36bbb] mb-2"></div>
                          <div className="w-3/4 h-4 bg-[#f3a6d7] mb-2"></div>
                          <div className="w-1/2 h-4 bg-[#f9d5eb] mb-2"></div>
                          <div className="flex mt-4">
                            <div className="w-8 h-8 bg-[#e36bbb] rounded-sm mr-2"></div>
                            <div className="w-8 h-8 bg-[#f3a6d7] rounded-sm mr-2"></div>
                            <div className="w-8 h-8 bg-[#f9d5eb] rounded-sm"></div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "savings" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full bg-[#f9f4ff] rounded-lg flex flex-col items-center justify-center">
                          <div className="w-24 h-24 bg-[#8e68ed] rounded-lg mb-4 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                              <div className="w-12 h-12 bg-[#8e68ed] rounded-lg flex items-center justify-center text-white font-bold">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-8 w-8"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="w-32 h-3 bg-[#e36bbb] rounded-full mb-2"></div>
                          <div className="w-24 h-2 bg-[#f3a6d7] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="w-16 h-16 rounded-full border-4 border-[#e36bbb] flex items-center justify-center mb-2">
                            <div className="w-8 h-8 bg-[#e36bbb] transform rotate-45"></div>
                          </div>
                          <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-40 h-32 bg-white rounded-lg shadow-lg p-3"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-4 bg-[#e36bbb] mb-2"></div>
                        <div className="flex justify-between mb-2">
                          <div className="w-16 h-4 bg-[#f9f4ff]"></div>
                          <div className="w-8 h-4 bg-[#f3a6d7]"></div>
                        </div>
                        <div className="w-full h-16 bg-[#f9f4ff] rounded-sm flex items-center justify-center">
                          <div className="w-8 h-8 bg-[#e36bbb] rounded-sm transform rotate-45"></div>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "education" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-48 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-8 bg-[#f9f4ff] rounded-full mb-4 flex items-center px-4">
                          <div className="w-4 h-4 bg-[#8e68ed] rounded-full mr-2"></div>
                          <div className="w-32 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#8e68ed] rounded-sm mr-2 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white"></div>
                            </div>
                            <div className="flex-1">
                              <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1"></div>
                              <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#a68df0] rounded-sm mr-2 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white"></div>
                            </div>
                            <div className="flex-1">
                              <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1"></div>
                              <div className="w-1/2 h-2 bg-[#f9f4ff] rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#c3b2f5] rounded-sm mr-2 flex items-center justify-center">
                              <div className="w-4 h-4 bg-white"></div>
                            </div>
                            <div className="flex-1">
                              <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1"></div>
                              <div className="w-2/3 h-2 bg-[#f9f4ff] rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="w-16 h-16 bg-[#e36bbb] rounded-lg flex items-center justify-center text-white font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                              />
                            </svg>
                          </div>
                          <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1 mt-2"></div>
                          <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-40 h-32 bg-white rounded-lg shadow-lg p-3"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-4 bg-[#8e68ed] mb-2"></div>
                        <div className="flex mb-2">
                          <div className="w-6 h-6 bg-[#a68df0] rounded-full mr-1 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-[#f9f4ff] rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-12 bg-[#f9f4ff] rounded-md"></div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "mobile" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-64 bg-[#8e68ed] rounded-3xl border-4 border-white shadow-lg flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0.5, y: "-50%", x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                        <div className="w-8 h-1 bg-white rounded-full mt-4"></div>
                        <div className="flex mt-2">
                          <div className="w-6 h-6 bg-white rounded-sm mx-1"></div>
                          <div className="w-6 h-6 bg-white rounded-sm mx-1"></div>
                          <div className="w-6 h-6 bg-white rounded-sm mx-1"></div>
                        </div>
                        <div className="mt-4 px-4 w-full">
                          <div className="w-full h-4 bg-[#e36bbb] rounded-full mb-2"></div>
                          <div className="w-3/4 h-4 bg-[#f3a6d7] rounded-full mb-2"></div>
                          <div className="w-1/2 h-4 bg-[#f9d5eb] rounded-full"></div>
                        </div>
                        <div className="mt-4 px-4 w-full">
                          <div className="w-full h-12 bg-[#e36bbb] rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-[#f9f4ff] rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, rotate: -180, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, rotate: 0, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-4 bg-[#e36bbb] flex items-center">
                          <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                          <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                          <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        </div>
                        <div className="p-1">
                          <div className="w-full h-2 bg-[#f9d5eb] rounded-full mb-1"></div>
                          <div className="w-full h-2 bg-[#f9d5eb] rounded-full mb-1"></div>
                          <div className="w-full h-2 bg-[#f9d5eb] rounded-full mb-1"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/4 w-36 h-28 bg-[#f9f4ff] rounded-lg shadow-lg overflow-hidden"
                        initial={{ opacity: 0, rotate: 180, x: "25%", y: "-25%" }}
                        animate={{ opacity: 1, rotate: 0, x: "25%", y: "-25%" }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-4 bg-[#e36bbb] flex items-center">
                          <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                          <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                          <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        </div>
                        <div className="p-2">
                          <div className="w-full h-2 bg-[#f9d5eb] rounded-full mb-1"></div>
                          <div className="w-full h-2 bg-[#f9d5eb] rounded-full mb-1"></div>
                          <div className="w-20 h-6 bg-[#e36bbb] rounded-md mt-2 flex items-center justify-center">
                            <div className="w-3 h-3 bg-[#f9d5eb] rounded-sm mr-1"></div>
                            <div className="w-10 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "insurance" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full bg-[#f9f4ff] rounded-lg flex flex-col items-center justify-center">
                          <div className="w-24 h-24 bg-[#8e68ed] rounded-lg mb-4 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                              <div className="w-12 h-12 bg-[#8e68ed] rounded-lg flex items-center justify-center text-white font-bold">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-8 w-8"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="w-32 h-3 bg-[#e36bbb] rounded-full mb-2"></div>
                          <div className="w-24 h-2 bg-[#f3a6d7] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="w-16 h-16 bg-[#e36bbb] rounded-full mb-2 flex items-center justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 bg-[#e36bbb] rounded-full"></div>
                            </div>
                          </div>
                          <div className="w-full h-2 bg-[#f9f4ff] rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="grid grid-cols-3 gap-1 h-full">
                          <div className="bg-[#f9f4ff] rounded-md flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#8e68ed]"></div>
                          </div>
                          <div className="bg-[#f9f4ff] rounded-md flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#a68df0]"></div>
                          </div>
                          <div className="bg-[#f9f4ff] rounded-md flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#c3b2f5]"></div>
                          </div>
                          <div className="bg-[#f9f4ff] rounded-md flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#e1d8fa]"></div>
                          </div>
                          <div className="bg-[#f9f4ff] rounded-md flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#e36bbb]"></div>
                          </div>
                          <div className="bg-[#f9f4ff] rounded-md flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#f3a6d7]"></div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "group" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full bg-[#f9f4ff] rounded-lg flex flex-col items-center justify-center">
                          <div className="flex mb-4">
                            <div className="w-12 h-12 bg-[#8e68ed] rounded-full -mr-2"></div>
                            <div className="w-12 h-12 bg-[#a68df0] rounded-full -mr-2"></div>
                            <div className="w-12 h-12 bg-[#c3b2f5] rounded-full -mr-2"></div>
                            <div className="w-12 h-12 bg-[#e1d8fa] rounded-full"></div>
                          </div>
                          <div className="w-32 h-3 bg-[#e36bbb] rounded-full mb-2"></div>
                          <div className="w-24 h-2 bg-[#f3a6d7] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="flex mb-2">
                            <div className="w-8 h-8 bg-[#8e68ed] rounded-full -mr-1"></div>
                            <div className="w-8 h-8 bg-[#a68df0] rounded-full -mr-1"></div>
                            <div className="w-8 h-8 bg-[#c3b2f5] rounded-full"></div>
                          </div>
                          <div className="w-full h-3 bg-[#f9f4ff] rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-40 h-32 bg-white rounded-lg shadow-lg p-3"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-4 bg-[#e36bbb] mb-2"></div>
                        <div className="flex justify-between mb-2">
                          <div className="w-16 h-4 bg-[#f9f4ff]"></div>
                          <div className="w-8 h-4 bg-[#f3a6d7]"></div>
                        </div>
                        <div className="w-full h-16 bg-[#f9f4ff] rounded-sm flex items-center justify-center">
                          <div className="flex">
                            <div className="w-6 h-6 bg-[#8e68ed] rounded-full -mr-1"></div>
                            <div className="w-6 h-6 bg-[#a68df0] rounded-full -mr-1"></div>
                            <div className="w-6 h-6 bg-[#c3b2f5] rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "business" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-8 bg-[#f9f4ff] flex items-center justify-between px-2 mb-3">
                          <div className="w-24 h-4 bg-[#8e68ed] rounded-sm"></div>
                          <div className="flex">
                            <div className="w-6 h-6 bg-[#f9f4ff] rounded-full border border-[#8e68ed] flex items-center justify-center mr-1">
                              <div className="w-3 h-3 bg-[#8e68ed]"></div>
                            </div>
                            <div className="w-6 h-6 bg-[#f9f4ff] rounded-full border border-[#8e68ed] flex items-center justify-center">
                              <div className="w-3 h-3 bg-[#8e68ed]"></div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-[#f9f4ff] p-2 rounded-md">
                            <div className="w-full h-16 bg-[#8e68ed] rounded-sm mb-1"></div>
                            <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="bg-[#f9f4ff] p-2 rounded-md">
                            <div className="w-full h-16 bg-[#a68df0] rounded-sm mb-1"></div>
                            <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-8 bg-[#e36bbb] rounded-md flex items-center justify-center">
                          <div className="w-24 h-4 bg-white rounded-sm"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-6 bg-[#f9f4ff] flex items-center px-2 mb-2">
                          <div className="w-6 h-4 bg-[#e36bbb] rounded-sm"></div>
                        </div>
                        <div className="w-full h-20 bg-[#f9f4ff] rounded-md flex items-center justify-center">
                          <div className="w-12 h-12 bg-[#e36bbb] rounded-md flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-4 bg-[#8e68ed] mb-2 rounded-sm"></div>
                        <div className="flex mb-2">
                          <div className="w-8 h-8 bg-[#f9f4ff] rounded-md mr-1"></div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-[#f9f4ff] rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full mb-1"></div>
                            <div className="w-1/2 h-2 bg-[#f9f4ff] rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-8 bg-[#e36bbb] rounded-md flex items-center justify-center">
                          <div className="w-16 h-4 bg-white rounded-sm"></div>
                        </div>
                      </motion.div>
                    </>
                  )}

                  {currentContent.image === "payments" && (
                    <>
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4"
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-8 bg-[#f9f4ff] rounded-md flex items-center px-2 mb-3">
                          <div className="w-4 h-4 bg-[#8e68ed] rounded-sm mr-2"></div>
                          <div className="w-32 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="space-y-3 mb-3">
                          <div className="w-full h-10 bg-[#f9f4ff] rounded-md p-2">
                            <div className="flex justify-between">
                              <div className="w-24 h-3 bg-[#8e68ed] rounded-sm"></div>
                              <div className="w-8 h-3 bg-[#a68df0] rounded-sm"></div>
                            </div>
                            <div className="w-full h-2 bg-white rounded-full mt-2"></div>
                          </div>
                          <div className="w-full h-10 bg-[#f9f4ff] rounded-md p-2">
                            <div className="flex justify-between">
                              <div className="w-24 h-3 bg-[#8e68ed] rounded-sm"></div>
                              <div className="w-8 h-3 bg-[#a68df0] rounded-sm"></div>
                            </div>
                            <div className="w-full h-2 bg-white rounded-full mt-2"></div>
                          </div>
                        </div>
                        <div className="w-full h-8 bg-[#e36bbb] rounded-md flex items-center justify-center">
                          <div className="w-24 h-4 bg-white rounded-sm"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: -180, x: -20, y: -20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                      >
                        <div className="w-full h-6 bg-[#e36bbb] rounded-sm mb-2"></div>
                        <div className="space-y-2">
                          <div className="w-full h-6 bg-[#f9f4ff] rounded-sm p-1">
                            <div className="w-3/4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-full h-6 bg-[#f9f4ff] rounded-sm p-1">
                            <div className="w-1/2 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-full h-6 bg-[#f9f4ff] rounded-sm p-1">
                            <div className="w-2/3 h-4 bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2"
                        initial={{ opacity: 0, rotate: 180, x: 20, y: 20 }}
                        animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                      >
                        <div className="w-full h-4 bg-[#8e68ed] mb-2"></div>
                        <div className="flex mb-2">
                          <div className="w-6 h-6 bg-[#a68df0] rounded-full mr-1 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-[#f9f4ff] rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-[#f9f4ff] rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-12 bg-[#f9f4ff] rounded-md"></div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Service items */}
            <div className="space-y-6 ml-8 md:ml-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center cursor-pointer group"
                  onClick={() => setActiveService(service.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full ${
                      service.name === activeService ? "bg-[#8e68ed]" : "bg-white border border-[#8e68ed]"
                    } flex items-center justify-center group-hover:border-[#e36bbb]`}
                    initial={false}
                    animate={service.name === activeService ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {service.name === activeService && (
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                    )}
                  </motion.div>
                  <div
                    className={`ml-4 text-sm md:text-base ${
                      service.name === activeService ? "text-gray-900 font-medium" : "text-gray-700"
                    } group-hover:text-gray-900`}
                  >
                    {service.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side with text content */}
        <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#8e68ed] mb-4">{currentContent.title}</h2>
              {currentContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default DesignWork
