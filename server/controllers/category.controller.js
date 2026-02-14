import CategoryModel from "../models/category.model.js";

export async function createCategory(request, response) {
  try {
    const { name, parentId, parentCatName, thumbnail } = request.body;

    let category = new CategoryModel({
      name: name,
      parentCatName: parentCatName,
      parentId: parentId,
      thumbnail: thumbnail,
    });

    if (!category) {
      return response.status(500).json({
        error: true,
        success: false,
        message: "Category Not Created",
      });
    }

    category = await category.save();

    return response.status(200).json({
      error: false,
      success: true,
      message: "Category Created Successfully",
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getCategories(request, response) {
  try {
    const categories = await CategoryModel.find();
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return response.status(200).json({
      error: false,
      success: true,
      data: rootCategories,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getCategoriesCount(request, response) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: undefined,
    });
    if (!categoryCount) {
      response.status(500).json({
        error: true,
        success: false,
      });
    } else {
      response.send({
        categoryCount: categoryCount,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getSubCategoriesCount(request, response) {
  try {
    const categories = await CategoryModel.find();
    if (!categories) {
      response.status(500).json({
        error: true,
        success: false,
      });
    } else {
      const subCatList = [];
      for (let cat of categories) {
        if (cat.parentId !== undefined) {
          subCatList.push(cat);
        }
      }
      response.status(200).send({
        subCategoryCount: subCatList.length,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getCategory(request, response) {
  try {
    const { id } = request.params;

    const category = await CategoryModel.findById(id);

    if (!category) {
      response.status(500).json({
        error: true,
        success: false,
        message: "The Category was Not Found.",
      });
    }

    response.status(200).json({
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function deleteCategory(request, response) {
  try {
    const { id } = request.params;

    const subCategory = await CategoryModel.find({ parentId: id });

    for (let i = 0; i < subCategory.length; i++) {
      const thirdSubCategory = await CategoryModel.find({
        parentId: subCategory[i]._id,
      });

      for (let i = 0; i < thirdSubCategory.length; i++) {
        const deleteThirdSubCategory = await CategoryModel.findByIdAndDelete(
          thirdSubCategory[i]._id,
        );
      }

      const deleteSubCategory = await CategoryModel.findByIdAndDelete(
        subCategory[i]._id,
      );
    }

    const deleteCategory = await CategoryModel.findByIdAndDelete(id);

    if (!deleteCategory) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "category Not Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "category Deleted Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function updateCategory(request, response) {
  try {
    const { id } = request.params;
    const { name, parentId, parentCatName, thumbnail } = request.body;

    const category = await CategoryModel.findByIdAndUpdate(
      id,
      {
        name: name,
        parentId: parentId,
        parentCatName: parentCatName,
        thumbnail: thumbnail,
      },
      { new: true },
    );

    if (!category) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Category Not Found",
      });
    }

    response.status(200).json({
      error: false,
      success: true,
      message: "Category Updated Successfully",
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function deleteMultipleData(request, response) {
  const { ids } = request.body;

  if (!ids || !Array.isArray(ids)) {
    return response.status(400).json({
      error: true,
      success: false,
      message: "Category IDs Are Missing",
    });
  }
  try {
    for (const id of ids) {
      const subCategories = await CategoryModel.find({ parentId: id });
      for (const sub of subCategories) {
        await CategoryModel.findByIdAndDelete(sub._id);
      }
      await CategoryModel.findByIdAndDelete(id);
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Categories Deleted Successfully.",
    });
  } catch (error) {
    response.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
}
