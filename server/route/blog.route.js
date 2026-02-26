import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

//import All Controllers
import {
  createBlog,
  deleteBlog,
  deleteMultipleData,
  getAllBlogs,
  getBlog,
  removeImageFromCloudinary,
  updateBlog,
  uploadImage,
} from "../controllers/blog.controller.js";

const blogRouter = Router();

blogRouter.post("/create", createBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlog);
blogRouter.post("/uploadImages", auth, upload.array("images"), uploadImage);
blogRouter.delete("/deleteImage", auth, removeImageFromCloudinary);
blogRouter.delete("/delete-Multiple", deleteMultipleData);
blogRouter.delete("/:id", deleteBlog);
blogRouter.put("/updateBlog/:id", auth, updateBlog);

export default blogRouter;
