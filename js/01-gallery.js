import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// 1. Створення та рендер розмітки
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);

// 2. Делегування та модальне зображення

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // ----------відкриття модалки
  const largeImg = event.target.dataset.source;
  const modalPicture = basicLightbox.create(`
    <img src="${largeImg}" alt="${event.target.alt}">
`);
  modalPicture.show();

  // ---------закриття модалки - esc
  window.addEventListener("keydown", escBtn);
  function escBtn(event) {
    if (event.code === "Escape") {
      modalPicture.close();
      window.removeEventListener("keydown", escBtn);
    }
  }
});
