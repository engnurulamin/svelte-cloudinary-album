// const cloudinary = require("cloudinary").v2;
import cloudinary from "cloudinary";
import {
  VITE_PUBLIC_CLOUDINARY_API_KEY,
  VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
} from "$env/static/public";
import { CLOUDINARY_SECRET } from "$env/static/private";

cloudinary.config({
  cloud_name: VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: VITE_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET,
  secure: true,
});
