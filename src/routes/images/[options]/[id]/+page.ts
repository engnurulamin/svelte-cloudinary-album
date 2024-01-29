export async function load({ fetch, params }: any) {
  const id = params.id;
  const upload = "upload/";
  const response = await fetch(`/api/image?id=${upload + id}`);
  const result = await response.json();

  return {
    image: result,
  };
}
