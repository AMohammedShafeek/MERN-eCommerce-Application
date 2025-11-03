import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductItem = () => {
  return (
    <div className="productItem overflow-hidden border-1 border-[rgba(0,0,0,0.3)]">
      <div className="imgWraapper w-[100%] h-[200px] overflow-hidden">
        <img
          src="../src/assets/Products/p1.jpg"
          alt=""
          className="w-full h-full object-contain "
        />
      </div>
      <div className="info p-3">
        <h6 className="link transition-all text-[14px]">
          <Link to={"/"}>Men's Regular Fit Casual</Link>
        </h6>
        <h3 className="link transition-all text-[16px] mt-2 my-2 font-medium">
          <Link to={"/"}>TAGDO Gray Shirt | Casual Shirt</Link>
        </h3>
        <div className="rating flex justify-between">
          <Rating name="size-small" defaultValue={2} size="medium" readOnly />
          <h6 className="text-[14px] primary">( 3+ Buyers rated )</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
