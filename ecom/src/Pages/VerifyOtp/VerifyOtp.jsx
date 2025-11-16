import React, { useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import OtpBox from "../../components/OtpBox/OtpBox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = () => {
    e.preventDefault();
  };
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-8">
          <div className="flex flex-col items-center justify-center gap-1 my-3">
            <AiFillSafetyCertificate className="text-[50px] text-[#ff5252]"></AiFillSafetyCertificate>
            <h3 className="text-[20px] font-[500]">Verify OTP</h3>
            <p className="text-[14px] text-gray-600 mt-4">
              otp send to{" "}
              <span className="text-[#ff5252] font-bold">
                amdshafeek7@gmail.com
              </span>
            </p>
          </div>
          <OtpBox length={6} onChange={handleOtpChange}></OtpBox>
          <form onSubmit={verifyOTP}>
            <div className="flex items-center justify-center">
              <Link to={"/changePassword"}>
                <Button
                  type="submit"
                  className="btn-org !px-15 !mt-7 !mb-3 !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 !w-[335px]"
                >
                  Verify OTP
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
