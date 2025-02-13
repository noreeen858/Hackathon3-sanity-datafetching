import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] flex justify-between items-center h-[67px] shadow-sm sticky top-0 z-10 px-4 sm:px-10'>
      {/* Navigation Links */}
      <ul className='flex justify-between items-center gap-6 sm:gap-8 w-full sm:w-auto'>
        <li>
          <Link href="/" className='text-[#636270] hover:text-[#029FAE]'>Home</Link>
        </li>
        <li>
          <Link href="/shope" className='text-[#636270] hover:text-[#029FAE]'>Shop</Link>
        </li>
        <li>
          <Link href="/product-page" className='text-[#636270] hover:text-[#029FAE]'>Product Page</Link>
        </li>
        <li>
          <Link href="/page" className='text-[#636270] hover:text-[#029FAE]'>Page</Link>
        </li>
        <li>
          <Link href="/about" className='text-[#636270] hover:text-[#029FAE]'>About</Link>
        </li>
      </ul>

      {/* Contact Information */}
      <div className='flex items-center text-[14px] text-[#636270] sm:text-[#636270]'>
        <p className='hidden sm:flex'>Contact: (0998) 55-6688</p>
      </div>
    </div>
  );
};

export default Header;
