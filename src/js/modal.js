// @ts-check
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './menu-focus-catch.js';

const initModal = galleryLinks => {
  const modalMarkup = galleryLinks;

  const modalOptions = {
    captionsData: 'alt',
    animationSpeed: 210,
    fadeSpeed: 210,
  };

  const modal = new SimpleLightbox(modalMarkup, modalOptions);

  modal.on('show.simplelightbox', () => refs.html.classList.add('no-scroll'));
  modal.on('close.simplelightbox', () =>
    refs.html.classList.remove('no-scroll'),
  );
};

export { initModal };
