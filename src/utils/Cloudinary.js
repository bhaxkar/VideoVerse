import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log(response)
    // console.log(`File has been uploaded successfully on cloudinary ${response.url}`)

    fs.unlinkSync(localFilePath); // unlink or remove the locally saved file synchronously after succesfull upload
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // unlink or remove the locally saved file as upload on cloudinary fails 
    return null;
  }
};

export default uploadOnCloudinary;
