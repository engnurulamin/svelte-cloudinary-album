import { json } from "@sveltejs/kit";
import cloudinary from "cloudinary";

export async function GET() {
  const { resources } = await cloudinary.v2.api.resources();
  return json({
    data: resources.map((public_id) => {
      return { public_id };
    }),
  });
}
