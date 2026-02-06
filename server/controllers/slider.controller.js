import SliderModel from "../models/slider.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

var imageArr = [];
export async function createSlider(request, response) {
  try {
    const { name, image, catName, catId, category } = request.body;

    if (!image) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Please Upload Slider Image",
      });
    }

    let slider = new SliderModel({
      name: name,
      image: image,
      catName: catName,
      catId: catId,
      category: category,
    });

    slider = await slider.save();

    if (!slider) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Slider Not Created",
      });
    }

    imageArr = [];

    return response.status(200).json({
      error: false,
      success: true,
      message: "Slider Created Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      successs: false,
    });
  }
}

export async function getAllSliders(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage);
    const totalPosts = await SliderModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const sliders = await SliderModel.find()
      .populate("category")
      .skip((page - 1) * perPage)
      .exec();

    if (!sliders) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "No Sliders Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: sliders,
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

export async function getSlider(request, response) {
  try {
    const { id } = request.params;

    const slider = await SliderModel.findById(id).populate("category");

    if (!slider) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Slider Not Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: false,
      slider: slider,
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
      error: false,
      success: true,
      images: imagesArr,
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

export async function deleteSlider(request, response) {
  try {
    const { id } = request.params;

    const slider = await SliderModel.findById(id).populate("category");

    if (!slider) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Slider Not Found",
      });
    }

    const urlArr = slider.image.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    if (imageName) {
      cloudinary.uploader.destroy(imageName, function (error, result) {});
    }

    const deletedSlider = await SliderModel.findByIdAndDelete(id);

    if (!deletedSlider) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Slider Not Deleted",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Slider Deleted Successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function updateSlider(request, response) {
  try {
    const { id } = request.params;
    const { name, image, category } = request.body;

    const slider = await SliderModel.findByIdAndUpdate(id, {
      name: name,
      image: image,
      category: category,
    });

    if (!slider) {
      return response.status(400).json({
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Slider Updated Successfully",
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
      message: "Slider IDs Are Missing",
    });
  }

  for (let i = 0; i < ids.length; i++) {
    const slider = await SliderModel.findById(ids[i]);
    const imageUrl = slider.image;

    const urlArr = imageUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    const result = await cloudinary.uploader.destroy(imageName);
  }
  try {
    await SliderModel.deleteMany({ _id: { $in: ids } });

    return response.status(200).json({
      error: false,
      success: true,
      message: "Sliders Deleted Successfully.",
    });
  } catch (error) {
    response.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
}
