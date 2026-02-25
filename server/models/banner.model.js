import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  },
);

const BannerModel = mongoose.model("banner", bannerSchema);

export default BannerModel;
