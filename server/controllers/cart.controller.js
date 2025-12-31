import cartProductModel from "../models/cartProduct.model.js";
import UserModel from "../models/user.model.js";

export async function addToCartController(request, response) {
  try {
    const userId = request.userId;
    const { productId } = request.body;

    if (!productId && !userId) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Product ID and User ID are required",
      });
    }

    const checkItemCart = await cartProductModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (checkItemCart) {
      return response.status(200).json({
        success: true,
        message: "Product already in cart",
        cartItem: checkItemCart,
      });
    }

    const cartItem = new cartProductModel({
      quantity: 1,
      userId: userId,
      productId: productId,
    });

    const save = await cartItem.save();

    const updateCartUser = await UserModel.updateOne(
      { _id: userId },
      { $push: { shopping_cart: productId } }
    );

    return response.status(200).json({
      error: false,
      success: true,
      message: "Product added to cart successfully",
      data: save,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error adding to cart",
      error: error.message || error,
    });
  }
}

export async function getCartItemController(request, response) {
  try {
    const userId = request.userId;

    if (!userId) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "User ID is required",
      });
    }

    const cartItem = await cartProductModel
      .find({ userId: userId })
      .populate("productId");

    return response.status(200).json({
      error: false,
      success: true,
      cartItems: cartItem,
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      error: error.message || error,
    });
  }
}

export async function updateCartItemQtyController(request, response) {
  try {
    const userId = request.userId;
    const { cartId, qty } = request.body;

    if (!cartId || !qty) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Product ID and quantity are required",
      });
    }

    const updateCartItem = await cartProductModel.updateOne(
      {
        userId: userId,
        _id: cartId,
      },
      {
        quantity: qty,
      }
    );

    return response.status(200).json({
      error: false,
      success: true,
      message: "Cart item updated successfully",
      UpdatedCart: updateCartItem,
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      error: error.message || error,
    });
  }
}

export async function removeCartItemController(request, response) {
  try {
    const userId = request.userId;
    const { cartId, productId } = request.body;

    if (!cartId) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "ID was not provided",
      });
    }

    const removeCartItem = await cartProductModel.deleteOne({
      _id: cartId,
      userId: userId,
    });

    if (!removeCartItem) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Item not found",
      });
    }

    const user = await UserModel.findOne({ _id: userId });

    const cartItems = user?.shopping_cart;

    const updatedUserCart = [
      ...cartItems.slice(0, cartItems.indexOf(productId)),
      ...cartItems.slice(cartItems.indexOf(productId) + 1),
    ];

    user.shopping_cart = updatedUserCart;
    await user.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "Cart item removed successfully",
      RemovedCart: removeCartItem,
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      error: error.message || error,
    });
  }
}
