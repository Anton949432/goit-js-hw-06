const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const createGalleryItem = (image) => {
  return `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}" class="gallery-image">
    </li>
  `;
};

const addRotationAnimation = (element) => {
  element.classList.add("rotate");
};

const galleryItemsHTML = images.map(createGalleryItem).join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsHTML);

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    addRotationAnimation(item);
  });
});
