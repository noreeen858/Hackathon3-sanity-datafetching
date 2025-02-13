import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main>
      <p className='pl-[50px] text-[24px] md:text-[32px] font-bold'>All Products</p>
      
      {/* Product Images Row 1 */}
      <div className='flex justify-between items-center mx-4 md:mx-20 gap-4'>
        {["/chair5.png", "/chair1.png", "/Products.png", "/Products (1).png"].map((src, index) => (
          <div key={index} className='flex justify-center items-center w-full sm:w-[312px] md:w-[312px]'>
            <Image src={src} alt={`Product ${index + 1}`} width={312} height={312} />
          </div>
        ))}
      </div>

      {/* Product Images Row 2 */}
      <div className='flex  justify-between items-center mx-4 md:mx-20 gap-4'>
        {["/chair3.png", "/chair6.png", "/chair4.png", "/chair5.png"].map((src, index) => (
          <div key={index} className='flex justify-center items-center w-full sm:w-[312px] md:w-[312px]'>
            <Image src={src} alt={`Product ${index + 1}`} width={312} height={312} />
          </div>
        ))}
      </div>

      {/* Product Images Row 3 */}
      <div className='flex  justify-between items-center mx-4 md:mx-20 gap-4'>
        {["/chair-10.png", "/chair1.png", "/Products.png", "/chair-11.png"].map((src, index) => (
          <div key={index} className='flex justify-center items-center w-full sm:w-[312px] md:w-[312px]'>
            <Image src={src} alt={`Product ${index + 1}`} width={312} height={312} />
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className='flex justify-center items-center h-[754px] px-4 md:px-[300px] bg-[#1E28320D]'>
        <div className='flex flex-col w-full md:w-[760px] h-[165px] gap-10'>
          <p className='font-[Roboto] font-medium text-[30px] md:text-[50px] text-[#000000]'>
            Or subscribe to the newsletter
          </p>
          <div className='flex justify-between items-center w-full md:w-[643px] h-[32px]'>
            <p className='font-[roboto] font-semibold text-[14px] md:text-[16px] text-[#1E283280]'>Email address......</p>
            <p className='font-[roboto] font-semibold text-[14px] md:text-[16px] text-[#1E283280]'>Submit</p>
          </div>
          <div className='flex flex-col w-full md:w-[1023px]'>
            <p className='font-[roboto] font-medium text-[30px] md:text-[50px] text-[#000000]'>
              Follow products and discounts on Instagram
            </p>
          </div>

          {/* Instagram Images */}
          <div className='flex justify-between items-center gap-2 my-10'>
            {[
              "/chair14.png", "/chair7.png", "/chair12.png", "/chair8.png", "/card (1).png", "/chair13.png"
            ].map((src, index) => (
              <div key={index} className='flex justify-center items-center w-full sm:w-[186px] md:w-[186px]'>
                <Image src={src} alt={`Instagram Product ${index + 1}`} width={186} height={186} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
