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
import { editData, uploadImage } from "../../utils/api";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FaPen } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";

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
    } else if (formFeilds.mobile === "") {
      context.openAlertBox("error", "Enter Valid Mobile Number");
      setIsLoading(false);
      return;
    }

    editData(`/api/user/${userId}`, formFeilds).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        console.log(res);

        context.openAlertBox(
          "success",
          res?.message,
          "updateUserDetails-success",
        );
        setFormFields({
          name: userData?.name,
          email: userData?.email,
          mobile: userData?.mobile,
          gender: userData?.gender,
          dob: userData?.dob,
          address: userData?.address,
        });
        setIsLoading(false);
        navigate(0);
      } else {
        context.openAlertBox("error", res?.message, "updateUserDetails-error");
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

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== "" &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  let selectedImages = [];

  const formdata = new FormData();

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);

      for (var i = 0; i < files.length; i++) {
        if (
          (files[i] && files[i].type === "image/jpeg") ||
          files[i].type === "image/png" ||
          files[i].type === "image/jpg" ||
          files[i].type === "image/webp"
        ) {
          const file = files[i];
          selectedImages.push(file);
          formdata.append("avatar", file);

          uploadImage("/api/user/user-avatar", formdata).then((res) => {
            setUploading(false);
            let avatar = [];
            avatar.push(res?.avatar);
            setPreviews(avatar);
            console.log(res);
          });
        } else {
          context.openAlertBox(
            "error",
            "Select PNG, JPG, JPEG or WEBP Files",
            "updateProfile-error",
          );
          setUploading(false);
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-10 w-full">
      {context.isOpenSideBar && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden`}
          onClick={() => context.setIsOpenSideBar(false)}
        />
      )}
      <div className="container flex">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        >
          <Sidebar></Sidebar>
        </div>
        <div
          className={`sidebarWrapper my-7 transition-all duration-300 ease-in-out w-full min-h-0
                ${context.isOpenSideBar ? "lg:w-[80%]" : "lg:w-full"}`}
        >
          <div className="shadow-md rounded-md p-3 bg-white mt-2">
            <div className="flex gap-2 justify-between items-center cartHead p-2 pb-4 border-b border-[#ff5252]">
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

            <div className="w-full p-3 flex flex-col md:flex-row gap-2 md:gap-10 items-center md:items-start justify-center border-b border-gray-300 mb-3">
              <div className="edit relative md:border-r-1 px-2 md:px-10 border-[#ff5252]">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-[#ff5252] bg-gray-200">
                  {uploading === true ? (
                    <div className="flex items-center mt-7 justify-center">
                      <CircularProgress
                        color="inherit"
                        size={35}
                        sx={{ color: "#ff5252" }}
                      ></CircularProgress>
                    </div>
                  ) : (
                    <>
                      {previews?.length !== 0 &&
                        previews?.map((img, index) => {
                          return (
                            <img
                              src={
                                img ||
                                "../../../src/assets/defaultAssets/userAvatar.jpg"
                              }
                              key={index}
                              className="w-full h-full object-cover"
                            />
                          );
                        })}
                    </>
                  )}
                </div>
                <div className="overlayEdit absolute inset-0 top-17 left-17 z-30 flex items-center justify-center">
                  <div className="relative w-[35px] h-[35px]">
                    <FaPen className="text-[20px] w-full h-full p-2 rounded-full border-2 border-[#ff5252] text-[#ff5252] bg-white cursor-pointer overflow-visible" />
                    <input
                      type="file"
                      accept="image/*"
                      name="avatar"
                      onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="info flex flex-col items-center md:items-start my-2">
                <h3 className="text-[18px] font-[500]">
                  {context?.userData?.name}
                </h3>
                <h3 className="text-[14px] font-[500] text-gray-500">
                  {context?.userData?.email}
                </h3>
                <h3 className="text-[14px] font-[500] text-white bg-[#ff5252] rounded-sm px-2 py-1 mt-1">
                  {context?.userData?.role}
                </h3>
              </div>
            </div>

            <form
              className="w-full container mt-5 pt-3 my-3"
              onSubmit={handleSubmit}
            >
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2 pb-3">
                Your Details
              </p>
              <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
                <div className="col1 w-full md:w-[50%]">
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
                <div className="col2 w-full md:w-[50%]">
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
                <div className="col2 flex items-center w-full z-10 md:w-[50%]">
                  <PhoneInput
                    defaultCountry="in"
                    value={String(formFeilds.mobile || "")}
                    disabled={isLoading === true ? true : false}
                    onChange={(value) => {
                      setFormFields((prev) => ({
                        ...prev,
                        mobile: value,
                      }));
                    }}
                    className="w-full border-1 border-gray-300 rounded-sm hover:border-[#ff5252] focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#ff5252] transition-all duration-300"
                    inputClassName="w-full focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#ff5252] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-3 border-b border-gray-300 mb-7">
                <div className="Street mb-1 lg:mb-4 w-full lg:w-[33%]">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Gender
                  </p>
                  <div className="gender mb-2">
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
                <div className="dob mb-4 w-full lg:w-[67%]">
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
              <div className="Adress w-full mb-4">
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
