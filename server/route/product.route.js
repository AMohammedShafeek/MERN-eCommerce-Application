import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

// import all controllers
import {
  createProduct,
  deleteProduct,
  getAllFeaturedProducts,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
  getAllProductsByPrice,
  getAllProductsByRating,
  getAllProductsBySubCatId,
  getAllProductsBySubCatName,
  getAllProductsByThirdSubCatId,
  getAllProductsByThirdSubCatName,
  getAllProductsCount,
  getProduct,
  removeImageFromCloudinary,
  updateProduct,
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
productRouter.get(
  "/getByThirdSubCategoryId/:id",
  getAllProductsByThirdSubCatId
);
productRouter.get(
  "/getByThirdSubCategoryName",
  getAllProductsByThirdSubCatName
);
productRouter.get("/getByPrice", getAllProductsByPrice);
productRouter.get("/getByRating", getAllProductsByRating);
productRouter.get("/getProductsCount", getAllProductsCount);
productRouter.get("/isFeatured", getAllFeaturedProducts);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
productRouter.put("/updateProduct/:id", auth, updateProduct);

export default productRouter;
