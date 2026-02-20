import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Pages/ProductDetail/ProductDetail.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getData } from "../../utils/api";

const MainImage = ({ product }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const parentImg = useRef();
  const childImg = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    childImg.current?.swiper.slideTo(index);
    parentImg.current?.swiper.slideTo(index);
  };

  return (
    <div className="flex gap-3">
      <div className="slider [w-15%] cursor-pointer overflow-hidden">
        <Swiper
          ref={childImg}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[60vh] !pt-5"
        >
          {product?.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`item w-[70px] transition-all duration-300 rounded-none border-b-1 border-[#ff5252] ${
                  slideIndex === index ? "opacity-30" : "opacity-100"
                }`}
                onClick={() => goto(index)}
              >
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-contain my-5"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="parentImage w-[85%] bg-gray-100 overflow-hidden border-2 border-[#ff5252] rounded-[15px]">
        <Swiper
          ref={parentImg}
          slidesPerView={1}
          spaceBetween={0}
          effect={"fade"}
          // pagination={{
          //   dynamicBullets: true,
          // }}
          navigation={false}
          modules={[EffectFade]}
        >
          {product?.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex items-center justify-center">
                <img
                  src={item}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainImage;
