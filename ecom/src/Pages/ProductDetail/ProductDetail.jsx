import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MainImage from "../../components/MainImage/MainImage";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const ProdductDetail = () => {
  const [productActionIndex, setProuctActionIndex] = useState(null);

  return (
    <>
      <div className="bg-white">
        <div className="w-full bg-body py-4 px-5 rounded-md flex items-center justify-start">
          <Breadcrumbs aria-label="breadcrumb" className="container pl-20">
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              HOME
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              FASHION
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white pb-13">
        <div className="container flex gap-4 py-9">
          <div className="productImage w-[29%]">
            <MainImage></MainImage>
          </div>
          <div className="ml-5 productContent w-[71%] py-7">
            <h1 className="text-[25px] font-[600]">
              TAGDO Gray Shirt | Casual Shirt
            </h1>
            <div className="flex items-center gap-3 my-1">
              <span className="text-gray-500 text-[14px]">
                Brands :{" "}
                <span className="font-[600] text-black text-[16px]">
                  TAGDO Pvt. Ltd
                </span>
              </span>
              <div className="rating flex items-center justify-between">
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
            <div className="flex items-center gap-3 mb-2 my-3">
              <span className="oldPrice text-[20px] font-[400] line-through">
                $899
              </span>
              <span className="oldPrice text-[21px] font-[700] text-[#ff5252]">
                $399
              </span>
            </div>
            <div className="flex items-center stock gap-2 mb-3">
              <span className=" text-[14px] font-[500]">
                Available In Stock :
              </span>
              <span className="font-bold text-green-600 text-[14px] bg-green-200 px-2 py-1 rounded-md">
                57 Items
              </span>
            </div>
            <p className="text-[13px] text-gray-500 text-justify mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              itaque blanditiis asperiores magni ipsa, ratione pariatur
              doloribus excepturi maxime repudiandae delectus corrupti incidunt
              cupiditate architecto modi cum odio, reprehenderit quae impedit
              iure aliquid perspiciatis illum sit? Aspernatur iusto sint laborum
              temporibus omnis quia adipisci repudiandae. Commodi ad ipsum nisi
              autem, amet libero? Voluptatibus similique, sit molestias maxime
              vero laudantium culpa blanditiis totam nostrum exercitationem,
              eaque soluta fugit eligendi rem dolore alias nulla quidem dolores
              excepturi accusamus iste! Illum facilis quae vitae voluptatem
              laboriosam, quod voluptatum eveniet ducimus aliquam a repellat
              repellendus maxime. Sed nulla ducimus quisquam nostrum rerum.
              Cumque, distinctio?
            </p>
            <div className="flex items-center">
              <span className="font-[600] text-black text-[14px] mr-2">
                Size :
              </span>
              <div className="actions flex items-center gap-1.5">
                <Button
                  className={`${
                    productActionIndex === 0
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(0);
                  }}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(1);
                  }}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(2);
                  }}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(3);
                  }}
                >
                  XL
                </Button>
                <Button
                  className={`${
                    productActionIndex === 4
                      ? "!bg-[#ff5252] !text-white"
                      : "!bg-white !text-[#ff5252]"
                  } !border-1 !border-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !font-bold`}
                  onClick={() => {
                    setProuctActionIndex(4);
                  }}
                >
                  XXL
                </Button>
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
        </div>
      </section>
    </>
  );
};

export default ProdductDetail;
