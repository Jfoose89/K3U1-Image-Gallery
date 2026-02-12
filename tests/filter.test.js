import { filterByCategory } from "../src/js/filter.js";

const mockImages = [
  { id: 1, category: "space" },
  { id: 2, category: "ocean" },
  { id: 3, category: "unique-landscape" },
  { id: 4, category: "world-structures" },
];

test("returns all images when category is all", () => {
  expect(filterByCategory(mockImages, "all")).toHaveLength(4);
});

test("filters images by category", () => {
  const result = filterByCategory(mockImages, "space");
  expect(result).toHaveLength(1);
});
