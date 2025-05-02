import { Buffer } from 'buffer';
import { v2 as cloudinary } from "cloudinary";



cloudinary.config({
    cloud_name: 'dxhjeme2n',
    api_key: process.env.CLOUDINARY_API_KEYS,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
const uploadImage = async (file, folder) => {
  try {
    if (!file instanceof File || !file.arrayBuffer) {
      throw new Error('Invalid file object');
    }
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: folder,
        },
        (err, result) => {
          if (err) {
            return reject(err.message);
          }
          resolve(result);
        }
      );

      uploadStream.end(bytes);
    });
  } catch (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

export default uploadImage;