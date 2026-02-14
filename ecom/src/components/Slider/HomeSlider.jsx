import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import { MyContext } from "../../App";

const HomeSlider = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="homeSlider py-5">
        <div className="container">
          <Swiper
            loop={true}
            navigation={true}
            effect={"fade"}
            modules={[EffectFade, Autoplay, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="sliderHome"
          >
            {context.sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="item rounded-[20px] overflow-hidden">
                  <img src={item.image[0]} alt="" className="w-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
