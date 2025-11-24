import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "./DashboardBox.css";
import { IoBag } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import Divider from "@mui/material/Divider";

const DashboardBox = () => {
  return (
    <div className=" overflow-hidden ">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="dashSlider"
      >
        <SwiperSlide>
          <div className="group flex flex-col w-full p-3 px-5 shadow shadow-lg rounded-md transition-all duration-300 bg-white">
            <div className="flex items-center pb-3 mb-3 justify-between border-b border-gray-300">
              <div>
                <h3 className="text-[14px] text-black font-bold transition-all duration-300">
                  New Orders
                </h3>
                <h3 className="text-[25px] primary font-bold transition-all duration-300">
                  426
                </h3>
              </div>
              <div>
                <IoBag className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:scale-110"></IoBag>
              </div>
            </div>
            <div>
              <h3 className="text-[14px] text-black font-bold transition-all duration-300">
                <span className="text-green-600 mr-1.5">+32.40%</span>Increased
                Last Month
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group flex flex-col w-full p-3 px-5 shadow shadow-lg rounded-md transition-all duration-300 bg-white">
            <div className="flex items-center pb-3 mb-3 justify-between border-b border-gray-300">
              <div>
                <h3 className="text-[14px] text-black font-bold transition-all duration-300">
                  Sales
                </h3>
                <h3 className="text-[25px] primary font-bold transition-all duration-300">
                  ₹3,50,425
                </h3>
              </div>
              <div>
                <RiMoneyRupeeCircleFill className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:scale-110"></RiMoneyRupeeCircleFill>
              </div>
            </div>
            <div>
              <h3 className="text-[14px] text-black font-bold transition-all duration-300">
                <span className="text-green-600 mr-1.5">+32.40%</span>Increased
                Last Month
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group flex flex-col w-full p-3 px-5 shadow shadow-lg rounded-md transition-all duration-300 bg-white">
            <div className="flex items-center pb-3 mb-3 justify-between border-b border-gray-300">
              <div>
                <h3 className="text-[14px] text-black font-bold transition-all duration-300">
                  Revenue
                </h3>
                <h3 className="text-[25px] primary font-bold transition-all duration-300">
                  ₹70,542
                </h3>
              </div>
              <div>
                <BsBank2 className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:scale-110"></BsBank2>
              </div>
            </div>
            <div>
              <h3 className="text-[14px] text-black font-bold transition-all duration-300">
                <span className="text-green-600 mr-1.5">+32.40%</span>Increased
                Last Month
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DashboardBox;
