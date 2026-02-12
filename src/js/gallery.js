import { loadImagesData } from "./dataLoader.js";
import { filterBySearch } from "./search.js";
import { filterByCategory } from "./filter.js";

// ===============================
// Create a single image card
// ===============================

function createImageCard(image) {
  const figure = document.createElement("figure");
  figure.classList.add("image-card");
  figure.dataset.category = image.category;

  const img = document.createElement("img");
  img.src = image.thumbnail;
  img.alt = image.alt;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.textContent = image.title;

  // Lightbox trigger
  figure.addEventListener("click", () => {
    openLightbox(image);
  });

  figure.appendChild(img);
  figure.appendChild(caption);

  return figure;
}

// ===============================
// Render the entire gallery
// ===============================

export function renderGallery(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach((image) => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });
}

function setupCategoryTabs(images) {
  const tabs = document.querySelectorAll('#category-tabs [role="tab"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Update aria-selected
      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");

      const category = tab.dataset.category;

      // Apply category filter
      const filtered = filterByCategory(images, category);

      renderGallery(filtered);
    });
  });
}

// ===============================
// Lightbox logic (basic hook)
// ===============================
function openLightbox(image) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");

  lightboxImg.src = image.full;
  lightboxImg.alt = image.alt;
  lightboxTitle.textContent = image.title;

  lightbox.classList.remove("hidden");
}

// Close button
document.getElementById("lightbox-close").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
});

// ===============================
// Initialize gallery
// ===============================
async function initGallery() {
  try {
    const images = await loadImagesData();

    renderGallery(images);

    setupCategoryTabs(images);
    setupSearch(images);
  } catch (err) {
    console.error("Could not initialize gallery:", err);
  }
}

initGallery();

// ===============================
// Search gallery
// ===============================

function setupSearch(images) {
  const input = document.getElementById("search-input");

  input.addEventListener("input", () => {
    const query = input.value;

    // Combine search + category filtering
    const activeTab = document.querySelector(
      '#category-tabs [aria-selected="true"]',
    );
    const category = activeTab.dataset.category;

    // First filter by category
    let filtered = filterByCategory(images, category);

    // Then filter by search
    filtered = filterBySearch(filtered, query);

    renderGallery(filtered);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("lightbox").classList.add("hidden");
  }
});

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    e.currentTarget.classList.add("hidden");
  }
});
