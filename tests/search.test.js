import { filterBySearch } from "../src/js/search.js";

const mockImages = [
  {
    title: "Galaxy",
    alt: "Spiral galaxy",
    tags: ["space", "stars"],
  },
  {
    title: "Ocean Wave",
    alt: "Big wave",
    tags: ["water", "ocean"],
  },
];

test("returns all images when search is empty", () => {
  expect(filterBySearch(mockImages, "")).toHaveLength(2);
});

test("finds images by tag", () => {
  const result = filterBySearch(mockImages, "stars");
  expect(result).toHaveLength(1);
});
