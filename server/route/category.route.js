import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

// import all controllers
import {
  createCategory,
  deleteCategory,
  deleteMultipleData,
  getCategories,
  getCategoriesCount,
  getCategory,
  getSubCategoriesCount,
  updateCategory,
} from "../controllers/category.controller.js";

const categoryRouter = Router();
categoryRouter.post("/create", createCategory);
categoryRouter.get("/", auth, getCategories);
categoryRouter.get("/get/count", getCategoriesCount);
categoryRouter.get("/get/count/subCat", getSubCategoriesCount);
categoryRouter.get("/:id", getCategory);
categoryRouter.delete("/delete-multiple", deleteMultipleData);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.put("/:id", updateCategory);

export default categoryRouter;
