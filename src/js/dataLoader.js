export async function loadImagesData(url = "data/images.json") {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to load JSON: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON format: expected an array");
    }

    data.forEach((item, index) => {
      const required = [
        "id",
        "category",
        "title",
        "alt",
        "thumbnail",
        "full",
        "tags",
      ];
      required.forEach((field) => {
        if (!item[field]) {
          throw new Error(`Missing field "${field}" in item at index ${index}`);
        }
      });
    });

    return data;
  } catch (error) {
    console.error("Error loading images data:", error);
    throw error;
  }
}
