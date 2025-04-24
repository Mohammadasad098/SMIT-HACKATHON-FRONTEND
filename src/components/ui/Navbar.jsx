import { useState, useRef, useEffect, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import UserContext from "../../context/UserContext"
import LogoutModal from "./LogoutModel"

const Navbar = () => {
  const { isUser, setIsUser } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const navbarRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const handleLinkClick = () => closeMenu()
  const handleCloseClick = (event) => {
    event.stopPropagation()
    closeMenu()
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location])

  // Logout actions
  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  const confirmLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("userId")
    setIsUser(false)
    setShowLogoutModal(false)
    navigate("/")
  }

  const cancelLogout = () => {
    setShowLogoutModal(false)
  }

  const menuItems = isUser
    ? [
        { path: "/", label: "Home" },
        { path: "/Services", label: "Services" },
        { path: "/Guarantor", label: "Guarantor" },
        { path: "/loanRequest", label: "Loan Request" },
        { path: "/payHere", label: "Pay Now" },
        { path: "/logout", label: "Logout", onClick: handleLogoutClick },
      ]
    : [
        { path: "/", label: "Home" },
        { path: "/Services", label: "Services" },
        { path: "/register", label: "Register" },
        { path: "/login", label: "Login" },
      ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-gray-200 bg-gradient-to-r from-[#8e68ed]/70 to-[#e36bbb]/70 backdrop-blur-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <span className="self-center text-2xl md:text-3xl hover:text-[#f70acc] font-semibold whitespace-nowrap text-black">
            Saylani MicroFinance
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full bg-gradient-to-r from-[#8e68ed] to-[#e36bbb] text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="fill-current">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 bg-white z-50 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:h-auto md:w-auto md:bg-transparent md:transform-none md:block md:transition-none`}
        >
          <div className="flex justify-end p-4 md:hidden">
            <button onClick={handleCloseClick} className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div ref={navbarRef} id="navbar-default" className="w-full bg-white h-screen fixed top-0 left-0 z-50 md:static md:h-auto md:bg-transparent">
            <ul className="font-large flex font-semibold flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {menuItems.map(({ path, label, onClick }, index) => {
                const isActive = currentPath === path
                return (
                  <li key={index} className="border-b md:border-none">
                    <Link
                      to={path !== "/logout" ? path : "#"}
                      onClick={(e) => {
                        if (onClick) {
                          e.preventDefault()
                          onClick()
                        } else {
                          handleLinkClick()
                        }
                      }}
                      className={`block py-4 px-3 md:py-1 md:px-3 rounded relative md:p-0 transition-all duration-300
                        ${
                          isActive
                            ? "text-purple-800 bg-purple-100 md:bg-transparent"
                            : "text-gray-900 dark:text-purple-800"
                        }
                        hover:bg-purple-50 md:hover:bg-transparent
                        after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:transition-all after:duration-300
                        ${
                          isActive
                            ? "after:w-full after:bg-purple-700"
                            : "after:w-0 hover:after:w-full after:bg-purple-700 md:hover:after:bg-purple-700"
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* 🔔 Logout Confirmation Modal */}
      <LogoutModal isOpen={showLogoutModal} onConfirm={confirmLogout} onCancel={cancelLogout} />
    </nav>
  )
}

export default Navbar








// import React, { useState, useRef, useEffect, useContext } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import UserContext from "../context/UserContext";

// const Navbar = () => {
//   const { isUser } = useContext(UserContext);
//   const [isOpen, setIsOpen] = useState(false);
//   const navbarRef = useRef(null);
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);
//   const handleLinkClick = () => closeMenu();
//   const handleCloseClick = (event) => {
//     event.stopPropagation();
//     closeMenu();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (

//     <nav className="fixed top-0 left-0 w-full z-50 border-gray-200 bg-gradient-to-r from-[#8e68ed]/70 to-[#e36bbb]/70 backdrop-blur-xl">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <Link to="/">
//           <span className="self-center text-3xl hover:text-[#f70acc] font-semibold whitespace-nowrap text-black">
//             Saylani MicroFinance
//           </span>
//         </Link>

//         {/* Hamburger Menu */}
//         <label className="btn-circle bg-gradient-to-r from-[#8e68ed] to-[#e36bbb] swap swap-rotate md:hidden">
//           <input type="checkbox" checked={isOpen} readOnly />
//           <svg
//             className={`swap-off fill-current ${isOpen ? 'hidden' : ''}`}
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 512 512"
//             onClick={toggleMenu}
//           >
//             <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
//           </svg>
//           <svg
//             className={`swap-on fill-current ${!isOpen ? 'hidden' : ''}`}
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 512 512"
//             onClick={handleCloseClick}
//           >
//             <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
//           </svg>
//         </label>

//         {/* Navbar Links */}
//         <div
//           ref={navbarRef}
//           className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-large flex font-semibold flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
//             {["/", "/register", "/login", "/logout", "/Services" , "/Guarantor", "/loanRequest"].map((path, index) => {
//               const isActive = currentPath === path;

//               return (
//                 <li key={index}>
//                   <Link
//                     to={path}
//                     onClick={handleLinkClick}
//                     className={`block py-2 px-3 rounded relative md:p-0 transition-all duration-300
//                       ${isActive ? "text-purple-800" : "text-gray-900 dark:text-purple-800"}
//                       after:absolute after:-bottom-2 after:left-0 after:h-[4px] after:transition-all after:duration-300
//                       ${isActive ? "after:w-full after:bg-purple-700" : "after:w-0 hover:after:w-full after:bg-purple-700"}
//                     `}
//                   >
//                     {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



















// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const navbarRef = useRef(null)
//   const location = useLocation()
//   const [currentPath, setCurrentPath] = useState(location.pathname)

//   useEffect(() => {
//     setCurrentPath(location.pathname)
//   }, [location])

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleCloseClick = () => {
//     setIsOpen(false)
//   }

//   const handleLinkClick = () => {
//     setIsOpen(false)
//   }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [navbarRef])

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to="/" className="flex items-center">
//           <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//         </Link>

//         {/* Hamburger Menu */}
//         <button onClick={toggleMenu} className="md:hidden text-black">
//           {!isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="3" y1="12" x2="21" y2="12"></line>
//               <line x1="3" y1="6" x2="21" y2="6"></line>
//               <line x1="3" y1="18" x2="21" y2="18"></line>
//             </svg>
//           ) : null}
//         </button>

//         {/* Mobile Menu Overlay */}
//         <div
//           ref={navbarRef}
//           className={`${
//             isOpen ? "fixed" : "hidden"
//           } inset-0 bg-white z-50 overflow-auto md:static md:block md:w-auto md:bg-transparent md:overflow-visible`}
//           id="navbar-default"
//         >
//           {/* Close Button for Mobile */}
//           <div className="flex justify-end p-4 md:hidden">
//             <button onClick={handleCloseClick} className="text-gray-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu Items */}
//           <ul className="font-medium px-8 md:p-0 md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0">
//             {[
//               { path: "/", label: "Home", hasSubmenu: false },
//               { path: "/register", label: "Register", hasSubmenu: false },
//               { path: "/login", label: "Login", hasSubmenu: false },
//               { path: "/logout", label: "Logout", hasSubmenu: false },
//               { path: "/Services", label: "Services", hasSubmenu: true },
//               { path: "/Guarantor", label: "Guarantor", hasSubmenu: false },
//               { path: "/loanRequest", label: "LoanRequest", hasSubmenu: false },
//             ].map((item, index) => {
//               const isActive = currentPath === item.path

//               return (
//                 <li key={index} className="md:border-none border-b border-gray-200">
//                   <Link
//                     to={item.path}
//                     onClick={handleLinkClick}
//                     className={`py-4 flex items-center justify-between md:py-2 md:px-3 md:relative md:transition-all md:duration-300
//                       ${isActive ? "text-orange-500 font-medium" : "text-gray-800 font-medium"}
//                       md:after:absolute md:after:-bottom-2 md:after:left-0 md:after:h-[4px] md:after:transition-all md:duration-300
//                       ${isActive ? "md:after:w-full md:after:bg-purple-700" : "md:after:w-0 md:hover:after:w-full md:after:bg-purple-700"}
//                     `}
//                   >
//                     {item.label}
//                     {item.hasSubmenu && (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-gray-400 md:hidden"
//                       >
//                         <polyline points="9 18 15 12 9 6"></polyline>
//                       </svg>
//                     )}
//                   </Link>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
