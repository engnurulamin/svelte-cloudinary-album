import { json } from "@sveltejs/kit";

export function GET() {
  return json({ data: "image" });
}