import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import { error } from "console";

export async function registerUserController(request, response) {
  try {
    let user;

    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return response.status(400).json({
        message: "Name, email, Password required",
        error: true,
        success: false,
      });
    }

    user = await userModel.findOne({ email: email });

    if (user) {
      return response.json({
        message: "User was Already Registered",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new userModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
    });

    await newUser.save();

    await sendEmailFun({
      sendTo: email,
      subject: "Verify email from REPIIT eCommerce App",
      text: "",
      html: VerificationEmail(name, verifyCode),
    });

    const token = jwt.sign(
      {
        email: newUser.email,
        id: newUser._id,
      },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return response.status(200).json({
        success: true,
        error: false,
        message: 'User Registered Successfully! Please Verify Your Email.',
        token: token
    })

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function verifyEmailController(request, response) {
  try {
    const { email, otp } = request.body

    const user = await userModel.findOne({ email: email })

    if(!user){
      return response.status(400).json({
        error: true,
        success: false,
        message: 'User Not Found'
      })
    }

    const isCodeValid = user.otp === otp
    const isNotExpired = user.otpExpires > Date.now()

    if ( isCodeValid && isNotExpired ){
      user.verify_email = true,
      user.otp = null,
      user.otpExpires = null
      await user.save()
      return response.status(200).json({
        error: false,
        success: true, 
        message: 'Email Verified Successfully',
      })
    }
    else if(!isCodeValid){
      return response.json({
        error: true,
        success: false,
        message: 'Invalid OTP'
      })
    }
    else{
      return response.json({
        error: true,
        success: false,
        message: 'OTP Expires'
      })
    }

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}