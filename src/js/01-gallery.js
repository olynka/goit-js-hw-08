
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const paletteContainer = document.querySelector('.gallery');

const Handlebars = require('handlebars');
const template = Handlebars.compile(`{{#each this}}
    <a class="gallery__item" href={{this.original}}>
     <img class="gallery__image" src={{this.preview}} alt='{{this.description}}' />
    </a>
      {{/each}}`);
console.log(template(galleryItems));


paletteContainer.insertAdjacentHTML('beforeend', template(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
//7 homework
// function handleCreateCards(event) {
//     return galleryItems.map(({ preview, original, description }) => {
//             return`<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img class="gallery__image"
//          data-source="${original}"
//          src="${preview}"
//          alt="${description}"
//          /></a></div>`}).join("")
// };
// const paletteContainer = document.querySelector('.gallery');

//  const cardMarking=handleCreateCards(galleryItems)
//     paletteContainer.insertAdjacentHTML('beforeend', cardMarking)
   
// paletteContainer.addEventListener('click',handlePaletteContainerClick);

// function handlePaletteContainerClick(evn) {
//     evn.preventDefault();

//       if (evn.target.nodeName !== 'IMG') {
//     return;
//   }
//     const instance = basicLightbox.create(`<img src="${evn.target.dataset.source}">`,{
//         onShow: instance => {
//             window.addEventListener('keydown', closeOnEsc);
//         },
//         onClose: instance => {
//             window.removeEventListener('keydown', closeOnEsc);
//         },
//     });

// function closeOnEsc(event) {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   }
    
// instance.show()
// }
