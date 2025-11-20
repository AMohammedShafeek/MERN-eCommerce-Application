import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import { IoCartOutline } from "react-icons/io5";

const WishlistItems = (props) => {
  return (
    <div className="cartItem w-full flex items-center gap-4 pb-4 mb-3 border-b border-gray-300">
      <div className="img w-[12%] rounded-md overflow-hidden">
        <Link to={"/productDetail/1"} className="group">
          <img
            src="../src/assets/Products/p2.jpg"
            alt=""
            className="w-full group-hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="info w-[88%] relative ml-5">
        <span className="text-[12px] font-[500] px-2 cursor-pointer absolute top-5 right-10 transition-all duration-300 bg-[#ff5252] text-white p-1 rounded-sm hover:bg-black">
          REMOVE
        </span>
        <span className="text-[13px] font-[500]">TAGDO</span>
        <h3 className="text-[18px] font-[500] mb-1">
          TAGDO Gray Shirt | Casual Shirt
        </h3>
        <div className="rating flex pb-1 items-center gap-2">
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
          <h6 className="text-[14px] primary mb-0.5">(3+rating)</h6>
        </div>
        <div className="flex gap-2">
          <span className="line-through text-[18px] font-[500] text-gray-500">
            $899
          </span>
          <span className="text-[#ff5252] text-[18px] font-bold">$399</span>
          <span className="text-green-600 bg-green-200 px-2 text-[16px] py-[1px] font-bold rounded-sm">
            55% DISCOUNT
          </span>
        </div>
        <div className="group/price cursor-pointer flex items-center w-[23%] gap-3 p-1 mt-3 bg-[#ff5252] hover:bg-black rounded-md justify-center transition-all duration-300">
          <span className="oldPrice text-[16px] py-1 font-bold text-white group-hover/price:text-white flex items-center gap-3">
            <IoCartOutline className="text-[25px]"></IoCartOutline>ADD TO CART
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishlistItems;
