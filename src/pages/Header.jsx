// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

  
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <div className='absolute z-10 flex w-[100%] items-center justify-between px-25  pt-5'>
//       {/* absolute z-10 bg-white shadow-md  top-5 left-0 bottom-5 w-full z-50 flex justify-between */}
        
//         <div >
//             <img src='/logo.png' className='w-28 h-auto object-contain'/>
//         </div>

//         {/* Menu Icon for Mobile */}
//       <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//         <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
//         <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
//         <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
//       </div>

//       <nav className={`hidden md:flex space-x-4  ${menuOpen ? "block" : "hidden"}`}>
//         <a  className='text-gray-700 hover:text-blue-700 text-xl font-semibold text-white ' onClick={() => handleScroll("home")}>Home</a>
//         <a  className='text-gray-700 hover:text-blue-700 text-xl font-semibold text-white' onClick={()=>handleScroll("about")}>About US</a>
//         <a  className='text-gray-700 hover:text-blue-700 text-xl font-semibold text-white' onClick={() => handleScroll("services")}>Our Services</a>
//         {/* <Link className='text-gray-700 hover:text-blue-700 text-xl font-semibold text-white'>Product Gallery</Link> */}
//         <a  className='text-gray-700 hover:text-blue-700 text-xl font-semibold text-white' onClick={() => handleScroll("client")}>Industries served</a>
//         <a  className='text-gray-700 hover:text-blue-700 text-xl font-semibold text-white' onClick={() => handleScroll("contact")}>Contact US</a>

//       </nav>
//     </div>
//   )
// }

// export default Header




// import React, { useState } from "react";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Close menu after clicking on mobile
//     }
//   };

//   return (
//     <header className="absolute z-10 w-full z-50  text-white ">
//       <div className="container mx-auto flex justify-between items-center px-20 py-4">
//         {/* Logo */}
//         <div>
//           <img src="/logo.png" className="w-28 h-auto object-contain" alt="Logo" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//           <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
//           <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
//           <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
//         </div>

//         {/* Navigation Menu */}
//         <nav className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex items-center  md:bg-transparent transition-all ${menuOpen ? "block" : "hidden"}`}>
//           <ul className="flex flex-col md:flex-row items-center md:space-x-6 p-6 md:p-0">
//             <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("home")}>Home</a></li>
//             <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("about")}>About Us</a></li>
//             <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("services")}>Our Services</a></li>
//             <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("client")}>Industries Served</a></li>
//             <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("contact")}>Contact Us</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <header className="absolute z-50 w-full text-white">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <div>
          <img src="/logo.png" className="w-28 h-auto object-contain" alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`absolute md:static top-10 left-0 w-full  md:w-auto md:flex items-center md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 p-6 md:p-0">
            <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("home")}>Home</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("about")}>About Us</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("services")}>Our Products</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("client")}>Industries Served</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-400 cursor-pointer" onClick={() => handleScroll("contact")}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

