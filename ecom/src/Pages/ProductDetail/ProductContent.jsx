import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import "../ProductDetail/ProductDetail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "../../utils/api";

const ProductContent = ({ product }) => {
  const [productActionIndex, setProuctActionIndex] = useState(null);

  return (
    <div className="ml-5 productContent flex flex-col items-start justify-center">
      <h1 className="text-[25px] font-[600]">{product?.name}</h1>
      <div className="flex items-center gap-3 my-1">
        <span className="text-gray-500 text-[14px]">
          Brands :{" "}
          <span className="font-[600] text-black text-[16px]">
            {product?.brand}
          </span>
        </span>
        <div className="rating flex items-center justify-between">
          <Rating
            name="size-small"
            defaultValue={product?.rating}
            size="small"
            readOnly
          />
          <h6 className="text-[14px] primary pl-3 cursor-pointer">
            ({product?.ratingCount || 0}+rating)
          </h6>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-2 my-3">
        <span className="oldPrice text-[20px] font-[400] line-through">
          ₹{product?.oldPrice}
        </span>
        <span className="oldPrice text-[21px] font-[700] text-[#ff5252]">
          ₹{product?.price}
        </span>
      </div>
      <div className="flex items-center stock gap-2 mb-3">
        <span className=" text-[14px] font-[500]">Available In Stock :</span>
        <span className="font-bold text-green-600 text-[14px] bg-green-200 px-2 py-1 rounded-md">
          {product?.stock} Items
        </span>
      </div>
      <p className="text-[13px] text-gray-500 text-justify mb-5">
        {product?.description}
      </p>
      <div className="flex items-center">
        <span className="font-[600] text-black text-[14px] mr-2">Size :</span>
        <div className="actions flex items-center gap-1.5">
          {product?.size.length > 0 &&
            product?.size.map((item, index) => (
              <Button
                key={index}
                className={`${
                  productActionIndex === index
                    ? "!bg-[#ff5252] !text-white"
                    : "!bg-white !text-[#ff5252]"
                } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                onClick={() => {
                  setProuctActionIndex(index);
                }}
              >
                {item}
              </Button>
            ))}
        </div>
      </div>
      <p className="text-[13px] text-gray-500 my-5">
        Free Shipping (Est. Delivery Time 2-3 Days.)
      </p>
      <div className="flex items-center gap-1.5 mb-5">
        <div className="QtyBoxWrapper">
          <QtyBox></QtyBox>
        </div>
        <Button className="btn-org !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
          <MdOutlineShoppingCart className="mx-1 text-[20px]"></MdOutlineShoppingCart>
          Add to Cart
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <span className="flex items-center gap-2 text-gray-600 font-[500] link cursor-pointer transition-all duration-300 text-[16px]">
          <FaRegHeart></FaRegHeart>Add to Wishlist
        </span>
        <span className="flex items-center gap-2 cursor-default text-gray-500 font-bold">
          |
        </span>
        <span className="flex items-center gap-2 text-gray-600 font-[500] link cursor-pointer transition-all duration-300 text-[16px]">
          <FaCodeCompare></FaCodeCompare>Add to Compare
        </span>
      </div>
    </div>
  );
};

export default ProductContent;
