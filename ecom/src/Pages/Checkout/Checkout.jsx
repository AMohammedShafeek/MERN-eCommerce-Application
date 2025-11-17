import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Checkout = () => {
  return (
    <div className="cart py-5">
      <div className="container w-[80%] max-w-[80%] flex gap-5 pb-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-5 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">BILLING DETAILS</h2>
              <p className="mt-0 text-[16px] text-gray-600">
                Enter{" "}
                <span className="font-bold text-[#ff5252] text-[16px]">
                  Valid Details
                </span>{" "}
                to deliver Products Fast.
              </p>
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
              </div>
              <div className="Street w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  Street Adddress
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
              <div className="Town w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  Town / City
                </p>
                <div className="street mb-2">
                  <TextField
                    type="text"
                    id="town"
                    name="town"
                    label="Town / City"
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
              <div className="State w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  State / Country
                </p>
                <div className="State mb-2">
                  <TextField
                    type="text"
                    id="state"
                    name="state"
                    label="State"
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
              <div className="State w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  Postcode / ZIP
                </p>
                <div className="zip mb-2">
                  <TextField
                    type="text"
                    id="zip"
                    name="zip"
                    label="Postal Code / Zip"
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
              <div className="contact mb-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="col1 w-[50%]">
                    <TextField
                      type="number"
                      id="phNum"
                      name="phNum"
                      label="Phone Number"
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
                      label="Email Address"
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
              </div>
              <div className="flex items-center gap-3 justify-center pt-3 mb-5">
                <Button className="btn-org !w-full !py-3 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-5 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">YOUR ORDER</h2>
              <p className="mt-0 text-[16px] text-gray-600">
                All{" "}
                <span className="font-bold text-[#ff5252] text-[16px]">
                  Tax
                </span>{" "}
                Applied.
              </p>
            </div>
            <div className="flex items-center w-[95%] justify-between mx-2 my-3 pb-3 border-b border-[#ff5252]">
              <span className="flex justify-start text-[18px] font-bold w-[50%]">
                Product
              </span>
              <span className="flex justify-around text-[18px] font-bold w-[20%]">
                Qty
              </span>
              <span className="flex justify-end text-[18px] font-bold w-[30%]">
                Total
              </span>
            </div>

            <div className="charges">
              <div className="flex items-center w-[95%] justify-between mx-2 mb-1">
                <span className="flex justify-start text-[14px] font-[500] w-[50%]">
                  TAGDO Gray Shirt | Casu...
                </span>
                <span className="flex justify-around text-[#ff5252] text-[14px] font-[500] w-[20%]">
                  3
                </span>
                <span className="flex justify-end text-[#ff5252] text-[14px] font-[500] w-[30%]">
                  ₹1197
                </span>
              </div>
              <div className="flex items-center w-[95%] justify-between mx-2 mb-1">
                <span className="flex justify-start text-[14px] font-[500] w-[50%]">
                  TAGDO Green Shirt | Casu...
                </span>
                <span className="flex justify-around text-[#ff5252] text-[14px] font-[500] w-[20%]">
                  1
                </span>
                <span className="flex justify-end text-[#ff5252] text-[14px] font-[500] w-[30%]">
                  ₹399
                </span>
              </div>
            </div>
            <div className="taxes">
              <div className="flex items-center justify-between mx-2 my-3 mt-7 py-3 border-y border-[#ff5252]">
                <span className="text-[18px] font-bold">Taxes and Charges</span>
                <span className="text-[18px] font-bold">Total</span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">CGST</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  2.5%
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">SGST</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  2.5%
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">Delivery Charge</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  Free
                </span>
              </div>
              <div className="flex items-center justify-between mx-2 my-1">
                <span className="text-[14px] font-[500]">Handling Fee</span>
                <span className="text-[14px] font-[500] text-[#ff5252]">
                  Free
                </span>
              </div>
            </div>

            <div className="total">
              <div className="flex items-center justify-between mx-2 my-3 py-5 border-y border-[#ff5252]">
                <span className="text-[18px] font-bold">Subtotal</span>
                <span className="text-[18px] font-bold text-[#ff5252]">
                  ₹2496
                </span>
              </div>
              <Button className="btn-org !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 !w-full !my-1">
                <Link to={"/checkout"}>Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
