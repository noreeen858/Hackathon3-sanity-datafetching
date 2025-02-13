import React from 'react';
import Image from 'next/image';








// ///
const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Text Section */}
        <div className="flex flex-col bg-[#007580] p-6 w-full lg:w-[672px] h-[478px]">
          <h1 className="font-[inter] text-[32px] leading-[38.73px] text-[#FFFFFF] font-bold">
            About Us - Comforty
          </h1>
          <p className="mt-6 text-[#FFFFFF] text-[18px] font-normal leading-[21.78px]">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="mt-6 w-[115px] h-[24px] text-[16px] font-normal leading-[24px] text-[#FFFFFF] bg-transparent border border-white rounded-md hover:bg-white hover:text-[#007580] transition duration-300">
            View collection
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-[672px] h-[478px]">
          <Image
            src="/card (1).png"
            alt="Comforty Chair"
            width={672}
            height={478}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>

// ///


  );
};

export default page;
