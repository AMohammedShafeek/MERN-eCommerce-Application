import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import Nav from "../Navigation/Nav";
import { AiFillNotification } from "react-icons/ai";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);

  return (
    <header className="bg-white">
      {/* NOTIFICATION BAR */}

      <div className="top-stripe py-2 border-t-[1px] border-b-[1px] border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500] pl-2  flex items-center gap-2  text-[#ff5252]">
                <AiFillNotification className="text-[18px]"></AiFillNotification>
                Get up to 50% Off new season styles, limited time Only
              </p>
            </div>
            <div className="col2 flex items-center justify-end mr-7">
              <ul className="flex items-center gap-5">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition-all duration-300"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link font-[500] transition-all duration-300"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER NAVIGATION BAR */}

      <div className="header py-3 border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[8%]">
            <Link to={"/"}>
              <img className="h-12 w-full" src="/logo.png" />
            </Link>
          </div>
          <div className="col2 w-[60%]">
            <Search></Search>
          </div>
          <div className="col3 w-[32%] pl-45 justify-end">
            <ul className="flex items-center gap-3 w-full">
              <li className="list-none">
                <Link
                  to={"/login"}
                  className="link transition-all duration-300 text-[15px] font-[500]"
                >
                  Login
                </Link>
                <Link className="cursor-pointer text-gray-300"> | </Link>
                <Link
                  className="link transition-all duration-300 text-[15px] font-[500]"
                  to={"/register"}
                >
                  Register
                </Link>
              </li>
              <li className="ml-5">
                <Tooltip title="Compare">
                  <IconButton
                    aria-label="cart"
                    className="hover-icon transition-all duration-300"
                  >
                    <StyledBadge badgeContent={4}>
                      <IoGitCompareSharp></IoGitCompareSharp>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip
                  title="Wishlist"
                  className="hover-icon transition-all duration-300"
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4}>
                      <FaHeart></FaHeart>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartDrawer(true)}
                    className="hover-icon transition-all duration-300"
                  >
                    <StyledBadge badgeContent={4}>
                      <FaShoppingCart></FaShoppingCart>
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PRODUCTS NAVIGATION BAR */}

      <Nav></Nav>
    </header>
  );
};

export default Header;
