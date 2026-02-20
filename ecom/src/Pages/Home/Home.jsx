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
import { useContext } from "react";
import { MyContext } from "../../App";
import { getData } from "../../utils/api";
import { useEffect } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  const context = useContext(MyContext);

  const [popularProdData, setPopularProdData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterByCatId = (id) => {
    getData(`/api/product/getByCategoryId/${id}`).then((res) => {
      // console.log("res", res?.data);
      setPopularProdData(res?.data);
    });
  };

  useEffect(() => {
    if (context?.catData?.length > 0) {
      filterByCatId(context.catData[0]._id);
    }
  }, [context.catData]);

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
                {context?.catData?.length > 0 &&
                  context.catData.map((item, index) => (
                    <Tab
                      key={index}
                      className="!text-[16px] !font-bold"
                      label={`${item.name}`}
                      onClick={() => filterByCatId(item?._id)}
                    />
                  ))}
              </Tabs>
            </div>
          </div>
          <ProductSlider
            items={6}
            productData={popularProdData}
          ></ProductSlider>
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
          {/* <ProductSlider items={6}></ProductSlider> */}
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
          {/* <ProductSlider items={6}></ProductSlider> */}
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
