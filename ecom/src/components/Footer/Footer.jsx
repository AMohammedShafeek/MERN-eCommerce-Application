import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoSync } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="py-6 bg-white">
      <div className="container w-full py-5 mb-5 p-12">
        <div className="flex items-center gap-2 justify-around">
          <div className="col flex flex-col items-center group">
            <LiaShippingFastSolid className="text-[4rem] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1"></LiaShippingFastSolid>
            <h3 className="m-1 text-[18px] font-bold">Free Shipping</h3>
            <span className="text-[14px]">For All Orders Over 399/-.</span>
          </div>
          <div className="col flex flex-col items-center group">
            <IoSync className="text-[4rem] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1"></IoSync>
            <h3 className="m-1 text-[18px] font-bold">30 Days Returns</h3>
            <span className="text-[14px]">For an Exchange Product.</span>
          </div>
          <div className="col flex flex-col items-center group">
            <IoWalletOutline className="text-[4rem] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1"></IoWalletOutline>
            <h3 className="m-1 text-[18px] font-bold">Secured Payment</h3>
            <span className="text-[14px]">Payment Cards Accepted.</span>
          </div>
          <div className="col flex flex-col items-center group">
            <IoGiftOutline className="text-[4rem] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1"></IoGiftOutline>
            <h3 className="m-1 text-[18px] font-bold">Special Gifts</h3>
            <span className="text-[14px]">Our First Product Order.</span>
          </div>
          <div className="col flex flex-col items-center group">
            <BiSupport className="text-[4rem] group-hover:text-[#ff5252] transition-all group-hover:-translate-y-1"></BiSupport>
            <h3 className="m-1 text-[18px] font-bold">Support 24/7</h3>
            <span className="text-[14px]">Contact us Anytime.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
