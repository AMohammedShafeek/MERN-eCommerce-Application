import ProductModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

var imagesArr = [];
export async function uploadImages(request, response) {
  try {
    imagesArr = [];

    const image = request.files;

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
        },
      );
    }

    return response.status(200).json({
      images: imagesArr,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function createProduct(request, response) {
  try {
    const {
      name,
      images,
      description,
      brand,
      price,
      oldPrice,
      category,
      catName,
      catId,
      subCatName,
      subCatId,
      stock,
      rating,
      isfeatured,
      discount,
      size,
      weight,
      color,
    } = request.body;

    let product = new ProductModel({
      name: name,
      images: images,
      description: description,
      images: images,
      brand: brand,
      price: price,
      oldPrice: oldPrice,
      category: category,
      catName: catName,
      catId: catId,
      subCatName: subCatName,
      subCatId: subCatId,
      stock: stock,
      rating: rating,
      isFeatured: isfeatured,
      discount: discount,
      size: size,
      weight: weight,
      color: color,
    });

    product = await product.save();

    if (!product) {
      response.status(500).json({
        error: true,
        success: false,
        message: "Product Not Created",
      });
    }

    imagesArr = [];

    response.status(200).json({
      error: false,
      success: true,
      message: "Product Created Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
      product: product,
    });
  }
}

export async function getAllProducts(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const products = await ProductModel.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsByCatId(request, response) {
  try {
    const { id } = request.params;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    const products = await ProductModel.find({
      catId: id,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsByCatName(request, response) {
  try {
    const { catName } = request.query;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const products = await ProductModel.find({
      catName: catName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsBySubCatId(request, response) {
  try {
    const { id } = request.params;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const products = await ProductModel.find({
      subCatId: id,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsBySubCatName(request, response) {
  try {
    const { subCatName } = request.query;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const products = await ProductModel.find({
      subCatName: subCatName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsByThirdSubCatId(request, response) {
  try {
    const { id } = request.params;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const products = await ProductModel.find({
      thirdSubCatId: id,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsByThirdSubCatName(request, response) {
  try {
    const { thirdSubCatName } = request.query;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const products = await ProductModel.find({
      thirdSubCatName: thirdSubCatName,
    })
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsByPrice(request, response) {
  try {
    let productList = [];

    const { catId, subCatId, thirdSubCatId, minPrice, maxPrice } =
      request.query;

    if (catId !== "" && catId !== undefined) {
      const productListArr = await ProductModel.find({
        catId: catId,
      }).populate("category");
      productList = productListArr;
    }

    if (subCatId !== "" && subCatId !== undefined) {
      const productListArr = await ProductModel.find({
        subCatId: subCatId,
      }).populate("category");
      productList = productListArr;
    }

    if (thirdSubCatId !== "" && thirdSubCatId !== undefined) {
      const productListArr = await ProductModel.find({
        thirdSubCatId: thirdSubCatId,
      }).populate("category");
      productList = productListArr;
    }

    const filteredProducts = productList.filter((product) => {
      if (minPrice && product.price < parseInt(+minPrice)) {
        return false;
      }
      if (maxPrice && product.price > parseInt(+maxPrice)) {
        return false;
      }
      return true;
    });

    return response.status(200).json({
      error: false,
      success: true,
      data: filteredProducts,
      totalPages: 0,
      page: 0,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsByRating(request, response) {
  try {
    const { rating, catId, subCatId, thirdSubCatId } = request.query;

    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage || 1000);
    const totalPosts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    let products = [];

    if (catId !== undefined) {
      products = await ProductModel.find({
        rating: rating,
        catId: catId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .exec();
    }

    if (subCatId !== undefined) {
      products = await ProductModel.find({
        rating: rating,
        subCatId: subCatId,
        thirdSubCatId: thirdSubCatId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .exec();
    }

    if (thirdSubCatId !== undefined) {
      products = await ProductModel.find({
        rating: rating,
        thirdSubCatId: thirdSubCatId,
      })
        .populate("category")
        .skip((page - 1) * perPage)
        .exec();
    }

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllProductsCount(request, response) {
  try {
    const productsCount = await ProductModel.countDocuments();

    if (!productsCount) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      productsCount: productsCount,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getAllFeaturedProducts(request, response) {
  try {
    const products = await ProductModel.find({
      isfeatured: true,
    }).populate("category");

    if (!products) {
      response.status(500).json({
        error: true,
        success: false,
        message: "No Products Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: products,
    });
  } catch (error) {
    request.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function deleteProduct(request, response) {
  try {
    const { id } = request.params;

    const product = await ProductModel.findById(id).populate("category");

    const images = product.images;

    if (!product) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Product Not Found",
      });
    }

    let img = "";

    for (img of images) {
      const imgUrl = img;
      const urlArr = imgUrl.split("/");
      const image = urlArr[urlArr.length - 1];

      const imageName = image.split(".")[0];

      if (imageName) {
        cloudinary.uploader.destroy(imageName, function (error, result) {});
      }
    }

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return response.status(500).json({
        error: true,
        success: false,
        message: "Product Not Deleted",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Product Deleted Successfully.",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getProduct(request, response) {
  try {
    const { id } = request.params;

    const product = await ProductModel.findById(id).populate("category");

    if (!product) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Product Not Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      product: product,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function removeImageFromCloudinary(request, response) {
  try {
    const { imageUrl } = request.query;

    if (!imageUrl) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "image is required",
      });
    }

    const urlArr = imageUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    const result = await cloudinary.uploader.destroy(imageName);

    return response.status(200).json({
      error: false,
      success: true,
      message: "Image Removed Successfully",
    });
  } catch (error) {
    response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function updateProduct(request, response) {
  try {
    const { id } = request.params;
    const {
      name,
      description,
      images,
      brand,
      price,
      oldPrice,
      catId,
      catName,
      subCatId,
      subCatName,
      thirdSubCatId,
      thirdSubCatName,
      category,
      stock,
      rating,
      isfeatured,
      discount,
      size,
      weight,
    } = request.body;

    const product = await ProductModel.findByIdAndUpdate(
      id,
      {
        name: name,
        description: description,
        images: images,
        brand: brand,
        price: price,
        oldPrice: oldPrice,
        catId: catId,
        catName: catName,
        subCatId: subCatId,
        subCatName: subCatName,
        thirdSubCatId: thirdSubCatId,
        thirdSubCatName: thirdSubCatName,
        category: category,
        stock: stock,
        rating: rating,
        isfeatured: isfeatured,
        discount: discount,
        size: size,
        weight: weight,
      },
      { new: true },
    );

    if (!product) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Product Not Found",
      });
    }

    imagesArr = [];

    return response.status(200).json({
      error: false,
      success: true,
      message: "Product Updated Successfully.",
      product: product,
    });
  } catch (error) {
    response.status(500).json({
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
      message: "product IDs Are Missing",
    });
  }

  for (let i = 0; i < ids.length; i++) {
    const product = await ProductModel.findById(ids[i]);
    const images = product.images;

    let img = "";
    for (img of images) {
      const imgUrl = img;
      const urlArr = imgUrl.split("/");
      const image = urlArr[urlArr.length - 1];
      const imageName = image.split(".")[0];

      if (imageName) {
        cloudinary.uploader.destroy(imageName, (error, result) => {});
      }
    }
  }
  try {
    await ProductModel.deleteMany({ _id: { $in: ids } });

    return response.status(200).json({
      error: false,
      success: true,
      message: "Products Deleted Successfully.",
    });
  } catch (error) {
    response.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
}
