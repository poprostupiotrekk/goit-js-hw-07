import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

let listArray = [];

galleryItems.forEach((galleryItem) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");
  const innerString = `<a class="gallery__link" href="${galleryItem.original}">
<img
  class="gallery__image"
  src="${galleryItem.preview}"
  data-source="${galleryItem.original}"
  alt="${galleryItem.description}"
/>
</a>`;
  listItem.insertAdjacentHTML("beforeend", innerString);

  listArray.push(listItem);
});

gallery.append(...listArray);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(event.target);
  // console.log(event);
  if (!event.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );

  instance.show();
});


