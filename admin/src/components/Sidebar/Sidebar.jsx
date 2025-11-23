import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router";
import { IoIosLogOut } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBagShopping } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { FaCirclePlus } from "react-icons/fa6";
import { MdViewList } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  return (
    <>
      <div className="sidebar fixed top-5 left-0 -z-10 bg-white w-[21%] h-full">
        <div className="navigations mt-4">
          <Link to={"/"}>
            <div className="adminProfile py-7 mb-3 border-b border-gray-300 flex items-center justify-center">
              <div className="profile pr-5 border-r border-[#ff5252]">
                <FaUserCircle className="text-[70px] text-[#ff5252]"></FaUserCircle>
              </div>
              <div className="data pl-5 flex flex-col justify-start">
                <span className="font-bold text-[16px] mb-2">
                  Mohammed Shafeek. A
                </span>
                <h1 className="font-black bg-[#ffdede] flex items-center justify-center py-1 rounded-sm text-[14px] primary">
                  PRIMARY ADMIN
                </h1>
              </div>
            </div>
          </Link>
          <ul className="list-none myAccountTabs">
            <li className="w-full py-1">
              <NavLink to={"/dashboard"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <BiSolidDashboard className="text-[20px] mr-2"></BiSolidDashboard>
                  <span>Dashboard</span>
                </Button>
              </NavLink>
            </li>
            <li className="w-full py-1">
              <NavLink exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(0)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <FaImages className="text-[20px] mr-2"></FaImages>
                  <span>Home Slides</span>
                  {submenuIndex === 0 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 0 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Link to={"/home-slides"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <MdViewList className="text-[20px] mr-0"></MdViewList>
                          <span>Home Sliders List</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link to={"/home-slides/new"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                          <span>Add Home Banner Slides</span>
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/users"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaUsers className="text-[20px] mr-2"></FaUsers>
                  <span>Users</span>
                </Button>
              </NavLink>
            </li>
            <li className="w-full py-1">
              <NavLink exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(1)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <FaProductHunt className="text-[20px] mr-2"></FaProductHunt>
                  <span>Products</span>
                  {submenuIndex === 1 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 1 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Link to={"/products"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <MdViewList className="text-[20px] mr-0"></MdViewList>
                          <span>Products List</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link to={"/products/new"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                          <span>Add New Product</span>
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(2)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <TbCategoryFilled className="text-[22px] mr-1.5"></TbCategoryFilled>
                  <span>Category</span>
                  {submenuIndex === 2 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 2 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Link to={"/categories"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <MdViewList className="text-[20px] mr-0"></MdViewList>
                          <span>Category List</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link to={"/categories/new"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                          <span>Add New Category</span>
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink exact={"true"} activeclassname="isActive">
                <Button
                  onClick={() => isOpenSubmenu(3)}
                  className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300"
                >
                  <TbCategoryFilled className="text-[22px] mr-1.5"></TbCategoryFilled>
                  <span>Sub-Category</span>
                  {submenuIndex === 3 ? (
                    <FaAngleUp className="ml-auto"></FaAngleUp>
                  ) : (
                    <FaAngleDown className="ml-auto"></FaAngleDown>
                  )}
                </Button>
              </NavLink>
              <Collapse isOpened={submenuIndex === 3 ? true : false}>
                <div>
                  <ul className="w-full">
                    <li className="pt-1">
                      <Link to={"/sub-categories"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <MdViewList className="text-[20px] mr-0"></MdViewList>
                          <span>Sub-Category List</span>
                        </Button>
                      </Link>
                    </li>
                    <li className="pt-1">
                      <Link to={"/sub-categories/new"}>
                        <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !pl-19 !text-[14px] !font-[400] transition-all duration-300">
                          <FaCirclePlus className="text-[18px] mr-0.5"></FaCirclePlus>
                          <span>Add New Sub-Category</span>
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Collapse>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/orders"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <FaBagShopping className="text-[20px] mr-2"></FaBagShopping>
                  <span>Orders</span>
                </Button>
              </NavLink>
            </li>
            <li className="w-full py-1">
              <NavLink to={"/logout"} exact={"true"} activeclassname="isActive">
                <Button className="w-full !link !py-1 !transition-all !duration-300 !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                  <IoIosLogOut className="text-[22px] mr-2"></IoIosLogOut>
                  <span>Logout</span>
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
