import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { FaHome, FaPen, FaTruckMoving, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { uploadImage } from "../../utils/api";
import { FaTicketAlt } from "react-icons/fa";

const AccountSideBar = () => {
  const context = useContext(MyContext);

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
          context.openAlertBox("error", "Select PNG, JPG, JPEG or WEBP Files");
          setUploading(false);
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col1 mt-5 w-[20%]">
      <div className="card bg-white shadow-md rounded-md py-5 px-2 sticky top-[50px]">
        <div className="w-full p-3 flex items-center justify-center border-b border-gray-300 mb-3 flex-col">
          <div className="edit relative">
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
            <div className="overlayEdit absolute w-[100%] h-[100%] top-7 left-9 z-50 flex items-center justify-center">
              <FaPen className="text-[20px] w-[35px] border-3 border-[#ff5252] min-w-[35px] h-[35px] p-2 rounded-full overflow-visible text-[#ff5252] bg-white"></FaPen>
              <input
                type="file"
                className="absolute top-8 left-8  w-[35px] min-w-[35px] h-[35px] opacity-0"
                accept="image/*"
                onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
                name="avatar"
              />
            </div>
          </div>
          <div className="info flex flex-col items-center my-2">
            <h3 className="text-[18px] font-[500]">
              {context?.userData?.name}
            </h3>
            <h3 className="text-[14px] font-[500] text-gray-500">
              {context?.userData?.email}
            </h3>
          </div>
        </div>

        <ul className="list-none py-5 myAccountTabs">
          <li className="w-full py-1">
            <NavLink
              to={"/my-account"}
              exact={"true"}
              activeclassname="isActive"
            >
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaUser className="text-[16px]"></FaUser>User Profile
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink to={"/"} exact={"true"} activeclassname="isActive">
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaHome className="text-[16px]"></FaHome>Admin Home
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink
              to={"/tickets"}
              exact={"true"}
              activeclassname="isActive"
            >
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaTicketAlt className="text-[16px]"></FaTicketAlt>Tickets
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink
              to={"/track-orders"}
              exact={"true"}
              activeclassname="isActive"
            >
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <FaTruckMoving className="text-[16px]"></FaTruckMoving>
                Track Orders
              </Button>
            </NavLink>
          </li>
          <li className="w-full py-1">
            <NavLink to={"/logout"} exact={"true"} activeclassname="isActive">
              <Button className="w-full !rounded-none gap-2 !items-center !justify-start !px-10 !text-[16px] !font-[600] transition-all duration-300">
                <IoIosLogOut className="text-[16px]"></IoIosLogOut>Logout
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountSideBar;
