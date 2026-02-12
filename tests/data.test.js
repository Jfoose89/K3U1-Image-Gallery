import { jest } from "@jest/globals";
import { loadImagesData } from "../src/js/dataLoader.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 1,
          category: "space",
          title: "Test",
          alt: "Test alt",
          thumbnail: "thumb.jpg",
          full: "full.jpg",
          tags: ["space"],
        },
      ]),
  }),
);

test("loads and validates image JSON data", async () => {
  const data = await loadImagesData("fake-url");
  expect(Array.isArray(data)).toBe(true);
  expect(data[0]).toHaveProperty("category");
});
