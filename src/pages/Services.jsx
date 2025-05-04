// import React from 'react';
// import { productList, } from '../JayData';
// import MachineCard from '../components/MachineCard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// function Services() {
//   const SlidingImg = [
//     "PLUG GAUGE.png",
//     "SNAP GAUGE.png",
//     "TAPER PLUG GAUGE.png",
//     "THREAD PLUG GAUGE.png",
//     "RING GAUGE.png",
//   ]
//   return (
//     <div className="my-6 mb-10 px-4 content-center">
//       <h1 className="text-center mb-8 text-4xl font-bold text-orange-500">
//         Our Products
//       </h1>

    
//       {/* Responsive Layout */}
//       <div className="flex flex-col md:flex-row items-center content-center md:items-start justify-between gap-6 pr-12">
        
       

//       <div className="md:w-1/2 items-center justify-center text-center md:min-h-[150px] md:pb-20 pb-4">
//         <div>
//           <p className="text-lg font-semibold mb-4 text-base md:text-lg leading-relaxed">
//             We provide high-precision, industry-grade gauges built for accuracy,<br />
//             durability, and performance across various applications.
//           </p>
//           <p>
//             - Plain Plug Gauges,<br />
//             - Reversible Plug Gauges,<br />
//             - Progressive Plug Gauges,<br />
//             - Snap Gauges,<br />
//             - Ring Gauges,<br />
//             - Width Gauges
//           </p>
//         </div>

//         {/* <div className="mt-8">
//             <Swiper
//               modules={[Navigation, Pagination, Autoplay]}
//               spaceBetween={20}
//               slidesPerView={1}
//               navigation
//               pagination={{ clickable: true }}
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               loop={true}
//               className="w-full max-w-md mx-auto" // Center the swiper and fix width
//             >
//               {SlidingImg.map((img, index) => (
//                 <SwiperSlide key={index}>
//                   <img 
//                     src={img} 
//                     alt={`Product ${index}`}
//                     className="w-full h-64 object-contain rounded-lg shadow-lg" 
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//         </div> */}

// <div className="mt-8 w-full">
//   <Swiper
//     modules={[Navigation, Pagination, Autoplay]}
//     spaceBetween={10}
//     slidesPerView={1}
//     navigation
//     pagination={{ clickable: true }}
//     autoplay={{ delay: 3000, disableOnInteraction: false }}
//     loop={true}
//     className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
//   >
//     {SlidingImg.map((img, index) => (
//       <SwiperSlide key={index}>
//         <div className="flex items-center justify-center">
//           <img 
//             src={img} 
//             alt={`Product ${index}`}
//             className="w-full h-48 md:h-64 object-contain rounded-xl shadow-md" 
//           />
//         </div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>


//       </div>


//         {/* Right Side - Machine Cards */}
//           <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
//               {productList.data.map((product, index) => (
//                 <MachineCard key={index} product={product} />
//               ))}
//           </div>
        
//       </div>


//     </div>
//   );
// }

// export default Services;

import React from 'react';
import { productList } from '../JayData';
import MachineCard from '../components/MachineCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Services() {
  const SlidingImg = [
    "PLUG GAUGE.png",
    "SNAP GAUGE.png",
    "TAPER PLUG GAUGE.png",
    "THREAD PLUG GAUGE.png",
    "RING GAUGE.png",
  ];

  return (
    <div className="my-6 mb-10 px-4 content-center">
      <h1 className="text-center mb-8 text-4xl font-bold text-orange-500">
        Our Products
      </h1>

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pr-0 md:pr-12">

        {/* Left Side - Text + Swiper */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center md:min-h-[150px] md:pb-20 pb-4">

          {/* Text Section */}
          <div className="w-full mb-6">
            <p className="text-base md:text-lg font-semibold mb-4 leading-relaxed">
              We provide high-precision, industry-grade gauges built for accuracy,<br />
              durability, and performance across various applications.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              - Plain Plug Gauges<br />
              - Reversible Plug Gauges<br />
              - Progressive Plug Gauges<br />
              - Snap Gauges<br />
              - Ring Gauges<br />
              - Width Gauges
            </p>
          </div>

          {/* Swiper Section */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="w-full max-w-xs md:max-w-md mx-auto"
            >
              {SlidingImg.map((img, index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    alt={`Product ${index}`}
                    className="w-full h-48 md:h-64 object-contain rounded-xl shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* Right Side - Machine Cards */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
          {productList.data.map((product, index) => (
            <MachineCard key={index} product={product} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Services;

