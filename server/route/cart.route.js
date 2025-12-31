import { Router } from "express";
import auth from "../middlewares/auth.js";

// import all controllers
import {
  addToCartController,
  getCartItemController,
  removeCartItemController,
  updateCartItemQtyController,
} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.post("/add", auth, addToCartController);
cartRouter.get("/get", auth, getCartItemController);
cartRouter.put("/update-qty", auth, updateCartItemQtyController);
cartRouter.delete("/remove-cart-item", auth, removeCartItemController);

export default cartRouter;
