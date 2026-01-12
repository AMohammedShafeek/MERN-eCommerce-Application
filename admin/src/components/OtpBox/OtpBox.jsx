import React, { useState } from "react";

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (onChange) onChange(newOtp.join(""));

    if (value && index < length - 1) {
      document.getElementById(`otpInput-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otpInput-${index - 1}`).focus();
    }
  };

  return (
      <div className="otpBox flex items-center gap-3 justify-center">
        {otp.map((val, index) => (
          <input
            type="text"
            key={index}
            id={`otpInput-${index}`}
            maxLength={"1"}
            value={val}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-[45px] rounded-sm transition-all duration-100 h-[45px] max-w-[45px] text-center text-[21px] border border-[#ff5252] text-[#ff5252] font-black focus:outline-2 focus:outline-[#ff5252]"
          />
        ))}
      </div>
  );
};

export default OtpBox;
