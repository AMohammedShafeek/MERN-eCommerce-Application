import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { MdZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../../App";

const ProductItem = ({ product }) => {
  const context = useContext(MyContext);

  return (
    <div className="productItem bg-white pt-3 group overflow-hidden rounded-lg transition-all duration-300 flex items-center pb-3 border-b-1 border-gray-300">
      <div className="group/img imgWraapper w-[25%] relative">
        <Link to={`/productDetail/${product._id}`}>
          <div className="img h-[200px] overflow-hidden bg-gray-100">
            <img
              src={product.images[0]}
              alt=""
              className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
            />
            <img
              src={product.images[1]}
              alt=""
              className="w-full h-full absolute top-0 left-0 object-contain opacity-0 group-hover/img:opacity-100 transition-all duration-300"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[0px] left-[10px] z-50 bg-primary text-white rounded-md p-2 text-[12px] font-[500]">
          {product.discount}%
        </span>
        <div className="actions absolute top-[50px] right-[290px] z-50 flex items-center gap-3 flex-col w-[80px] group-hover:right-[245px] transition-all duration-300">
          <Tooltip title="Like" placement="left">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#7b7b7b] hover:!bg-[#ff5252] hover:!text-white">
              <FaRegHeart className="text-[18px] pt-[0.3px] transition-all duration-300"></FaRegHeart>
            </Button>
          </Tooltip>
          <Tooltip title="Compare" placement="left">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#7b7b7b] hover:!bg-[#ff5252] hover:!text-white">
              <FaCodeCompare className="text-[18px] pt-[0.3px] transition-all duration-300"></FaCodeCompare>
            </Button>
          </Tooltip>
          <Tooltip title="Details" placement="left">
            <Button
              className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#7b7b7b] hover:!bg-[#ff5252] hover:!text-white"
              onClick={() => context.setOpenProductDetailDialog(true)}
            >
              <MdZoomOutMap className="text-[18px] pt-[0.3px] transition-all duration-300"></MdZoomOutMap>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3 w-[75%]">
        <h6 className="transition-all duration-300 text-left text-[15px] text-[#5e5e5e] pl-1.5">
          {product.brand}
        </h6>
        <h3 className="transition-all duration-300 text-[18px] mt-2 my-2 pl-1.5 font-medium group-hover:text-[#ff5252]">
          {product.name}
        </h3>
        <p className="text-[14px] mb-3 pl-2">{product.description}</p>
        <div className="flex items-center gap-3 pl-1.5 mb-1.5">
          <span className="oldPrice font-[500] line-through pt-1">
            ₹{product.oldPrice}
          </span>
          <span className="oldPrice text-[21px] font-medium text-[#ff5252]">
            ₹{product.price}
          </span>
        </div>
        <div className="rating flex pb-3 px-1 gap-3">
          <Rating name="size-small" defaultValue={product.rating} size="medium" readOnly />
          <h6 className="text-[14px] primary pt-0.5">(0+rating)</h6>
        </div>
        <Link>
          <div className="flex items-center gap-3 pl-1.5 p-1">
            <div className="w-[22%] group/cart bg-[#ff5252] hover:bg-black transition-all duration-300 flex items-center rounded-md justify-center">
              <span className="oldPrice py-1.5 text-[18px] font-medium text-white flex items-center gap-3">
                <IoCartOutline className="text-[25px]"></IoCartOutline>ADD TO
                CART
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
