import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api.js";

const ChangePass = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFeilds, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
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

    if (formFeilds.newPassword === "") {
      context.openAlertBox("error", "Password Can't Be Empty");
      setIsLoading(false);
    } else if (formFeilds.newPassword !== formFeilds.confirmPassword) {
      setIsLoading(false);
    }

    postData("/api/user/reset-password", formFeilds).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.message);
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        setFormFields({
          newPassword: "",
          confirmPassword: "",
        });
        navigate("/login");
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
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
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-8">
          <h3 className="text-center text-[20px] mb-5 font-[500]">
            Reset Password
          </h3>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="form-group w-full mb-3 relative">
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
            <div className="flex items-center gap-3 justify-center my-3 mt-7">
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
                  "UPDATE PASSWORD"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePass;
