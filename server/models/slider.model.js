import mongoose from "mongoose";

const sliderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name Required"],
    },
    image: [
      {
        type: String,
        required: true,
      },
    ],
    catName: {
      type: String,
      default: "",
    },
    catId: {
      type: String,
      default: "",
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
    },
  },
  {
    timestamps: true,
  },
);

const SliderModel = mongoose.model("slider", sliderSchema);

export default SliderModel;
