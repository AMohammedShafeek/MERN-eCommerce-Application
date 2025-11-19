import React from "react";
import Button from "@mui/material/Button";
import { FaHeart, FaPen, FaTruckMoving, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoBag } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const AccountSideBar = () => {
  return (
    <div className="col1 w-[20%] mt-5">
      <div className="card bg-white shadow-md rounded-md py-5 px-2 sticky top-[50px]">
        <div className="w-full p-3 flex items-center justify-center border-b border-gray-300 mb-3 flex-col">
          <div className="edit relative">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-[#ff5252]">
              <img
                src="../../../src/assets/Users/shafeek77.png"
                alt=""
                className="w-full h-full object-cover scale-170"
              />
            </div>
            <div className="overlayEdit absolute w-[100%] h-[100%] top-7 left-9 z-50 flex items-center justify-center">
              <FaPen className="text-[20px] w-[35px] border-3 border-[#ff5252] min-w-[35px] h-[35px] p-2 rounded-full overflow-visible text-[#ff5252] bg-white"></FaPen>
              <input
                type="file"
                className="absolute top-8 left-8  w-[35px] min-w-[35px] h-[35px] opacity-0"
              />
            </div>
          </div>
          <div className="info flex flex-col items-center my-2">
            <h3 className="text-[18px] font-[500]">Mohammed Shafeek. A</h3>
            <h3 className="text-[14px] font-[500] text-gray-500">@shafeek77</h3>
          </div>
        </div>

        <ul className="list-none py-5 myAccountTabs">
          <li className="w-full py-1">
            <NavLink to={"/my-account"} exact={'true'} activeclassname="isActive">
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaUser className="text-[16px]"></FaUser>User Profile
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink to={"/wishlist"} exact={'true'} activeclassname="isActive">
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaHeart className="text-[16px]"></FaHeart>My Wishlist
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink to={"/my-orders"} exact={'true'} activeclassname="isActive">
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <IoBag className="text-[16px]"></IoBag>My Orders
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink
              to={"/track-orders"}
              exact={'true'}
              activeclassname="isActive"
            >
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaTruckMoving className="text-[16px]"></FaTruckMoving>
                Track Orders
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink to={"/logout"} exact={'true'} activeclassname="isActive">
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <IoIosLogOut className="text-[16px]"></IoIosLogOut>Logout
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountSideBar;
