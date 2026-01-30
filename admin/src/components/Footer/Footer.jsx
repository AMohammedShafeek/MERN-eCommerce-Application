import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoSync } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PiChats } from "react-icons/pi";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { useContext } from "react";
import { MyContext } from "../../App";

const Footer = () => {
  const context = useContext(MyContext);
  return (
    <>
      {location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ||
      location.pathname === "/changePassword" ? null : (
        <div>
          <div className="bottomStipe bg-primary py-3">
            <div className="container flex items-center justify-center">
              <p className="text-[13px] text-white font-[600]">
                &copy; 2025 - ECOMMERCE WEB APPLICATION BY MOHAMMED SHAFEEK A
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
