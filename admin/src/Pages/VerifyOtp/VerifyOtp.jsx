import React, { useContext, useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import OtpBox from "../../components/OtpBox/OtpBox";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";

const Verify = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem("actionType");

    if (actionType !== "forgot-password") {
      postData("/api/user/verifyEmail", {
        email: localStorage.getItem("userEmail"),
        otp: otp,
      }).then((res) => {
        console.log(res);
        if (res?.error !== true) {
          context.openAlertBox("success", res?.message);
          localStorage.removeItem("userEmail");
          navigate("/login");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    } else {
      postData("/api/user/verify-forgot-password-otp", {
        email: localStorage.getItem("userEmail"),
        otp: otp,
      }).then((res) => {
        console.log(res);
        if (res?.error !== true) {
          context.openAlertBox("success", res?.message);
          navigate("/changePassword");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    }
  };

  return (
    <section className="section min-h-screen flex justify-center items-center">
      {context.isOpenSideBar && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden`}
          onClick={() => context.setIsOpenSideBar(false)}
        />
      )}
      <div className="container flex justify-center">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-8">
          <div className="flex flex-col items-center justify-center gap-1 my-3">
            <AiFillSafetyCertificate className="text-[50px] text-[#ff5252]"></AiFillSafetyCertificate>
            <h3 className="text-[20px] font-[500]">Verify OTP</h3>
            <p className="text-[14px] text-gray-600 mt-4">
              otp send to{" "}
              <span className="text-[#ff5252] font-bold">
                {localStorage.getItem("userEmail")}
              </span>
            </p>
          </div>
          <OtpBox length={6} onChange={handleOtpChange}></OtpBox>
          <form onSubmit={verifyOTP}>
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="btn-org !px-15 !mt-7 !mb-3 !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 !w-[335px]"
              >
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
