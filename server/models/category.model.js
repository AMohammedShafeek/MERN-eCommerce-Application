import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    parentCatName: {
      type: String,
      default: null,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const CategoryModel = mongoose.model("category", categorySchema);

export default CategoryModel;
