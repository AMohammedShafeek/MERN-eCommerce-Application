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
  
  <div className="slider cursor-pointer overflow-hidden h-[500px]">
    <Swiper
      ref={childImg}
      direction="vertical"
      slidesPerView={5}
      navigation={true}
      modules={[Navigation]}
      className="h-full"
    >
      {product?.images?.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={`w-[70px] h-[90px] border-b border-[#ff5252] ${
              slideIndex === index ? "opacity-30" : "opacity-100"
            }`}
            onClick={() => goto(index)}
          >
            <img
              src={item}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <div className="parentImage w-[85%] h-[500px] bg-gray-100 overflow-hidden border-2 border-[#ff5252] rounded-[15px]">
    <Swiper
      ref={parentImg}
      slidesPerView={1}
      effect={"fade"}
      modules={[EffectFade]}
      className="h-full"
    >
      {product?.images?.map((item, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={item}
              alt=""
              className="max-h-full max-w-full object-contain"
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
