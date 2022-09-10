// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const markupCards = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markupCards);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href=${original} >
    <img
      class="gallery__image"
      src=${preview}
      data-source = ${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join('');
}
console.log(createImgMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
