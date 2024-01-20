export async function load({ fetch }) {
  const response = await fetch("/api/images");
  const { data, next_cursor } = await response.json();

  return {
    images: data as Array<{ public_id: string }>,
    nextCursor: next_cursor,
  };
}
