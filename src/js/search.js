export function filterBySearch(images, query) {
  if (!query.trim()) return images;

  const lower = query.toLowerCase();

  return images.filter((img) => {
    return (
      img.title.toLowerCase().includes(lower) ||
      img.alt.toLowerCase().includes(lower) ||
      img.tags.some((tag) => tag.toLowerCase().includes(lower))
    );
  });
}
