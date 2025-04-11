import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { isUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleLinkClick = () => closeMenu();
  const handleCloseClick = (event) => {
    event.stopPropagation();
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

  //   <div className="bg-[#e9eef6] min-h-screen p-8">
  //   <div className="max-w-7xl mx-auto">
  //     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
  //       {/* WEBSITE DESIGN & DEVELOPMENT */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">WEBSITE DESIGN & DEVELOPMENT</h3>
  //         <ul className="space-y-2">
  //           <li>WordPress Development</li>
  //           <li>Javascript Development</li>
  //           <li>CMS Development</li>
  //           <li>Website Maintenance</li>
  //         </ul>
  //       </div>

  //       {/* SOCIAL MEDIA MARKETING */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">SOCIAL MEDIA MARKETING</h3>
  //         <ul className="space-y-2">
  //           <li>Facebook Marketing</li>
  //           <li>Instagram Marketing</li>
  //           <li>TikTok Marketing</li>
  //           <li>LinkedIn Marketing</li>
  //         </ul>
  //       </div>

  //       {/* SEO SERVICES */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">SEO SERVICES</h3>
  //         <ul className="space-y-2">
  //           <li>Local SEO</li>
  //           <li>E-Commerce SEO</li>
  //           <li>SEO Audit</li>
  //           <li>Link Building</li>
  //           <li>Enterprise SEO</li>
  //           <li>International SEO</li>
  //         </ul>
  //       </div>

  //       {/* PPC ADVERTISING */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">PPC ADVERTISING</h3>
  //         <ul className="space-y-2">
  //           <li>Google Ads Management</li>
  //           <li>PPC Audit</li>
  //         </ul>
  //       </div>

  //       {/* UI UX DESIGN */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">UI UX DESIGN</h3>
  //         <ul className="space-y-2">
  //           <li>Wireframe & Prototype Design</li>
  //           <li>Mobile App UI/UX</li>
  //           <li>UI/UX for E-commerce Websites</li>
  //         </ul>
  //       </div>

  //       {/* GRAPHICS DESIGN */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">GRAPHICS DESIGN</h3>
  //         <ul className="space-y-2">
  //           <li>Logo Design</li>
  //           <li>Branding & Identity</li>
  //           <li>Business Card Design</li>
  //           <li>Brochure Design</li>
  //           <li>Info graphic Design</li>
  //         </ul>
  //       </div>

  //       {/* E-COMMERCE DEVELOPMENT */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">E-COMMERCE DEVELOPMENT</h3>
  //         <ul className="space-y-2">
  //           <li>Shopify Development</li>
  //           <li>Woo Commerce Development</li>
  //           <li>Magento Development</li>
  //           <li>E-commerce Website Design</li>
  //           <li>E-commerce Maintenance Services</li>
  //           <li>Payment Gateway Integration</li>
  //         </ul>
  //       </div>

  //       {/* AI SERVICES */}
  //       <div className="bg-[#b87eda] rounded-lg p-6 text-white">
  //         <h3 className="font-bold text-lg mb-4">AI SERVICES</h3>
  //         <ul className="space-y-2">
  //           <li>Chatbot Development</li>
  //           <li>AI-Powered Marketing Automation</li>
  //           <li>AI Content Creation Services</li>
  //           <li>Custom AI Solutions</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // </div>



    <nav className="fixed top-0 left-0 w-full z-50 border-gray-200 bg-gradient-to-r from-[#8e68ed]/70 to-[#e36bbb]/70 backdrop-blur-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <span className="self-center text-3xl hover:text-[#f70acc] font-semibold whitespace-nowrap text-black">
            Saylani MicroFinance
          </span>
        </Link>

        {/* Hamburger Menu */}
        <label className="btn-circle bg-gradient-to-r from-[#8e68ed] to-[#e36bbb] swap swap-rotate md:hidden">
          <input type="checkbox" checked={isOpen} readOnly />
          <svg
            className={`swap-off fill-current ${isOpen ? 'hidden' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleMenu}
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className={`swap-on fill-current ${!isOpen ? 'hidden' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={handleCloseClick}
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {/* Navbar Links */}
        <div
          ref={navbarRef}
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-large flex font-semibold flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {["/", "/register", "/login", "/logout", "/Services" , "/Guarantor", "/loanRequest"].map((path, index) => {
              const isActive = currentPath === path;

              return (
                <li key={index}>
                  <Link
                    to={path}
                    onClick={handleLinkClick}
                    className={`block py-2 px-3 rounded relative md:p-0 transition-all duration-300
                      ${isActive ? "text-purple-800" : "text-gray-900 dark:text-purple-800"}
                      after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:transition-all after:duration-300
                      ${isActive ? "after:w-full after:bg-purple-700" : "after:w-0 hover:after:w-full after:bg-purple-700"}
                    `}
                  >
                    {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
