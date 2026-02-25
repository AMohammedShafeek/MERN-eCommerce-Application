import BannerModel from "../models/banner.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});
var imageArr = [];
export async function createBanner(request, response) {
  try {
    const { name, image } = request.body;

    if (!image) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Please Upload Banner Image",
      });
    }

    let banner = new BannerModel({
      name: name,
      image: image,
    });

    banner = await banner.save();

    if (!banner) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Banner Not Created",
      });
    }

    imageArr = [];

    return response.status(200).json({
      error: false,
      success: true,
      message: "Banner Created Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      successs: false,
    });
  }
}

export async function getAllBanners(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage);
    const totalPosts = await BannerModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const banners = await BannerModel.find()
      .skip((page - 1) * perPage)
      .exec();

    if (!banners) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "No Banners Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: banners,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function getBanner(request, response) {
  try {
    const { id } = request.params;

    const banner = await BannerModel.findById(id);

    if (!banner) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Banner Not Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: false,
      banner: banner,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function uploadImage(request, response) {
  try {
    imageArr = [];

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
          imageArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
        },
      );
    }

    return response.status(200).json({
      error: false,
      success: true,
      images: imageArr,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
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
        message: "Image is Required",
      });
    }
    const urlArr = imageUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    const result = await cloudinary.uploader.destroy(imageName);

    return response.status(200).json({
      error: false,
      success: true,
      message: "Image Deleted Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function deleteBanner(request, response) {
  try {
    const { id } = request.params;

    const banner = await BannerModel.findById(id);

    if (!banner) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Banner Not Found",
      });
    }

    if (banner.image) {
      const urlArr = banner.image[0].split("/");
      const image = urlArr[urlArr.length - 1];
      const imageName = image.split(".")[0];

      await cloudinary.uploader.destroy(imageName);
    }

    const deletedBanner = await BannerModel.findByIdAndDelete(id);

    if (!deletedBanner) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Banner Not Deleted",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Banner Deleted Successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function updateBanner(request, response) {
  try {
    const { id } = request.params;
    const { name, image, category } = request.body;

    const banner = await BannerModel.findByIdAndUpdate(id, {
      name: name,
      image: image,
      category: category,
    });

    if (!banner) {
      return response.status(400).json({
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Banner Updated Successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
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
      message: "Banner IDs Are Missing",
    });
  }

  for (let i = 0; i < ids.length; i++) {
    const banner = await BannerModel.findById(ids[i]);
    const imageUrl = banner.image[0];

    const urlArr = imageUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    const result = await cloudinary.uploader.destroy(imageName);
  }
  try {
    await BannerModel.deleteMany({ _id: { $in: ids } });

    return response.status(200).json({
      error: false,
      success: true,
      message: "Banners Deleted Successfully.",
    });
  } catch (error) {
    response.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
}
