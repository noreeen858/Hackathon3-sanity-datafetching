import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <main>
      {/* Top Footer */}
      <div className='flex flex-wrap justify-between items-center gap-4 h-[343px] bg-[#E1E3E5] p-4 md:px-20'>
        {/* Logo and Description */}
        <div className='flex flex-col w-full sm:w-[168px] h-[40px] gap-4'>
          <Image
            src="/Logo.png"
            alt='/Logo.png'
            width={100}
            height={100}
          />
          <div className='flex justify-center items-center font-[inter] font-[400] text-[16px] md:text-[18px] leading-[24px] text-[#272343] opacity-60'>
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </div>

          <div>
            <Image
              src="/Social Links@2x.png"
              alt='/Social Links@2x.png'
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Category Section */}
        <div className='flex flex-col w-full sm:w-auto'>
          <div className='flex justify-between items-center w-full sm:w-[82px] h-[15px] font-[inter] font-medium text-[14px] text-[#9A9CAA]'>
            Category
          </div>
          <div className='flex flex-col gap-2 text-[16px] md:text-[18px] text-[#272343]'>
            <ul>
              <li className='text-[#272343]'>Sofa</li>
              <li className='text-[#272343]'>Armchair</li>
              <li className='text-[#272343]'>Wing Chair</li>
              <li className='text-[#007580]'>Desk Chair</li>
              <li className='text-[#272343]'>Wooden Chair</li>
              <li className='text-[#272343]'>Park Bench</li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className='flex flex-col w-full sm:w-auto'>
          <div className='flex justify-between items-center w-full sm:w-[72px] h-[15px] font-[inter] font-medium text-[14px] text-[#9A9CAA]'>
            Support
          </div>
          <div className='flex flex-col gap-2 text-[16px] md:text-[18px] text-[#272343]'>
            <ul>
              <li className='text-[#272343]'>Help & Support</li>
              <li className='text-[#272343]'>Terms & Conditions</li>
              <li className='text-[#272343]'>Privacy Policy</li>
              <li className='text-[#272343]'>Help</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='flex flex-col items-start w-full sm:w-auto gap-4'>
          <div className='flex justify-center items-center w-[72px] h-[15px] font-[inter] font-medium text-[14px] text-[#9A9CAA]'>
            Newsletter
          </div>
          <form className='flex gap-2'>
            <input
              type="email"
              placeholder='Your email'
              className='w-[200px] md:w-[300px] px-5 py-2 border border-[#ccc] rounded-md'
            />
            <button type='submit' className='px-4 py-2 bg-[#029FAE] text-white rounded-md'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Mini Footer */}
      <div className='flex justify-between items-center h-[75px] bg-[#E1E3E5] border-t border-[#ccc] p-4 md:px-20'>
        <div className='font-[poppins] text-[14px] text-[#9A9CAA]'>
          @ 2021 - Blogy - Designed & Developed by Zakirsoft
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src="/Group 13.png"
            alt='/Group 13.png'
            width={300}
            height={75}
          />
        </div>
      </div>
    </main>
  );
};

export default Footer;
