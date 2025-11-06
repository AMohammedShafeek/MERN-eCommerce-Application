import React from "react";
import { Link} from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem bg-white pt-3 group overflow-hidden rounded-lg transition-all duration-300">
      <div className="group/img imgWraapper w-[100%] relative">
        <Link to={"/"}>
          <div className="img h-[200px] overflow-hidden">
            <img
              src="../src/assets/Products/p1.jpg"
              alt=""
              className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
            />
            <img
              src="../src/assets/Products/p1-2.jpg"
              alt=""
              className="w-full h-full absolute top-0 left-0 object-contain opacity-0 group-hover/img:opacity-100 transition-all duration-300"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[0px] left-[10px] z-50 bg-primary text-white rounded-md p-2 text-[12px] font-[500]">
          10%
        </span>
        <div className="actions absolute top-[0px] right-[-50px] z-50 flex items-center gap-3 flex-col w-[80px] group-hover:right-[-12px] transition-all duration-300">
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
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-[#7b7b7b] hover:!bg-[#ff5252] hover:!text-white">
              <MdZoomOutMap className="text-[18px] pt-[0.3px] transition-all duration-300"></MdZoomOutMap>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3">
        <h6 className="transition-all duration-300 text-[14px] text-[#5e5e5e] pl-1.5">
          Men's Regular Fit Casual
        </h6>
        <h3 className="transition-all duration-300 text-[16px] mt-2 my-2 pl-1.5 font-medium group-hover:text-[#ff5252]">
          TAGDO Gray Shirt | Casual Shirt
        </h3>
        <div className="rating flex pb-3 justify-between">
          <Rating name="size-small" defaultValue={2} size="medium" readOnly />
          <h6 className="text-[14px] primary pr-1.5">(3+rating)</h6>
        </div>
        <Link>
          <div className="group/price flex items-center gap-3 pl-1.5 p-1 bg-white border-1 border-[#ff5252] hover:bg-[#ff5252] rounded-md justify-center transition-all duration-300">
            <span className="oldPrice text-[#ff5252] font-[500] line-through pt-1.5 group-hover/price:text-white">
              $899
            </span>
            <span className="oldPrice text-[25px] font-medium text-[#ff5252] group-hover/price:text-white">
              $399
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
