import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Collapse } from "react-collapse";

const UpdatePass = () => {
  const userEmail = localStorage.getItem("userEmail");

  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [formFeilds, setFormFields] = useState({
    email: userEmail,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const validValue = formFeilds.password !== "";
  const validValue2 =
    formFeilds.newPassword !== "" && formFeilds.confirmPassword !== "";

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

  const checkPassword = (e) => {
    e.preventDefault();

    // context.openAlertBox("success", "Here.");
    if (!verified) {
      if (formFeilds.password !== "") {
        postData("/api/user/check-password", formFeilds).then((res) => {
          console.log(res);
          if (res?.error !== true) {
            context.openAlertBox("success", res?.message);
            setVerified(true);
          } else {
            context.openAlertBox("error", res?.message);
          }
        });
      } else {
        context.openAlertBox(
          "error",
          "If You forgot Old Password. Please Choose Forgot Password."
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFeilds.newPassword !== formFeilds.confirmPassword) {
      context.openAlertBox(
        "error",
        "Password and Confirm Password are Not Matched"
      );
      setIsLoading(false);
    } else {
      postData("/api/user/reset-password", formFeilds).then((res) => {
        console.log(res);
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);
          setFormFields({
            password: "",
            newPassword: "",
            confirmPassword: "",
          });
          setVerified(false);
          navigate("/my-account");
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      });
    }
  };

  const forgotPass = () => {
    if (userEmail === null || userEmail === undefined) {
      context.openAlertBox("error", "You Need to Login");
    } else {
      setIsLoading(true);
      console.log(userEmail);

      context.openAlertBox("success", "OTP send to Your Email");
      localStorage.setItem("actionType", "forgot-password");

      postData("/api/user/forgot-password", {
        email: userEmail,
      }).then((res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);
          navigate("/verify");
        } else {
          setIsLoading(false);
          context.openAlertBox("error", res?.message);
        }
      });
    }
  };

  useEffect(() => {
    if (userEmail === null || userEmail === undefined || userEmail === "") {
      navigate("/");
    }
  }, [context.isLogin]);

  return (
    <section className="section min-h-screen flex justify-center items-center">
      <div className="container flex justify-center">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] mb-5 font-[500]">
            {verified !== true ? "Enter Old Password" : "Update Password"}
          </h3>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="relative flex form-group w-full mb-2 relative">
              <TextField
                type="password"
                id="password"
                name="password"
                value={formFeilds.password}
                disabled={verified === true ? true : false}
                label="Old Password"
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
              <FaArrowAltCircleRight
                onClick={checkPassword}
                className={`absolute text-[30px] transition-all duration-150 ${
                  formFeilds.password === ""
                    ? "right-3"
                    : verified !== true
                    ? "right-12"
                    : "right-3"
                } top-3.5 ${
                  verified !== true
                    ? "cursor-pointer hover:text-[#ff5252] transition-all duration-200"
                    : "text-gray-300"
                } `}
              ></FaArrowAltCircleRight>
            </div>
            <a
              className="transition-all duration-300 !text-[14px] !pl-1 !text-[#ff5252] !cursor-pointer !font-[600]"
              type="submit"
              onClick={forgotPass}
            >
              Forgot Password?
            </a>
            <Collapse isOpened={verified}>
              <>
                <div className="form-group w-full mb-3 mt-3 relative">
                  <TextField
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formFeilds.newPassword}
                    disabled={isLoading === true ? true : false}
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
                    onChange={onChangeInput}
                  />
                </div>
                <div className="form-group w-full mb-3 relative">
                  <TextField
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formFeilds.confirmPassword}
                    disabled={isLoading === true ? true : false}
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
                    onChange={onChangeInput}
                  />
                </div>

                <div className="flex items-center gap-3 justify-center my-3">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!validValue2}
                    className={`${
                      !validValue2 === true
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
                      "UPDATE PASSWORD"
                    )}
                  </Button>
                </div>
              </>
            </Collapse>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdatePass;
