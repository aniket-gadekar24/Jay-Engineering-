// import React from 'react'
// import img from '../assets/BG1.jpg'
// import Header from './Header'

// function Home() {
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <div
//     className="bg-cover bg-center w-full h-screen"
//     style={{ backgroundImage: `url('/BG3.jpg')` }}>
      
//       <div className="pt-55 ml-30">
//         <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
//           From Blueprint to Reality <br />
//           Engineered Parts Built to Last
//         </h1>
//         <div className="space-x-4">
//           <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition duration-300"
//           onClick={() => handleScroll("about")}>
//             Read More
//           </button>
//           <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition duration-300"
//           onClick={() => handleScroll("contact")}>
//             Contact Us
//           </button>
//         </div>
//       </div>

    
//     </div>


//   )
// }

// export default Home


import React from 'react';

function Home() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center  px-6 sm:px-12 md:px-20 lg:px-32"
      style={{ backgroundImage: `url('/BG3.jpg')` }}
    >
      <div className="">
        <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-6">
          From Blueprint to Reality <br />
          Engineered Parts Built to Last
        </h1>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 ">
          <button
            className="bg-white text-red-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition duration-300"
            onClick={() => handleScroll("about")}
          >
            Read More
          </button>
          <button
            className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition duration-300"
            onClick={() => handleScroll("contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
  