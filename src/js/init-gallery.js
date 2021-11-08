// @ts-check
import { galleryItems } from './gallery-items.js';
import { refs } from './menu-focus-catch.js';
import galleryItemsTpl from '../templates/gallery-items-tpl.hbs';

const initGallery = () => {
  const galleryMarkup = galleryItemsTpl(galleryItems);
  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
};

const onPreviewImgClick = e => {
  if (e.target.nodeName !== 'IMG') return;
};

const listenOnPreviewImgClick = () => {
  refs.gallery.addEventListener('click', onPreviewImgClick);
};

export { listenOnPreviewImgClick, initGallery };
