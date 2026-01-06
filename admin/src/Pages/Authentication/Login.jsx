import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formFeilds, setFormFeilds] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const login = () => {
    context.setIsLogin(true);
    navigate("/dashboard");
  };

  return (
    <section className="section min-h-screen flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] font-[500]">
            Login to your Admin Account
          </h3>
          <form className="w-full">
            <div className="form-group w-full my-5">
              <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
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
                id="password"
                name="password"
                label="Password"
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
            <div className="flex items-center gap-3 justify-center my-3">
              <Button
                onClick={login}
                className="btn-org !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300"
              >
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
