// import React from 'react'
// import Marquee from 'react-fast-marquee'
// import { GiSkills } from "react-icons/gi";
// import { FaTools } from "react-icons/fa";
// import { FaAward } from "react-icons/fa6";
// import { FaTruckMoving } from "react-icons/fa6";
// import { IoCalendarNumber } from "react-icons/io5";
// import { FaThumbsUp } from "react-icons/fa";

// function Features() {

//     const features = [
//         {icon : <GiSkills size={40} /> , text :"Professional Technicians" },
//         {icon : <FaTools size={40} />, text :"High-Quality Workmanship" },
//         {icon : <FaAward size={40}/>, text : "Award-Winning Service"},
//         {icon : <FaTruckMoving size={40}/>, text : "Award-Winning Service"},
//         {icon : <IoCalendarNumber size={40}/>, text :"Fast, Same-Day Repairs" },
//         {icon : <FaThumbsUp size={40}/>, text :"Top-Notch Workmanship" },
//       ]
    
//   return (
//     <div>
//       <div>
//         <Marquee>
//             <div className='flex'>
//                 {
//                     features.map((item,index)=>(
//                         <div className=''>
//                             <section>{item.icon}</section>
//                             <p>{item.text}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </Marquee>
//       </div>
//     </div>
//   )
// }

// export default Features


import React from 'react';
import Marquee from 'react-fast-marquee';
import { GiSkills } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaAward, FaThumbsUp, FaTruckMoving } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";

function Features() {
  const features = [
    { icon: <GiSkills size={40} className="text-orange-500" />, text: "Professional Technicians" },
    { icon: <FaTools size={40} className="text-blue-500" />, text: "High-Quality Workmanship" },
    { icon: <FaAward size={40} className="text-yellow-500" />, text: "Award-Winning Service" },
    { icon: <FaTruckMoving size={40} className="text-green-500" />, text: "Reliable Transport" },
    { icon: <IoCalendarNumber size={40} className="text-purple-500" />, text: "Fast, Same-Day Repairs" },
    { icon: <FaThumbsUp size={40} className="text-pink-500" />, text: "Top-Notch Workmanship" },
  ];

  return (
    <div className="py-8 ">
      {/* <h2 className="text-center text-2xl font-bold text-orange-600 mb-6">Why Choose Us</h2> */}
      
      <Marquee gradient={false} speed={70} loop={0} play={true} pauseOnHover={false}>
        <div className="flex gap-8 px-4">
          {features.map((item, index) => (
            <div key={index} className="min-w-[160px] h-[130px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center px-3 py-2 hover:shadow-lg transition-all duration-300">
              <div className="mb-2">{item.icon}</div>
              <p className="text-sm font-medium text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Features;
