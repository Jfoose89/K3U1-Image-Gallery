export function filterByCategory(images, category) {
  if (category === "all") return images;

  return images.filter((img) => img.category === category);
}
