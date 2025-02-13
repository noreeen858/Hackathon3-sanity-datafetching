import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      {/* Main product section */}
      <div className='flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-10 my-10'>
        
        {/* Image section */}
        <div className='flex justify-center lg:w-[400px] mb-6 lg:mb-0'>
          <Image
            src="/chair12.png"
            alt="Chair Image"
            width={400}
            height={500}
          />
        </div>

        {/* Product details section */}
        <div className='flex flex-col w-full lg:w-[541px] px-4 lg:px-0'>
          <p className='font-[inter] font-bold text-[32px] lg:text-[60px] leading-[40px] lg:leading-[66px] text-[#272343]'>
            Library Stool Chair
          </p>
          <button className='font-[inter] font-semibold text-[18px] lg:text-[20px] leading-[22px] bg-[#029FAE] text-white w-[144px] h-[44px] rounded-full mb-4'>
            $20.00 USD
          </button>
          <p className='font-[inter] font-normal text-[16px] lg:text-[22px] text-[#272343] leading-[24px] lg:leading-[33px] mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button className='w-[212px] h-[63px] text-white rounded-md bg-[#029FAE]'>
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className='flex justify-between items-center mx-4 lg:mx-10 mb-6'>
        <p className='font-[inter] font-bold text-[22px] lg:text-[28px] text-[#000000] leading-[30px]'>
          Featured Products
        </p>
        <p className='font-[inter] text-[16px] lg:text-[18px] text-[#000000] cursor-pointer'>
          View all
        </p>
      </div>

      {/* Featured Product Images */}
      <div className='flex justify-between gap-4 mx-4 lg:mx-10'>
        {["/chair4.png", "/chair5.png", "/chair-11.png", "/Products.png", "/chair-10.png"].map((src, index) => (
          <div key={index} className='flex justify-center items-center w-full sm:w-[270px] lg:w-[270px]'>
            <Image src={src} alt={`Product ${index + 1}`} width={270} height={263} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
