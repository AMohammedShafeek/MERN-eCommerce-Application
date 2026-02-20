import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = (props) => {

  return (
    <div className="productSlider py-5 pt-10">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="CatSlider"
      >
        {props?.productData?.length > 0 ? (
          props.productData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductItem product={item}></ProductItem>
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full flex items-center justify-center mb-10">
            <h1 className="font-bold text-white bg-[#ff5252] px-6 py-2 rounded-full">Proucts Not Found</h1>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
