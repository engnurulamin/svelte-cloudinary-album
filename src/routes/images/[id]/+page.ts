export async function load({ fetch, params }: any) {
  const id = params.id;
  const response = await fetch(`/api/image?id=${id}`);
  const result = await response.json();
  return {
    image: result,
  };
}
