// import React from "react";

// function MachineCard({ product }) {
//   return (
//     <div className="flex justify-center">
//       <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] h-[150px] border border-gray-300 rounded-lg shadow-md bg-gray-100 p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out">
//         {/* Machine Name - Dark, Normal */}
//         <h3 className="text-base md:text-lg font-medium text-gray-800 drop-shadow-sm">{machine.machineName}</h3>
//         <img src={`${product.productImg}`} alt={product.productName}/>
        
//         {/* Machine Capacity - Slightly Fainter */}
//         <p className="text-sm text-gray-600">{product.productName}</p>
//       </div>
//     </div>
//   );
// }

// export default MachineCard;

import React from "react";

function MachineCard({ product }) {
  return (
    <div className="flex justify-center">
      <div className="w-[150px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto border border-gray-200 rounded-2xl shadow-sm bg-white p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300 ease-in-out hover:scale-[1.02]">
        
        {/* Product Image */}
        <div className="w-full h-[120px] flex items-center justify-center mb-3">
          <img
            src={product.productImg}
            alt={product.productName}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product Name */}
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">{product.productName}</h2>
      </div>
    </div>
  );
}

export default MachineCard;
  
