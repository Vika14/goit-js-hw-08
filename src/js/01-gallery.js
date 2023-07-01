// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const gallaryItemMarkup = createGallaryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', gallaryItemMarkup);

galleryContainer.addEventListener('click', ongalleryContainerClick);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

function createGallaryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
        })
        .join('');
}

function ongalleryContainerClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
        return
    }

    gallery.on('closed.simplelightbox', () => {
        gallery.refresh();
    });
}