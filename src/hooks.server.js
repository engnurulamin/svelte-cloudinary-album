// const cloudinary = require("cloudinary").v2;
import cloudinary from "cloudinary";
import {
  PUBLIC_CLOUDINARY_API_KEY,
  PUBLIC_CLOUDINARY_CLOUD_NAME,
} from "$env/static/public";
import { CLOUDINARY_API_SECRET } from "$env/static/private";

cloudinary.config({
  cloud_name: PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: PUBLIC_CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});
