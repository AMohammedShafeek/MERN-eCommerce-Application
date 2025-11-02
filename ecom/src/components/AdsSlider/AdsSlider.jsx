import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox/BannerBox";

const AdsSlider = (probs) => {
  return (
    <div className="py-5 w-full">
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
        <SwiperSlide>
          <BannerBox
            img={"../src/assets/Banners/Ad1.jpg"}
            title={"MOBILES"}
            offer={"27%"}
            link={"/"}
          ></BannerBox>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"../src/assets/Banners/Ad2.jpg"}
            title={"FURNITURES"}
            offer={"15%"}
            link={"/"}
          ></BannerBox>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"../src/assets/Banners/Ad3.jpg"}
            title={"ELECTRONICS"}
            offer={"45%"}
            link={"/"}
          ></BannerBox>
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={"../src/assets/Banners/Ad1.jpg"}
            title={"MOBILES"}
            offer={"27%"}
            link={"/"}
          ></BannerBox>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsSlider;
