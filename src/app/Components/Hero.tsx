import React from 'react'
import Image from 'next/image'
// new line
import { projectId,dataset } from '@/sanity/env' 


const Hero = () => {
  // new line
  console.log("Sanity Project ID" ,projectId,dataset)




  return (
    <main>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row justify-around h-auto md:h-[850px] mx-4 md:mx-20 bg-[#F0F2F3] py-10'>
        {/* Text Section */}
        <div className='w-full md:w-[557px] md:h-[337px] pt-[50px] md:pt-[229px] pl-[20px] md:pl-[70px]'>
          <p className='font-normal text-sm text-[#272343] leading-3'>Welcome to Chairy</p>
          <p className='font-bold text-4xl md:text-6xl leading-tight text-[#272343]'>
            Best Furniture Collection for your Interior.
          </p>
        </div>

        {/* Image Section */}
        <div className='flex justify-center items-center mt-10 md:mt-0'>
          <Image src="/Product Image.png" alt="Product Image" width={434} height={584} />
        </div>
      </div>

      {/* Company Logo */}
      <div className='flex justify-center items-center mx-4 md:mx-20 my-10'>
        <Image src="/Company Logo.png" alt="Company Logo" width={1321} height={139} />
      </div>

      {/* Product Features Section */}
      <h1 className='text-[#272343] font-[inter] text-2xl md:text-3xl font-bold mx-4 md:mx-20 my-8'>
        Product Features
      </h1>
      <div className='flex  justify-between items-center gap-4 mx-4 md:mx-20'>
        <Image src="/chair5.png" alt="Chair 5" width={312} height={312} />
        <Image src="/chair1.png" alt="Chair 1" width={312} height={312} />
        <Image src="/Products.png" alt="Product" width={312} height={312} />
        <Image src="/Products (1).png" alt="Product 1" width={312} height={312} />
      </div>

      {/* Top Categories Section */}
      <h1 className='text-[#272343] font-[inter] text-2xl md:text-3xl font-bold mx-4 md:mx-20 my-8'>
        Top Categories
      </h1>
      <div className='flex  justify-center gap-4 mx-4 md:mx-20'>
        <Image src="/chair7.png" alt="Chair 7" width={424} height={424} />
        <Image src="/chair9.png" alt="Chair 9" width={424} height={424} />
        <Image src="/chair8.png" alt="Chair 8" width={424} height={424} />
      </div>

      {/* Hot Category Section */}
      <div className='flex justify-center items-center my-10'>
        <Image src="/hot-category.png" alt="Hot Category" width={1000} height={648} />
      </div>

      {/* Our Products Section */}
      <div className='flex justify-center items-center text-2xl text-[#272343] font-[inter] mx-4 md:mx-20 my-8'>
        Our Products
      </div>
      <div className='flex justify-between items-center gap-4 mx-4 md:mx-20'>
        <Image src="/chair5.png" alt="Chair 5" width={312} height={377} />
        <Image src="/chair1.png" alt="Chair 1" width={312} height={377} />
        <Image src="/Products.png" alt="Product" width={312} height={377} />
        <Image src="/Products (1).png" alt="Product 1" width={312} height={377} />
      </div>

     
      <div className="flex justify-between items-center gap-4 mx-4 md:mx-20">
  <div className="w-[312px] h-[377px]">
    <Image src="/chair7.png" alt="Chair 7" width={312} height={377} className="object-cover w-full h-full" />
  </div>
  <div className="w-[312px] h-[377px]">
    <Image src="/chair6.png" alt="Chair 6" width={312} height={377} className="object-cover w-full h-full" />
  </div>
  <div className="w-[312px] h-[377px]">
    <Image src="/chair4.png" alt="Chair 4" width={312} height={377} className="object-cover w-full h-full" />
  </div>
  <div className="w-[312px] h-[377px]">
    <Image src="/chair5.png" alt="Chair 5" width={312} height={377} className="object-cover w-full h-full" />
  </div>
</div>

      
    </main>
  )
}

export default Hero;
