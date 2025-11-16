import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const ChangePass = () => {

  const context = useContext(MyContext)

  const history = useNavigate();

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] mb-5 font-[500]">
            Reset Password
          </h3>
          <form className="w-full">
            <div className="form-group w-full mb-3 relative">
              <TextField
                type="password"
                id="password"
                name="password"
                label="New Password"
                variant="outlined"
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
            <div className="form-group w-full mb-3 relative">
              <TextField
                type="password"
                id="cPassword"
                name="cPassword"
                label="Confirm New Password"
                variant="outlined"
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
            <div className="flex items-center gap-3 justify-center my-3 mt-7">
              <Button className="btn-org !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                UPDATE PASSWORD
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePass;
