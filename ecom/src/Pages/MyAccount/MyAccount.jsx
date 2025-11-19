import React from "react";
import Button from "@mui/material/Button";
import "../MyAccount/MyAccount.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <AccountSideBar></AccountSideBar>
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
