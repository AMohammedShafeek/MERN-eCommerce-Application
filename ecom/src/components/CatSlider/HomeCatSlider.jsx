import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
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
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat1.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Casuals
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat2.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Denims
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat3.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Cargos
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat4.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Floral
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat5.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Jacfort
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat6.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Falls
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat7.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Crop Tops
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat8.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Crop
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat9.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Bells
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
                <div className="item transition-all duration-300 p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../src/assets/CatSliders/cat10.png"
                    className="w-[80px] transition-all duration-300"
                  />
                  <h3 className="p-2 text-[16px] font-bold link transition-all duration-300">
                    Shorts
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCatSlider;
