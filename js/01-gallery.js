import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(
    ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</li>`
);

gallery.insertAdjacentHTML('beforeend', markup.join(''));
gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    if (!target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`<div><img width="1400" height="900" src="${target.dataset.source}"></div>`,
    {
        onShow: () => {
        document.addEventListener("keydown", closeModal);
        },
        onClose: () => {
        document.removeEventListener("keydown", closeModal);
        },
    }
    ); 
    instance.show();

    function closeModal(evt) {
        if (evt.code === 'Escape') {
            instance.close()
        }
    }
}
