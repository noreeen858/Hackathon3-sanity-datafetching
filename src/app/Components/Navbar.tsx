import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import Image from 'next/image';

const Navbar = () => {
  return (
    <header>
      {/* Top Banner */}
      <div className="bg-[#272343] text-white flex justify-between items-center h-[45px] px-4 md:px-20 lg:px-[300px]">
        <p className="text-sm">Free shipping on all orders over $50</p>
        <div className="flex items-center gap-4 opacity-70">
          {/* Language Dropdown */}
          <div className="flex items-center gap-1">
            <p className="text-sm">ENG</p>
            <RiArrowDropDownLine className="text-white text-2xl" />
          </div>

          {/* FAQ Section */}
          <div className="flex items-center gap-1">
            <p className="text-sm">FAQ</p>
          </div>

          {/* Help Icon */}
          <FiAlertCircle className="text-white text-xl" />

          {/* Need Help Text */}
          <div className="flex items-center gap-1">
            <p className="text-sm">Need help?</p>
          </div>
        </div>
      </div>

      {/* Middle Navbar (Logo and Cart) */}
      <div className="bg-[#F0F2F3] flex justify-between items-center h-[84px] px-4 md:px-10 lg:px-[50px]">
        <div className="flex items-center">
          {/* Logo */}
          <Image src="/Logo.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Image src="/Cart.png" alt="Cart" width={142} height={44} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
