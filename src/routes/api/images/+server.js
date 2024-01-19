import { json } from "@sveltejs/kit";
import cloudinary from "cloudinary";

export async function GET() {
  // const result = await cloudinary.v2.api.resource();
  return json({ data: "images list" });
}
