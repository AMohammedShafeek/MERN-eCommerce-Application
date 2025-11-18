import React from "react";
import Button from "@mui/material/Button";
import { FaPen } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaTruckMoving } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";
import "../MyAccount/MyAccount.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%] mt-5">
          <div className="card bg-white shadow-md rounded-md py-5 px-2">
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
                <h3 className="text-[14px] font-[500] text-gray-500">
                  @shafeek77
                </h3>
              </div>
            </div>

            <ul className="list-none py-5 myAccountTabs">
              <li className="w-full py-1">
                <NavLink
                  to={"/my-account"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                    <FaUser className="text-[16px]"></FaUser>User Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full py-1">
                <NavLink
                  to={"/my-wishlist"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                    <FaHeart className="text-[16px]"></FaHeart>My Wishlist
                  </Button>
                </NavLink>
              </li>
              <li className="w-full py-1">
                <NavLink
                  to={"/my-orders"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                    <IoBag className="text-[16px]"></IoBag>My Orders
                  </Button>
                </NavLink>
              </li>
              <li className="w-full py-1">
                <NavLink
                  to={"/track-orders"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                    <FaTruckMoving className="text-[16px]"></FaTruckMoving>
                    Track Orders
                  </Button>
                </NavLink>
              </li>
              <li className="w-full py-1">
                <NavLink to={"/logout"} exact={true} activeClassName="isActive">
                  <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                    <IoIosLogOut className="text-[16px]"></IoIosLogOut>Logout
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">MY PROFILE</h2>
            </div>
            <form className="w-full container mt-5 pt-3 my-3">
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Your Details
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="col1 w-[50%]">
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    sx={{
                      "& label.Mui-focused": {
                        color: "#ff5252",
                        transition: "all 0.3s",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                          transition: "all 0.3s",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ff5252",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ff5252",
                        },
                      },
                    }}
                    className="w-full"
                  />
                </div>
                <div className="col2 w-[50%]">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    sx={{
                      "& label.Mui-focused": {
                        color: "#ff5252",
                        transition: "all 0.3s",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                          transition: "all 0.3s",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ff5252",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ff5252",
                        },
                      },
                    }}
                    className="w-full"
                  />
                </div>
                <div className="col2 w-[50%]">
                  <TextField
                    type="number"
                    id="number"
                    name="number"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      "& label.Mui-focused": {
                        color: "#ff5252",
                        transition: "all 0.3s",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                          transition: "all 0.3s",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ff5252",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ff5252",
                        },
                      },
                    }}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-gray-300 mb-7">
                <div className="Street mb-4 w-[33%]">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Gender
                  </p>
                  <div className="street mb-2">
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            sx={{
                              color: "#ff5252",
                              "&.Mui-checked": {
                                color: "#ff5252",
                              },
                            }}
                          />
                        }
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            sx={{
                              color: "#ff5252",
                              "&.Mui-checked": {
                                color: "#ff5252",
                              },
                            }}
                          />
                        }
                        label="Female"
                      />

                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            sx={{
                              color: "#ff5252",
                              "&.Mui-checked": {
                                color: "#ff5252",
                              },
                            }}
                          />
                        }
                        label="Other"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="Street mb-4 w-[67%]">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Date of Birth
                  </p>
                  <div className="street mb-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Basic date picker" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div className="Street w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  Adddress
                </p>
                <div className="street mb-2">
                  <TextField
                    type="text"
                    id="street"
                    name="street"
                    label="House Number andd Street Name"
                    variant="outlined"
                    size="medium"
                    sx={{
                      "& label.Mui-focused": {
                        color: "#ff5252",
                        transition: "all 0.3s",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ccc",
                          transition: "all 0.3s",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ff5252",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#ff5252",
                        },
                      },
                    }}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center pt-3 mb-5">
                <Button className="btn-org !w-full !py-3 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                  UPDATE
                </Button>
                <Button className="btn-org !w-full !py-3 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                  CANCEL
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
