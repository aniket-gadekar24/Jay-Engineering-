// import React from 'react'

// function About() {
//   return (
//     <div className='px-25 flex'>
      
//         <div >
//         <h2 className="text-4xl font-bold mb-6 mt-30 text-center items-center text-orange-500">About Us</h2>
//             <p className='text-lg leading-relaxed text-base md:text-lg pt-08'> <span className='text-orange-500 font-bold text-4xl tracking-wide'>Jay</span> Engineering established in 2007 and based in Waluj MIDC, Aurangabad, Jay Engineering specializes in manufacturing standard gauges, relation gauges, jigs, and fixtures. The firm is committed to delivering high-quality industrial products and services at competitive prices to reputed clients.

//             Equipped with advanced machinery and a dedicated laboratory for quality verification, We ensures precision and reliability in every product. The company employs skilled and experienced professionals, many of whom have been with the firm since its inception, fostering a strong and efficient work environment.

//             To meet growing industry demands and enhance production efficiency, Jay Engineering plans to introduce automated machinery, reducing costs and improving output.
//             </p>
//         </div>

//         <div>
//             <img src='/about-us-illustration.jpg'/>
//         </div>
      
//     </div>
//   )
// }

// export default About






import React from 'react';
// import Marquee from "react-fast-marquee";
// import { GiSkills, FaTools ,FaAward,BsTruck,IoCalendarNumber,FaThumbsUp} from "react-icons/gi";


function About() {

  // const features = [
  //   {icon : <GiSkills /> , text : "Professional Technicians"},
  //   {icon : <FaTools />   , text : "High-Quality Workmanship"},
  //   {icon : <FaAward />   , text : "Award-Winning Service"},
  //   {icon :  <BsTruck />  , text : "Emergency Service Available"},
  //   {icon : <IoCalendarNumber />, text : "Fast, Same-Day Repairs"},
  //   {icon : <FaThumbsUp />  , text : "Top-Notch Workmanship"}, 
  // ]

  return (
    <div className="px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-8">
      {/* Left Section - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-orange-500">
          About Us
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          <span className="text-orange-500 font-bold text-3xl md:text-4xl tracking-wide">Jay</span> Engineering, established in 2017 and based in Waluj MIDC, chhatrapati sambhajinagar, specializes in manufacturing standard gauges, relation gauges and fixtures. The firm is committed to delivering high-quality industrial products and services at competitive prices to reputed clients.
          <br /><br />
          Equipped with advanced machinery and a dedicated laboratory for quality verification, we ensure precision and reliability in every product. The company employs skilled and experienced professionals, many of whom have been with the firm since its inception, fostering a strong and efficient work environment.
          <br /><br />
          To meet growing industry demands and enhance production efficiency, Jay Engineering plans to introduce automated machinery, reducing costs and improving output.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/about-us-illustration.jpg" 
          alt="About Us Illustration"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
        />
      </div>


       {/* sliding window  */}

      <div>

        {/* <Marquee>
          <div>
            {
              features.map((item,index)=>(
                <div>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>
        </Marquee> */}
      </div>
       
    </div>
  );
}

export default About;
