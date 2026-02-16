import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginExpire = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container py-100 px-130">
        <h1>
          Hello, Admin. You Logout Your Account or Your Session was Expired.
        </h1>
        <h1>
          Please{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="primary font-bold underline cursor-pointer"
          >
            Login
          </span>{" "}
          to Continue.
        </h1>
      </div>
    </section>
  );
};

export default LoginExpire;
