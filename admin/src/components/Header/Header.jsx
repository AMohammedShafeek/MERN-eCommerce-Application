import React, { useContext, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { FaBell, FaRegUser } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { IoIosLogOut } from "react-icons/io";
import { MyContext } from "../../App";
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
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(MyContext);

  const logout = () => {
    getData(`/api/user/logout?token=${localStorage.getItem("accessToken")}`, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.setIsLogin(false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userEmail");
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    if (token === undefined || token === "" || token === null) {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ||
      location.pathname === "/changePassword" ? null : (
        <div className="w-full fixed z-1000">
          <div className="bg-white py-2 border-b border-b-gray-300">
            <div className="container flex justify-between">
              <div className="part1 w-[20%] flex">
                <Link to={"/"}>
                  <div className="col2 py-1 flex items-center justify-center fixed left-8 top-1">
                    <img
                      src="./public/logo.png"
                      alt=""
                      className="h-10 w-full md:w-[33%]"
                    />
                    <h1 className="hidden md:block headText font-bold text-[22px]">
                      - <span className="primary">Admin</span> Panel
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="part2 w-[80%] flex">
                <ul className="flex items-center gap-3 w-full justify-end pr-6">
                  <li className="list-none">
                    <>
                      <div className="profile flex items-center pr-3 border-r border-gray-300">
                        {context.isLogin === true ? (
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
                        ) : (
                          <Link
                            className="link transition-all duration-300 text-[15px] font-[500]"
                            onClick={()=>{navigate('/login')}}
                          >
                            <div className="user flex items-center gap-2 px-2">
                              <FaRegUser className="text-[22px]"></FaRegUser>
                              <h3 className="text-[16px] font-[600]">
                                Login
                              </h3>
                            </div>
                          </Link>
                        )}
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
                            <FaRegUser></FaRegUser> Profile
                          </MenuItem>
                        </Link>
                        <Divider></Divider>
                        <MenuItem
                          onClick={logout}
                          className="flex gap-2 !text-[16px] !font-[500] hover:!bg-[#ff5252] hover:!text-white transition-all duration-75"
                        >
                          <IoIosLogOut></IoIosLogOut> Logout
                        </MenuItem>
                      </Menu>
                    </>
                  </li>
                  <li className="list-none">
                    <Tooltip title="Notification">
                      <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4}>
                          <FaBell className="link transition-colors duration-300"></FaBell>
                        </StyledBadge>
                      </IconButton>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
