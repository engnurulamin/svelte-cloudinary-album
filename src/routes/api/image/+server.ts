import { error, json } from "@sveltejs/kit";
import cloudinary from "cloudinary";

export async function GET({ url }: any) {
  const id = url.searchParams.get("id");
  if (!id) {
    error(500, "Invalid Id");
  }
  const result = await cloudinary.v2.api.resource(id);
  return json(result);
}
