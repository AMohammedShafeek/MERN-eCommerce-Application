import MyListModel from "../models/myList.model.js";

export async function addToMyListController(request, response) {
  try {
    const userId = request.userId;
    const {
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    } = request.body;

    if (!productId && !userId) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Product ID and User ID are required",
      });
    }

    const item = await MyListModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return response.status(200).json({
        error: false,
        success: true,
        message: "Product already in My List",
        myListItem: item,
      });
    }

    const myList = new MyListModel({
      userId: userId,
      productId: productId,
      productTitle: productTitle,
      image: image,
      rating: rating,
      price: price,
      oldPrice: oldPrice,
      brand: brand,
      discount: discount,
    });

    const save = await myList.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "Product added to My List successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      message: "Error adding to cart",
      error: error.message || error,
    });
  }
}

export async function removeMyListItemController(request, response) {
  try {
    const { id } = request.params;

    const myListItem = await MyListModel.findById(id);

    if (!myListItem) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Item not found",
      });
    }

    const deletedItem = await MyListModel.findByIdAndDelete(id);

    if (!deletedItem) {
      return response.status(500).json({
        error: true,
        success: false,
        message: "Failed to delete the item",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Item removed from My List successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      error: error.message || error,
    });
  }
}

export async function getMyListController(request, response) {
  try {
    const userId = request.userId;

    if (!userId) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "User ID is required",
      });
    }

    const myListItems = await MyListModel.find({ userId: userId });

    return response.status(200).json({
      error: false,
      success: true,
      message: "My List retrieved successfully",
      data: myListItems,
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      message: "Error retrieving My List",
      error: error.message || error,
    });
  }
}
