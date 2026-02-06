import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

//import All Controllers
import {
  createSlider,
  deleteMultipleData,
  deleteSlider,
  getAllSliders,
  getSlider,
  removeImageFromCloudinary,
  updateSlider,
  uploadImage,
} from "../controllers/slider.controller.js";

const sliderRouter = Router();

sliderRouter.post("/create", createSlider);
sliderRouter.get("/getAllSliders", getAllSliders);
sliderRouter.get("/:id", getSlider);
sliderRouter.post("/uploadImages", auth, upload.array("images"), uploadImage);
sliderRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
sliderRouter.delete("delete-Multiple", deleteMultipleData);
sliderRouter.delete("/:id", deleteSlider);
sliderRouter.put("/updateSlider/:id", auth, updateSlider);

export default sliderRouter;
