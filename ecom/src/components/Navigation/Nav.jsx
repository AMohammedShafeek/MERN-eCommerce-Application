import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaTruckMoving } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaShirt } from "react-icons/fa6";
import { IoHeadset } from "react-icons/io5";
import { MdWatch } from "react-icons/md";
import { RiBrushAiFill, RiMenu2Fill } from "react-icons/ri";
import {
  GiDiamondRing,
  GiHeatHaze,
  GiConverseShoe,
  GiBeachBag,
} from "react-icons/gi";
import DrawerPanel from "../Drawer/DrawerPanel";
import "../Navigation/Nav.css";
import { MyContext } from "../../App";

const Nav = () => {
  const context = useContext(MyContext);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openDrawer = () => {
    setIsOpenDrawer(true);
  };

  return (
    <>
      <nav className="py-2 shadow-md">
        <div className="container flex items-center">
          <div className="col_1 w-[14.5%] border-r-[1px] border-gray-300">
            <Button
              className="link transition-all duration-300 !font-[600] gap-3 w-[90%]"
              onClick={openDrawer}
            >
              <RiMenu2Fill className="text-[21px] pt-0.5"></RiMenu2Fill>
              <p className="mt-0.5 link transition-all duration-300">
                Categories
              </p>
              <LiaAngleDownSolid className="text-[15px] font-bold ml-2 mr-3"></LiaAngleDownSolid>
            </Button>
          </div>
          <div className="col_2 w-[70%] border-r-[1px] border-gray-300">
            <ul className="flex items-center justify-around nav">
              <li className="list-none">
                <Link to={"/"}>
                  <Button className="link transition-all duration-300 !font-[600]">
                    <IoMdHome className="text-[18px] mr-0.5"></IoMdHome>
                    <p className="mt-0.5">Home</p>
                  </Button>
                </Link>
              </li>
              {context.catData.map((catItem, index) => (
                <li key={index} className="list-none relative">
                  <Link to={"/productList"}>
                    <Button className="link transition-all !flex !gap-2 duration-300 !font-[600] !text-center !w-full !items-center">
                      <img
                        src={catItem.thumbnail}
                        alt=""
                        className="w-[20px] object-contain"
                      />
                      <p className="mt-0.5">{catItem.name}</p>
                    </Button>
                  </Link>
                  <div className="submenu absolute top-[100%] left-[0%] min-w-[160px] bg-white shadow-md opacity-0 transition-all duration-400">
                    <ul>
                      {catItem.children.map((subCatItem, index) => (
                        <li key={index} className="list-none w-full">
                          <Link to={"/"}>
                            <Button className="!font-[600] w-full !text-left !justify-start !rounded-none">
                              {subCatItem.name}
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col_3 w-[15.5%] ml-11 justify-end">
            <p className="text-[14px] font-[500] flex items-center gap-3">
              <FaTruckMoving className="text-[20px] mt-0.5"></FaTruckMoving>Free
              Delivery Across India
            </p>
          </div>
        </div>
      </nav>

      {/* DRAWER PANEL */}

      <DrawerPanel
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
      ></DrawerPanel>
    </>
  );
};

export default Nav;
