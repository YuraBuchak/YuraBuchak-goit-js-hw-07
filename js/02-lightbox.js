import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// 1. Створення та рендер розмітки
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);

// 2. modal

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
});

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
