import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Link, NavLink, useNavigate } from "react-router";
import { IoIosLogOut } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { FaImages, FaTicketAlt, FaTruckMoving, FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import "./Sidebar.css";
import { MyContext } from "../../App";
import { TiThMenu } from "react-icons/ti";
import Slide from "@mui/material/Slide";

const Sidebar = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const openSideBar = () => {
    context.setIsOpenSideBar(!context.isOpenSideBar);
  };

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ||
      location.pathname === "/changePassword" ? null : (
        <>
          <Slide
            direction="right"
            in={context.isOpenSideBar}
            mountOnEnter
            unmountOnExit
            timeout={300}
          >
            <div className="sidebar z-1000 fixed left-0 bg-white sm:w-[70%] md:w-[40%] lg:w-[21%] h-dvh pt-6">
              <div className="flex flex-col h-full navigations -mt-6">
                <div className="sideHeader border-b border-gray-300 py-2.5 bg-black px-5">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-[18px] text-white">
                      MENU BAR
                    </h1>
                    <TiThMenu
                      className="text-[35px] text-black bg-white cursor-pointer p-2 overflow-visible rounded-full"
                      onClick={openSideBar}
                    ></TiThMenu>
                  </div>
                </div>
                <Link to={"/"}>
                  <div className="adminProfile py-7 mb-3 border-b border-gray-300 flex items-center justify-center">
                    <div className="profile pr-5 border-r border-[#ff5252]">
                      {context?.userData?.avatar !== null ? (
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full border-3 border-[#ff5252] cursor-not-allowed">
                          <img
                            className="w-full h-full object-cover"
                            src={context?.userData?.avatar}
                          />
                        </div>
                      ) : (
                        <FaUserCircle className="text-[70px] text-[#ff5252]"></FaUserCircle>
                      )}
                    </div>
                    <div className="data pl-5 flex flex-col justify-start">
                      <span className="font-bold text-[16px] mb-2">
                        {context?.userData?.name}
                      </span>
                      <h1 className="font-black bg-[#ffdede] flex items-center justify-center py-1 px-3 rounded-sm text-[14px] primary">
                        {context?.userData?.role}
                      </h1>
                    </div>
                  </div>
                </Link>
                <ul className="list-none myAccountTabs flex-1 overflow-y-auto">
                  <li className="Dashboard w-full py-1">
                    <NavLink
                      to={"/my-account"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaUser className="text-[20px] mr-2"></FaUser>
                        <span>Admin Profile</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Dashboard w-full py-1">
                    <NavLink
                      to={"/dashboard"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <BiSolidDashboard className="text-[20px] mr-2"></BiSolidDashboard>
                        <span>Dashboard</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="HomeSlides w-full py-1">
                    <NavLink
                      to={"/home-slides"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaImages className="text-[20px] mr-2"></FaImages>
                        <span>Home Slides</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Users w-full py-1">
                    <NavLink
                      to={"/users"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaUsers className="text-[20px] mr-2"></FaUsers>
                        <span>Users</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Products w-full py-1">
                    <NavLink
                      to={"/products-data"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaProductHunt className="text-[20px] mr-2"></FaProductHunt>
                        <span>Products</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Category w-full py-1">
                    <NavLink
                      to={"/categories"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <TbCategoryFilled className="text-[20px] mr-2"></TbCategoryFilled>
                        <span>Categories</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Category w-full py-1">
                    <NavLink
                      to={"/sub-categories"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <TbCategoryFilled className="text-[20px] mr-2"></TbCategoryFilled>
                        <span>Sub-Categories</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Orders w-full py-1">
                    <NavLink
                      to={"/orders"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaBagShopping className="text-[20px] mr-2"></FaBagShopping>
                        <span>Orders</span>
                      </Button>
                    </NavLink>
                  </li>

                  <li className="Orders w-full py-1">
                    <NavLink
                      to={"/tickets"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaTicketAlt className="text-[20px] mr-2"></FaTicketAlt>
                        <span>Tickets</span>
                      </Button>
                    </NavLink>
                  </li>
                  <li className="Orders w-full py-1">
                    <NavLink
                      to={"/track-orders"}
                      exact={"true"}
                      activeclassname="isActive"
                    >
                      <Button
                        onClick={() => {
                          if (context.windowWidth < 1024) {
                            context.setIsOpenSideBar(!context.isOpenSideBar);
                          }
                        }}
                        className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                      >
                        <FaTruckMoving className="text-[20px] mr-2"></FaTruckMoving>
                        <span>Track Orders</span>
                      </Button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Slide>
          {context.isOpenSideBar === false && (
            <div className="fixed z-450 top-0 left-0 lg:left-3 lg:left-0 shadow-[#ff5252]/50 shadow-md rounded-full mt-2 mx-2">
              <TiThMenu
                className="text-[35px] text-black bg-white cursor-pointer p-2 overflow-visible rounded-full"
                onClick={openSideBar}
              ></TiThMenu>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
