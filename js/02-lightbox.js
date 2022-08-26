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

galleryRootEl.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    console.log("click");
    let gallery = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250,
    });
    gallery.on("show.simplelightbox", function () {
      console.log("this event fires before the lightbox opens");
      galleryRootEl.removeEventListener("click", onClickGallery);
    });
    gallery.on("closed.simplelightbox", function () {
      console.log("this event fires after the lightbox was closed");
    });
  }
}

console.log(items);
