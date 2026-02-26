import BlogModel from "../models/blog.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});
var imageArr = [];

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

export async function createBlog(request, response) {
  try {
    const { image, name, desc } = request.body;

    if (!image) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Please Upload Blog Image",
      });
    }

    let blog = new BlogModel({
      title: name,
      image: image,
      desc: desc,
    });

    blog = await blog.save();

    if (!blog) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Blog Not Created",
      });
    }

    imageArr = [];

    return response.status(200).json({
      error: false,
      success: true,
      message: "Blog Created Successfully.",
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      successs: false,
    });
  }
}

export async function getAllBlogs(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const perPage = parseInt(request.query.perPage);
    const totalPosts = await BlogModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return response.status(404).json({
        error: true,
        success: false,
        message: "Page Not Found",
      });
    }

    const blogs = await BlogModel.find()
      .skip((page - 1) * perPage)
      .exec();

    if (!blogs) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "No Blogs Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      data: blogs,
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

export async function getBlog(request, response) {
  try {
    const { id } = request.params;

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Blog Not Found",
      });
    }

    return response.status(200).json({
      error: false,
      success: false,
      blog: blog,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function deleteBlog(request, response) {
  try {
    const { id } = request.params;

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Blog Not Found",
      });
    }

    if (blog.image) {
      const urlArr = blog.image[0].split("/");
      const image = urlArr[urlArr.length - 1];
      const imageName = image.split(".")[0];

      await cloudinary.uploader.destroy(imageName);
    }

    const deletedBlog = await BlogModel.findByIdAndDelete(id);

    if (!deletedBlog) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Blog Not Deleted",
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function updateBlog(request, response) {
  try {
    const { id } = request.params;
    const { name, image, desc } = request.body;

    const blog = await BlogModel.findByIdAndUpdate(id, {
      title: name,
      image: image,
      desc: desc,
    });

    if (!blog) {
      return response.status(400).json({
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      message: "Blog Updated Successfully",
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
      message: "Blog IDs Are Missing",
    });
  }

  for (let i = 0; i < ids.length; i++) {
    const blog = await BlogModel.findById(ids[i]);
    const imageUrl = blog.image[0];

    const urlArr = imageUrl.split("/");
    const image = urlArr[urlArr.length - 1];
    const imageName = image.split(".")[0];

    const result = await cloudinary.uploader.destroy(imageName);
  }
  try {
    await BlogModel.deleteMany({ _id: { $in: ids } });

    return response.status(200).json({
      error: false,
      success: true,
      message: "Blogs Deleted Successfully.",
    });
  } catch (error) {
    response.status(500).json({
      error: true,
      success: false,
      message: error.message || error,
    });
  }
}
