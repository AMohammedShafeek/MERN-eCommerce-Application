import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    image: [
      {
        type: String,
      },
    ],
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const BlogModel = mongoose.model("blog", blogSchema);

export default BlogModel;
