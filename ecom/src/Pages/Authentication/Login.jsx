import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { postData } from "../../utils/api.js";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFeilds, setFormFields] = useState({
    email: "",
    password: "",
  });

  const valideValue = Object.values(formFeilds).every((el) => el);

  const context = useContext(MyContext);
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFeilds,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    postData("/api/user/login", formFeilds).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.message);
        localStorage.setItem("userEmail", formFeilds.email);
        setFormFields({
          email: "",
          password: "",
        });
        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);
        context.setIsLogin(true);
        navigate("/");
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  const forgotPass = () => {
    context.openAlertBox("success", "OTP Sent to your Email");
    navigate("/verify");
  };

  return (
    <section className="section min-h-screen flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] font-[500]">
            Login to your Account
          </h3>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="form-group w-full my-5">
              <TextField
                type="email"
                id="email"
                name="email"
                value={formFeilds.email}
                disabled={isLoading === true ? true : false}
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
                onChange={onChangeInput}
              />
            </div>
            <div className="form-group w-full mb-3 relative">
              <TextField
                type="password"
                id="password"
                name="password"
                value={formFeilds.password}
                disabled={isLoading === true ? true : false}
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
                onChange={onChangeInput}
              />
            </div>
            <a
              className="transition-all duration-300 !text-[14px] !pl-1 !text-[#ff5252] !cursor-pointer !font-[600]"
              type="submit"
              onClick={forgotPass}
            >
              Forgot Password?
            </a>
            <div className="flex items-center gap-3 justify-center my-3">
              <Button
                type="submit"
                disabled={!valideValue}
                className={`${
                  !valideValue === true
                    ? "!bg-gray-200"
                    : "btn-org !bg-[var(--primary-clr)]"
                } !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 flex gap-2`}
              >
                {isLoading === true ? (
                  <CircularProgress
                    color="inherit"
                    size={24}
                  ></CircularProgress>
                ) : (
                  "LOGIN"
                )}
              </Button>
            </div>
            <p className="transition-all duration-300 text-[14px] pl-1 pb-5 pt-[0.8] text-black font-[500]">
              Not Registered?
              <Link to={"/register"} className="text-[#ff5252] pl-2">
                Sign Up Now
              </Link>
            </p>
            <hr className="text-gray-300" />
            <p className="text-center transition-all duration-300 text-[14px] py-4 text-gray-600 font-[500]">
              Or Continue with Social Account
            </p>
            <Link to={"/"}>
              <div className="socialLogin transition-all duration-300 bg-blue-50 flex items-center justify-center p-1 py-2 rounded-sm cursor-pointer hover:bg-[#ffdbdb]">
                <FcGoogle className="text-[25px] mr-1.5"></FcGoogle>
                <h3 className="pb-0.5 font-[500]">Sign in With Google</h3>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
