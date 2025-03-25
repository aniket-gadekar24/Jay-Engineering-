// import React from 'react'

// function Footer() {
//   return (
//     <div>
//       <div className=' bg-gray-500 mt-8 px-25'>
//       <div className='flex justify-between items-center'>
//         <div>
//             <img src='/logo.png' className='sm:w-[250px] md:w-[280px] lg:w-[300px] h-[220px]'/>
//             <h1 className=' text-base md:text-lg pt-01'>GUT NO. 67, PLOT NO.06, WADGAON  <br/>
//             MIDC–WALUJ, AURANGABAD, 431 136.</h1>
//         </div>

//         <div>
//             <h1 className='text-lg leading-relaxed text-center md:text-lg pt-04 '>Contact Us</h1>
//             <h1 className='text-lg leading-relaxed text-base md:text-lg pt-04'>8208426361 <br/> 9607633709</h1>
//             <h1 className='text-lg leading-relaxed text-base md:text-lg pt-04'>Jayengineering2017@gmail.com</h1>
            
//         </div>
//       </div>

//       <div className='text-center py-8'>
//         <p> Copyright  &copy;  2025 Jay Engineering All Rights Reserved </p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Footer






import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-500 mt-8 px-6 md:px-12 lg:px-25 py-6">
      {/* Responsive flex layout */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Logo & Address */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-[180px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto"
          />
          <h1 className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
            GUT NO. 67, PLOT NO.06, WADGAON <br />
            MIDC–WALUJ, AURANGABAD, 431 136.
          </h1>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-semibold mb-2">Contact Us</h1>
          <p className="text-base md:text-lg leading-relaxed">
            8208426361 <br /> 9607633709
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-2">
            Jayengineering2017@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-6 text-sm md:text-base">
        <p>© 2025 Jay Engineering. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
