import { Router } from "express";
import auth from "../middlewares/auth.js";

// import all controllers
import {
  addToMyListController,
  getMyListController,
  removeMyListItemController,
} from "../controllers/mylist.controller.js";

const myListRouter = Router();

myListRouter.post("/add", auth, addToMyListController);
myListRouter.get("/", auth, getMyListController);
myListRouter.delete("/remove/:id", auth, removeMyListItemController);

export default myListRouter;
