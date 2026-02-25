import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox/BannerBox";
import { useContext } from "react";
import { MyContext } from "../../App";

const AdsSlider = (probs) => {
  const context = useContext(MyContext);
  
  return (
    <div className="py-8 w-full">
      <Swiper
        slidesPerView={probs.items}
        spaceBetween={20}
        modules={[Autoplay, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className="CatSlider"
      >
        {context?.bannerData?.length > 0 &&
          context.bannerData.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerBox banner={item}></BannerBox>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default AdsSlider;
