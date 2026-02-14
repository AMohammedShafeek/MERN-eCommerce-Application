import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "../CatSlider/HomeCatSlider.css";
import { MyContext } from "../../App";

const HomeCatSlider = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="HomeCatSlider py-5">
        <div className="container">
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="CatSlider"
          >
            {context.catData.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={"/"}>
                  <div className="item transition-all duration-300 p-3 bg-white text-center flex items-center justify-center flex-col">
                    <img
                      src={item.thumbnail}
                      className="w-[80px] h-[100px] object-contain transition-all duration-300"
                    />
                    <h3 className="p-2 text-[16px] font-[500] link transition-all duration-300">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCatSlider;
