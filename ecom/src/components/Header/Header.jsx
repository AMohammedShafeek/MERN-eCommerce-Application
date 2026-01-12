import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { FaRegUser } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { getData } from "../../utils/api";

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
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    getData(`/api/user/logout?token=${localStorage.getItem("accessToken")}`, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.setIsLogin(false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userEmail");
      }
    });
  };

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ||
      location.pathname === "/changePassword" ? null : (
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
                {context.isLogin === false ? (
                  <ul className="flex items-center justify-end gap-3 w-full pr-6">
                    <li className="list-none border-r pr-5 border-gray-300">
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

                    <li>
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
                ) : (
                  <ul className="flex items-center gap-3 w-full justify-end pr-6">
                    <li className="list-none">
                      <>
                        <div className="profile flex items-center pr-3 border-r border-gray-300">
                          <Link
                            className="link transition-all duration-300 text-[15px] font-[500]"
                            onClick={handleClick}
                          >
                            <div className="user flex items-center gap-2 px-2">
                              <FaRegUser className="text-[22px]"></FaRegUser>
                              <h3 className="text-[16px] font-[600]">
                                {context?.userData?.name}
                              </h3>
                            </div>
                          </Link>
                        </div>
                        <Menu
                          anchorEl={anchorEl}
                          id="account-menu"
                          open={open}
                          onClose={handleClose}
                          onClick={handleClose}
                          slotProps={{
                            paper: {
                              elevation: 0,
                              sx: {
                                overflow: "visible",
                                filter:
                                  "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                "&::before": {
                                  content: '""',
                                  display: "block",
                                  position: "absolute",
                                  top: 0,
                                  right: 14,
                                  width: 10,
                                  height: 10,
                                  bgcolor: "background.paper",
                                  transform: "translateY(-50%) rotate(45deg)",
                                  zIndex: 0,
                                },
                              },
                            },
                          }}
                          transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                          }}
                          anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                          }}
                        >
                          <Link to={"/my-account"}>
                            <MenuItem
                              onClick={handleClose}
                              className="flex gap-2 !text-[16px] !font-[600] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
                            >
                              <FaRegUser></FaRegUser> My Account
                            </MenuItem>
                          </Link>
                          <Divider></Divider>
                          <Link to={"/my-orders"}>
                            <MenuItem
                              onClick={handleClose}
                              className="flex gap-2 !text-[16px] !font-[500] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
                            >
                              <IoBagRemoveOutline></IoBagRemoveOutline> Orders
                            </MenuItem>
                          </Link>
                          <Link to={"/wishlist"}>
                            <MenuItem
                              onClick={handleClose}
                              className="flex gap-2 !text-[16px] !font-[500] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
                            >
                              <IoIosHeartEmpty></IoIosHeartEmpty> My Wishlist
                            </MenuItem>
                          </Link>
                          <MenuItem
                            onClick={logout}
                            className="flex gap-2 !text-[16px] !font-[500] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
                          >
                            <IoIosLogOut></IoIosLogOut> Log Out
                          </MenuItem>
                        </Menu>
                      </>
                    </li>
                    <li>
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
                )}
              </div>
            </div>
          </div>

          {/* PRODUCTS NAVIGATION BAR */}

          <Nav></Nav>
        </header>
      )}
    </>
  );
};

export default Header;
