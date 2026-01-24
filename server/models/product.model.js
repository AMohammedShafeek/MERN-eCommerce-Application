import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    catName: {
      type: String,
      default: "",
    },
    catId: {
      type: String,
      default: "",
    },
    subCatName: {
      type: String,
      default: "",
    },
    subCatId: {
      type: String,
      default: "",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      // required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    isfeatured: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      required: true,
    },
    sale:{
      type: Number,
      default: 0
    },
    size: {
      type: Array,
      default: null,
    },
    weight: {
      type: String,
      default: null,
    },
    color: {
      type: Array,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;
