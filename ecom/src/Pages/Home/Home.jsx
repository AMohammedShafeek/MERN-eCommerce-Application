import React, { useState } from "react";
import HomeSlider from "../../components/Slider/HomeSlider";
import HomeCatSlider from "../../components/CatSlider/HomeCatSlider";
import { TbTruckDelivery } from "react-icons/tb";
import AdsSlider from "../../components/AdsSlider/AdsSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BlogItem from "../../components/BlogItem/BlogItem";
import "../Home/Home.css";

const Home = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider></HomeSlider>
      <HomeCatSlider></HomeCatSlider>

      <section className="bg-white pt-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSection w-[30%]">
              <h2 className="text-[20px] font-medium">Popular Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offers until the end of the Season.
              </p>
            </div>
            <div className="rightSection w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab className="!text-[16px] !font-bold" label="Casuals" />
                <Tab className="!text-[16px] !font-bold" label="Denims" />
                <Tab className="!text-[16px] !font-bold" label="Cargos" />
                <Tab className="!text-[16px] !font-bold" label="Floral" />
                <Tab className="!text-[16px] !font-bold" label="Jacfort" />
                <Tab className="!text-[16px] !font-bold" label="Falls" />
                <Tab className="!text-[16px] !font-bold" label="Crop Tops" />
                <Tab className="!text-[16px] !font-bold" label="Crop" />
                <Tab className="!text-[16px] !font-bold" label="Bells" />
                <Tab className="!text-[16px] !font-bold" label="Shorts" />
                <Tab className="!text-[16px] !font-bold" label="Tracks" />
                <Tab className="!text-[16px] !font-bold" label="Jaquers" />
                <Tab className="!text-[16px] !font-bold" label="Formals" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={6}></ProductSlider>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="FreeShipping w-full py-2 mb-5 p-8 border flex items-center justify-between rounded-xl">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]"></TbTruckDelivery>
              <span className="text-[25px] font-[600]">FREE SHIPPING</span>
            </div>
            <div className="col2 flex items-center gap-4">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over 399/-
              </p>
            </div>
            <div className="col3 flex items-center gap-4">
              <p className="text-[30px] font-bold">ONLY 399/-</p>
            </div>
          </div>

          <AdsSlider items={4}></AdsSlider>
        </div>
      </section>

      <section className="bg-body pt-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSection">
              <h2 className="text-[20px] font-medium">Latest Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offers until the end of the Season.
              </p>
            </div>
          </div>
          <ProductSlider items={6}></ProductSlider>
          <AdsSlider items={4}></AdsSlider>
        </div>
      </section>

      <section className="bg-white pt-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSection">
              <h2 className="text-[20px] font-medium">Featured Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offers until the end of the Season.
              </p>
            </div>
          </div>
          <ProductSlider items={6}></ProductSlider>
          <AdsSlider items={4}></AdsSlider>
        </div>
      </section>

      <section className="blogSection pt-6 py-5 bg-body">
        <div className="container shadow-gray-500">
          <h2 className="text-[20px] font-medium">From the Blog</h2>
          <p className="text-[14px] font-[500] mb-8">
            Do not miss the current Updates and get Magical Coupon Codes.
          </p>
          <Swiper
            slidesPerView={4}
            spaceBetween={60}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem></BlogItem>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem></BlogItem>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem></BlogItem>
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem></BlogItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  );
};

export default Home;