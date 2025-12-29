import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

// import all controllers
import {
  createProduct,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
  getAllProductsBySubCatId,
  getAllProductsBySubCatName,
  getAllProductsByThirdSubCatId,
  getAllProductsByThirdSubCatName,
  uploadImages,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/uploadImages", auth, upload.array("images"), uploadImages);
productRouter.post("/create", auth, createProduct);
productRouter.get("/getAllProducts", getAllProducts);
productRouter.get("/getByCategoryId/:id", getAllProductsByCatId);
productRouter.get("/getByCategoryName", getAllProductsByCatName);
productRouter.get("/getBySubCategoryId/:id", getAllProductsBySubCatId);
productRouter.get("/getBySubCategoryName", getAllProductsBySubCatName);
productRouter.get("/getByThirdSubCategoryId/:id", getAllProductsByThirdSubCatId);
productRouter.get("/getByThirdSubCategoryName", getAllProductsByThirdSubCatName);

export default productRouter;
