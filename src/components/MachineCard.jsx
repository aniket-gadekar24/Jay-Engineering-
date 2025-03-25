import React from "react";

function MachineCard({ machine }) {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] h-[150px] border border-gray-300 rounded-lg shadow-md bg-gray-100 p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out">
        {/* Machine Name - Dark, Normal */}
        <h3 className="text-base md:text-lg font-medium text-gray-800 drop-shadow-sm">{machine.machineName}</h3>
        
        {/* Machine Capacity - Slightly Fainter */}
        <p className="text-sm text-gray-600">{machine.capacity}</p>
      </div>
    </div>
  );
}

export default MachineCard;
