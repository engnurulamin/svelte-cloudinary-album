export async function load({ fetch, params }) {
  const id = params.id;
  const upload = "upload/";
  const response = await fetch(`/api/image?id=${upload + id}`);
  const result = await response.json();

  return {
    image: result,
  };
}
