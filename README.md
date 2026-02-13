K3 Image Gallery
A responsive, accessible image gallery built as part of the K3 course assignment.
The project demonstrates clean modular JavaScript, semantic HTML, and modern CSS practices, including dynamic rendering, filtering, and a custom lightbox with keyboard navigation.

Features
Live Search
Filters images in real time

Matches title, alt text, and tags

Works together with category filtering

Category Tabs
Accessible tab navigation using role="tablist" and aria-selected

Filters images by category without reloading the page

Fully keyboard‑friendly

Dynamic Gallery Rendering
Images are loaded from a JSON file

Rendered using JavaScript into semantic <figure> elements

Uses loading="lazy" for performance

Lightbox Viewer
Opens full‑size images

Click outside to close

Press ESC to close

Arrow keys navigate between images

Close button positioned top‑left for usability

Accessibility Considerations
Semantic HTML structure

ARIA roles for tabs and dialog

Project Structure

src/
  data/
    images.json
  images/
    (image folders)
  js/
    dataLoader.js
    gallery.js
    filter.js
    search.js
    accessibility.js (placeholder)
    dom.js (placeholder)
  index.html
  styles.css

tests/
  data.test.js
  filter.test.js
  gallery.test.js
  search.test.js
Hidden labels for search input

Keyboard navigation support

How It Works
1. Data Loading
dataLoader.js fetches and validates images.json.
It ensures each image object contains all required fields.

2. Rendering
gallery.js dynamically creates image cards and injects them into the DOM.

3. Filtering
filter.js handles category filtering

search.js handles text‑based filtering

Both are pure functions and fully testable

4. Lightbox
The lightbox opens when an image is clicked and supports:

ESC to close

Click outside to close

Arrow keys to navigate

Testing
The project includes Jest tests for:

JSON validation

Category filtering

Search filtering

Gallery rendering logic

Run tests with: npm test

Running the Project
Clone the repository

Install dependencies

Code
npm install
Open index.html in a live server (VS Code Live Server recommended)

Technologies Used
HTML5 (semantic structure)

CSS3 (responsive grid + flexbox)

JavaScript (ES modules)

Jest (unit testing)

JSON (data source)

(Notes)
accessibility.js and dom.js are placeholders for future expansion

The project avoids unnecessary <div> elements in favor of semantic tags

The lightbox uses flexbox for reliable vertical centering
