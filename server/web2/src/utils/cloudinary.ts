import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const uploadOnCloudinary = async (localFilePath: string) => {
  try {
    if (!localFilePath) return null;
    const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return uploadResponse;
  } catch (e) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};
