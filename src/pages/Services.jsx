import React from 'react';
import { productList, } from '../JayData';
import MachineCard from '../components/MachineCard';

function Services() {
  return (
    <div className="my-6 mb-10 px-4 content-center">
      <h1 className="text-center mb-8 text-4xl font-bold text-orange-500">
        Our Products
      </h1>

    
      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center content-center md:items-start justify-between gap-6 pr-12">
        
        {/* Left Side - Image */}
        {/* <div className="md:w-1/2 flex justify-center">
          <img 
            src="/services-illustration.jpg" 
            alt="Services Illustration"
            className="w-full max-w-[500px] rounded-lg shadow-lg"
          />
        </div> */}

<div className="md:w-1/2  flex items-center justify-center text-center min-h-150 pb-20">
  <div>
    <p className=" text-lg font-semibold mb-4">
      We provide high-precision, industry-grade gauges built for accuracy,<br />
      durability, and performance across various applications.
    </p>
    <p className="">
      - Plain Plug Gauges,<br />
      - Reversible Plug Gauges,<br />
      - Progressive Plug Gauges,<br />
      - Snap Gauges,<br />
      - Ring Gauges,<br />
      - Width Gauges
    </p>
  </div>
</div>


        {/* Right Side - Machine Cards */}
        {/* <div className="md:w-1/2 flex flex-wrap justify-center gap-4">
          {machineList.data.map((machine, index) => (
            <MachineCard key={index} machine={machine} />
          ))}
        </div> */}

        {/* Right Side - Machine Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">
            {productList.data.map((product, index) => (
              <MachineCard key={index} product={product} />
            ))}
        </div>

        
      </div>
    </div>
  );
}

export default Services;
