import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Pages/ProductDetail/ProductDetail.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const MainImage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const parentImg = useRef();
  const childImg = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    childImg.current.swiper.slideTo(index);
    parentImg.current.swiper.slideTo(index);
  };

  return (
    <div className="flex gap-3">
      <div className="slider [w-15%] cursor-pointer overflow-hidden">
        <Swiper
          ref={childImg}
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[54.5vh] mt-8 overflow-hidden"
        >
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 mt-13 ${slideIndex===0 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(0)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===1 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(1)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===2 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(2)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===3 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(3)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===4 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(4)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===5 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(5)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===6 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(6)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`item w-[70px] transition-all duration-300 ${slideIndex===7 ? 'opacity-30':'opacity-100'}`} onClick={() => goto(7)}>
              <img src="../src/assets/Products/p1-2.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="parentImage w-[85%] mt-8 overflow-hidden h-[455px] border-2 border-[#ff5252] rounded-[15px]">
        <Swiper
          ref={parentImg}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={false}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/Products/p1-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainImage;
