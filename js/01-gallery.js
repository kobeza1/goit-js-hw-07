import { items } from "./gallery-items.js";
// Change code below this line

console.log(items);

const galleryRootEl = document.querySelector(".gallery");
const galleryMarkup = items
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src= "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}" />
  </a>
</div>`;
  })
  .join("");

galleryRootEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRootEl.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onClose);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onClose);
      },
    }
  );

  if (event.target.nodeName === "IMG") {
    instance.show();
  }

  function onClose(event) {
    if (event.code === "Escape") {
      console.log(event);
      instance.close();
    }
  }
}
