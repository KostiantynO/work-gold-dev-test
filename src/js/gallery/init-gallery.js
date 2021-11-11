// @ts-check
import {
  galleryItems,
  galleryItemsMobile,
  modifiedGalleryItems,
  modifiedGalleryItemsMobile,
} from './gallery-items.js';
import { refs } from '../refs.js';
import galleryItemsTpl from '../../templates/gallery-items-tpl.hbs';
import { initModal } from './modal.js';
import debounce from 'lodash/debounce';

const breakpoints = [320, 768, 1024, 1600];

const galleryMarkup = galleryItemsTpl([
  ...galleryItems,
  ...modifiedGalleryItems,
]);

const galleryMarkupMobile = galleryItemsTpl([
  ...galleryItemsMobile,
  ...modifiedGalleryItemsMobile,
  ...galleryItemsMobile,
]);

const tablet = () =>
  window.matchMedia(`(min-width: ${breakpoints[1]}px)`).matches;

const initGallery = () => {
  refs.gallery.innerHTML = '';
  refs.gallery.innerHTML = tablet() ? galleryMarkup : galleryMarkupMobile;
};

const onResizePopulateGallery = () => {
  refs.modal.destroy();
  initGallery();
  refs.modal = initModal('.gallery__list a');
};

window.addEventListener('resize', debounce(onResizePopulateGallery, 300), {
  passive: true,
});

const onPreviewImgClick = e => {
  e.preventDefault();
};

const listenOnPreviewImgClick = () => {
  refs.gallery.addEventListener('click', onPreviewImgClick);
};

export { listenOnPreviewImgClick, initGallery };
