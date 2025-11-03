import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = (props) => {
  return (
    <div className="productSlider py-5">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="CatSlider"
      >
        <SwiperSlide>
            <ProductItem></ProductItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
