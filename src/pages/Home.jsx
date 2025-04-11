import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/button"
import AnimatedStatsSection from "../components/animated-stats-section";
import Microfinance from "../components/Microfinance";

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

const LandingPage = () => {
  const [loanCount, setLoanCount] = useState(0);
  const [yearsPassed, setYearsPassed] = useState(0);
  const [activeService, setActiveService] = useState("UI/UX Designing")







  const services = [
    { name: "UI/UX Designing" },
    { name: "Graphic Designing" },
    { name: "Website Development / Wordpress" },
    { name: "Search Engine Optimization (SEO)" },
    { name: "E-Commerce Development" },
    { name: "Social Media Marketing" },
    { name: "PPC (Pay-Per-Click) Advertising" },
    { name: "AI Solutions" },
  ]

  const serviceContent = {
    "UI/UX Designing": {
      title: "UI/UX Designing",
      paragraphs: [
        "Looking for top-notch UI UX design services that captivate users and drive results?",
        "Our expert UI/UX design agency specializes in crafting intuitive, visually stunning, and user-friendly digital experiences. Whether you need mobile app UI UX design services, website design, or software interface enhancement, our skilled UI and UX designers focus on seamless usability and engagement.",
        "As a leading UI UX design services company, we offer cutting-edge user interface design services and user experience design services tailored to your brand's needs. Serving businesses across industries, we ensure your digital platforms are not only aesthetically appealing but also highly functional. Our UI and UX design services in the USA are designed to maximize user satisfaction, increase conversions, and enhance digital interactions.",
        "Partner with a trusted UI UX design consultant and elevate your brand with world-class UI/UX design services today! Whether you're a startup or an enterprise, our expertise in UI and UX design services in the USA ensures that your platform stands out in the digital landscape.",
      ],
      image: "uiux",
    },
    "Graphic Designing": {
      title: "Graphic Designing",
      paragraphs: [
        "Transform your brand with our professional graphic design services that make a lasting impression.",
        "Our talented graphic designers create visually compelling assets that communicate your brand message effectively. From logo design and brand identity to marketing materials and social media graphics, we deliver high-quality designs that help your business stand out.",
        "We combine creativity with strategic thinking to develop custom graphic solutions that align with your business goals. Our design process involves understanding your brand, researching your industry, and creating designs that resonate with your target audience.",
        "Elevate your visual communication with our expert graphic design services. Whether you need a complete brand overhaul or individual design elements, our team delivers polished, professional results that enhance your brand's visual presence.",
      ],
      image: "graphic",
    },
    "Website Development / Wordpress": {
      title: "Website Development / WordPress",
      paragraphs: [
        "Build your online presence with our professional website development and WordPress services.",
        "Our experienced developers create responsive, user-friendly websites that look great on all devices. Whether you need a simple informational site or a complex e-commerce platform, we deliver custom solutions tailored to your business needs.",
        "We specialize in WordPress development, creating powerful, scalable websites that you can easily manage and update. Our WordPress solutions include custom theme development, plugin integration, and performance optimization.",
        "From concept to launch, we handle every aspect of your website project. Our comprehensive approach ensures your site not only looks professional but also performs optimally to help you achieve your business objectives.",
      ],
      image: "website",
    },
    "Search Engine Optimization (SEO)": {
      title: "Search Engine Optimization (SEO)",
      paragraphs: [
        "Boost your online visibility and drive organic traffic with our comprehensive SEO services.",
        "Our SEO experts implement proven strategies to improve your search engine rankings and help potential customers find your business online. We conduct thorough keyword research, optimize your website content, and build quality backlinks to enhance your site's authority.",
        "We take a data-driven approach to SEO, continuously monitoring performance metrics and adjusting strategies to maximize results. Our transparent reporting keeps you informed about your campaign's progress and the impact on your business.",
        "Stay ahead of the competition with our cutting-edge SEO techniques. Whether you're looking to improve local search visibility or expand your reach nationally, our tailored SEO solutions help you achieve sustainable growth.",
      ],
      image: "seo",
    },
    "E-Commerce Development": {
      title: "E-Commerce Development",
      paragraphs: [
        "Launch a successful online store with our expert e-commerce development services.",
        "We build powerful, secure e-commerce platforms that provide seamless shopping experiences for your customers. Our solutions include intuitive product catalogs, secure payment gateways, and streamlined checkout processes to maximize conversions.",
        "Our e-commerce developers work with leading platforms like Shopify, WooCommerce, and Magento to create stores that are both visually appealing and functionally robust. We integrate essential features such as inventory management, order tracking, and customer accounts.",
        "Take your retail business online with a custom e-commerce solution designed for growth. From small boutique shops to large-scale marketplaces, we deliver scalable e-commerce websites that drive sales and enhance customer satisfaction.",
      ],
      image: "ecommerce",
    },
    "Social Media Marketing": {
      title: "Social Media Marketing",
      paragraphs: [
        "Expand your brand's reach and engage with your audience through our strategic social media marketing services.",
        "Our social media experts develop customized strategies to build your brand presence across relevant platforms. We create compelling content, manage community engagement, and implement targeted advertising campaigns to connect with your ideal customers.",
        "We take a data-driven approach to social media marketing, analyzing performance metrics to refine strategies and maximize ROI. Our comprehensive services include content calendars, graphic design, copywriting, and performance reporting.",
        "Build meaningful relationships with your audience and turn followers into customers with our expert social media marketing. Whether you're just getting started or looking to enhance your existing social presence, our team delivers results-oriented solutions.",
      ],
      image: "social",
    },
    "PPC (Pay-Per-Click) Advertising": {
      title: "PPC (Pay-Per-Click) Advertising",
      paragraphs: [
        "Drive targeted traffic and generate leads with our results-driven PPC advertising services.",
        "Our PPC specialists create and manage high-performing campaigns across Google Ads, Bing Ads, and social media platforms. We conduct thorough keyword research, craft compelling ad copy, and implement precise targeting to reach your ideal customers.",
        "We optimize your PPC campaigns for maximum ROI, continuously testing and refining ad elements to improve performance. Our transparent reporting provides clear insights into campaign metrics and conversion data.",
        "Get immediate visibility and measurable results with our strategic PPC advertising. Whether you're looking to increase website traffic, generate leads, or boost sales, our tailored PPC solutions help you achieve your marketing objectives efficiently.",
      ],
      image: "ppc",
    },
    "AI Solutions": {
      title: "AI Solutions",
      paragraphs: [
        "Transform your business with our cutting-edge AI solutions and intelligent automation.",
        "Our AI experts develop custom applications that leverage machine learning, natural language processing, and predictive analytics to solve complex business challenges. From chatbots and virtual assistants to recommendation engines and data analysis tools, we create AI solutions that drive efficiency and innovation.",
        "We take a practical approach to AI implementation, focusing on solutions that deliver tangible business value. Our development process includes thorough requirements analysis, algorithm selection, model training, and continuous optimization.",
        "Stay ahead of the competition with AI-powered business solutions. Whether you're looking to automate processes, gain deeper customer insights, or create more personalized experiences, our AI expertise helps you harness the power of intelligent technology.",
      ],
      image: "ai",
    },
  }

  const currentContent = serviceContent[activeService]




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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {loanItems.map((loan, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.5,
                  ease: [0.1, 0.4, 0.3, 1],
                }}
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
          </div>
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
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              <p className="text-lg font-medium text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Recent News & Updates */}
      <section className="py-12 px-3 bg-white text-center bg-gradient-to-r from-[#d8cafa]/70 to-[#f8d6e9]/70">
        <h3 className="text-4xl font-bold text-[#e36bbb]">
          Latest News & Updates
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1.2, // Longer duration for each item
                delay: index * 0.5, // Much longer delay between items
                ease: [0.1, 0.4, 0.3, 1], // Adjusted easing for more gradual appearance
              }}
            >
              <h4 className="text-xl font-semibold text-[#8e68ed]">{news.title}</h4>
              <p className="mt-2 text-gray-600">{news.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <AnimatedStatsSection />

      <section>
        <div className="w-full bg-[#f8f5ff] min-h-screen flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-12 overflow-hidden">
          {/* Left side with curved line and services */}
          <div className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0">
            {/* Curved line */}
            <div className="absolute left-0 top-0 h-full w-1/3">
              <div className="h-full w-full border-l-[12px] border-t-[12px] border-b-[12px] border-[#c066e5] rounded-l-full"></div>
            </div>

            {/* Services list */}
            <div className="relative z-10 ml-12 md:ml-16">
              {/* Device illustrations - changes based on active service */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                {currentContent.image === "uiux" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-64 bg-[#2a4db7] rounded-3xl border-4 border-white shadow-lg flex flex-col items-center">
                      <div className="w-1 h-1 bg-white rounded-full mt-2"></div>
                      <div className="w-8 h-1 bg-white rounded-full mt-4"></div>
                      <div className="flex mt-2">
                        <div className="w-6 h-6 bg-white rounded-sm mx-1"></div>
                        <div className="w-6 h-6 bg-white rounded-sm mx-1"></div>
                        <div className="w-6 h-6 bg-white rounded-sm mx-1"></div>
                      </div>
                    </div>

                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-[#f0f4ff] rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-4 bg-[#2a4db7] flex items-center">
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                      </div>
                      <div className="p-1">
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-40 h-32 bg-[#f0f4ff] rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-4 bg-[#2a4db7] flex items-center">
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-8 h-8 bg-[#4a69dd] rounded-lg mb-2 float-left mr-2"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                        <div className="clear-both"></div>
                        <div className="w-8 h-8 bg-[#ff6b6b] rounded-lg mb-2 float-left mr-2 mt-1"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1 mt-1"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/4 w-36 h-28 bg-[#f0f4ff] rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-4 bg-[#2a4db7] flex items-center">
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                        <div className="w-full h-2 bg-[#e0e0ff] rounded-full mb-1"></div>
                        <div className="w-20 h-6 bg-[#4a69dd] rounded-md mt-2 flex items-center justify-center">
                          <div className="w-3 h-3 bg-[#ff6b6b] rounded-sm mr-1"></div>
                          <div className="w-10 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentContent.image === "graphic" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full h-full bg-[#f8f5ff] rounded-lg flex flex-col items-center justify-center">
                        <div className="w-24 h-24 bg-[#c066e5] rounded-full mb-4 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <div className="w-12 h-12 bg-[#c066e5] rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-32 h-3 bg-[#c066e5] rounded-full mb-2"></div>
                        <div className="w-24 h-2 bg-[#e0e0ff] rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f0f4ff] rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#ff6b6b] rounded-md transform rotate-45"></div>
                        <div className="absolute w-12 h-12 bg-[#4a69dd] rounded-md transform rotate-12"></div>
                        <div className="absolute w-8 h-8 bg-[#c066e5] rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#f0f4ff] rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-full p-4">
                        <div className="w-full h-4 bg-[#c066e5] mb-2"></div>
                        <div className="w-3/4 h-4 bg-[#4a69dd] mb-2"></div>
                        <div className="w-1/2 h-4 bg-[#ff6b6b] mb-2"></div>
                        <div className="flex mt-4">
                          <div className="w-8 h-8 bg-[#c066e5] rounded-sm mr-2"></div>
                          <div className="w-8 h-8 bg-[#4a69dd] rounded-sm mr-2"></div>
                          <div className="w-8 h-8 bg-[#ff6b6b] rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentContent.image === "website" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-6 bg-[#f0f4ff] flex items-center px-2">
                        <div className="w-3 h-3 bg-[#ff6b6b] rounded-full mr-1"></div>
                        <div className="w-3 h-3 bg-[#ffbe0b] rounded-full mr-1"></div>
                        <div className="w-3 h-3 bg-[#4a69dd] rounded-full mr-1"></div>
                        <div className="w-32 h-4 bg-[#f0f4ff] rounded-sm ml-4 border border-[#e0e0ff]"></div>
                      </div>
                      <div className="w-full h-10 bg-[#c066e5] flex items-center justify-between px-4">
                        <div className="w-8 h-4 bg-white rounded-sm"></div>
                        <div className="flex">
                          <div className="w-12 h-4 bg-white rounded-sm mx-1"></div>
                          <div className="w-12 h-4 bg-white rounded-sm mx-1"></div>
                          <div className="w-12 h-4 bg-white rounded-sm mx-1"></div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="w-full h-24 bg-[#f0f4ff] rounded-lg flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#c066e5] rounded-md"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-6 bg-[#f0f4ff] flex items-center px-2">
                        <div className="w-2 h-2 bg-[#ff6b6b] rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-[#ffbe0b] rounded-full mr-1"></div>
                        <div className="w-2 h-2 bg-[#4a69dd] rounded-full mr-1"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-full h-6 bg-[#c066e5] mb-2 rounded-sm"></div>
                        <div className="w-full h-4 bg-[#f0f4ff] mb-1 rounded-sm"></div>
                        <div className="w-full h-4 bg-[#f0f4ff] mb-1 rounded-sm"></div>
                        <div className="w-full h-4 bg-[#f0f4ff] rounded-sm"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-36 h-24 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="w-full h-4 bg-[#f0f4ff] flex items-center px-1">
                        <div className="w-1.5 h-1.5 bg-[#ff6b6b] rounded-full mr-0.5"></div>
                        <div className="w-1.5 h-1.5 bg-[#ffbe0b] rounded-full mr-0.5"></div>
                        <div className="w-1.5 h-1.5 bg-[#4a69dd] rounded-full mr-0.5"></div>
                      </div>
                      <div className="p-2">
                        <div className="w-full h-4 bg-[#c066e5] mb-2 rounded-sm"></div>
                        <div className="flex mb-2">
                          <div className="w-1/3 h-12 bg-[#f0f4ff] rounded-sm mr-1"></div>
                          <div className="w-1/3 h-12 bg-[#f0f4ff] rounded-sm mr-1"></div>
                          <div className="w-1/3 h-12 bg-[#f0f4ff] rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentContent.image === "seo" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-48 bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full h-8 bg-[#f0f4ff] rounded-full mb-4 flex items-center px-4">
                        <div className="w-4 h-4 bg-[#c066e5] rounded-full mr-2"></div>
                        <div className="w-32 h-4 bg-white rounded-sm"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#c066e5] rounded-sm mr-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-full h-3 bg-[#f0f4ff] rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-[#f0f4ff] rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#4a69dd] rounded-sm mr-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-full h-3 bg-[#f0f4ff] rounded-full mb-1"></div>
                            <div className="w-1/2 h-2 bg-[#f0f4ff] rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#ff6b6b] rounded-sm mr-2 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white"></div>
                          </div>
                          <div className="flex-1">
                            <div className="w-full h-3 bg-[#f0f4ff] rounded-full mb-1"></div>
                            <div className="w-2/3 h-2 bg-[#f0f4ff] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-[#c066e5] flex items-center justify-center mb-2">
                          <div className="w-8 h-8 bg-[#c066e5] transform rotate-45"></div>
                        </div>
                        <div className="w-full h-3 bg-[#f0f4ff] rounded-full mb-1"></div>
                        <div className="w-3/4 h-2 bg-[#f0f4ff] rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-40 h-32 bg-white rounded-lg shadow-lg p-3">
                      <div className="w-full h-4 bg-[#c066e5] mb-2"></div>
                      <div className="flex justify-between mb-2">
                        <div className="w-16 h-4 bg-[#f0f4ff]"></div>
                        <div className="w-8 h-4 bg-[#4a69dd]"></div>
                      </div>
                      <div className="w-full h-16 bg-[#f0f4ff] rounded-sm flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#c066e5] rounded-sm transform rotate-45"></div>
                      </div>
                    </div>
                  </>
                )}

                {currentContent.image === "ecommerce" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full h-8 bg-[#f0f4ff] flex items-center justify-between px-2 mb-3">
                        <div className="w-24 h-4 bg-[#c066e5] rounded-sm"></div>
                        <div className="flex">
                          <div className="w-6 h-6 bg-[#f0f4ff] rounded-full border border-[#c066e5] flex items-center justify-center mr-1">
                            <div className="w-3 h-3 bg-[#c066e5]"></div>
                          </div>
                          <div className="w-6 h-6 bg-[#f0f4ff] rounded-full border border-[#c066e5] flex items-center justify-center">
                            <div className="w-3 h-3 bg-[#c066e5]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-[#f0f4ff] p-2 rounded-md">
                          <div className="w-full h-16 bg-[#c066e5] rounded-sm mb-1"></div>
                          <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-[#f0f4ff] p-2 rounded-md">
                          <div className="w-full h-16 bg-[#4a69dd] rounded-sm mb-1"></div>
                          <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-8 bg-[#c066e5] rounded-md flex items-center justify-center">
                        <div className="w-24 h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-6 bg-[#f0f4ff] flex items-center px-2 mb-2">
                        <div className="w-6 h-4 bg-[#c066e5] rounded-sm"></div>
                      </div>
                      <div className="w-full h-20 bg-[#f0f4ff] rounded-md flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#c066e5] rounded-md flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-4 bg-[#c066e5] mb-2 rounded-sm"></div>
                      <div className="flex mb-2">
                        <div className="w-8 h-8 bg-[#f0f4ff] rounded-md mr-1"></div>
                        <div className="flex-1">
                          <div className="w-full h-2 bg-[#f0f4ff] rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-[#f0f4ff] rounded-full mb-1"></div>
                          <div className="w-1/2 h-2 bg-[#f0f4ff] rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-8 bg-[#4a69dd] rounded-md flex items-center justify-center">
                        <div className="w-16 h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </>
                )}

                {currentContent.image === "social" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full h-10 flex items-center mb-3">
                        <div className="w-10 h-10 bg-[#c066e5] rounded-full mr-2"></div>
                        <div className="flex-1">
                          <div className="w-full h-3 bg-[#f0f4ff] rounded-full mb-1"></div>
                          <div className="w-1/2 h-2 bg-[#f0f4ff] rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-28 bg-[#f0f4ff] rounded-md mb-3"></div>
                      <div className="flex justify-between mb-2">
                        <div className="w-8 h-8 bg-[#c066e5] rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white"></div>
                        </div>
                        <div className="w-8 h-8 bg-[#4a69dd] rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white"></div>
                        </div>
                        <div className="w-8 h-8 bg-[#ff6b6b] rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-white"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-6 flex items-center mb-2">
                        <div className="w-6 h-6 bg-[#c066e5] rounded-full mr-1"></div>
                        <div className="flex-1">
                          <div className="w-full h-2 bg-[#f0f4ff] rounded-full mb-1"></div>
                          <div className="w-1/2 h-1 bg-[#f0f4ff] rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-16 bg-[#f0f4ff] rounded-md mb-2"></div>
                      <div className="flex justify-between">
                        <div className="w-6 h-6 bg-[#c066e5] rounded-full"></div>
                        <div className="w-6 h-6 bg-[#4a69dd] rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-[#ff6b6b] rounded-full mr-1"></div>
                        <div className="flex-1">
                          <div className="w-full h-2 bg-[#f0f4ff] rounded-full mb-1"></div>
                          <div className="w-1/2 h-1 bg-[#f0f4ff] rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-12 bg-[#f0f4ff] rounded-md mb-1"></div>
                      <div className="flex justify-between">
                        <div className="w-8 h-2 bg-[#f0f4ff] rounded-full"></div>
                        <div className="w-8 h-2 bg-[#f0f4ff] rounded-full"></div>
                      </div>
                    </div>
                  </>
                )}

                {currentContent.image === "ppc" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full h-8 bg-[#f0f4ff] rounded-md flex items-center px-2 mb-3">
                        <div className="w-4 h-4 bg-[#c066e5] rounded-sm mr-2"></div>
                        <div className="w-32 h-4 bg-white rounded-sm"></div>
                      </div>
                      <div className="space-y-3 mb-3">
                        <div className="w-full h-10 bg-[#f0f4ff] rounded-md p-2">
                          <div className="flex justify-between">
                            <div className="w-24 h-3 bg-[#c066e5] rounded-sm"></div>
                            <div className="w-8 h-3 bg-[#4a69dd] rounded-sm"></div>
                          </div>
                          <div className="w-full h-2 bg-white rounded-full mt-2"></div>
                        </div>
                        <div className="w-full h-10 bg-[#f0f4ff] rounded-md p-2">
                          <div className="flex justify-between">
                            <div className="w-24 h-3 bg-[#c066e5] rounded-sm"></div>
                            <div className="w-8 h-3 bg-[#4a69dd] rounded-sm"></div>
                          </div>
                          <div className="w-full h-2 bg-white rounded-full mt-2"></div>
                        </div>
                      </div>
                      <div className="w-full h-8 bg-[#c066e5] rounded-md flex items-center justify-center">
                        <div className="w-24 h-4 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-6 bg-[#c066e5] rounded-sm mb-2"></div>
                      <div className="space-y-2">
                        <div className="w-full h-6 bg-[#f0f4ff] rounded-sm p-1">
                          <div className="w-3/4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-full h-6 bg-[#f0f4ff] rounded-sm p-1">
                          <div className="w-1/2 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-full h-6 bg-[#f0f4ff] rounded-sm p-1">
                          <div className="w-2/3 h-4 bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-4 bg-[#c066e5] mb-2"></div>
                      <div className="flex mb-2">
                        <div className="w-6 h-6 bg-[#4a69dd] rounded-full mr-1 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white"></div>
                        </div>
                        <div className="flex-1">
                          <div className="w-full h-2 bg-[#f0f4ff] rounded-full mb-1"></div>
                          <div className="w-3/4 h-2 bg-[#f0f4ff] rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-12 bg-[#f0f4ff] rounded-md"></div>
                    </div>
                  </>
                )}

                {currentContent.image === "ai" && (
                  <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-lg shadow-lg p-4">
                      <div className="w-full h-8 bg-[#f0f4ff] rounded-md flex items-center px-2 mb-3">
                        <div className="w-4 h-4 bg-[#c066e5] rounded-sm mr-2"></div>
                        <div className="w-32 h-4 bg-white rounded-sm"></div>
                      </div>
                      <div className="w-full h-32 bg-[#f0f4ff] rounded-md p-3 mb-3">
                        <div className="flex mb-2">
                          <div className="w-8 h-8 bg-[#c066e5] rounded-full mr-2"></div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex mb-2 justify-end">
                          <div className="flex-1">
                            <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                            <div className="w-3/4 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="w-8 h-8 bg-[#4a69dd] rounded-full ml-2"></div>
                        </div>
                        <div className="flex">
                          <div className="w-8 h-8 bg-[#c066e5] rounded-full mr-2"></div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-white rounded-full mb-1"></div>
                            <div className="w-1/2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-1 h-8 bg-[#f0f4ff] rounded-l-md p-2"></div>
                        <div className="w-8 h-8 bg-[#c066e5] rounded-r-md flex items-center justify-center">
                          <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-lg shadow-lg p-2">
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-[#c066e5] rounded-full mb-2 flex items-center justify-center">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-[#c066e5] rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-[#f0f4ff] rounded-full mb-1"></div>
                        <div className="w-3/4 h-2 bg-[#f0f4ff] rounded-full"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-36 h-28 bg-white rounded-lg shadow-lg p-2">
                      <div className="grid grid-cols-3 gap-1 h-full">
                        <div className="bg-[#f0f4ff] rounded-md flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#c066e5]"></div>
                        </div>
                        <div className="bg-[#f0f4ff] rounded-md flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#4a69dd]"></div>
                        </div>
                        <div className="bg-[#f0f4ff] rounded-md flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#ff6b6b]"></div>
                        </div>
                        <div className="bg-[#f0f4ff] rounded-md flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#ffbe0b]"></div>
                        </div>
                        <div className="bg-[#f0f4ff] rounded-md flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#c066e5]"></div>
                        </div>
                        <div className="bg-[#f0f4ff] rounded-md flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#4a69dd]"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Service items */}
              <div className="space-y-6 ml-8 md:ml-12">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer group"
                    onClick={() => setActiveService(service.name)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${service.name === activeService ? "bg-[#c066e5]" : "bg-white border border-[#c066e5]"
                        } flex items-center justify-center group-hover:border-[#a94bc7]`}
                    >
                      {service.name === activeService && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                    <div
                      className={`ml-4 text-sm md:text-base ${service.name === activeService ? "text-gray-900 font-medium" : "text-gray-700"
                        } group-hover:text-gray-900`}
                    >
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{currentContent.title}</h2>
            {currentContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6">
                {paragraph}
              </p>
            ))}
            <Button className="bg-[#c066e5] hover:bg-[#a94bc7] text-white px-6 py-2 rounded-md">Explore More</Button>
          </div>

          {/* Chat button */}

        </div>
      </section>

      <div className="min-h-screen flex flex-col">

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
