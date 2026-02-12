import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "@mui/material/Pagination";
import { FaCirclePlus } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import HomeSliderList from "../../components/HomeSliderList/HomeSliderList";
import { MyContext } from "../../App";
import { useEffect } from "react";

const HomeSlides = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    context.homeSliderData();
  }, []);

  return (
    <section className="min-h-dvh">
      {context.isOpenSideBar && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden`}
          onClick={() => context.setIsOpenSideBar(false)}
        />
      )}
      <div className="container lg:flex pt-10">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        ></div>
        <div
          className={`sidebarWrapper my-7 transition-all duration-300 ease-in-out w-full min-h-0
          ${context.isOpenSideBar ? "lg:w-[80%]" : "lg:w-full"}
        `}
        >
          <div className="flex items-center w-full gap-2">
            <div
              onClick={() => {
                navigate("/home-slides-new");
              }}
              className="flex w-[20%] items-center h-[50px] min-h-[50px] add bg-black cursor-pointer gap-2 py-1 justify-center rounded-md"
            >
              <FaCirclePlus className="text-white text-[28px]"></FaCirclePlus>
              <h1 className="hidden md:block text-white text-[18px] font-bold">
                Add Slider
              </h1>
            </div>
            <div className="w-[80%]">
              <Search placeHolder="Search Slider"></Search>
            </div>
          </div>
          <HomeSliderList></HomeSliderList>
          <div className="flex mt-5 mb-10 items-center justify-center">
            <Pagination
              count={10}
              variant="outlined"
              size="small"
              siblingCount={0}
              boundaryCount={1}
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlides;
