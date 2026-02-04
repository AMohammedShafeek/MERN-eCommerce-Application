import { Router } from "express";

//import All Controllers
import {
  createSlider,
  getAllSliders,
  getSlider,
} from "../controllers/slider.controller.js";

const sliderRouter = Router();

sliderRouter.post("/create", createSlider);
sliderRouter.get("/getAllSliders", getAllSliders);
sliderRouter.get("/:id", getSlider);

export default sliderRouter;
