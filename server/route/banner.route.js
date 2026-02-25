import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

//import All Controllers
import {
  createBanner,
  deleteBanner,
  deleteMultipleData,
  getAllBanners,
  getBanner,
  removeImageFromCloudinary,
  updateBanner,
  uploadImage,
} from "../controllers/banner.controller.js";

const bannerRouter = Router();

bannerRouter.post("/create", createBanner);
bannerRouter.get("/", getAllBanners);
bannerRouter.get("/:id", getBanner);
bannerRouter.post("/uploadImages", auth, upload.array("images"), uploadImage);
bannerRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
bannerRouter.delete("/delete-Multiple", deleteMultipleData);
bannerRouter.delete("/:id", deleteBanner);
bannerRouter.put("/updateBanner/:id", auth, updateBanner);

export default bannerRouter;
