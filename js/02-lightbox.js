import { items } from "./gallery-items.js";
// Change code below this line

const galleryRootEl = document.querySelector(".gallery");
const galleryMarkup = items
  .map((item) => {
    return `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src= "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}" />
  </a>`;
  })
  .join("");

// console.log(galleryMarkup);

galleryRootEl.insertAdjacentHTML("afterbegin", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  docClose: false,
});

// gallery.on("show.simplelightbox", function () {
//   console.log("this event fires before the lightbox opens");
// });
// gallery.on("closed.simplelightbox", function () {
//   console.log("this event fires after the lightbox was closed");
// });

console.log(items);
