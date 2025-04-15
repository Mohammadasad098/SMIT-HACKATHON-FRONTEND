import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedStatsSection from "../components/animated-stats-section";
import { Carousel } from "flowbite-react";
import { ChevronUp } from "lucide-react"
import DesignWork from "../components/DesignWork";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};



const LandingPage = () => {
  const [loanCount, setLoanCount] = useState(0);
  const [yearsPassed, setYearsPassed] = useState(0);




  // Function to animate numbers
  const animateNumber = (targetValue, setter) => {
    let startValue = 0;
    const increment = targetValue / 100; // This determines the speed of the animation

    const animate = () => {
      startValue += increment;
      if (startValue < targetValue) {
        setter(Math.floor(startValue));
        requestAnimationFrame(animate);
      } else {
        setter(targetValue); // Ensure we reach the target value
      }
    };

    animate();
  };

  useEffect(() => {
    animateNumber(2300, setLoanCount); // Example number of loans taken
    animateNumber(5, setYearsPassed);  // Example number of years since inception
  }, []);

  const newsItems = [
    { title: "New Business Loan Schemes Launched", date: "March 10, 2025" },
    { title: "Interest Rates Reduced for Home Loans", date: "March 5, 2025" },
  ];

  const loanItems = [
    { name: "Personal Loan", maxLoan: "PKR 1,000,000", period: 5 },
    { name: "Home Loan", maxLoan: "PKR 5,000,000", period: 20 },
    { name: "Car Loan", maxLoan: "PKR 3,000,000", period: 7 },
    { name: "Business Loan", maxLoan: "Based on requirement", period: 10 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8e68ed] to-[#e36bbb] text-white py-16 text-center">
        <h1 className="text-5xl font-bold leading-tight">Welcome to Saylani Microfinance</h1>
        <p className="mt-4 text-lg text-opacity-80">Empowering your financial future with easy loan solutions.</p>
      </section>

      {/* Loan Categories Display */}
      <section id="categories" className="py-12 bg-white bg-gradient-to-r from-[#d8cafa]/70 to-[#f8d6e9]/70">
  <div className="container mx-auto text-center px-4 sm:px-6">
    <h3 className="text-4xl font-bold text-[#e36bbb] mb-8">Loan Categories</h3>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      {loanItems.map((loan, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.05,
            rotate: 3, // Thoda zyada rotate right side
            transition: { duration: 0.2 }, // Fast animation
          }}
          variants={itemVariants}
          className="p-6 rounded-lg shadow-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
        >
          <h4 className="text-2xl font-semibold text-[#8e68ed]">{loan.name}</h4>
          <p className="mt-3 text-gray-800">
            Max Loan: <span className="font-medium">{loan.maxLoan}</span>
          </p>
          <p className="text-gray-800">
            Loan Period: <span className="font-medium">{loan.period} years</span>
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-12 px-3 bg-gray-50 text-center bg-gradient-to-r from-[#f8d6e9]/70 to-[#d8cafa]/70">
  <h3 className="text-4xl font-bold text-[#e36bbb]">
    Why Choose Saylani Microfinance?
  </h3>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      "Low interest rates",
      "Quick loan approval",
      "Flexible repayment plans",
      "Trusted by thousands",
      "No hidden charges",
      "24/7 customer support",
    ].map((benefit, index) => (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{
          scale: 1.05,
          rotate: 3,
          transition: { duration: 0.2 },
        }}
        variants={itemVariants}
        className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 transition-all duration-300"
      >
        <p className="text-lg font-medium text-gray-700">{benefit}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Recent News & Updates */}
      <section className="py-12 px-3 bg-white text-center bg-gradient-to-r from-[#d8cafa]/70 to-[#f8d6e9]/70">
      <h3 className="text-4xl font-bold text-[#e36bbb]">Latest News & Updates</h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((news, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              transition: { duration: 0.2 },
            }}
            className="p-6 bg-gray-50 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300"
          >
            <h4 className="text-xl font-semibold text-[#8e68ed]">{news.title}</h4>
            <p className="mt-2 text-gray-600">{news.date}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Achievements */}
      <AnimatedStatsSection />

      <DesignWork/>

      <section className="py-24 mx-2">
  <div className="h-80 sm:h-96 xl:h-[30rem] 2xl:h-[36rem] overflow-hidden rounded-xl bg-black flex items-center justify-center">
    <Carousel
      autoplay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      <img className="w-full h-full object-contain" src="https://finca.org/wp-content/uploads/story2.webp" alt="Story" />
      <img className="w-full h-full object-contain" src="https://finca.org/wp-content/uploads/feature-finca-research.webp" alt="Finance 3" />
      <img className="w-full h-full object-contain" src="https://finca.org/wp-content/uploads/RisingAcademies_GirlsReviewingBookInSchool-1024x768.jpg" alt="Finance 4" />
      <img className="w-full h-full object-contain" src="https://finca.org/wp-content/uploads/feature-finca-ventures.webp" alt="Finance" />
      <img className="w-full h-full object-contain" src="https://the.akdn/_next/image?url=https%3A%2F%2Fstatic.the.akdn%2F53832%2F1645020429-akam-egypt-97621.jpg%3Fh%3D480%26w%3D900%26auto%3Dformat&w=1920&q=75" alt="Microfinance" />
    </Carousel>
  </div>
</section>





<div className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* First div with image */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full z-10">
      <div className="w-full max-w-4xl mx-auto px-4">
  <img
    src="https://www.getbrandspace.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutchoose.71230b1f.png&w=1920&q=75"
    alt="Team collaborating on laptops"
    className="w-full h-auto object-cover object-center rounded-lg"
  />
</div>
      </div>

      {/* Second div with content - positioned to overlap */}
      <div className="relative z-20 ml-auto w-full md:w-3/5 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Why <span className="text-purple-500">Choose</span> Us
        </h2>

        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 text-purple-500">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">All-in-One Financial Solution</h3>
              <p className="text-gray-700">
                From budgeting and expense tracking to investments and savings goals, our app provides a comprehensive
                suite of tools to manage every aspect of your financial life.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 text-purple-500">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Personalized Financial Insights</h3>
              <p className="text-gray-700">
                We don't believe in one-size-fits-all financial advice. Our AI-powered system analyzes your spending
                patterns and financial goals to provide customized recommendations tailored to your unique situation.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 text-purple-500">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Bank-Grade Security</h3>
              <p className="text-gray-700">
                Your financial data is protected with 256-bit encryption, biometric authentication, and secure cloud
                storage that meets the highest industry standards.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-5 h-5 text-purple-500">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Smart Investment Tools</h3>
              <p className="text-gray-700">
                Our data-driven investment platform helps you build a diversified portfolio based on your risk tolerance
                and financial goals, with real-time performance tracking.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll to top button */}
      
    </div>




      <div className="flex flex-col">

        {/* Main Content */}
        <main className="flex-grow bg-gradient-to-r from-[#d8cafa]/70 to-[#f8d6e9]/70">
          {/* Get a Quote Button (Side)

   {/* Contact Section */}
          <div className="container mx-auto py-16 px-4">
            <div className="bg-[#f0f4fa] rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Left Column - Logo and CTA */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <h1 className='font-semibold text-3xl text-purple-500'>Microfinance</h1>
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

      </div>


    </div>
  );
};

export default LandingPage;
