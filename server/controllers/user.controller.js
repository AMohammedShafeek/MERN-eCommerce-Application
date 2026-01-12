import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

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
      return response.status(400).json({
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
      role: role,
      otpExpires: Date.now() + 600000,
    });

    await newUser.save();

    await sendEmailFun({
      sendTo: email,
      subject:
        "Email Verification for User Registration from REPIIT eCommerce App",
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
      message: "User Registered Successfully! Please Verify Your Email.",
      token: token,
    });
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
    const { email, otp } = request.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "User Not Found",
      });
    }

    const isCodeValid = user.otp === otp;
    const isNotExpired = user.otpExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      (user.verify_email = true), (user.otp = null), (user.otpExpires = null);
      await user.save();
      return response.status(200).json({
        error: false,
        success: true,
        message: "Email Verified Successfully",
      });
    } else if (!isCodeValid) {
      return response.json({
        error: true,
        success: false,
        message: "Invalid OTP",
      });
    } else {
      return response.json({
        error: true,
        success: false,
        message: "OTP Expires",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function loginUserController(request, response) {
  const { email, password, role } = request.body;
  const user = await userModel.findOne({ email: email });

  try {
    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "User Was Not Registered",
      });
    }

    if (user.verify_email !== true) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Email Was Not Verified.",
      });
    }

    if (role === "ADMIN") {
      if (!(role === user.role)) {
        return response.status(400).json({
          error: true,
          success: false,
          message: "You Are Not Admin.",
        });
      }
    }

    if (!user.verify_email) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Your Email Was Not Verified.",
      });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Password is Wrong. Check Your Password",
      });
    }

    const accessToken = await generatedAccessToken(user._id);
    const refreshToken = await generatedRefreshToken(user._id);

    const updateUser = await userModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = {
      httpOnly: true,
      secure: false,
      sameSite: "None",
    };

    response.cookie("accessToken", accessToken, cookiesOption);
    response.cookie("refreshToken", refreshToken, cookiesOption);

    return response.json({
      error: false,
      success: true,
      message: "Login Successfully",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function logoutController(request, response) {
  try {
    const userid = request.userId;

    const cookiesOption = {
      httpOnly: true,
      secure: false,
      sameSite: "None",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await userModel.findByIdAndUpdate(userid, {
      refresh_token: null,
    });

    return response.json({
      error: false,
      success: true,
      message: "Logout Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

var imagesArr = [];

export async function userAvatarController(request, response) {
  try {
    imagesArr = [];

    const userId = request.userId;
    const image = request.files;

    if (!image || image.length === 0) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "No image uploaded",
      });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    //remove already existed avatar and store new avatar

    const imgUrl = user.avatar;

    if (imgUrl) {
      const imageName = imgUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(imageName);
    }

    const options = {
      use_filename: true,
      unique_filename: false,
      public_id: `img_${request.userId}`,
      overwrite: false,
    };

    const img = await cloudinary.uploader.upload(image[0].path, options);

    const filePath = `uploads/${request.files[0].filename}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    imagesArr.push(img.secure_url);
    user.avatar = imagesArr[0];
    await user.save();

    return response.status(200).json({
      _id: userId,
      avatar: imagesArr[0],
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function removeImageFromCloudinary(request, response) {
  const imgUrl = request.query.img;

  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];

  const imageName = image.split(".")[0];

  if (imageName) {
    const res = await cloudinary.uploader.destroy(
      imageName,
      (error, result) => {}
    );
    if (res) {
      return response.status(200).send(res);
    }
  }
}

export async function updateUserDetails(request, response) {
  try {
    const userId = request.userId;

    const { name, email, mobile, password, gender, dob, address } =
      request.body;

    const userExist = await userModel.findById(userId);

    if (!userExist) {
      return response.status(400).send("User Was Not Registered.");
    }

    let verifyCode = "";

    if (email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }

    let hashPassword = "";

    if (password) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    } else {
      hashPassword = userExist.password;
    }

    const updateUser = await userModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        mobile: mobile,
        email: email,
        dob: new Date(dob),
        gender: gender,
        address: address,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : "",
      },
      { new: true }
    );

    if (email !== userExist.email) {
      await sendEmailFun({
        sendTo: email,
        subject: "Verify email from REPIIT eCommerce App",
        text: "",
        html: VerificationEmail(name, verifyCode),
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      user: {
        name: updateUser?.name,
        id: updateUser?._id,
        email: updateUser?.email,
        mobile: updateUser?.mobile,
        address: updateUser?.address,
        gender: updateUser?.gender,
        dob: updateUser?.dob,
      },
      message: "user Updated Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function forgotPasswordController(request, response) {
  try {
    const { email } = request.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "This Email Was Not Registered.",
      });
    } else {
      let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

      user.otp = verifyCode;
      user.otpExpires = Date.now() + 600000;

      await user.save();

      await sendEmailFun({
        sendTo: email,
        subject:
          "Email Verification for Change Password from REPIIT eCommerce App",
        text: "",
        html: VerificationEmail(user.name, verifyCode),
      });

      return response.status(200).json({
        success: true,
        error: false,
        message: "Verification OTP Sent to your Email.",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function verifyForgotPasswordOtp(request, response) {
  try {
    const { email, otp } = request.body;

    if (!email || !otp) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "email or OTP feild Was Empty",
      });
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "This Email Was Not Registered.",
      });
    }

    if (otp !== user.otp) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP.",
      });
    }

    const currentTime = new Date().toISOString();

    if (user.otpExpires < currentTime) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "OTP Expired.",
      });
    }

    user.otp = null;
    user.otpExpires = null;

    await user.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "OTP Verified.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function resetPassword(request, response) {
  try {
    const { email, newPassword, confirmPassword } = request.body;

    if (!email || !newPassword || !confirmPassword) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "email andd password feilds are Empty",
      });
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "This Email Was Not Registered.",
      });
    }

    if (newPassword !== confirmPassword) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Password and Confirm Password Must be Same.",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(newPassword, salt);
    const samePassword = await bcryptjs.compare(newPassword, user.password);

    if (samePassword) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Old Password and New Password Are Same.",
      });
    }

    user.password = hashPassword;
    await user.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "Password Updated Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function checkPassword(request, response) {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "email and password feilds are Empty",
      });
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "This Email Was Not Registered.",
      });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Password is Wrong. Check Your Password",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Password Verified Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function refreshToken(request, response) {
  try {
    const refreshToken =
      request.cookies.refreshToken ||
      request?.headers?.authorization?.split(" ")[1];

    if (!refreshToken) {
      return response.status(401).json({
        error: true,
        success: false,
        message: "Invalid Token",
      });
    }

    verifyToken = await jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN
    );

    if (!verifyToken) {
      return response.status(401).json({
        error: true,
        success: false,
        message: "Token is Expired",
      });
    }

    const userId = verifyToken?._id;
    const newAccessToken = await generatedAccessToken(userId);

    const cookiesOption = {
      httpOnly: true,
      secure: false,
      sameSite: "None",
    };

    response.cookie("accessToken", newAccessToken, cookiesOption);

    return response.status(200).json({
      error: true,
      success: false,
      message: "new AccessToken Generated",
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function userDetails(request, response) {
  try {
    const userId = request.userId;

    const user = await userModel
      .findById(userId)
      .select("-password -refresh_token");

    return response.status(200).json({
      error: false,
      success: true,
      message: "User Details",
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
