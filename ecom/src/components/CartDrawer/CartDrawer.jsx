import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  return (
    <>
      <div className="scroll w-full max-h-[500px] overflow-y-scroll overflow-x-hidden px-4">
        <div className="cartItem w-full items-center flex gap-3 border-b border-gray-300 py-3">
          <div className="img w-[25%] overflow-hidden h-[140px] rounded-md">
            <Link to={"/productDetail/1"} className="group">
              <img
                src="../src/assets/Products/p1-2.jpg"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="info w-[75%] ml-1 relative">
            <Link to={"/productDetail/1"}>
              <h4 className="text-[16px] font-[500] link transition-all duration-300">
                TAGDO Gray Shirt | Casual Shirt
              </h4>
            </Link>
            <div className="flex flex-col my-1">
              <span className="text-gray-500 text-[14px] mb-2">
                Brands :
                <span className="font-[600] text-black text-[14px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="relative rating flex items-center left-[-3px]">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <p className="flex items-center text-[16px] text-gray-500 gap-4 my-1">
              <span>
                Qty : <span>1</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price : $399</span>
            </p>
            <span className="text-green-600 items-center bg-green-200 px-2 pb-0.5 text-[14px] mb-2 rounded-sm font-[600]">
              Available
            </span>
            <MdDeleteForever className="absolute top-[0px] right-[-6px] cursor-pointer text-[25px] link transition-all duration-300"></MdDeleteForever>
          </div>
        </div>
        <div className="cartItem w-full items-center flex gap-3 border-b border-gray-300 py-3">
          <div className="img w-[25%] overflow-hidden h-[140px] rounded-md">
            <Link to={"/productDetail/1"} className="group">
              <img
                src="../src/assets/Products/p1-2.jpg"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="info w-[75%] ml-1 relative">
            <Link to={"/productDetail/1"}>
              <h4 className="text-[16px] font-[500] link transition-all duration-300">
                TAGDO Gray Shirt | Casual Shirt
              </h4>
            </Link>
            <div className="flex flex-col my-1">
              <span className="text-gray-500 text-[14px] mb-2">
                Brands :
                <span className="font-[600] text-black text-[14px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="relative rating flex items-center left-[-3px]">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <p className="flex items-center text-[16px] text-gray-500 gap-4 my-1">
              <span>
                Qty : <span>1</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price : $399</span>
            </p>
            <span className="text-green-600 items-center bg-green-200 px-2 pb-0.5 text-[14px] mb-2 rounded-sm font-[600]">
              Available
            </span>
            <MdDeleteForever className="absolute top-[0px] right-[-6px] cursor-pointer text-[25px] link transition-all duration-300"></MdDeleteForever>
          </div>
        </div>
        <div className="cartItem w-full items-center flex gap-3 border-b border-gray-300 py-3">
          <div className="img w-[25%] overflow-hidden h-[140px] rounded-md">
            <Link to={"/productDetail/1"} className="group">
              <img
                src="../src/assets/Products/p1-2.jpg"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="info w-[75%] ml-1 relative">
            <Link to={"/productDetail/1"}>
              <h4 className="text-[16px] font-[500] link transition-all duration-300">
                TAGDO Gray Shirt | Casual Shirt
              </h4>
            </Link>
            <div className="flex flex-col my-1">
              <span className="text-gray-500 text-[14px] mb-2">
                Brands :
                <span className="font-[600] text-black text-[14px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="relative rating flex items-center left-[-3px]">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <p className="flex items-center text-[16px] text-gray-500 gap-4 my-1">
              <span>
                Qty : <span>1</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price : $399</span>
            </p>
            <span className="text-green-600 items-center bg-green-200 px-2 pb-0.5 text-[14px] mb-2 rounded-sm font-[600]">
              Available
            </span>
            <MdDeleteForever className="absolute top-[0px] right-[-6px] cursor-pointer text-[25px] link transition-all duration-300"></MdDeleteForever>
          </div>
        </div>
        <div className="cartItem w-full items-center flex gap-3 border-b border-gray-300 py-3">
          <div className="img w-[25%] overflow-hidden h-[140px] rounded-md">
            <Link to={"/productDetail/1"} className="group">
              <img
                src="../src/assets/Products/p1-2.jpg"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="info w-[75%] ml-1 relative">
            <Link to={"/productDetail/1"}>
              <h4 className="text-[16px] font-[500] link transition-all duration-300">
                TAGDO Gray Shirt | Casual Shirt
              </h4>
            </Link>
            <div className="flex flex-col my-1">
              <span className="text-gray-500 text-[14px] mb-2">
                Brands :
                <span className="font-[600] text-black text-[14px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="relative rating flex items-center left-[-3px]">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <p className="flex items-center text-[16px] text-gray-500 gap-4 my-1">
              <span>
                Qty : <span>1</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price : $399</span>
            </p>
            <span className="text-green-600 items-center bg-green-200 px-2 pb-0.5 text-[14px] mb-2 rounded-sm font-[600]">
              Available
            </span>
            <MdDeleteForever className="absolute top-[0px] right-[-6px] cursor-pointer text-[25px] link transition-all duration-300"></MdDeleteForever>
          </div>
        </div>
        <div className="cartItem w-full items-center flex gap-3 border-b border-gray-300 py-3">
          <div className="img w-[25%] overflow-hidden h-[140px] rounded-md">
            <Link to={"/productDetail/1"} className="group">
              <img
                src="../src/assets/Products/p1-2.jpg"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="info w-[75%] ml-1 relative">
            <Link to={"/productDetail/1"}>
              <h4 className="text-[16px] font-[500] link transition-all duration-300">
                TAGDO Gray Shirt | Casual Shirt
              </h4>
            </Link>
            <div className="flex flex-col my-1">
              <span className="text-gray-500 text-[14px] mb-2">
                Brands :
                <span className="font-[600] text-black text-[14px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="relative rating flex items-center left-[-3px]">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <p className="flex items-center text-[16px] text-gray-500 gap-4 my-1">
              <span>
                Qty : <span>1</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price : $399</span>
            </p>
            <span className="text-green-600 items-center bg-green-200 px-2 pb-0.5 text-[14px] mb-2 rounded-sm font-[600]">
              Available
            </span>
            <MdDeleteForever className="absolute top-[0px] right-[-6px] cursor-pointer text-[25px] link transition-all duration-300"></MdDeleteForever>
          </div>
        </div>
        <div className="cartItem w-full items-center flex gap-3 border-b border-gray-300 py-3">
          <div className="img w-[25%] overflow-hidden h-[140px] rounded-md">
            <Link to={"/productDetail/1"} className="group">
              <img
                src="../src/assets/Products/p1-2.jpg"
                className="group-hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
          <div className="info w-[75%] ml-1 relative">
            <Link to={"/productDetail/1"}>
              <h4 className="text-[16px] font-[500] link transition-all duration-300">
                TAGDO Gray Shirt | Casual Shirt
              </h4>
            </Link>
            <div className="flex flex-col my-1">
              <span className="text-gray-500 text-[14px] mb-2">
                Brands :
                <span className="font-[600] text-black text-[14px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="relative rating flex items-center left-[-3px]">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
                <h6 className="text-[14px] primary pl-3 cursor-pointer">
                  (3+rating)
                </h6>
              </div>
            </div>
            <p className="flex items-center text-[16px] text-gray-500 gap-4 my-1">
              <span>
                Qty : <span>1</span>
              </span>
              <span className="text-[#ff5252] font-bold">Price : $399</span>
            </p>
            <span className="text-green-600 items-center bg-green-200 px-2 pb-0.5 text-[14px] mb-2 rounded-sm font-[600]">
              Available
            </span>
            <MdDeleteForever className="absolute top-[0px] right-[-6px] cursor-pointer text-[25px] link transition-all duration-300"></MdDeleteForever>
          </div>
        </div>
      </div>
      <div className="BottomSec absolute bottom-2 w-full">
        <div className="bottomInfo w-full mt-1.5">
          <div className="charges border-b border-gray-300 pb-4">
            <div className="flex items-center justify-between mx-10 mt-1">
              <span className="text-[16px] font-bold">1 Item</span>
              <span className="text-[16px] font-bold text-[#ff5252]">$399</span>
            </div>
            <div className="flex items-center justify-between mx-10 mt-1">
              <span className="text-[16px] font-bold">Shipping</span>
              <span className="text-[16px] font-bold text-[#ff5252]">$9</span>
            </div>
          </div>
        </div>
        <div className="taxes mt-1.5">
          <div className="charges border-b border-gray-300 pb-4">
            <div className="flex items-center justify-between mx-10 mt-1">
              <span className="text-[16px] font-bold">Total (tax excl.)</span>
              <span className="text-[16px] font-bold text-[#ff5252]">$408</span>
            </div>
            <div className="flex items-center justify-between mx-10 mt-1">
              <span className="text-[16px] font-bold">CGST (2.5%)</span>
              <span className="text-[16px] font-bold text-[#ff5252]">$10</span>
            </div>
            <div className="flex items-center justify-between mx-10 mt-1">
              <span className="text-[16px] font-bold">SGST (2.5%)</span>
              <span className="text-[16px] font-bold text-[#ff5252]">$10</span>
            </div>
          </div>
        </div>
        <div className="totalAmount mt-1.5">
          <div className="charges">
            <div className="flex items-center justify-between mx-10 mt-1">
              <span className="text-[16px] font-bold">Total</span>
              <span className="text-[16px] font-bold text-[#ff5252]">$428</span>
            </div>
          </div>
        </div>
        <div className="button flex items-center justify-between gap-3 mx-3 mt-3">
          <Button className="btn-org !px-15 !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 w-[50%]">
            <Link to={"/cart"}>View Cart</Link>
          </Button>
          <Button className="btn-org !px-15 !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 w-[50%]">
            <Link to={"/checkout"}>Checkout</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
