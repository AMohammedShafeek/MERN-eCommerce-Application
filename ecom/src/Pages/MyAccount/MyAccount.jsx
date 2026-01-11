import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../MyAccount/MyAccount.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import { editData } from "../../utils/api";

const MyAccount = () => {
  const context = useContext(MyContext);

  const userData = context?.userData;

  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [formFeilds, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    address: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;

  const valideValue = Object.values(formFeilds).every((el) => el);

  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

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

    if (!emailRegex.test(formFeilds.email)) {
      context.openAlertBox("error", "Enter Valid Email");
      setIsLoading(false);
      return;
    } else if (!mobileRegex.test(formFeilds.mobile)) {
      context.openAlertBox("error", "Enter Valid Mobile Number");
      setIsLoading(false);
      return;
    }

    editData(`/api/user/${userId}`, formFeilds).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message);
        setFormFields({
          name: userData?.name,
          email: userData?.email,
          mobile: userData?.mobile,
          gender: userData?.gender,
          dob: userData?.dob,
          address: userData?.address,
        });
        setIsLoading(false);
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  const resetFormFeilds = (e) => {
    setFormFields({
      name: userData?.name,
      email: userData?.email,
      mobile: userData?.mobile,
      gender: userData?.gender,
      dob: userData?.dob,
      address: userData?.address,
    });
  };

  useEffect(() => {
    if (token === undefined || token === "" || token === null) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (!userData) return;

    setUserId(context?.userData?._id);
    setFormFields({
      name: userData.name ?? "",
      email: userData.email ?? "",
      mobile: userData.mobile ?? "",
      gender: userData.gender ?? "",
      dob: userData.dob ? userData.dob.slice(0, 10) : "",
      address: userData.address ?? "",
    });
  }, [context?.userData]);

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <AccountSideBar></AccountSideBar>
        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="flex gap-2 justify-between items-center cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">MY PROFILE</h2>
              <h2
                onClick={() => {
                  navigate("/updatePassword");
                }}
                className="font-bold mt-0.5 text-[15px] mr-6 text-black link transition-all duration-200 cursor-pointer"
              >
                CHANGE PASSWORD
              </h2>
            </div>
            <form
              className="w-full container mt-5 pt-3 my-3"
              onSubmit={handleSubmit}
            >
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Your Details
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="col1 w-[50%]">
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    value={formFeilds.name}
                    disabled={isLoading === true ? true : false}
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
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col2 w-[50%]">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    value={formFeilds.email}
                    disabled={true}
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
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col2 w-[50%]">
                  <TextField
                    type="number"
                    id="mobile"
                    name="mobile"
                    value={formFeilds.mobile}
                    disabled={isLoading === true ? true : false}
                    label="Mobile Number"
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
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-gray-300 mb-7">
                <div className="Street mb-4 w-[33%]">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Gender
                  </p>
                  <div className="street mb-2">
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue=""
                      name="gender"
                      value={formFeilds.gender}
                      onChange={onChangeInput}
                    >
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            sx={{
                              color: "#ff5252",
                              "&.Mui-checked": {
                                color: "#ff5252",
                              },
                            }}
                          />
                        }
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            sx={{
                              color: "#ff5252",
                              "&.Mui-checked": {
                                color: "#ff5252",
                              },
                            }}
                          />
                        }
                        label="Female"
                      />

                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            sx={{
                              color: "#ff5252",
                              "&.Mui-checked": {
                                color: "#ff5252",
                              },
                            }}
                          />
                        }
                        label="Other"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="Street mb-4 w-[67%]">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Date of Birth
                  </p>
                  <div className="street mb-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          label="Date of Birth"
                          value={formFeilds.dob ? dayjs(formFeilds.dob) : null}
                          onChange={(newValue) =>
                            setFormFields({
                              ...formFeilds,
                              dob: newValue
                                ? newValue.format("YYYY-MM-DD")
                                : "",
                            })
                          }
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div className="Street w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  Address
                </p>
                <div className="street mb-2">
                  <TextField
                    type="text"
                    id="address"
                    name="address"
                    value={formFeilds.address}
                    disabled={isLoading === true ? true : false}
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
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center pt-3 mb-5">
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
                    "UPDATE"
                  )}
                </Button>
                <Button
                  onClick={resetFormFeilds}
                  className="btn-org !bg-[var(--primary-clr)] !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 flex gap-2"
                >
                  CANCEL
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
